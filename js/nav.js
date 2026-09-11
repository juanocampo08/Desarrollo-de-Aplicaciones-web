function inicializarNavegacion() {
  const botonMenu = document.querySelector('#menu-toggle');
  const menuNav = document.querySelector('#nav-menu');

  if (!botonMenu || !menuNav) return;

  botonMenu.addEventListener('click', function () {
    menuNav.classList.toggle('active');
  });
}