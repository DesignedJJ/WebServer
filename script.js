document.addEventListener('DOMContentLoaded', () => {
  const collapsibles = document.querySelectorAll('.collapsible');
  
  collapsibles.forEach((header) => {
    header.addEventListener('click', () => {
      // Collapse any currently open sections (except this one):
      collapsibles.forEach((other) => {
        if (other !== header && other.classList.contains('active')) {
          other.classList.remove('active');
          const otherContent = other.nextElementSibling;
          otherContent.style.maxHeight = null;
        }
      });

      // Toggle this section:
      header.classList.toggle('active');
      const content = header.nextElementSibling;
      if (header.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});