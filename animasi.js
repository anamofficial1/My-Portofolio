/*
    Source : https://github.com/anamoffial1/My-Portofolio.git
    Developer : Anam Official
    Telegram : t.me/PraiOfficial
    
    Chanel WhatsApp : https://whatsapp.com/channel/0029VbBF8o460eBemg300Z3H
    Chanel Telegram : https://t.me/AnamchanelX 
    
[ MY SOCIAL MEDIA ]
    Github: https://github.com/anamofficial1
    Tiktok : https://tiktok.com/anamvx_
    Instagram : https://instagram.com/azizulanam_
    YouTube : https://youtube.com/@anamtrader    


*/

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.2s';
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    document.querySelectorAll('.slide-in').forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });

    // Add hover animations for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
});