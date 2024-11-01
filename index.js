'use strict';

/*Function to autoplay a carousel of images, using references to MD3 Schools & in-class carousel*/
function carousel(){
  const slides = Array.from(document.querySelectorAll('.slide'));
  let currentIndex = 0;
  
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

setInterval(carousel, 2000);

/*Function to allow the user to increase/decrease page text with buttons*/
function increaseFont(increaseBy){
  const content = document.querySelectorAll('p'); 

  content.forEach((p) => {
    let style = window.getComputedStyle(p).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    p.style.fontSize = (currentSize + increaseBy) + 'px';
  });
}
function decreaseFont(decreaseBy){
  const content = document.querySelectorAll('p'); 

  content.forEach((p) => {
    let style = window.getComputedStyle(p).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    p.style.fontSize = (currentSize - decreaseBy) + 'px';
  });
}
