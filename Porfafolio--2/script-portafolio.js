document.addEventListener('DOMContentLoaded', function () {

    // ========================
    // BARRAS DE HABILIDADES
    // ========================
    const skillBars = document.querySelectorAll('.skill-progress');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target.style.getPropertyValue('--target');
                entry.target.style.width = target;
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    // ========================
    // ANIMACIÓN PROYECTOS
    // ========================
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease';
    });

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => cardObserver.observe(card));

    // ========================
    // ANIMACIÓN EDUCACIÓN
    // ========================
    const eduCards = document.querySelectorAll('.education-card');

    eduCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const eduObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 120);
                eduObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    eduCards.forEach(card => eduObserver.observe(card));

    // ========================
    // NAVBAR ACTIVO
    // ========================
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 80) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ========================
    // BOTÓN SCROLL TOP
    // ========================
    const scrollBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

});