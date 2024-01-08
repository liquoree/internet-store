
document.querySelectorAll('.card-fav').forEach((elem) => elem.addEventListener('click', function () {
  if (String(elem.classList).includes('card-fav-active')) {
    elem.classList.remove('card-fav-active')
  } else {
    elem.classList.add('card-fav-active')
  }
}))
document.querySelectorAll('.card-cart').forEach((elem) => elem.addEventListener('click', function () {
  if (String(elem.classList).includes('card-cart-active')) {
    elem.classList.remove('card-cart-active')
  } else {
    elem.classList.add('card-cart-active')
  }
}))
document.querySelectorAll('.to-cart-mobile').forEach((elem) => elem.addEventListener('click', function () {
  if (String(elem.classList).includes('to-cart-mobile-active')) {
    elem.classList.remove('to-cart-mobile-active')
    elem.innerHTML = 'В корзину'
  } else {
    elem.classList.add('to-cart-mobile-active')
    elem.innerHTML = 'В корзине'
  }
}))
document.querySelectorAll('.to-fav-mobile').forEach((elem) => elem.addEventListener('click', function () {
  if (String(elem.classList).includes('to-fav-mobile-active')) {
    elem.classList.remove('to-fav-mobile-active')
  } else {
    elem.classList.add('to-fav-mobile-active')
  }
}))
document.querySelectorAll('.home-cards-item-img').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'product.html'
  })
)
document.querySelectorAll('.home-cards-item-header').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'product.html'
  })
)
// -----------------------------------------------------------------------------------------------
