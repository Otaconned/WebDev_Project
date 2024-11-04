'use strict';

function validateEmail() {
  let emailInput = document.getElementById('email');
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regex.test(String(emailInput).toLowerCase());
}

function popUpMessage(message) {
  popUp.textContent = message;
  popUp.style.display = "block";
}

submitButton.addEventListener("click", function () {
  const form = document.getElementById('report');

  if (validateEmail = true) {
    popUpMessage("Thank you for your input!");
    form.reset();
  } else {
    popUpMessage("Please enter a valid email address");
  }
});

document.getElementById('popUp').addEventListener('click', function(){
  popUp.style.display = 'none';
}); 

document.addEventListener("input", function() {
  const counter = document.getElementById('counter');
  const maxChars = 280;
  const remaining = maxChars - issue.value.length;

  counter.textContent = remaining;

  if (remaining <= 20) {
    counter.classList.add('max');
  } else {
    counter.classList.remove('max');
  }
}
