const burgerBtn = document.querySelector('.header__humburger')
const menu = document.querySelector('.header__menu')



burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('header__menu-active')
  burgerBtn.classList.toggle('header__humburger-active')

  burgerBtn.classList.toggle('header__humburger')
})


menu.addEventListener('click', event => {
  

  if (event.target != menu) {
    menu.classList.toggle('header__menu-active')
    burgerBtn.classList.toggle('header__humburger-active')

    burgerBtn.classList.toggle('header__humburger')
  }
})

