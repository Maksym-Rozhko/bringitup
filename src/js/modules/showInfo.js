export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }
    
    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.closest('.module__info-show').nextElementSibling;
                content.classList.add('animated', 'slideInRight');
                content.classList.toggle('show');
                btn.classList.toggle('plus-rotate');
            });
        });
    }
}