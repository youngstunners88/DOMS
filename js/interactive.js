// DOMS Interactive System
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add animation classes on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });
  
  // Skill hover effects
  document.querySelectorAll('.skill-category').forEach(cat => {
    cat.addEventListener('mouseenter', () => {
      cat.style.transform = 'translateY(-5px)';
      cat.style.boxShadow = '0 8px 25px rgba(30, 58, 95, 0.15)';
    });
    cat.addEventListener('mouseleave', () => {
      cat.style.transform = '';
      cat.style.boxShadow = '';
    });
  });
  
  // Contact button action
  document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.target.style.transform = 'scale(0.95)';
    setTimeout(() => e.target.style.transform = '', 150);
  });
});
