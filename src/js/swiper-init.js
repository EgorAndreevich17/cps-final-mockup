import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

// Swiper
export const swiperInit = function (
  wrapperSelector,
  listSelector,
  itemSelector,
  paginationSelector
) {
  if (window.innerWidth < 768) {
    const swiper = new Swiper(wrapperSelector, {
      modules: [Pagination],
      speed: 500,
      pagination: {
        el: paginationSelector,
        clickable: true
      },
      slidesPerView: 'auto',
      wrapperClass: listSelector.substring(1),
      slideClass: itemSelector.substring(1),
      spaceBetween: 16
    })
  }
}
