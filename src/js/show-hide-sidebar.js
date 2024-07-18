export const showHideSidebar = function (
  closeButtonSelector,
  openButtonSelector,
  sideBarSelector,
  isModalWindow
) {
  const overlay = document.querySelector('.overlay')
  const closeButtons = document.querySelectorAll(closeButtonSelector)
  const openButtons = document.querySelectorAll(openButtonSelector)
  const sidebar = document.querySelector(sideBarSelector)

  openButtons.forEach((openButton) => {
    openButton.addEventListener('click', function () {
      sidebar.classList.remove(sideBarSelector.substring(1) + '--hide')
      if (isModalWindow) {
        overlay.classList.remove('overlay--menu')
        overlay.classList.add('overlay--modal')
      } else {
        overlay.classList.remove('overlay--modal')
        overlay.classList.add('overlay--menu')
      }
    })
  })

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', function () {
      sidebar.classList.add(sideBarSelector.substring(1) + '--hide')
      if (isModalWindow) {
        overlay.classList.remove('overlay--modal')
      } else {
        overlay.classList.remove('overlay--menu')
      }
    })
  })

  overlay.addEventListener('click', function () {
    sidebar.classList.add(sideBarSelector.substring(1) + '--hide')
    overlay.classList.remove('overlay--modal')
    overlay.classList.remove('overlay--menu')
  })
}
