const reviews = () => {
    const sliderWrap = document.querySelector('.reviews-slider-wrap'),
        slider = sliderWrap.querySelector('.reviews-slider'),
        mainWrap = document.querySelector('#reviews');
    //переключение отзывов
    mainWrap.addEventListener('click', (event) => {
        let target = event.target;
        //при нажатии на левую стрелку, последний элемент слайдера вставляется в начало
        if (target.closest('#reviews-arrow_left')) {
            slider.append(slider.children[0]);
            //при нажатии на правую стрелку, первый элемет слайдера вставляется в конец
        } else if (target.closest('#reviews-arrow_right')) {
            slider.prepend(slider.children[slider.children.length-1]);
        }
    });
};

export default reviews;