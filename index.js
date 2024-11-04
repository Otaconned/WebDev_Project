'use strict';

/*Function to autoplay a carousel of images, using references to MD3 Schools & in-class carousel*/
let currentIndex = 0;

function carousel(){
  let slides = Array.from(document.querySelectorAll('.slide'));
  
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

setInterval(carousel, 2000);

/*Function to allow the user to increase/decrease page text with buttons*/
function increaseFont(increaseBy){
  let content = document.querySelectorAll('p'); 

  content.forEach((p) => {
    let style = window.getComputedStyle(p).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    p.style.fontSize = (currentSize + increaseBy) + 'px';
  });
}
function decreaseFont(decreaseBy){
  let content = document.querySelectorAll('p'); 

  content.forEach((p) => {
    let style = window.getComputedStyle(p).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    p.style.fontSize = (currentSize - decreaseBy) + 'px';
  });
}
