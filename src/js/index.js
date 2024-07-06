import '../scss/style.scss'
import Swiper from './swiper-bundle.min.js'

const burgerButton = document.querySelector('.button-menu--icon--burger')
const sidebar = document.querySelector('.sidebar')
const closeButton = document.querySelector('.button-menu--icon--cross')
const overlay = document.querySelector('.overlay')

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

// Кнопка "читать далее"
const button = document.querySelector('.about__button')
const wrapper = document.querySelector('.about__text')

button.addEventListener('click', function (evt) {
  evt.preventDefault()
  button.classList.toggle('section__show-more-button--reversed')
  wrapper.classList.toggle('about__text--preview')

  if (wrapper.classList.contains('about__text--preview')) {
    button.textContent = 'Показать все'
  } else {
    button.textContent = 'Скрыть'
  }
})

// Swiper
document.addEventListener('DOMContentLoaded', function () {
  console.log(window.innerWidth)
  console.log(`Type of Swiper: ${typeof Swiper}`)

  if (window.innerWidth < 768) {
    console.log('test')
    try {
      new Swiper('.brand-slider', {
        slidesPerView: 'auto',
        wrapperClass: 'brand-slider__list',
        slideClass: 'brand-slider__item',
        spaceBetween: 16,
        pagination: {
          el: '#brandsPagination',
          clickable: true
        }
      })
      console.log('after Swiper init')
    } catch (error) {
      console.error('Error initializing Swiper:', error)
    }
  }
})
