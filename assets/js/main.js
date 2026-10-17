// Almeida & Ribeiro Advocacia - Interactions & Behaviors

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav auto-close on link click
  const navLinks = document.querySelectorAll('header a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.Alpine) {
        const headerEl = document.querySelector('header');
        if (headerEl && headerEl._x_dataStack && headerEl._x_dataStack[0]) {
          headerEl._x_dataStack[0].mobileMenuOpen = false;
        }
      }
    });
  });

  // Track active anchor in navbar on scroll
  const sections = document.querySelectorAll('section[id], div[id]');
  const navItems = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('text-[#C9A66B]', 'border-[#C9A66B]');
        link.classList.remove('text-neutral-300', 'border-transparent');
      } else {
        link.classList.remove('text-[#C9A66B]', 'border-[#C9A66B]');
        link.classList.add('text-neutral-300', 'border-transparent');
      }
    });
  });
});
