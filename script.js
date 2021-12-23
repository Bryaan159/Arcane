const toggle = document.querySelector('.toggle')
const toggleLine = document.querySelectorAll('.toggle-line')
const menu = document.querySelector('.menu')
const width = innerWidth

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  menu.classList.toggle('active')

  // if (width < 830) {
  //   toggle.classList.remove('active')
  //   menu.classList.remove('active')
  // }
})
