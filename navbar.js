// for making navbar responsive

const burgerMenu = document.querySelector('#menu');
const navbar = document.querySelector('#navbar');

burgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('open');
});
