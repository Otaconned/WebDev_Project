const content = document.getElementById('textbox');
const button = document.getElementByID('expand');

button.addEventListener(click, function()){
    const more = content.classList.toggle('more');
    button.textContent = more ? 'Read Less' : 'Read More';
});
