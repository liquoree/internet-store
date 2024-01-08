
document.querySelector('.grid-icon').addEventListener('click', function() {
  if (String(document.querySelector('.grid-icon').classList).includes('grid-icon-active')) {
    console.log('already grid')
  } else {
    document.querySelector('.grid-icon').classList.add('grid-icon-active')
    document.querySelector('.row-icon').classList.remove('row-icon-active')
    document.querySelector('.prodds-grid-box').classList.remove('prodds-grid-box-rowview')
    document.querySelectorAll('.prodds-list-cards-item').forEach((e) => e.classList.remove('prodds-list-cards-item-rowview'))
  }
})
document.querySelector('.row-icon').addEventListener('click', function() {
  if (String(document.querySelector('.row-icon').classList).includes('row-icon-active')) {
    console.log('already row')
  } else {
    document.querySelector('.row-icon').classList.add('row-icon-active')
    document.querySelector('.grid-icon').classList.remove('grid-icon-active')
    document.querySelector('.prodds-grid-box').classList.add('prodds-grid-box-rowview')
    document.querySelectorAll('.prodds-list-cards-item').forEach((e) => e.classList.add('prodds-list-cards-item-rowview'))
  }
})


document.querySelectorAll('.plusss').forEach((el) => el.addEventListener('click', function () {
  el.previousElementSibling.firstElementChild.innerHTML = String(parseInt(el.previousElementSibling.firstElementChild.innerHTML)+1)
}))
document.querySelectorAll('.minusss').forEach((el) => el.addEventListener('click', function () {
  if ((el.nextElementSibling.firstElementChild.innerHTML == '0') || (el.nextElementSibling.firstElementChild.innerHTML == '1')) {
    console.log('zero')
  } else {
    el.nextElementSibling.firstElementChild.innerHTML = String(parseInt(el.nextElementSibling.firstElementChild.innerHTML)-1)
  }
}))


document.querySelectorAll('.add-to-cart').forEach((el) => el.addEventListener('click', function() {
  if (String(el.classList).includes('add-to-cart-active')) {
    el.classList.remove('add-to-cart-active')
    el.innerHTML = 'Добавить в корзину'
  } else {
    el.classList.add('add-to-cart-active')
    el.innerHTML = 'В корзине'
  }
}))
document.querySelectorAll('.add-to-cart-mobile').forEach((el) => el.addEventListener('click', function() {
  if (String(el.classList).includes('add-to-cart-mobile-active')) {
    el.classList.remove('add-to-cart-mobile-active')
    el.innerHTML = 'В корзину'
  } else {
    el.classList.add('add-to-cart-mobile-active')
    el.innerHTML = 'В корзине'
  }
}))
document.querySelectorAll('.add-to-fav').forEach((ell) => ell.addEventListener('click', function() {
  if (String(ell.classList).includes('add-to-fav-active')) {
    ell.classList.remove('add-to-fav-active')
  } else {
    ell.classList.add('add-to-fav-active')
  }
}))
document.querySelectorAll('.add-to-fav-mobile').forEach((ell) => ell.addEventListener('click', function() {
  if (String(ell.classList).includes('add-to-fav-mobile-active')) {
    ell.classList.remove('add-to-fav-mobile-active')
  } else {
    ell.classList.add('add-to-fav-mobile-active')
  }
}))
document.querySelectorAll('.home-cards-item-img').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'product.html'
  })
)
