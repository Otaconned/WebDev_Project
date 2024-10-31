'use strict'; 

let slideIndex = 0;
carousel();
const slides = Array.from(document.querySelectorAll('.slide'));

function carousel(){
  
  for (let i = 0; i < slides.length; i++){
    slides[slideIndex].classList.remove("active");
  }
  
  slidesIndex++
  if (slideIndex > slides.length - 1){
    slidesIndex = 0
  }
  
  slide[slideIndex-1].classList.add("active");
  setTimeout(carousel, 2000);
}

