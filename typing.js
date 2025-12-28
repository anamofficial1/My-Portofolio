class TypingEffect {
    constructor(element, words, typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.words = words;
        this.typeSpeed = typeSpeed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.currentWord = 0;
        this.isDeleting = false;
        this.text = '';
        this.start();
    }

    type() {
        const currentWord = this.words[this.currentWord];
        
        if (this.isDeleting) {
            this.text = currentWord.substring(0, this.text.length - 1);
        } else {
            this.text = currentWord.substring(0, this.text.length + 1);
        }

        this.element.textContent = this.text;

        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

        if (!this.isDeleting && this.text === currentWord) {
            typeSpeed = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.text === '') {
            this.isDeleting = false;
            this.currentWord = (this.currentWord + 1) % this.words.length;
        }

        setTimeout(() => this.type(), typeSpeed);
    }

    start() {
        this.type();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.typing-text');
    const words = [
        'Azizul Qoirul Anam',
        'YT : anamtrader',
        'Credate By Anam',
        'Anamofficial - Dev'
    ];
    
    new TypingEffect(element, words);
});

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