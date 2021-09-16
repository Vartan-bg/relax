const reviews = () => {
    const sliderWrap = document.querySelector('.reviews-slider-wrap'),
        slider = sliderWrap.querySelector('.reviews-slider'),
        mainWrap = document.querySelector('#reviews');

    mainWrap.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('#reviews-arrow_left')) {
            slider.append(slider.children[0]);
        } else if (target.closest('#reviews-arrow_right')) {
            slider.prepend(slider.children[slider.children.length-1]);
        }
    });
};

export default reviews;