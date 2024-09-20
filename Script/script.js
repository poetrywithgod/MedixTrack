
function toggleAccordion(id) {
    const content = document.getElementById(id); // Accordion content
    const icon = document.getElementById('icon-' + id); // Accordion icon

    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden'); // Show accordion content
        icon.classList.remove('fa-plus'); // Change icon to minus
        icon.classList.add('fa-minus');
    } else {
        content.classList.add('hidden'); 
        icon.classList.remove('fa-minus'); 
        icon.classList.add('fa-plus');
    }
}


document.getElementById('hamburger').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden'); // Toggle mobile menu visibility
});
