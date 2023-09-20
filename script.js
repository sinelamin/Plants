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

const servicesBtns = document.querySelectorAll('.service-filter__btn');
const servicesCrads = document.querySelectorAll('.service-card');

let statusServiceBtns = [false, false, false];
let statusServiceCards = [false, false, false, false, false, false];

servicesBtns.forEach((item, index) => {
  item.addEventListener('click', e => {
    changeStatusBtns(e, item, index);
    resetStatusBtns(item, index);
    checkServiceBtns();
    changeServiceCards();
  });
});

function checkServiceBtns() {
  statusServiceCards[0] = statusServiceCards[4] = statusServiceBtns[0];
  statusServiceCards[2] = statusServiceBtns[1];
  statusServiceCards[1] = statusServiceCards[3] = statusServiceCards[5] = statusServiceBtns[2];
}

function changeServiceCards() {
  statusServiceCards.forEach((item, index) => {
    if (item) {
      servicesCrads[index].classList.remove('card__out-focus');
    } else {
      servicesCrads[index].classList.add('card__out-focus');
    }
  });

  let counter = statusServiceCards.filter(item => item).length;
  if (counter == 0) {
    servicesCrads.forEach(item => {
      item.classList.remove('card__out-focus');
    });
  }
}

function resetStatusBtns(item, index) {
  let value = statusServiceBtns.filter(elem => elem);

  if (value.length > 2) {
    servicesBtns.forEach((btn, i) => {
      btn.classList.remove('active-btn');

      if (i !== index) {
        statusServiceBtns[i] = false;
      }
    });

    item.classList.add('active-btn');
  }
}

function changeStatusBtns(e, item, index) {
  if (e.target.classList.contains('active-btn')) {
    item.classList.remove('active-btn');
    statusServiceBtns[index] = false;
  } else {
    item.classList.add('active-btn');
    statusServiceBtns[index] = true;
  }
}

//--------------------------------------------------------------------------------------



//Ptices Accordion
//--------------------------------------------------------------------------------------

const accordions = document.querySelectorAll('.prices-accourdion__details');


accordions.forEach(item => {
  item.addEventListener('click', e => {
    if (item.open) {
      accordions.forEach(accordion => accordion.open = false);
      item.open = false;
    } else {
      accordions.forEach(accordion => accordion.open = false);
      item.open = true;
    }

    if (e.target !== item) {
      if (item.open) {
        accordions.forEach(accordion => accordion.open = false);
        item.open = false;
      } else {
        accordions.forEach(accordion => accordion.open = false);
        item.open = true;
      }
    }
  });
});