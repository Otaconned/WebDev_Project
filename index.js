'use strict';

const slides = Array.from(document.querySelectorAll('.slide'));
let currentIndex = 0;

function carousel(){
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

setInterval(carousel, 2000);

const increaseSize = document.getElementById('increase-size');
const decreaseSize = document.getElementById('decrease-size');
const text = document.querySelector("p");

let currentSize = 16;

increaseSize.addEventListener('click' ()=> {
  currentSize += 2;
  text.style.fontSize = currentSize;
}

increaseSize.addEventListener('click' ()=> {
  if (currentSize > 10) {
    currentSize -= 2;
    text.style.fontSize = currentSize;
  }
}
