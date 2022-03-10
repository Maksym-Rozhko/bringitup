import Slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new Slider('.page', '.next', 'slideInUp');
    mainSlider.render();
});