'use strict';

// burger menu

const burger = document.querySelector('.menu-burger');
const menuList = document.querySelector('.menu__list');
const burgerLine = document.querySelectorAll('.menu-burger__line');

burger.addEventListener('click', e => {
  menuList.classList.toggle('menu-active');
  burgerLine.forEach(item => {
    item.classList.toggle('burger-line__active');
  });
});