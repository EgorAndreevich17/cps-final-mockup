const button = document.querySelector('.about__button')
const wrapper = document.querySelector('.about__text')
console.log(button)
console.log(wrapper)

button.addEventListener('click', function (evt) {
  console.log('кнопка нажата')
  evt.preventDefault()
  button.classList.toggle('section__show-more-button--reversed')
  wrapper.classList.toggle('about__text--preview')

  if (wrapper.classList.contains('about__text--preview')) {
    button.textContent = 'Показать все'
  } else {
    button.textContent = 'Скрыть'
  }
})
