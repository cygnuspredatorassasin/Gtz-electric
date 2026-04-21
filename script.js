// Responsive menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for contacting GTZ Electric! We will respond within 24 hours.');
        contactForm.reset();
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// WhatsApp floating button
const whatsappButton = document.createElement('a');
whatsappButton.href = 'https://wa.me/19515259510?text=Hello,%20I%20need%20a%20quote%20for%20electrical%20or%20solar%20services';
whatsappButton.className = 'whatsapp-float';
whatsappButton.target = '_blank';
whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
document.body.appendChild(whatsappButton);

const style = document.createElement('style');
style.textContent = `
    .whatsapp-float {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #25D366;
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        z-index: 1000;
        text-decoration: none;
    }
    .whatsapp-float:hover {
        transform: scale(1.1);
        background-color: #128C7E;
    }
`;
document.head.appendChild(style);