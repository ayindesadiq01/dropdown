'use strict';
const arrowDown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up');
const dropDown = document.querySelectorAll('.dropdown-features');
const hidden = document.querySelector('.hidden');
const dropContent = document.querySelectorAll('.dropdown-content');
const container = document.querySelector('.container')
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');
const bar = document.querySelector('.bar')
const barRemove = document.querySelector('.bar-remove')
const overlay =  document.querySelector('.overlay');

for(let i=0; i < dropDown.length; i++ ) {
dropDown[i].addEventListener('click', function(){
 if(dropContent[i].classList.contains('hidden')) {
  dropContent[i].classList.remove('hidden')
 } else {
  dropContent[i].classList.add('hidden')
 }
})
}

menuIcon.addEventListener('click', function() {
 bar.classList.remove('bar-remove');
 overlay.classList.remove('bar-remove');
})
closeIcon.addEventListener('click', function() {
 bar.classList.add('bar-remove');
 overlay.classList.add('bar-remove');
})

