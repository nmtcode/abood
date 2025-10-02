
console.log('yeet');
document.addEventListener('DOMContentLoaded', () => {
    // زر القائمة للجوال
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // تحريك Fade-in و Slide-up
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('fade-in')) {
                    entry.target.style.animation = 'fadeIn 0.8s forwards ease-out';
                } else if (entry.target.classList.contains('slide-up')) {
                    entry.target.style.animation = 'slideUp 0.8s forwards ease-out';
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .slide-up').forEach(el => observer.observe(el));
});
