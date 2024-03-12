/* Nav menu script */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-nav');
const navLink = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

hamburger.addEventListener('click', mobileMenu);
navLink.forEach((n) => n.addEventListener('click', closeMenu));

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.style.overflowY = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.style.overflowY = 'visible';
}
/* Accordion script */
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) =>
  item.addEventListener('click', () => {
    const isItemOpen = item.classList.contains('open');
    accordionItems.forEach((item) => item.classList.remove('open'));
    if (!isItemOpen) {
      item.classList.toggle('open');
    }
  })
);
