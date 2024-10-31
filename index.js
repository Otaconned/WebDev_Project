'use strict'; 

let slidesArray = 0;
imageCarousel();

function imageCarousel(){
  let slide = document.getElementsByClassName("slide");
  
  let (let i = 0; i < s.length; i++){
    slide[i].style.display = "none";
  }
  slidesArray++
  if (slidesArray > s.length){slidesArray = 1}
  slide[slidesArray-1].style.display = "block";
  setTimeout(imageCarousel, 2000);
}
