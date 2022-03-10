export default class Slider  {
    constructor(pageSelector, btnsSelector, animation) {
        this.page = document.querySelector(pageSelector);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btnsSelector);
        this.slideIndex = 1;
        this.animation = animation;
    };

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        };

        if (n < 1) {
            this.slideIndex = this.slides.length;
        };

        [...this.slides].forEach(slide => slide.classList.add('hide', 'animated', this.animation));

        this.slides[this.slideIndex - 1].classList.remove('hide');
    };

    changeSlides(n) {
        this.showSlides(this.slideIndex += n);
    };

    render() {
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

        this.showSlides(this.slideIndex);
    };
};