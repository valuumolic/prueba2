document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });
});

