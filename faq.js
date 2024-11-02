let buttons = document.querySelectorAll('.expand');

buttons.forEach(button => {
    button.addEventListener('click', function(){
        let span = button.previousElementSibling;
        content.classList.toggle('fade-in');
        button.textContent = content.classList.contains('fade-in') ? 'Read Less' : 'Read More';
    });
});
