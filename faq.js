document.querySelectorAll('.faq-item').forEach(item => {
    const content = item.querySelector('content');
    const button = item.querySelector('expand');

    button.addEventListener('click', function(){
        const expanded = content.classList.toggle('expanded');
        button.textContent = content.classList.contains('expanded') ? 'Read Less' : 'Read More';
    }); 
}
