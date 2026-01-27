/* =====================================================
   MAIN JS - FLORAMAZONIA
   Script principal de inicializacao
   ===================================================== */

import { initEstatisticas } from '../components/sections/Estatisticas/Estatisticas.js';
import { initGaleria } from '../components/sections/Galeria/Galeria.js';
import { initFAQ } from '../components/sections/FAQ/FAQ.js';
import { initCTAForm } from '../components/sections/CTA/CTA.js';

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initSmoothScroll();
    initWhatsApp();
    initEstatisticas();
    initGaleria();
    initFAQ();
    initCTAForm();
});

/* ===== HEADER ===== */
function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Adiciona classe quando scroll > 50px
        if (currentScrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }

        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Verificar estado inicial
}

/* ===== MOBILE MENU ===== */
function initMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.header__mobile-nav-link');

    if (!toggle || !menu) return;

    const openMenu = () => {
        toggle.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        menu.classList.add('active');
        menu.setAttribute('aria-hidden', 'false');
        document.body.classList.add('menu-open');
    };

    const closeMenu = () => {
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('active');
        menu.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('menu-open');
    };

    const toggleMenu = () => {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    toggle.addEventListener('click', toggleMenu);

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fechar menu com tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && menu.classList.contains('active')) {
            closeMenu();
        }
    });
}

/* ===== SMOOTH SCROLL ===== */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const headerHeight = document.getElementById('header')?.offsetHeight || 0;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Atualizar link ativo
            updateActiveLink(href);
        });
    });
}

/* ===== UPDATE ACTIVE LINK ===== */
function updateActiveLink(activeHref) {
    const navLinks = document.querySelectorAll('.header__nav-link, .header__mobile-nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeHref) {
            link.classList.add('active');
        }
    });
}

/* ===== WHATSAPP ===== */
function initWhatsApp() {
    document.querySelectorAll('[data-whatsapp]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const phone = '5500000000000'; // Substituir pelo numero real
            const message = encodeURIComponent('Ola! Gostaria de saber mais sobre os produtos da Floramazonia.');
            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        });
    });
}
