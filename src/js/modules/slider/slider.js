export default class Slider  {
    constructor({ pageSelector = '', btnsSelector = '', next = '', prev = '', animation = 'fadeIn' } = {}) {
        this.page = document.querySelector(pageSelector);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btnsSelector);
        this.slideIndex = 1;
        this.animation = animation;
    };
};