export const showHideSidebar = function (
  closeButtonSelector,
  openButtonSelector,
  sideBarSelector
) {
  const overlay = document.querySelector('.overlay')
  const closeButton = document.querySelector(closeButtonSelector)
  const openButton = document.querySelector(openButtonSelector)
  const sidebar = document.querySelector(sideBarSelector)

  openButton.addEventListener('click', function () {
    sidebar.classList.remove(sideBarSelector.substring(1) + '--hide')
    overlay.classList.add('overlay--visible')
  })

  closeButton.addEventListener('click', function () {
    sidebar.classList.add(sideBarSelector.substring(1) + '--hide')
    overlay.classList.remove('overlay--visible')
  })

  overlay.addEventListener('click', function () {
    sidebar.classList.add(sideBarSelector.substring(1) + '--hide')
    overlay.classList.remove('overlay--visible')
  })
}
