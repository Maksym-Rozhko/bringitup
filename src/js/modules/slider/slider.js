export default class Slider  {
    constructor({ container = null, btns = null, next = null, prev = null, activeClass = '', animation, autoplay } = {}) {
        this.container = document.querySelector(container);
        try { this.slides = this.container.children } catch (error) {};
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(next);
        this.next = document.querySelector(prev);
        this.activeClass = activeClass;
        this.autoplay = autoplay;
        this.slideIndex = 1;
        this.animation = animation;
    };
};