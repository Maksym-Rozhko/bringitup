export default class Download {
    constructor(triggers) {
        this.links = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        const linkEl = document.createElement('a');
        linkEl.setAttribute('href', path);
        linkEl.setAttribute('download', 'picture');

        linkEl.classList.add('hide');
        document.body.append(linkEl);

        linkEl.click();
        document.body.removeChild(linkEl);
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', e => {
                e.stopPropagation();
                this.downloadItem(this.path);
            });
        });
    }
}