let burger = document.querySelector('.header__burger');
let burgerEscape = document.querySelector('.header__escape');
let burgerMenu = document.querySelector('.header__burger-menu'); 

burger.addEventListener('click', () => {
    burgerMenu.classList.add('header__burger-menu_visible');
})

burgerEscape.addEventListener('click', () => {
    burgerMenu.classList.remove('header__burger-menu_visible');
})