var black = document.querySelector('.full-black')
var undermenu = document.querySelector('.under-menu-wrapper')
var undermenuClasses = undermenu.classList
document.querySelector('.header-hidden-lines').addEventListener('click', function underMenuer() {
  undermenu.classList.toggle("open")
  if (String(undermenuClasses).includes("open")) {
    document.querySelector('.header-hidden-lines').style.transform = 'rotate(90deg)'
    black.style.display = 'block'
    black.style.opacity = 0
    black.classList.add("full-black-animate-open")
    black.style.opacity = 1
  } else {
    document.querySelector('.header-hidden-lines').style.transform = 'rotate(0deg)'
    black.style.opacity = 1
    black.style.display = 'none'
  }
  
})
black.addEventListener('click', function blackShown() {
  undermenu.classList.toggle("open")
  document.querySelector('.header-hidden-lines').style.transform = 'rotate(0deg)'
  black.style.opacity = 1
  black.style.display = 'none'
})
document.querySelector('.search-cross').addEventListener("click", function () {
  document.querySelector('.header-hidden-search').classList.add('hidden');
  document.querySelector('.home').classList.remove('hidden')
  document.querySelector('.catalog').classList.remove('hidden')
  document.querySelector('.reviews').classList.remove('hidden')
  document.querySelector('.about').classList.remove('hidden')
  document.querySelector('.contacts').classList.remove('hidden')
  document.querySelector('.search-area').value = ''
  }
);
document.querySelector('.search').addEventListener("click", function () {
  document.querySelector('.header-hidden-search').classList.toggle('hidden');
  document.querySelector('.home').classList.toggle('hidden')
  document.querySelector('.catalog').classList.toggle('hidden')
  document.querySelector('.reviews').classList.toggle('hidden')
  document.querySelector('.about').classList.toggle('hidden')
  document.querySelector('.contacts').classList.toggle('hidden')
  }
);
document.querySelectorAll('.cart').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'cart.html'
  })
)
document.querySelectorAll('.hidden-cart').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'cart.html'
  })
)
document.querySelectorAll('.profile').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'authorization.html'
  })
)
document.querySelectorAll('.under-menu-profile').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'authorization.html'
  })
)
document.querySelectorAll('.fav').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'favourite.html'
  })
)
document.querySelectorAll('.under-menu-fav').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'favourite.html'
  })
)
document.querySelectorAll('.contacts').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'contacts.html'
  })
)
document.querySelectorAll('.under-menu-contacts').forEach((e) => 
  e.addEventListener('click', function () {
    window.location.href = 'contacts.html'
  })
)