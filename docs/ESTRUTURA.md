# Estrutura do Projeto - Floramazonia Landing Page

## 📋 Visão Geral

Este projeto é uma landing page moderna desenvolvida com **HTML**, **CSS**, **JavaScript** e **Tailwind CSS**, otimizada para conversão e geração de leads através do WhatsApp.

## 🗂️ Estrutura de Pastas

### Raiz do Projeto
- `index.html` - Página principal HTML
- `package.json` - Dependências e scripts do projeto
- `tailwind.config.js` - Configuração do Tailwind CSS
- `postcss.config.js` - Configuração do PostCSS
- `vite.config.js` - Configuração do Vite
- `.gitignore` - Arquivos ignorados pelo Git

### `/src` - Código Fonte

#### `/src/components` - Componentes
- `/sections` - Seções da landing page
  - Cada seção possui sua própria pasta com:
    - `[Nome].html` - Estrutura HTML
    - `[Nome].css` - Estilos específicos (complementa Tailwind)
    - `[Nome].js` - Lógica JavaScript
- `/common` - Componentes reutilizáveis
  - Header, WhatsAppButton, Modal, Loader, ScrollToTop

#### `/src/styles` - Estilos
- `tailwind.css` - Importações do Tailwind
- `main.css` - Arquivo principal que importa todos os estilos
- `variables.css` - Variáveis CSS customizadas
- `reset.css` - Reset de estilos
- `responsive.css` - Media queries adicionais
- `animations.css` - Animações customizadas
- `components.css` - Estilos de componentes

#### `/src/scripts` - JavaScript
- `main.js` - Script principal
- `utils.js` - Funções utilitárias
- `animations.js` - Animações JavaScript
- `whatsapp.js` - Integração com WhatsApp
- `analytics.js` - Analytics e tracking
- `form-validation.js` - Validação de formulários
- `scroll-reveal.js` - Efeitos de scroll

#### `/src/config` - Configurações
- `config.js` - Configurações gerais (WhatsApp, URLs, etc.)

#### `/src/assets` - Recursos
- `/images` - Imagens do site
- `/icons` - Ícones
- `/fonts` - Fontes customizadas
- `/videos` - Vídeos

### `/public` - Arquivos Públicos
- `favicon.ico` - Favicon
- `manifest.json` - PWA manifest
- `robots.txt` - Configuração SEO
- `sitemap.xml` - Sitemap
- `og-image.jpg` - Imagem Open Graph
- `apple-touch-icon.png` - Ícone iOS

### `/docs` - Documentação
- `ESTRUTURA.md` - Este arquivo
- `COMPONENTES.md` - Documentação dos componentes

## 🎨 Tailwind CSS

O projeto utiliza Tailwind CSS como framework de estilização principal. As classes do Tailwind são usadas diretamente no HTML, enquanto estilos customizados complementares ficam nos arquivos CSS específicos de cada componente.

## 📦 Build e Deploy

- **Desenvolvimento**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`
