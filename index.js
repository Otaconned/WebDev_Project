'use strict';

const slides = Array.from(document.querySelectorAll('.slide'));
let currentIndex = 0;

function carousel(){
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

setInterval(carousel, 2000);
