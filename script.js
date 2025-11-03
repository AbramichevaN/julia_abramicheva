document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .review-card, .feature-card, .skill-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener('load', () => {
    document.querySelectorAll('.service-card, .review-card, .feature-card, .skill-item').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        btnText.style.display = 'flex';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
        const originalText = btnText.textContent;
        btnText.textContent = 'Сообщение отправлено!';
        submitBtn.style.background = 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)';
        
        setTimeout(() => {
            btnText.textContent = originalText;
            submitBtn.style.background = '';
            this.reset();
        }, 3000);
    }, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.navbar-nav .nav-link').classList.add('active');
});