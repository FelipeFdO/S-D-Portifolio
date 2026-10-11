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

// Envio do Formulário de Contato para o WhatsApp
const contatoForm = document.querySelector('.contato-form');
if (contatoForm) {
    contatoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        let texto = `*Novo Contato via Site S&D*\n\n`;
        texto += `*Nome:* ${nome}\n`;
        if (email) {
            texto += `*E-mail:* ${email}\n`;
        }
        texto += `*Mensagem:* ${mensagem}`;

        const url = `https://wa.me/5519997731516?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
    });
}
