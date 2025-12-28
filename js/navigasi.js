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
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
});