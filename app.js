const button = document.querySelector('.button')

const popUp = document.querySelector('.popup-container')
button.addEventListener('click', () => {
  popUp.style.display = 'block'
})

const popUpCloseButton = document.querySelector('.popup-close-button');
popUpCloseButton.addEventListener('click', () => {
  popUp.style.display = 'none'
})

popUp.addEventListener('click', () => {
  popUp.style.display = 'none'
})

const popInner = document.querySelector('.popup-box')
popInner.addEventListener('click', (e) => {
  e.stopPropagation()
})