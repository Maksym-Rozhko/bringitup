export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }
    
    bindTriggers() {
        this.btns.forEach((btn, i) => {
            try {
                const blockedElem = btn.closest('.module__video-item').nextElementSibling;

                if (i % 2 === 0) {
                    blockedElem.setAttribute('data-disabled', 'true');
                }
            } catch (error) {}

            btn.addEventListener('click', () => {
                if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').dataset.disabled !== 'true') {
                    this.activeBtn = btn;

                    if (document.querySelector('iframe#frame')) {
                        this.overlay.classList.add('show-flex');
    
                        if (this.path !== btn.dataset.url) {
                            this.path = btn.dataset.url;
                            this.player.loadVideoById({videoId: this.path});
                        }
                    } else {
                        this.path = btn.dataset.url;
                        this.createPlayer(this.path);
                    };
                }
            });
        });
    }

    bindCloseBtn() {
        this.close.addEventListener('click', () => {
            this.overlay.classList.remove('show-flex');
            this.player.pauseVideo();
        });
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
            events: {
                'onStateChange': this.onPlayerStateChange,
            }
        });
        
        this.overlay.classList.add('show-flex');
    }

    onPlayerStateChange(state) {
        try {
            const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
            const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);
    
            if (state.data === 0) {
                if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
                    blockedElem.querySelector('.play__circle').classList.remove('closed');
                    blockedElem.querySelector('svg').remove();
                    blockedElem.querySelector('.play__circle').append(playBtn);
                    blockedElem.querySelector('.play__text').textContent = 'play video';
                    blockedElem.querySelector('.play__text').classList.remove('attention');
                    blockedElem.style.opacity = '1';
                    blockedElem.style.filter = 'none';
    
                    blockedElem.dataset.disabled = 'false';
                }
            }
        } catch (error) {}
    }

    init() {
        if (this.btns.length > 0) {
            const tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
            this.bindTriggers();
            this.bindCloseBtn();
        }
    }
}