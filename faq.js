'use strict';

/*declare the global variable since this is the only function*/
let buttons = document.querySelectorAll('.expand');

/*uses previous element's sibling referenced from MDN docs, since each button should be independent of one another (but attatched to their respective span function)*/
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(event){
        let span = event.target.previousElementSibling.querySelector('span');
        span.classList.toggle('fade-in'); /*function which impacts the animation style*/

        /*in the future, I could probably combine these with a ? operator, but was having some trouble getting them to work when I did so.*/
        if (span.classList.contains('fade-in')){
            event.target.textContent = 'Read Less';
        } else {
            event.target.textContent = 'Read More';
        }
    });
}
