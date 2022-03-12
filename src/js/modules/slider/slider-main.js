import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns, animation) {
        super(btns, animation);
        this.prev = document.querySelectorAll('.prevmodule');
        this.next = document.querySelectorAll('.nextmodule');
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        };

        if (n < 1) {
            this.slideIndex = this.slides.length;
        };

        try {
            if (n === 3) {
                
                setTimeout(() => {
                    this.hansonBlock.classList.remove('hide');
                    this.hansonBlock.classList.add('fadeInUp');
                }, 3000);
            } else {
                this.hansonBlock.classList.add('hide');
                this.hansonBlock.classList.remove('fadeInUp');
            }
        } catch (error) {}

        [...this.slides].forEach(slide => slide.classList.add('hide', 'animated', this.animation));

        this.slides[this.slideIndex - 1].classList.remove('hide');
    };

    changeSlides(n) {
        this.showSlides(this.slideIndex += n);
    };

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                this.changeSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', e => {
                e.preventDefault();

                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.prev.forEach(item => {
            item.addEventListener('click', () => {
                this.changeSlides(-1);
            });
        });

        this.next.forEach(item => {
            item.addEventListener('click', e => {
                e.stopPropagation();
                this.changeSlides(1);
            });
        });
    }

    render() {
        if (this.container) {
            try {
                this.hansonBlock = document.querySelector('.hanson');
                this.hansonBlock.classList.add('animated', 'hide');
            } catch (error) {}
    
            this.showSlides(this.slideIndex);
            this.bindTriggers();
        } 
    };
}