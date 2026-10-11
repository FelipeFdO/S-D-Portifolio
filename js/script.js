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

// Carrossel de Portfólio
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (track && prevBtn && nextBtn) {
    const getScrollAmount = () => {
        const item = track.querySelector('.carousel-item');
        return item ? item.offsetWidth + 20 : 300;
    };

    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    // Avanço automático suave a cada 3.5 segundos
    let autoPlayInterval = null;

    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayInterval = setInterval(() => {
            // Se chegou ao final, volta ao início suavemente
            if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 20) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
            }
        }, 3500);
    };

    const stopAutoPlay = () => {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    };

    startAutoPlay();

    // Pausar auto-play na interação do usuário
    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);
    track.addEventListener('touchstart', stopAutoPlay, { passive: true });
    track.addEventListener('touchend', startAutoPlay, { passive: true });
    prevBtn.addEventListener('mouseenter', stopAutoPlay);
    nextBtn.addEventListener('mouseenter', stopAutoPlay);
    prevBtn.addEventListener('mouseleave', startAutoPlay);
    nextBtn.addEventListener('mouseleave', startAutoPlay);
}
