'use strict'; 

let slideIndex = 0;
carousel();

function carousel(){
  let slides = document.getElementsByClassName("slide");
  
  let (let i = 0; i < slides.length; i++){
    slide[i].style.display = "none";
  }
  
  slidesArray++
  if (slideIndex > slides.length){
    slidesArray = 1
  }
  
  slide[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}
