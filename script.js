// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add fade-in animations for sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
  });

  setTimeout(() => {
    sections.forEach(section => {
      section.style.transition = 'opacity 1s, transform 1s';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    });
  }, 500);
});