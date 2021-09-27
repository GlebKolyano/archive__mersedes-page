const modalBtn = document.querySelector('.design__more')
const modalWin = document.querySelector('.modal')


modalBtn.addEventListener('click', () => {
  modalWin.classList.remove('hide')
})

modalWin.addEventListener('click', event => {
  const target = event.target
  
  if (target.classList.contains('modal__close') || target.classList.contains('overlay')) {
    modalWin.classList.add('hide')
  }
})