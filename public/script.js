// mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu-mobile');
const desktopMenu = document.getElementById('nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

// set year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// intersection observer for reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// smooth scroll behavior for older browsers
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (menu) menu.classList.add('hidden');
    }
  });
});

// Initialize AOS animations
if (window.AOS) {
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 40,
  });
}


