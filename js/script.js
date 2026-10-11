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

// ==============================================================
// 📸 LISTA DE FOTOS DO PORTFÓLIO
// Para adicionar ou trocar fotos facilmente:
// 1. Coloque a foto dentro da pasta "img"
// 2. Adicione ou troque o nome do arquivo na lista abaixo:
// ==============================================================
const fotosPortfolio = [
    "img/port1.jpg",
    "img/port2.jpg",
    "img/port3.jpg",
    "img/port4.jpg",
    "img/port5.jpg",
    "img/port6.jpg",
    "img/port7.jpg",
    "img/port8.jpg",
    "img/port9.jpg",
    "img/port10.jpg",
    "img/port11.jpg",
    "img/port12.jpg"
];

// Carrossel de Portfólio
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Monta as fotos dinamicamente a partir da lista
if (track && typeof fotosPortfolio !== 'undefined' && fotosPortfolio.length > 0) {
    track.innerHTML = fotosPortfolio.map((foto, index) => `
        <div class="carousel-item">
            <img src="${foto}" alt="Projeto ${index + 1}">
        </div>
    `).join('');
}

if (track && prevBtn && nextBtn) {
    const getScrollAmount = () => {
        const item = track.querySelector('.carousel-item');
        return item ? item.offsetWidth + 20 : 300;
    };

    const isAtEnd = () => {
        return track.scrollLeft + track.clientWidth >= track.scrollWidth - 30;
    };

    const isAtStart = () => {
        return track.scrollLeft <= 15;
    };

    nextBtn.addEventListener('click', () => {
        if (isAtEnd()) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        }
        resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        if (isAtStart()) {
            track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        }
        resetAutoPlay();
    });

    // Avanço automático suave a cada 3.5 segundos
    let autoPlayInterval = null;

    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayInterval = setInterval(() => {
            if (isAtEnd()) {
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

    const resetAutoPlay = () => {
        stopAutoPlay();
        startAutoPlay();
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
