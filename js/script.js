// Menu Mobile Toggle
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuIcon && navLinks) {
    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Fechar o menu ao clicar em um link (mobile)
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });
});
