const menuToggle = document.querySelector('.menu-toggle');
const siteHeader = document.querySelector('.site-header');

if (menuToggle && siteHeader) {

  // --- Función central: abrir/cerrar menú ---
  function openMenu() {
    siteHeader.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // bloquea scroll en móvil
  }

  function closeMenu() {
    siteHeader.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = ''; // restaura scroll
  }

  function toggleMenu() {
    const isOpen = siteHeader.classList.contains('menu-open');
    isOpen ? closeMenu() : openMenu();
  }

  // --- Toggle al pulsar el botón ---
  menuToggle.addEventListener('click', toggleMenu);

  // --- Cerrar al hacer clic en cualquier enlace del nav ---
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // --- Cerrar al pulsar Escape (accesibilidad) ---
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && siteHeader.classList.contains('menu-open')) {
      closeMenu();
      menuToggle.focus(); // devuelve el foco al botón al cerrar
    }
  });

  // --- Cerrar al hacer clic fuera del header ---
  document.addEventListener('click', e => {
    if (
      siteHeader.classList.contains('menu-open') &&
      !siteHeader.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // --- Restaurar scroll si se redimensiona a escritorio con menú abierto ---
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && siteHeader.classList.contains('menu-open')) {
      closeMenu();
    }
  });

}
