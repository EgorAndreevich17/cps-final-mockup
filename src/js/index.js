import '../scss/style.scss'
import { swiperInit } from './swiper-init.js'
import { readMoreButton } from './read-more-button.js'
import { showHideSidebar } from './show-hide-sidebar.js'

showHideSidebar(
  '.button-menu--icon--cross',
  '.button-menu--icon--burger',
  '.sidebar'
)

showHideSidebar('.popup__button-close', '.button-menu--icon--message', '.popup')
// showHideSidebar(
//   '.popup-call__button-close',
//   '.button-menu--icon--phone',
//   '.popup-call'
// )
swiperInit(
  '.brand-slider',
  '.brand-slider__list',
  '.brand-slider__item',
  '#brandsPagination'
)
swiperInit(
  '.type-slider',
  '.type-slider__list',
  '.type-slider__item',
  '#typesPagination'
)
swiperInit(
  '.service-slider',
  '.service-slider__list',
  '.service-slider__item',
  '#servicesPagination'
)
readMoreButton('.about__button', '.about__text', 'Читать далее')
readMoreButton('.brand-slider__show-more-button', '.brand-slider__list')
readMoreButton('.type-slider__show-more-button', '.type-slider__list')
