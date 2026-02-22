// Main JavaScript file for Udemy clone
// Load HTML components dynamically

async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    console.log('Udemy clone loaded');
    
    // Load all components
    await loadComponent('navbar', 'components/navbar.html');
    await loadComponent('recommendations-banner', 'components/recommendations-banner.html');
    await loadComponent('filters', 'components/filters.html');
    await loadComponent('courses-grid', 'components/courses-grid.html');
    await loadComponent('course-recommendations', 'components/course-recommendations.html');
    await loadComponent('courses-grid-2', 'components/courses-grid.html');
    await loadComponent('bottom', 'components/bottom.html');
    await loadComponent('Footer', 'components/Footer.html');
    
    console.log('All components loaded');
});
