//
const form = document.querySelector('.contacts-form')
const modal = document.querySelector('.modal-form')
//
modal.addEventListener('click', event => {
  console.log(event.target)
  if (event.target != modal ) {
    modal.classList.add('hide')
  }
})

//
form.addEventListener('submit', (event) => {
  event.preventDefault()
  let data = {}
  for (let {name, value} of form.elements) {
    if (name) {
      data[name] = value;
    }
  }
//
  fetch('https://jsonplaceholder.typicode.com/todos/1/posts', 
  {method: 'POST', body: JSON.stringify(data)})
  .then((response) => {
    if (response.status === 200 || response.status === 201) {
      return response.json()
    } else {
      throw new Error(response.status)
    }
  }).then( () => {
    modal.classList.remove('hide')

    form.reset()
  }).catch(error => {
    alert('Призошла ошибка, статус ' + error.message)
  })
})




