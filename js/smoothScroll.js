const menuLinks = document.querySelectorAll('.menu-link')
const mainScroll = document.querySelector('.main__scroll-btn')
const newArray = [...menuLinks, mainScroll]

newArray.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const ID = event.target.getAttribute('href').substr(1)

    document.getElementById(ID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
})