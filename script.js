'use strict';

// burger menu
//--------------------------------------------------------------------------------------

const body = document.querySelector('body');
const burger = document.querySelector('.menu-burger');
const menuList = document.querySelector('.menu__list');
const burgerLine = document.querySelectorAll('.menu-burger__line');
const overlay = document.querySelector('.overlay');
const menuLink = document.querySelectorAll('.menu__link');

burger.addEventListener('click', e => {
  menuList.classList.toggle('menu-active');
  body.classList.toggle('body-menu__active');
  overlay.style.height = document.documentElement.scrollHeight + 'px';
  overlay.classList.toggle('overlay__active');
  burgerLine.forEach(item => {
    item.classList.toggle('burger-line__active');
  });
});

overlay.addEventListener('click', e => {
  if (e.target.classList.contains('overlay')) {
    showBurger();
  }
});

menuLink.forEach(item => {
  item.addEventListener('click', e => {
    showBurger();
  });
});

function showBurger() {
  menuList.classList.remove('menu-active');
  body.classList.remove('body-menu__active');
  overlay.classList.remove('overlay__active');
  burgerLine.forEach(item => {
    item.classList.remove('burger-line__active');
  });
}

//--------------------------------------------------------------------------------------
