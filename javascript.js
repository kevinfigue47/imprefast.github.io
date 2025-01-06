function changeContent(contentId) {
    // Escondemos todas las secciones de contenido
    var sections = document.querySelectorAll('div[id^="contenido"]');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
  
    // Mostramos la sección seleccionada
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
      selectedContent.style.display = 'block';
    }
  }