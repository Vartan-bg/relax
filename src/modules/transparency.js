const transparency = () => {
    const popup = document.querySelector('.popup-transparency'),
        sliderWrap = document.querySelector('.transparency-slider-wrap'),
        slider = sliderWrap.querySelector('.transparency-slider'),
        popupSlider = document.querySelector('.popup-transparency-slider'),
        sliderPopupCount = document.getElementById('transparency-popup-counter');

    sliderWrap.addEventListener('click', (event) => {
        let target = event.target;
        
        if (target.closest('.transparency-item')) {
            popup.style.visibility = 'visible';
            [...slider.children].forEach((item, index) => {
                if (item.children[0] === target) {
                    popupSlider.prepend(popupSlider.children[index]);
                    sliderPopupCount.children[0].children[1].textContent = popupSlider.children.length;
                    sliderPopupCount.children[0].children[0].textContent = index + 1;
                }
            });
            
        }
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.close')) {
            popup.style.visibility = 'hidden';
        }
        else if (target.closest('#transparency_right')) {
            popupSlider.prepend(popupSlider.children[popupSlider.children.length - 1]);
            let slideNumber = sliderPopupCount.children[0].children[0].textContent;
            slideNumber++;
            if (slideNumber > popupSlider.children.length) slideNumber = 1;
            sliderPopupCount.children[0].children[0].textContent = slideNumber;
        } else if (target.closest('#transparency_left')) {
            popupSlider.append(popupSlider.children[0]);
            let slideNumber = sliderPopupCount.children[0].children[0].textContent;
            slideNumber--;
            if (slideNumber < 1 ) slideNumber = popupSlider.children.length;
            sliderPopupCount.children[0].children[0].textContent = slideNumber;
        }
    });

    if (document.documentElement.clientWidth <= 1024) {
        [...slider.children].forEach((item) => {
            item.style.display = 'none';
        });
        slider.children[0].style.display = 'flex';
        sliderWrap.addEventListener('click', (event) => {
            let target = event.target;
            let count = 0;
            if (target.closest('#transparency-arrow_left')) {
                [...slider.children].forEach((item) => {
                    if (count === 0) {
                        if (item.style.display === 'flex') {
                            item.style.display = 'none';
                            if (item.previousElementSibling) {
                                item.previousElementSibling.style.display = 'flex';
                                count++;
                            } else {
                                slider.children[slider.children.length - 1].style.display = 'flex';
                                count++;
                            }
                        }
                    }
                });
            } else if (target.closest('#transparency-arrow_right')) {
                [...slider.children].forEach((item) => {
                    if (count === 0) {
                        if (item.style.display === 'flex') {
                            item.style.display = 'none';
                            if (item.nextElementSibling) {
                                item.nextElementSibling.style.display = 'flex';
                                count++;
                            } else {
                                slider.children[0].style.display = 'flex';
                                count++;
                            }
                        }
                    }
                });
            }
        });
    }
};

export default transparency;