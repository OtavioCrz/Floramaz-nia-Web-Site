/* =====================================================
   GALERIA - JAVASCRIPT
   ===================================================== */

function initGaleria() {
    const carousel = document.querySelector('.galeria__carousel');
    const track = document.querySelector('.galeria__track');
    const prevBtn = document.querySelector('.galeria__nav--prev');
    const nextBtn = document.querySelector('.galeria__nav--next');
    const cards = document.querySelectorAll('.galeria__card');
    
    if (!carousel || !track || !prevBtn || !nextBtn || cards.length === 0) return;

    let isPaused = false;
    let currentPosition = 0;
    let animationId = null;
    const speed = 0.5; // pixels por frame (velocidade suave)

    // Função para obter a largura total dos cards originais
    function getTotalWidth() {
        const card = cards[0];
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 32;
        const cardWidth = card.offsetWidth;
        const totalCards = cards.length / 2; // Metade são duplicados
        return totalCards * (cardWidth + gap);
    }

    // Função de animação contínua suave
    function animate() {
        if (!isPaused) {
            currentPosition -= speed;
            
            const totalWidth = getTotalWidth();
            
            // Reset quando chegar na metade (onde começam os duplicados)
            if (Math.abs(currentPosition) >= totalWidth) {
                currentPosition = 0;
            }
            
            track.style.transform = `translateX(${currentPosition}px)`;
        }
        
        animationId = requestAnimationFrame(animate);
    }

    // Função para avançar manualmente
    function nextSlide() {
        const card = cards[0];
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 32;
        const cardWidth = card.offsetWidth + gap;
        
        currentPosition -= cardWidth;
        
        const totalWidth = getTotalWidth();
        if (Math.abs(currentPosition) >= totalWidth) {
            currentPosition = 0;
        }
        
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(${currentPosition}px)`;
        
        setTimeout(() => {
            track.style.transition = 'none';
        }, 500);
    }

    // Função para voltar manualmente
    function prevSlide() {
        const card = cards[0];
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 32;
        const cardWidth = card.offsetWidth + gap;
        
        currentPosition += cardWidth;
        
        if (currentPosition > 0) {
            currentPosition = -getTotalWidth() + cardWidth;
        }
        
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(${currentPosition}px)`;
        
        setTimeout(() => {
            track.style.transition = 'none';
        }, 500);
    }

    // Event listeners dos botões
    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isPaused = true;
        prevSlide();
        
        setTimeout(() => {
            isPaused = false;
        }, 3000);
    });

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isPaused = true;
        nextSlide();
        
        setTimeout(() => {
            isPaused = false;
        }, 3000);
    });

    // Suporte a touch/swipe para mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        isPaused = true;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        
        setTimeout(() => {
            isPaused = false;
        }, 3000);
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (diff > swipeThreshold) {
            nextSlide();
        } else if (diff < -swipeThreshold) {
            prevSlide();
        }
    }

    // Pausa no hover (desktop)
    carousel.addEventListener('mouseenter', () => {
        isPaused = true;
    });
    
    carousel.addEventListener('mouseleave', () => {
        isPaused = false;
    });

    // Inicia a animação
    animate();
}

// Exporta para uso modular
export { initGaleria };
