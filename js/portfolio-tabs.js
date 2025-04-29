document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos del DOM
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Función para cambiar de pestaña
    function switchTab(tabId) {
        
        // Ocultar todos los contenidos de pestañas
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        
        // Desactivar todos los botones de pestañas
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        
        // Activar la pestaña seleccionada
        document.getElementById(tabId).classList.add('active');
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    }
    
   
    // Agregar event listeners a los botones de pestañas
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    
    // Activar la primera pestaña por defecto
    if (tabButtons.length > 0) {
        const firstTabId = tabButtons[0].getAttribute('data-tab');
        switchTab(firstTabId);
    }
});