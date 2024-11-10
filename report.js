'use strict';

function characterCounter(obj) {
  const counter = document.getElementById("counter");
  let maxChars = 280;
  let currentChars = obj.value.length;

  counter.innerHTML = currentChars;

  if (currentChars >= 200) {
    counter.classList.add("max");
  } else {
    counter.classList.remove("max");
  }
}

function validateForm() {
  const form = document.getElementById("report");
  const email = document.getElementById("email");
  const popUp = document.getElementById("popUp");
  const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  
  if (!email.value || !regEx.test(email.value)) {
    popUp.textContent = "Please use a valid email address.";
  } else {
    popUp.textContent = "Thank you for your feedback!";
    form.reset();
  }  

  popUp.classList.remove("hide");
}

document.getElementById("submit").addEventListener("click", function(event) {
  validateForm();
  event.preventDefault();
});

document.getElementById("popUp").addEventListener("click", function() {
  this.classList.add("hide");
});
