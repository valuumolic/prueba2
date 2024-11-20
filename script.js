document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.getElementById('nav-toggle').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('nav-open');
    });
});
