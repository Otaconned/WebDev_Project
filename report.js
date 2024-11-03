const form = document.getElementById('report');
const emailInput = document.getElementById('email');
const textInput = document.getElementById('issue');
const display = document.getElementById('display');

function validateEmail(emailInput) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(String(emailInput).toLowerCase());
}

button.addEventListener('click', function() {
  let emailInput = document.getElementById('email');
  let display = document.getElementById('display');

  display.style.display = 'block';
  
  if (validateEmail(email)) {
    display.innerHTML = "Thank you for your input!"
    document.getElementById('report').reset();
  } else {
    display.innerHTML = "Please use a valid email."
  }
}

document.getElementById('display').addEventListener('click', function(){
  this.style.display = 'none';
}); 

document.addEventListener("input", function() {
  const counter = document.getElementById('counter');
  const maxChars = 280;
  const remaining = maxChars - issue.value.length;

  counter.textContent = remaining;

  if (remaining <= 20) {
    counter.classList.add('warning');
  } else {
    counter.classList.remove('warning');
  }
}
