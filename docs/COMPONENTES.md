# Documentação de Componentes - Floramazonia Landing Page

## 📦 Componentes por Categoria

### Seções (`/src/components/sections/`)

#### Hero
- **Arquivo**: `Hero.html`, `Hero.css`, `Hero.js`
- **Descrição**: Seção principal da landing page com título, subtítulo e CTA principal
- **Uso**: Primeira impressão, conversão inicial

#### Sobre
- **Arquivo**: `Sobre.html`, `Sobre.css`, `Sobre.js`
- **Descrição**: Apresentação da Floramazonia, história e valores
- **Uso**: Construir confiança e credibilidade

#### Produtos
- **Arquivo**: `Produtos.html`, `Produtos.css`, `Produtos.js`
- **Descrição**: Catálogo de produtos com cards e botões para WhatsApp
- **Uso**: Mostrar ofertas e gerar interesse

#### Benefícios
- **Arquivo**: `Beneficios.html`, `Beneficios.css`, `Beneficios.js`
- **Descrição**: Diferenciais e vantagens dos produtos
- **Uso**: Destacar pontos fortes

#### Depoimentos
- **Arquivo**: `Depoimentos.html`, `Depoimentos.css`, `Depoimentos.js`
- **Descrição**: Testemunhos de clientes satisfeitos
- **Uso**: Prova social e credibilidade

#### FAQ
- **Arquivo**: `FAQ.html`, `FAQ.css`, `FAQ.js`
- **Descrição**: Perguntas frequentes com accordion
- **Uso**: Resolver objeções e dúvidas

#### CTA
- **Arquivo**: `CTA.html`, `CTA.css`, `CTA.js`
- **Descrição**: Chamadas para ação estratégicas
- **Uso**: Conversão em pontos-chave da página

#### Galeria
- **Arquivo**: `Galeria.html`, `Galeria.css`, `Galeria.js`
- **Descrição**: Galeria de imagens dos produtos
- **Uso**: Visualização dos produtos

#### Estatísticas
- **Arquivo**: `Estatisticas.html`, `Estatisticas.css`, `Estatisticas.js`
- **Descrição**: Números, métricas e conquistas
- **Uso**: Autoridade e confiança

#### Footer
- **Arquivo**: `Footer.html`, `Footer.css`, `Footer.js`
- **Descrição**: Rodapé com informações e links
- **Uso**: Informações finais e navegação

### Componentes Comuns (`/src/components/common/`)

#### Header
- **Arquivo**: `Header.html`, `Header.css`, `Header.js`
- **Descrição**: Cabeçalho com navegação e logo
- **Uso**: Navegação e branding

#### WhatsAppButton
- **Arquivo**: `WhatsAppButton.html`, `WhatsAppButton.css`, `WhatsAppButton.js`
- **Descrição**: Botão flutuante do WhatsApp
- **Uso**: Acesso rápido ao WhatsApp em qualquer momento

#### Modal
- **Arquivo**: `Modal.html`, `Modal.css`, `Modal.js`
- **Descrição**: Modais e popups
- **Uso**: Mensagens importantes e ofertas especiais

#### Loader
- **Arquivo**: `Loader.html`, `Loader.css`, `Loader.js`
- **Descrição**: Indicador de carregamento
- **Uso**: Feedback visual durante carregamento

#### ScrollToTop
- **Arquivo**: `ScrollToTop.html`, `ScrollToTop.css`, `ScrollToTop.js`
- **Descrição**: Botão para voltar ao topo
- **Uso**: Melhorar experiência de navegação

## 🎯 Padrão de Desenvolvimento

Cada componente segue a estrutura:
- **HTML**: Estrutura semântica com classes Tailwind
- **CSS**: Estilos customizados que complementam Tailwind
- **JS**: Lógica e interatividade do componente

## 📱 Integração WhatsApp

Todos os botões de ação redirecionam para o WhatsApp através do script `whatsapp.js`, que formata mensagens e abre o aplicativo/web do WhatsApp.
