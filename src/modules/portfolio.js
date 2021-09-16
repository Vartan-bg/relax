const portfolio = () => {
    const popup = document.querySelector('.popup-portfolio'),
        portfolioWrapper = document.getElementById('portfolio'),
        sliderText = document.querySelectorAll('.popup-portfolio-text'),
        sliderPopupCount = document.getElementById('popup-portfolio-counter'),
        popupSlider = document.querySelector('.popup-portfolio-slider');
    
    portfolioWrapper.addEventListener('click', (event) => {
        let target = event.target;
        sliderPopupCount.children[0].children[1].textContent = popupSlider.children.length;
        if (target.closest('.portfolio-slider__slide-frame')) {
            popup.style.visibility = 'visible';
            let count = 0;
            [...popupSlider.children].forEach((item) => {
                item.style.display = 'none';
                if (count > 0) {
                    return;
                } else {
                    let slideNumber = item.children[0].getAttribute('src').match(/\d/),
                        targetNumber = target.children[0].getAttribute('alt').match(/\d/);
                    if (+slideNumber === +targetNumber) {
                        count++;
                        item.style.display = 'block';
                        sliderText[+slideNumber - 1].style.display = 'flex';
                        sliderPopupCount.children[0].children[0].textContent = slideNumber;
                        if (document.documentElement.clientWidth <= 1024) {
                            sliderText[+slideNumber - 1].style.cssText += 'flex-wrap: wrap;';
                        }
                    }
                }
            });
            [...popupSlider.children].forEach((elem, index) => {
            if (elem.style.display === 'block') {
                slideNumber = index;
            }
        });
        }
    });
    popup.addEventListener('click', (event) => {
        let target = event.target;
        let slideNumber = +sliderPopupCount.children[0].children[0].textContent;
        if (target.closest('#popup_portfolio_left')) {
            let check = 0;
            [...popupSlider.children].forEach((item, index) => {
                if (check === 0) {
                if (item.style.display === 'block') {
                    sliderText.forEach((elem) => {
                        elem.style.display = 'none';
                    });
                    item.style.display = 'none';
                    if (item.previousElementSibling) {
                        item.previousElementSibling.style.display = 'block';
                        sliderText[index - 1].style.display = 'flex';
                        if (document.documentElement.clientWidth <= 1024) {
                            sliderText[index - 1].style.cssText += 'flex-wrap: wrap;';
                        }
                        check++; slideNumber--;
                    } else {
                        popupSlider.children[popupSlider.children.length - 1].style.display = 'block';
                        sliderText[popupSlider.children.length - 1].style.display = 'flex';
                        if (document.documentElement.clientWidth <= 1024) {
                                sliderText[popupSlider.children.length - 1].style.cssText += 'flex-wrap: wrap;';
                            }
                        check++; slideNumber--;
                    }
                }
                    if (slideNumber < 1) slideNumber = popupSlider.children.length;
                sliderPopupCount.children[0].children[0].textContent = slideNumber;
            }
            });

        } else if (target.closest('#popup_portfolio_right')) {
            let check = 0;
            [...popupSlider.children].forEach((item, index) => {
                if (check === 0) {
                    if (item.style.display === 'block') {
                        sliderText.forEach((elem) => {
                            elem.style.display = 'none';
                        });
                        item.style.display = 'none';
                        if (item.nextElementSibling) {
                            item.nextElementSibling.style.display = 'block';
                            sliderText[index + 1].style.display = 'flex';
                            if (document.documentElement.clientWidth <= 1024) {
                                sliderText[index + 1].style.cssText += 'flex-wrap: wrap;';
                            }
                            check++; slideNumber++;
                        } else {
                            popupSlider.children[0].style.display = 'block';
                            sliderText[0].style.display = 'flex';
                            if (document.documentElement.clientWidth <= 1024) {
                                sliderText[0].style.cssText += 'flex-wrap: wrap;';
                            }
                            check++; slideNumber++;
                        }
                    }
                    if (slideNumber > popupSlider.children.length) slideNumber = 1;
                    sliderPopupCount.children[0].children[0].textContent = slideNumber;
                }
            });
        } else if (target.closest('.close')) {
            popup.style.visibility = 'hidden';
        }
    });
};

export default portfolio;