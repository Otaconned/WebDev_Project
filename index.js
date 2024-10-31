'use strict'; 

let slideIndex = 0;
carousel();

function carousel(){
  let slides = document.getElementsByClassName("slide");
  
  for (let i = 0; i < slides.length; i++){
    slides[i].classList.remove("active");
  }
  
  slidesIndex++
  if (slideIndex > slides.length - 1){
    slidesIndex = 0
  }
  
  slide[slideIndex-1].classList.add("active");
  setTimeout(carousel, 2000);
}

