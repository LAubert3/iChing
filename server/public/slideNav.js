const nav = document.getElementById('link-container')
let slide = false

document.getElementById('three-bar').addEventListener('click', () => {
  slide = !slide
  nav.style.visibility = slide ? 'visible' : 'hidden'
})

function viewNav() {
  if (window.innerWidth <= 600 && !slide) {
    nav.style.visibility = 'hidden'
  } else if (window.innerWidth <= 600 && slide) {
    nav.style.visibility = 'visible'
  } else if (window.innerWidth > 600) {
    nav.style.visibility = 'visible'
  }
}
setInterval(viewNav, 1000)
