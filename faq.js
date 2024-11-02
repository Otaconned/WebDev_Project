let buttons = document.querySelectorAll('.expand');

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(event){
        let span = event.target.previousElementSibling.querySelector('span');
        span.classList.toggle('fade-in');

        if (span.classList.contains('fade-in')){
            event.target.textContent = 'Read Less';
        } else {
            event.target.textContent = 'Read More';
        }
    });
}
