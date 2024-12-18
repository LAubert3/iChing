const bar = document.getElementById('three-bar')
bar.style.fontWeight = '600'
bar.style.fontSize = 'xx-large'
bar.style.display = 'none'

const nav = document.getElementById('link-container')
let slide = false

bar.addEventListener('click', () => {
  slide = !slide
  nav.style.visibility = slide ? 'visible' : 'hidden'
})

function viewNav() {
  if (window.innerWidth <= 600 && !slide) {
    bar.style.display = 'inline'
    nav.style.visibility = 'hidden'
  } else if (window.innerWidth <= 600 && slide) {
    bar.style.display = 'inline'
    nav.style.visibility = 'visible'
  } else if (window.innerWidth > 600) {
    bar.style.display = 'none'
    nav.style.visibility = 'visible'
  }
}
setInterval(viewNav, 1000)
