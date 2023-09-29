// for making navbar responsive

const burgerMenu = document.querySelector('.menu_icon');
const navbar = document.querySelector('#navbar');

burgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

const burgerIcon = document.querySelector(".menu_icon");
    
burgerIcon.addEventListener("click", function () {
    burgerIcon.classList.toggle("active");
  });

