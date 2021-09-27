const subItems = document.querySelectorAll('.feature__subs')
const featureBtns = document.querySelectorAll('.feature__btn')

featureBtns.forEach((button, index) => {
  button.addEventListener('click', function() {
    addHide()
    activeItem(button)
    subItems[index].classList.remove('hide')
  })
}) 
function addHide() {
  subItems.forEach(function(listItem) {
    listItem.classList.add('hide')
  })
}

function activeItem(button) {
  featureBtns.forEach((btn, index) => btn.classList.remove('feature__btn_active'))
  button.classList.add('feature__btn_active')
}