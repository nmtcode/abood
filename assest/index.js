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

function sendToWhatsApp(event) {
    event.preventDefault();

    // رقمك في واتساب (بدون + وابدأ برمز الدولة)
    const phoneNumber = "966558459841"; // ← غيّر الرقم هنا

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const text = `مرسل من نموذج الموقع:
الاسم: ${name}
البريد: ${email}
الموضوع: ${subject}
الرسالة: ${message}`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // يفتح واتساب مباشرة
    window.open(url, "_blank");
  }
