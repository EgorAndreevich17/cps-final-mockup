import '../scss/style.scss'
import { swiperInit } from './swiper-init.js';
import { readMoreButton } from './read-more-button.js';

const burgerButton = document.querySelector('.button-menu--icon--burger')
const sidebar = document.querySelector('.sidebar')
const closeButton = document.querySelector('.button-menu--icon--cross')
const overlay = document.querySelector('.overlay')
const showMoreButton = document.querySelector('.overlay')

burgerButton.addEventListener('click', function () {
  sidebar.classList.remove('sidebar__hide')
  overlay.classList.add('overlay--visible')
})

closeButton.addEventListener('click', function () {
  sidebar.classList.add('sidebar__hide')
  overlay.classList.remove('overlay--visible')
})

overlay.addEventListener('click', function () {
  sidebar.classList.add('sidebar__hide')
  overlay.classList.remove('overlay--visible')
})

swiperInit('.brand-slider','.brand-slider__list','.brand-slider__item','#brandsPagination')
swiperInit('.type-slider','.type-slider__list','.type-slider__item','#typesPagination')
readMoreButton('.about__button','.about__text', 'Читать далее')
readMoreButton('.brand-slider__show-more-button','.brand-slider__list')
readMoreButton('.type-slider__show-more-button','.type-slider__list')