const content = document.getElementById('content');
const button = document.getElementById('more-btn');

button.addEventListener('click', function(){
    const expanded = content.classList.toggle('expanded');
    button.textContent = expanded ? 'Read Less' : 'Read More';
}); 
