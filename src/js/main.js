import Slider from "./modules/slider";
import VideoPlayer from "./modules/playVideo";

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new Slider('.page', '.next', 'slideInUp');
    mainSlider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});