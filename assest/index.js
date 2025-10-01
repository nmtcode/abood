document.addEventListener('DOMContentLoaded', (event) => {
    // تشغيل القائمة في الجوال (لزر التبديل)
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // تشغيل تحريك Fade-in و Slide-up
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('fade-in')) {
                    entry.target.style.animationName = 'fadeIn';
                } else if (entry.target.classList.contains('slide-up')) {
                    entry.target.style.animationName = 'slideUp';
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // تفعيل التحريك عند ظهور 10% من العنصر

    document.querySelectorAll('.fade-in, .slide-up').forEach(element => {
        observer.observe(element);
    });
});