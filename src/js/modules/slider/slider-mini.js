import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(container, next, prev, activeClass, animation, autoplay) {
        super(container, next, prev, activeClass, animation, autoplay);
    }

    decorizeSlides() {
        [...this.slides].forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animation) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });
        
        this.slides[0].classList.add(this.activeClass);
        if (this.animation) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    };

    prevSlide() {
        let active = this.slides[this.slides.length - 1];
        this.container.insertBefore(active, this.slides[0]);
        this.decorizeSlides();
    }

    nextSlide() {
        this.container.appendChild(this.slides[0]);
        this.decorizeSlides();
    }

    bindTriggers() {
        this.prev.addEventListener('click', () => this.prevSlide());

        this.next.addEventListener('click', () => this.nextSlide());
    }

    init() {
        try {
            this.container.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                overflow: hidden;
            `;

            this.bindTriggers();
            this.decorizeSlides();

            if (this.autoplay) {
                setInterval(() => this.nextSlide(), 5000);
            }
        } catch (error) {}
    }
}