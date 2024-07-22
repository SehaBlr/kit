let burger = document.querySelector('.header__burger');
let burgerEscape = document.querySelector('.header__escape');
let burgerMenu = document.querySelector('.header__burger-menu'); 

burger.addEventListener('click', () => {
    if (burger.classList.contains('header__burger_active')) {
        burgerMenu.classList.remove('header__burger-menu_visible');
        burger.classList.remove('header__burger_active');
    } else {        
        burgerMenu.classList.add('header__burger-menu_visible');
        burger.classList.add('header__burger_active');
    }
})

burgerEscape.addEventListener('click', () => {
    burgerMenu.classList.remove('header__burger-menu_visible');
    burger.classList.remove('header__burger_active');
})