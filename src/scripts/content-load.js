/* =====================================================
   CONTENT LOAD - FLORAMAZONIA
   Carrega os componentes HTML dinamicamente
   ===================================================== */

// Configuracao dos componentes a serem carregados
const components = [
    {
        id: 'header-placeholder',
        path: './src/components/common/Header/Header.html'
    },
    {
        id: 'hero-placeholder',
        path: './src/components/sections/Hero/Hero.html'
    },
    {
        id: 'sobre-placeholder',
        path: './src/components/sections/Sobre/Sobre.html'
    }
];

/**
 * Carrega um componente HTML em um elemento placeholder
 * @param {string} elementId - ID do elemento placeholder
 * @param {string} filePath - Caminho do arquivo HTML
 */
async function loadComponent(elementId, filePath) {
    try {
        const element = document.getElementById(elementId);
        if (!element) {
            console.warn(`Elemento ${elementId} nao encontrado`);
            return;
        }

        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Erro ao carregar ${filePath}: ${response.status}`);
        }

        const html = await response.text();
        element.outerHTML = html;
        
        console.log(`Componente ${filePath} carregado com sucesso`);
    } catch (error) {
        console.error(`Erro ao carregar componente: ${error.message}`);
    }
}

/**
 * Carrega todos os componentes configurados
 */
async function loadAllComponents() {
    // Carrega todos os componentes em paralelo
    const promises = components.map(component => 
        loadComponent(component.id, component.path)
    );
    
    await Promise.all(promises);
    
    // Dispara evento customizado quando todos os componentes estiverem carregados
    document.dispatchEvent(new CustomEvent('componentsLoaded'));
    console.log('Todos os componentes foram carregados');
}

// Inicia o carregamento quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadAllComponents);
