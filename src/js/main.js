import MainSlider from "./modules/slider/slider-main";
import VideoPlayer from "./modules/playVideo";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({pageSelector: '.page', btnsSelector: '.next', animation: 'slideInUp'});
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});