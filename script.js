document.addEventListener('DOMContentLoaded', function() {
    // Анимация логотипа при скролле
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
        
        // Анимация появления элементов
        animateOnScroll();
    });

    // Плавная прокрутка для навигации
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Анимация элементов при прокрутке
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('show');
            }
        });
    }

    // Добавляем классы для анимации
    document.querySelectorAll('.section h2, .about-content, .feature, .course-card, .price-card, .teacher-card, .contact-info, .contact-form').forEach(el => {
        el.classList.add('animate');
    });

    // Инициализация анимации
    animateOnScroll();
});