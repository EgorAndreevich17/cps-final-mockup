// Кнопка "читать далее"
export const readMoreButton = function (
  buttonSelector,
  wrapperSelector,
  textHidden = 'Показать все',
  textShown = 'Скрыть'
) {
  const button = document.querySelector(buttonSelector)
  const wrapper = document.querySelector(wrapperSelector)

  button.addEventListener('click', function (evt) {
    evt.preventDefault()
    button.classList.toggle(`${buttonSelector.substring(1)}--reversed`)
    wrapper.classList.toggle(`${wrapperSelector.substring(1)}--preview`)

    // substring(1) выводит все символы селектора кроме первого, тк это точка,
    // а при использовании classList нужно обращаться к классу без точки
    if (
      wrapper.classList.contains(`${wrapperSelector.substring(1)}--preview`)
    ) {
      button.textContent = textHidden
    } else {
      button.textContent = textShown
    }
  })
}
