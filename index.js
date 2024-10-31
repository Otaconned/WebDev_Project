'use strict'; 

let slideIndex = 0;
const slides = Array.from(document.querySelectorAll('.slide'));
carousel();

function carousel(){
  
  slides.forEach(slide => slide.classList.remove('active'));
  slide[slideIndex].classList.add("active");
  slideIndex = (slideIndex + 1) % slides.length;
  
  setTimeout(carousel, 2000);
}

