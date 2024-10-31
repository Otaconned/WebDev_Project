'use strict';

const slides = Array.from(document.querySelectorAll('.slide'));
carousel();

function carousel(){
  const currentSlide = document.querySelector('.slide.active');
  const slideIndex = slides.indexOf(currentSlide);

  let nextSlide;
  
  if(currentSlide === 0){
    nextSlide = slides.length - 1;
  } else {
    nextSlide = currentSlide - 1;
  }

  slides[nextSlide].classList.add('active');
  currentSlide.classList.remove('active');
}

setInterval(carousel, 2000);
