let burger = document.querySelector('.header__burger');
let burgerEscape = document.querySelector('.header__escape');
let burgerMenu = document.querySelector('.header__burger-menu'); 
let footerServises = document.querySelector('.footer__services'); 
let footerInfo = document.querySelector('.footer__info'); 

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

footerServises.addEventListener('click', () => {
    if (footerServises.classList.contains('footer__services_expanded')) {
        footerServises.classList.remove('footer__services_expanded');
    } else {        
        footerServises.classList.add('footer__services_expanded');
    }
})

footerInfo.addEventListener('click', () => {
    if (footerInfo.classList.contains('footer__info_expanded')) {
        footerInfo.classList.remove('footer__info_expanded');
    } else {        
        footerInfo.classList.add('footer__info_expanded');
    }
})