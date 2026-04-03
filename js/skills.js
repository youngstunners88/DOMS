// Interactive Skills System for DOMS
document.addEventListener('DOMContentLoaded', () => {
  const skillCategories = document.querySelectorAll('.skill-category');
  
  skillCategories.forEach(cat => {
    cat.addEventListener('mouseenter', () => {
      cat.style.transform = 'translateY(-5px)';
      cat.style.boxShadow = '0 8px 25px rgba(30, 58, 95, 0.15)';
    });
    
    cat.addEventListener('mouseleave', () => {
      cat.style.transform = 'translateY(0)';
      cat.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    });
  });
  
  // Animate skill items on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });
  
  skillCategories.forEach(cat => observer.observe(cat));
});
