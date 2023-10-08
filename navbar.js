// Menu navbar in small devices

const Menu = document.querySelector('.menu_icon');
const navbar = document.querySelector('#navbar');

Menu.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

const Icon = document.querySelector(".menu_icon");
    
Icon.addEventListener("click", function () {
    Icon.classList.toggle("active");
  });

