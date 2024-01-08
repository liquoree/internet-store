function removeAnim() {
  if (String(document.querySelector('.splide__list').classList).includes('splide__list-anim')) {
    document.querySelector('.splide__list').classList.remove('splide__list-anim')
  } else {
    console.log("hasn't")
  }
}
function FreakAlert () {
  if ((document.querySelectorAll('.splide__slide').length > 5) && (window.innerWidth > 1300)){
    document.querySelector('.splide__list').classList.add('splide__list-anim')
    setTimeout(removeAnim, 2000)
  }
}
setTimeout(FreakAlert, 2500)

document.querySelectorAll('.splide__slide').forEach((el) => el.addEventListener('click', function () {
  document.querySelector('.big-photo').style.backgroundImage = 'url("../img/mini-photo.jpg")'
}))
document.querySelectorAll('.prod-txt-size-button').forEach((el) => el.addEventListener('click', function () {
  if (String(el.classList).includes('prod-txt-size-button-active')) {
    console.log('has')
  } else {
    document.querySelectorAll('.prod-txt-size-button').forEach((elem) => elem.classList.remove('prod-txt-size-button-active'))
    el.classList.add('prod-txt-size-button-active')
  }
}))
document.querySelectorAll('.prod-txt-color-button').forEach((el) => el.addEventListener('click', function () {
  if (String(el.classList).includes('prod-txt-color-button-active')) {
    console.log('has')
  } else {
    document.querySelectorAll('.prod-txt-color-button').forEach((elem) => elem.classList.remove('prod-txt-color-button-active'))
    el.classList.add('prod-txt-color-button-active')
  }
}))
document.querySelectorAll('.plusss').forEach((el) => el.addEventListener('click', function () {
  el.previousElementSibling.firstElementChild.innerHTML = String(parseInt(el.previousElementSibling.firstElementChild.innerHTML)+1)
  document.querySelector('.prod-txt-add-to-cart').classList.remove('prod-txt-add-to-cart-active')
  document.querySelector('.prod-txt-add-to-cart').classList.add('prod-txt-add-to-cart-not-active')
  document.querySelector('.prod-txt-add-to-cart').innerHTML = 'Добавить в корзину'
  document.querySelector('.prod-txt-add-to-cart-mobile').classList.add('prod-txt-add-to-cart-mobile-not-active')
  document.querySelector('.prod-txt-add-to-cart-mobile').classList.remove('prod-txt-add-to-cart-mobile-active')
  document.querySelector('.prod-txt-add-to-cart-mobile').innerHTML = 'В корзину'
}))
document.querySelectorAll('.minusss').forEach((el) => el.addEventListener('click', function () {
  if ((el.nextElementSibling.firstElementChild.innerHTML == '0') || (el.nextElementSibling.firstElementChild.innerHTML == '1')) {
    console.log('zero')
  } else {
    el.nextElementSibling.firstElementChild.innerHTML = String(parseInt(el.nextElementSibling.firstElementChild.innerHTML)-1)
    document.querySelector('.prod-txt-add-to-cart').classList.remove('prod-txt-add-to-cart-active')
    document.querySelector('.prod-txt-add-to-cart').classList.add('prod-txt-add-to-cart-not-active')
    document.querySelector('.prod-txt-add-to-cart').innerHTML = 'Добавить в корзину'
    document.querySelector('.prod-txt-add-to-cart-mobile').classList.add('prod-txt-add-to-cart-mobile-not-active')
    document.querySelector('.prod-txt-add-to-cart-mobile').classList.remove('prod-txt-add-to-cart-mobile-active')
    document.querySelector('.prod-txt-add-to-cart-mobile').innerHTML = 'В корзину'
  }
}))
document.querySelector('.add-to-fav').addEventListener('click', function() {
  if (String(document.querySelector('.add-to-fav').classList).includes('prod-txt-add-to-fav-active')) {
    document.querySelector('.add-to-fav').classList.remove('prod-txt-add-to-fav-active')
  } else {
    document.querySelector('.add-to-fav').classList.add('prod-txt-add-to-fav-active')
  }
})
document.querySelector('.prod-txt-add-to-fav-mobile').addEventListener('click', function() {
  if (String(document.querySelector('.prod-txt-add-to-fav-mobile').classList).includes('prod-txt-add-to-fav-mobile-active')) {
    document.querySelector('.prod-txt-add-to-fav-mobile').classList.remove('prod-txt-add-to-fav-mobile-active')
  } else {
    document.querySelector('.prod-txt-add-to-fav-mobile').classList.add('prod-txt-add-to-fav-mobile-active')
  }
})
document.querySelector('.prod-txt-add-to-cart').addEventListener('click', function() {
  if(String(document.querySelector('.prod-txt-add-to-cart').classList).includes('prod-txt-add-to-cart-active')) {
    document.querySelector('.prod-txt-add-to-cart').classList.remove('prod-txt-add-to-cart-active')
    document.querySelector('.prod-txt-add-to-cart').classList.add('prod-txt-add-to-cart-not-active')
    document.querySelector('.prod-txt-add-to-cart').innerHTML = 'Добавить в корзину'
  } else {
    document.querySelector('.prod-txt-add-to-cart').classList.add('prod-txt-add-to-cart-active')
    document.querySelector('.prod-txt-add-to-cart').classList.remove('prod-txt-add-to-cart-not-active')
    document.querySelector('.prod-txt-add-to-cart').innerHTML = 'В корзине'
  }
})
document.querySelector('.prod-txt-add-to-cart-mobile').addEventListener('click', function() {
  if(String(document.querySelector('.prod-txt-add-to-cart-mobile').classList).includes('prod-txt-add-to-cart-mobile-active')) {
    document.querySelector('.prod-txt-add-to-cart-mobile').classList.remove('prod-txt-add-to-cart-mobile-active')
    document.querySelector('.prod-txt-add-to-cart-mobile').classList.add('prod-txt-add-to-cart-mobile-not-active')
    document.querySelector('.prod-txt-add-to-cart-mobile').innerHTML = 'В корзину'
  } else {
    document.querySelector('.prod-txt-add-to-cart-mobile').classList.add('prod-txt-add-to-cart-mobile-active')
    document.querySelector('.prod-txt-add-to-cart-mobile').classList.remove('prod-txt-add-to-cart-mobile-not-active')
    document.querySelector('.prod-txt-add-to-cart-mobile').innerHTML = 'В корзине'
  }
})

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

document.querySelectorAll('.home-cards-item-img').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'product.html'
  })
)
var stars = document.querySelectorAll('.write-review-rating-star')

for (let k = 0; k < stars.length; k++) {
  stars[k].addEventListener('mouseenter', function() {
    for (let i = 0; i < (k+1); i++) {
      stars[i].classList.add('write-review-rating-star-active')
    }
  })
  stars[k].addEventListener('mouseleave', function() {
    for (let i = 0; i < (k+1); i++) {
      stars[i].classList.remove('write-review-rating-star-active')
    }
  })
}
for (let k = 0; k < stars.length; k++) {
  stars[k].addEventListener('click', function() {
    for (let i = 0; i <= k; i++) {
      if (String(stars[i].classList).includes('write-review-rating-star-clicked')) {
        for (let l = 1; l < stars.length; l++) {
          stars[l].classList.remove('write-review-rating-star-clicked')
        }
      } else {
        for (let l = 0; l <= i; l++) {
          stars[l].classList.add('write-review-rating-star-clicked')
        }
      }
    }
  })
}

var containers = document.querySelectorAll('.prod-info-header-container')

for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener('click', function infoArrower() {
    containers[i].firstElementChild.nextElementSibling.classList.toggle('prod-info-header-arrow-opened')
    containers[i].nextElementSibling.classList.toggle('opened')
    containers[i].firstElementChild.classList.toggle('prod-info-header-mobile-active')
    if (String(containers[i].lastElementChild.classList).includes("prod-info-header-arrow-opened")) {
      containers[i].firstElementChild.nextElementSibling.style.transform = 'rotate(180deg)'
      containers[i].firstElementChild.nextElementSibling.style.backgroundImage = 'url("./img/info-arrow-up.svg")'
    } else {
      containers[i].firstElementChild.nextElementSibling.style.transform = 'rotate(0deg)'
      containers[i].firstElementChild.nextElementSibling.style.backgroundImage = 'url("./img/info-arrow-down.svg")'
    }
  })
}

var headerss = document.querySelectorAll('.prod-info-header-desktop')
var textss = document.querySelectorAll('.prod-info-text-item')
for (let i = 0; i < headerss.length; i++) {
  headerss[i].addEventListener('click', function () {
    for (let index = 0; index < headerss.length; index++) {
      headerss[index].classList.remove('prod-info-header-active')
    }
    headerss[i].classList.add('prod-info-header-active')
    for (let k = 0; k < textss.length; k++) {
      textss[k].classList.remove('prod-info-text-item-visible')
    }
    textss[i].classList.add('prod-info-text-item-visible')
  })
}
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