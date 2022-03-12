export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    bindTriggers(btnPlus, items, counter) {
        btnPlus.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2) {
                items[counter].classList.remove('hide');
                items[counter].classList.add('show-flex', 'slideInUp');
                counter++;
            } else {
                items[counter].classList.remove('hide');
                items[counter].classList.add('show-flex', 'slideInUp');
                items[items.length - 1].remove();
            }
        });
    }

    hideItems(officer) {
        officer.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.classList.add('hide', 'animated');
            };
        });
    }

    init() {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
        this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
    }
};