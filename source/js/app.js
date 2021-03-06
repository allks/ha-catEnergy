var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.header__toggle-menu');

navToggle.classList.remove('header__toggle-menu--nojs');
navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('header__toggle-menu--closed')) {
    navToggle.classList.remove('header__toggle-menu--closed');
    navToggle.classList.add('header__toggle-menu--opened');
    navMain.classList.add('nav--show');
  } else {
    navToggle.classList.add('header__toggle-menu--closed');
    navToggle.classList.remove('header__toggle-menu--opened');
    navMain.classList.remove('nav--show');
  }
});
