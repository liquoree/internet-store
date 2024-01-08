document.querySelectorAll('.cart-product-fav').forEach((e) => e.addEventListener('click', function () {
  e.classList.toggle('cart-product-fav-active')
}))

var reload = document.querySelector('.cart-sum-button-reload')
var buy = document.querySelector('.cart-sum-button')
document.querySelectorAll('.cart-product-counter-plus').forEach((el) => el.addEventListener('click', function () {
  el.previousElementSibling.firstElementChild.innerHTML = String(parseInt(el.previousElementSibling.firstElementChild.innerHTML)+1)
  buy.style.display = 'none'
  reload.style.display = 'flex'
}))
document.querySelectorAll('.cart-product-counter-minus').forEach((el) => el.addEventListener('click', function () {
  if ((el.nextElementSibling.firstElementChild.innerHTML == '0') || (el.nextElementSibling.firstElementChild.innerHTML == '1')) {
    console.log('zero')
  } else {
    el.nextElementSibling.firstElementChild.innerHTML = String(parseInt(el.nextElementSibling.firstElementChild.innerHTML)-1)
    buy.style.display = 'none'
    reload.style.display = 'flex'
  }
}))
reload.addEventListener('click', function() {
  // function body
})
document.querySelectorAll('.cart-product-img-box').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'product.html'
  })
)
document.querySelectorAll('.cart-product-header-box').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'product.html'
  })
)