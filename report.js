document.getElementById('report').addEventListener('submit', function(event){
  event.preventDefault();

  let display = document.getElementById('display');
  display.style.display = 'block';

  document.getElementById('report').reset();
});

document.getElementById('display').addEventListener('click', function(){
  this.style.display = 'none';
});
