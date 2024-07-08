export const showHideSidebar = function (
  closeButtonSelector,
  openButtonSelector,
  sideBarSelector
) {
  const overlay = document.querySelector('.overlay')
  const closeButtons = document.querySelectorAll(closeButtonSelector)
  const openButtons = document.querySelectorAll(openButtonSelector)
  const sidebar = document.querySelector(sideBarSelector)

  openButtons.forEach((openButton) => {
    openButton.addEventListener('click', function () {
      sidebar.classList.remove(sideBarSelector.substring(1) + '--hide')
      overlay.classList.add('overlay--visible')
    })
  })

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', function () {
      sidebar.classList.add(sideBarSelector.substring(1) + '--hide')
      overlay.classList.remove('overlay--visible')
    })
  })

  overlay.addEventListener('click', function () {
    sidebar.classList.add(sideBarSelector.substring(1) + '--hide')
    overlay.classList.remove('overlay--visible')
  })
}
