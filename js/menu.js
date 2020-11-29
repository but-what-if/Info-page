'use strict'


let startingCard = document.querySelector('#starting-card')
let showListButton = document.querySelector('.list-show')
let removeListButton = document.querySelector('.list-remove')
let menu = document.querySelector('.main-menu')
let menuItem = document.querySelectorAll('.main-menu__item')
let arrow = document.querySelectorAll('.arrow')
let bridges = document.querySelector('.bridges')
let towers = document.querySelector('.towers')
let mountains = document.querySelector('.mountains')
let volcanos = document.querySelector('.volcanos')
let waterfalls = document.querySelector('.waterfalls')
let skyscrapers = document.querySelector('.skyscrapers')

let showList = function() {
  showListButton.classList.add('swipe-left')
  removeListButton.classList.add('opacity-none')
  removeListButton.classList.add('swipe-left')
  menu.classList.add('transformX-0')
}

let removeList = function() {
  removeListButton.classList.remove('swipe-left')
  removeListButton.classList.remove('opacity-none')
  showListButton.classList.remove('swipe-left')
  menu.classList.remove('transformX-0')
  bridges.classList.add('submenu')
  bridges.classList.remove('transformY-0')
  bridges.classList.remove('opacity-none')
  // console.log(startingCard.childNodes)
  startingCard.childNodes[1].classList.add('show')
  startingCard.childNodes[1].style.zIndex = '999'
}

let menuClasses = []

for (let i = 0; i < menuItem.length; i++) {
  menuClasses.push((menuItem[i].innerText).toLowerCase())
}




function showSubmenu(e) {
  switch (e.currentTarget.innerText.toLowerCase()) {
    case 'bridges':
      bridges.style.display = 'block'
      e.currentTarget.querySelector('.arrow').style.transform = 'rotate(90deg)'
      bridges.addEventListener('mouseover', () => {
        bridges.style.display = 'block'
        if (e.target.className === 'main-menu__item') {
          e.target.className = 'main-menu__item-hover'
          e.target.querySelector('.arrow').style.transform = 'rotate(90deg)'
        }
      })
      break
    case 'towers':
      towers.style.display = 'block'
      e.currentTarget.querySelector('.arrow').style.transform = 'rotate(90deg)'
      towers.addEventListener('mouseover', () => {
        towers.style.display = 'block'
        if (e.target.className === 'main-menu__item') {
          e.target.className = 'main-menu__item-hover'
          e.target.querySelector('.arrow').style.transform = 'rotate(90deg)'
        }
      })
      break
    case 'mountains':
      mountains.style.display = 'block'
      e.currentTarget.querySelector('.arrow').style.transform = 'rotate(90deg)'
      mountains.addEventListener('mouseover', () => {
        mountains.style.display = 'block'
        if (e.target.className === 'main-menu__item') {
          e.target.className = 'main-menu__item-hover'
          e.target.querySelector('.arrow').style.transform = 'rotate(90deg)'
        }
      })
      break
    case 'volcanos':
      volcanos.style.display = 'block'
      e.currentTarget.querySelector('.arrow').style.transform = 'rotate(90deg)'
      volcanos.addEventListener('mouseover', () => {
        volcanos.style.display = 'block'
        if (e.target.className === 'main-menu__item') {
          e.target.className = 'main-menu__item-hover'
          e.target.querySelector('.arrow').style.transform = 'rotate(90deg)'
        }
      })
      break
    case 'waterfalls':
      waterfalls.style.display = 'block'
      e.currentTarget.querySelector('.arrow').style.transform = 'rotate(90deg)'
      waterfalls.addEventListener('mouseover', () => {
        waterfalls.style.display = 'block'
        if (e.target.className === 'main-menu__item') {
          e.target.className = 'main-menu__item-hover'
          e.target.querySelector('.arrow').style.transform = 'rotate(90deg)'
        }
      })
      break
    case 'skyscrapers':
      skyscrapers.style.display = 'block'
      e.currentTarget.querySelector('.arrow').style.transform = 'rotate(90deg)'
      skyscrapers.addEventListener('mouseover', () => {
        skyscrapers.style.display = 'block'
        if (e.target.className === 'main-menu__item') {
          e.target.className = 'main-menu__item-hover'
          e.target.querySelector('.arrow').style.transform = 'rotate(90deg)'
        }
      })
      break
  }
}

function removeSubmenu(e) {
  switch (e.currentTarget.innerText.toLowerCase()) {
    case 'bridges':
      bridges.style.display = 'none'
      e.currentTarget.querySelector('.arrow').style.transform = 'rotate(0deg)'
      bridges.addEventListener('mouseout', () => {
        bridges.style.display = 'none'
        if (e.target.className === 'main-menu__item-hover') {
          e.target.className = 'main-menu__item'
          e.target.querySelector('.arrow').style.transform = 'rotate(0deg)'
        }
      })
      break
    case 'towers':
      towers.style.display = 'none'
      e.currentTarget.querySelector('.arrow').style.transform = 'rotate(0deg)'
      towers.addEventListener('mouseout', () => {
        towers.style.display = 'none'
        if (e.target.className === 'main-menu__item-hover') {
          e.target.className = 'main-menu__item'
          e.target.querySelector('.arrow').style.transform = 'rotate(0deg)'
        }
      })
      break
    case 'mountains':
      mountains.style.display = 'none'
      e.currentTarget.querySelector('.arrow').style.transform = 'rotate(0deg)'
      mountains.addEventListener('mouseout', () => {
        mountains.style.display = 'none'
        if (e.target.className === 'main-menu__item-hover') {
          e.target.className = 'main-menu__item'
          e.target.querySelector('.arrow').style.transform = 'rotate(0deg)'
        }
      })
      break
    case 'volcanos':
      volcanos.style.display = 'none'
      e.currentTarget.querySelector('.arrow').style.transform = 'rotate(0deg)'
      volcanos.addEventListener('mouseout', () => {
        volcanos.style.display = 'none'
        if (e.target.className === 'main-menu__item-hover') {
          e.target.className = 'main-menu__item'
          e.target.querySelector('.arrow').style.transform = 'rotate(0deg)'
        }
      })
      break
    case 'waterfalls':
      waterfalls.style.display = 'none'
      e.currentTarget.querySelector('.arrow').style.transform = 'rotate(0deg)'
      waterfalls.addEventListener('mouseout', () => {
        waterfalls.style.display = 'none'
        if (e.target.className === 'main-menu__item-hover') {
          e.target.className = 'main-menu__item'
          e.target.querySelector('.arrow').style.transform = 'rotate(0deg)'
        }
      })
      break
    case 'skyscrapers':
      skyscrapers.style.display = 'none'
      e.currentTarget.querySelector('.arrow').style.transform = 'rotate(0deg)'
      skyscrapers.addEventListener('mouseout', () => {
        skyscrapers.style.display = 'none'
        if (e.target.className === 'main-menu__item-hover') {
          e.target.className = 'main-menu__item'
          e.target.querySelector('.arrow').style.transform = 'rotate(0deg)'
        }
      })
      break
  }
}


for (var i = 0; i < arrow.length; i++) {
  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('mouseover', function() {
      menuItem[i].className = 'main-menu__item-hover';
    });
    menuItem[i].addEventListener('mouseout', function() {
      menuItem[i].className = 'main-menu__item';
    });
  }
}

