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
  e.preventDefault();
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
    e.preventDefault();
    hideBurger();
  }
});

menuLink.forEach(item => {
  item.addEventListener('click', e => {
    hideBurger();
  });
});

function hideBurger() {
  menuList.classList.remove('menu-active');
  body.classList.remove('body-menu__active');
  overlay.classList.remove('overlay__active');
  burgerLine.forEach(item => {
    item.classList.remove('burger-line__active');
  });
}

//--------------------------------------------------------------------------------------




//Service filter
//--------------------------------------------------------------------------------------

const servicesBtn = document.querySelectorAll('.service-filter__btn');

let statusServiceBtn = [false, false, false];
let counter = 0;

servicesBtn.forEach((item, index) => {
  item.addEventListener('click', e => {
    changeStatusBtn(e, item, index);
    resetStatusBtn(item, index);
  });
});

function checkServiceBtn(e, index) {
  // if (e.target.classList.contains('active-btn')) {
  //   statusServiceBtn[index] = true;
  //   console.log(statusServiceBtn);
  // } else {
  //   statusServiceBtn[index] = false;
  //   console.log(statusServiceBtn);
  // }
}

function resetStatusBtn(item, index) {

  let value = statusServiceBtn.filter(elem => elem);

  if (value.length > 2) {
    servicesBtn.forEach((btn, i) => {
      btn.classList.remove('active-btn');

      if (i !== index) {
        statusServiceBtn[i] = false;
      }
      console.log(statusServiceBtn);
    });

    item.classList.add('active-btn');
  }
}

function changeStatusBtn(e, item, index) {

  if (e.target.classList.contains('active-btn')) {
    item.classList.remove('active-btn');
    statusServiceBtn[index] = false;
    console.log(statusServiceBtn);
  } else {
    item.classList.add('active-btn');
    statusServiceBtn[index] = true;
    console.log(statusServiceBtn);
  }
}