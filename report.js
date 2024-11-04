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

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  
  const form = document.getElementById('report');

  if (validateEmail()) {
    popUpMessage("Thank you for your input!");
    form.reset();
  } else {
    popUpMessage("Please enter a valid email address.");
  }
});

document.getElementById('popUp').addEventListener('click', function(){
  popUp.style.display = 'none';
}); 

textArea.addEventListener('input', function () {
  let area = document.getElementById('textArea');
  let chars = document.getElementById('counter');
  let content = this.value;

  chars.textContent = content.length;

  if (200 <= content.length) {
    chars.classList.add('max');
  } else {
    chars.classList.remove('max');
  }
});
