import Swiper from 'swiper'

// Swiper
export const swiperInit = function (wrapperSelector, listSelector, itemSelector, paginationClass) {
  if (window.innerWidth < 768) {
    const swiper = new Swiper(wrapperSelector, {
      slidesPerView: 'auto',
      wrapperClass: listSelector.substring(1),
      slideClass: itemSelector.substring(1),
      spaceBetween: 16,
      pagination: {
        el: paginationClass,
        clickable: true
      }
    })
  }
}

