const getBtns = document.querySelectorAll('[data-tabs-handler]')
const getElem = document.querySelectorAll('[data-tabs-field]')

getBtns.forEach((button) => {
  button.addEventListener('click', () => {
    getBtns.forEach(item => item.classList.remove('design-list__item_active'))
    button.classList.add('design-list__item_active')
    
    getElem.forEach((element) => {
      if (element.dataset.tabsField === button.dataset.tabsHandler) {
        element.classList.remove('hide')
      } else {
        element.classList.add('hide')
      }
    })
  })
})
