document.addEventListener('DOMContentLoaded', function() {
  
    const zoomcontent = document.createElement('div');
    zoomcontent.className = 'zoomcontent';
    zoomcontent.innerHTML = `
        <div class="zoomcontent-content">
            <span class="close-zoomcontent">&times;</span>
            <img class="zoomcontent-image" src="" alt="Imagen ampliada">
        </div>
    `;
    document.body.appendChild(zoomcontent);

   
    const zoomcontentImg = zoomcontent.querySelector('.zoomcontent-image');
    const closeBtn = zoomcontent.querySelector('.close-zoomcontent');

    // funcion abrir zoomcontent
    function openZoomcontent(imgSrc) {
        zoomcontentImg.src = imgSrc;
        zoomcontent.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }

    // funcion cerrar zoomcontent
    function closeZoomcontent() {
        zoomcontent.classList.remove('active');
        document.body.style.overflow = ''; 
    }

    // Verificar si estamos en una página de proyecto
    const currentPath = window.location.pathname;
    const isProjectPage = !currentPath.endsWith('index.html') && 
                         !currentPath.endsWith('/') && 
                         !currentPath.endsWith('\\') &&
                         currentPath.includes('project');
    
    // Aplicar zoom solo si estamos en una página de proyecto
    if (isProjectPage) {
        
        const projectImages = document.querySelectorAll('.screenshot-grid img');
        projectImages.forEach(img => {
            img.addEventListener('click', function() {
                openZoomcontent(this.src);
            });
        });
    }

    // Cerrar zoomcontent al hacer clic en el botón de cierre
    closeBtn.addEventListener('click', closeZoomcontent);

    // Cerrar zoomcontent al hacer clic fuera de la imagen
    zoomcontent.addEventListener('click', function(e) {
        if (e.target === zoomcontent) {
            closeZoomcontent();
        }
    });

    // Cerrar zoomcontent al presionar la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && zoomcontent.classList.contains('active')) {
            closeZoomcontent();
        }
    });
});