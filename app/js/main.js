let burger = document.querySelector('.header__burger');
let burgerEscape = document.querySelector('.header__escape');
let burgerMenu = document.querySelector('.header__burger-menu'); 
let footerServises = document.querySelector('.footer__services'); 
let footerInfo = document.querySelector('.footer__info'); 
let services = document.querySelector('.services__swiper');
let currentContainer;

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


const swiper2 = new Swiper('.slider__inner', {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
        delay: 5000,
      },
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
  });


  
var swiper = new Swiper('.services__swiper', {
  slidesPerView:4,
  spaceBetween: 18,
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 11,
      grid: {
        column: 2,
        rows: 3,
      },
    },
    726: {
      slidesPerView: 3,
      spaceBetween: 16,
      grid: {
        column: 3,
        rows: 2,
      },
    },
    1650: {
      slidesPerView: 4,
      spaceBetween: 18, 
      grid: {
        column: 4,
        rows: 2,
      },
    },
  },
    grid: {
      column: 4,
      rows: 2,
    },
  pagination: {
    el: '.services__swiper-pagination',
    clickable: true,
  },
});
 
var swiper3 = new Swiper('.employee__cards', {
  slidesPerView:4,
  spaceBetween: 18,
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 11,
      grid: {
        column: 2,
        rows: 2,
      },
    },   
    726: {
      slidesPerView: 3,
      spaceBetween: 16,
      grid: {
        column: 3,
        rows: 2,
      },
    },
    1650: {
      slidesPerView: 4,
      spaceBetween: 18, 
      grid: {
        column: 4,
        rows: 2,
      },
    },
  },
  grid: {
    column: 4,
    rows: 2,
  },
  pagination: {
    el: '.employee__pagination',
    clickable: true,
  },
});