// Плавна навігація
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Анімації при прокручуванні сторінки
  ScrollReveal().reveal('.about-section', { delay: 200, origin: 'top', distance: '50px' });
  ScrollReveal().reveal('.services-section', { delay: 400, origin: 'left', distance: '100px' });
  ScrollReveal().reveal('.projects-section', { delay: 600, origin: 'bottom', distance: '50px' });
  ScrollReveal().reveal('.contact-section', { delay: 800, origin: 'right', distance: '50px' });
  
  // Параллакс-ефект для головного банера
  window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    document.querySelector('.hero').style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
  });
  