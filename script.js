const dollarMessage = document.getElementById('less-than-dollar')
const once = document.getElementById('once')
const monthly = document.getElementById('monthly')
monthly.style.backgroundColor = '#f8f8f8'
monthly.style.color = 'black'
let donationType = 'payment'
let chosenAmount = 0
let price = 0

once.addEventListener('click', function () {
  ;[once, monthly].forEach((e) => {
    e.style.transition = 'background-color 0.5s ease'
  })

  donationType = 'payment'
  once.style.backgroundColor = '#005bb5'
  once.style.color = 'white'
  monthly.style.backgroundColor = '#f8f8f8'
  monthly.style.color = 'black'
  //console.log('once: ' + donationType)
})

monthly.addEventListener('click', function () {
  ;[once, monthly].forEach((e) => {
    e.style.transition = 'background-color 0.5s ease'
  })

  donationType = 'subscription'
  once.style.backgroundColor = '#f8f8f8'
  once.style.color = 'black'
  monthly.style.backgroundColor = '#005bb5'
  monthly.style.color = 'white'
  //console.log('monthly: ' + donationType)
})

const donationAmounts = document.querySelectorAll('.d-el')
donationAmounts.forEach((element) => {
  element.addEventListener('click', (event) => {
    donationAmounts.forEach((e) => {
      e.style.backgroundColor = '#f8f8f8'
      e.style.color = 'black'
      input.value = ''
      dollarMessage.style.display = 'none'
      e.querySelectorAll('*').forEach((child) => {
        child.style.color = child.tagName === 'INPUT' ? 'black' : 'black'
      })
    })

    const target = event.currentTarget
    target.style.backgroundColor = '#005BB5'
    target.style.color = 'white'
    target.querySelectorAll('*').forEach((child) => {
      child.style.color = child.tagName === 'INPUT' ? 'black' : 'white'
    })

    //$$$
    price = target.textContent.replace('$', '')
    price = Number(price)
    if (isNaN(price)) {
      price = 0
    }
  })

  element.addEventListener('mouseenter', () => {
    if (element.style.backgroundColor !== 'rgb(0, 91, 181)') {
      element.style.backgroundColor = '#e0e0e0'
      element.style.color = 'black'
      element.querySelectorAll('*').forEach((child) => {
        child.style.color = child.tagName === 'INPUT' ? 'black' : 'black'
      })
    }
  })

  element.addEventListener('mouseleave', () => {
    if (element.style.backgroundColor !== 'rgb(0, 91, 181)') {
      element.style.backgroundColor = '#f8f8f8'
      element.style.color = 'black'
      element.querySelectorAll('*').forEach((child) => {
        child.style.color = child.tagName === 'INPUT' ? 'black' : 'black'
      })
    }
  })
})

function styleDollar() {
  dollarMessage.style.display = 'block'
  dollarMessage.textContent = 'select an amount (minimum 1 USD)'
  dollarMessage.style.color = 'red'
  dollarMessage.style.fontFamily = 'open sans, sans-serif'
}

const input = document.getElementById('inp')
input.addEventListener('change', function () {
  price = input.value
  price = Number(price)
  if (isNaN(price) || price < 1) {
    styleDollar()
  } else {
    dollarMessage.style.display = 'none'
  }
})

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    price = input.value
    price = Number(price)
    if (isNaN(price) || price < 1) {
      styleDollar()
    } else {
      dollarMessage.style.display = 'none'
    }
  }
})

//--------------------------------------
const button = document.getElementById('donate-btn')
button.addEventListener('click', () => {
  //console.log('clicked!')
  if (price >= 1) {
    fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [{ id: 1, quantity: 1}],
        priceInCents: price * 100,
        donationType,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json()
        return res.json().then((json) => Promise.reject(json))
      })
      .then(({ url }) => {
        window.location = url
      })
      .catch((e) => {
        console.error(e.error)
      })
  } else {
    styleDollar()
  }
})
