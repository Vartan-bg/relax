const portfolio = () => {
    const popup = document.querySelector('.popup-portfolio'),
        portfolioWrapper = document.getElementById('portfolio'),
        sliderText = document.querySelectorAll('.popup-portfolio-text'),
        sliderPopupCount = document.getElementById('popup-portfolio-counter'),
        popupSlider = document.querySelector('.popup-portfolio-slider');
    //открытие слайдера popup
    portfolioWrapper.addEventListener('click', (event) => {
        let target = event.target;
        //счётчик кол-ва слайдов
        sliderPopupCount.children[0].children[1].textContent = popupSlider.children.length;
        //открытие слайдера popup при нажатии на картинку
        if (target.closest('.portfolio-slider__slide-frame')) {
            popup.style.visibility = 'visible';
            let count = 0;
            //показывает нужный слайд, на который кликнули
            [...popupSlider.children].forEach((item) => {
                item.style.display = 'none';
                if (count > 0) {
                    return;
                } else {
                    //нужный слайд находится по цифре в названии картинки
                    let slideNumber = item.children[0].getAttribute('src').match(/\d/),
                        targetNumber = target.children[0].getAttribute('alt').match(/\d/);
                    if (+slideNumber === +targetNumber) {
                        //в слайдере несколько одинаковых картинок, поэтому ограничиваемся первой, которая найдётся
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
        }
    });
    //перелистывание слайдов
    popup.addEventListener('click', (event) => {
        let target = event.target;
        let slideNumber = +sliderPopupCount.children[0].children[0].textContent;
        //нажатие на стрелку влево
        if (target.closest('#popup_portfolio_left')) {
            let check = 0;
            //находим один слайд со свойством display='block'
            [...popupSlider.children].forEach((item, index) => {
                if (check === 0) {
                    if (item.style.display === 'block') {
                    //обнуляем описание слайда
                    sliderText.forEach((elem) => {
                        elem.style.display = 'none';
                    });
                    //Ставим этому слайду display='none'
                    item.style.display = 'none';
                    //если у него есть сосед сзади, добавляем этому соседу своство display='block', изменяем его описание и меняем счётчик слайдов
                    if (item.previousElementSibling) {
                        item.previousElementSibling.style.display = 'block';
                        sliderText[index - 1].style.display = 'flex';
                        if (document.documentElement.clientWidth <= 1024) {
                            sliderText[index - 1].style.cssText += 'flex-wrap: wrap;';
                        }
                        check++; slideNumber--;
                        //если соседа сзади нет, добавляем display='block' последнему элементу слайдера
                    } else {
                        popupSlider.children[popupSlider.children.length - 1].style.display = 'block';
                        sliderText[popupSlider.children.length - 1].style.display = 'flex';
                        if (document.documentElement.clientWidth <= 1024) {
                                sliderText[popupSlider.children.length - 1].style.cssText += 'flex-wrap: wrap;';
                            }
                        check++; slideNumber--;
                    }
                }//ограничиваем счётчик кол-вом слайдов
                    if (slideNumber < 1) slideNumber = popupSlider.children.length;
                sliderPopupCount.children[0].children[0].textContent = slideNumber;
            }
            });
            //нажатие на кнопку вправл
        } else if (target.closest('#popup_portfolio_right')) {
            let check = 0;
            //находим один слайд со свойством display='block'
            [...popupSlider.children].forEach((item, index) => {
                if (check === 0) {
                    if (item.style.display === 'block') {
                        //обнуляем описание слайда
                        sliderText.forEach((elem) => {
                            elem.style.display = 'none';
                        });
                        //Ставим этому слайду display='none'
                        item.style.display = 'none';
                        //если у него есть сосед спереди, добавляем этому соседу своство display='block', изменяем его описание и меняем счётчик слайдов 
                        if (item.nextElementSibling) {
                            item.nextElementSibling.style.display = 'block';
                            sliderText[index + 1].style.display = 'flex';
                            if (document.documentElement.clientWidth <= 1024) {
                                sliderText[index + 1].style.cssText += 'flex-wrap: wrap;';
                            }
                            check++; slideNumber++;
                            //если соседа спереди нет, добавляем display='block' первому элементу слайдера
                        } else {
                            popupSlider.children[0].style.display = 'block';
                            sliderText[0].style.display = 'flex';
                            if (document.documentElement.clientWidth <= 1024) {
                                sliderText[0].style.cssText += 'flex-wrap: wrap;';
                            }
                            check++; slideNumber++;
                        }
                    }//ограничиваем счётчик кол-вом слайдов
                    if (slideNumber > popupSlider.children.length) slideNumber = 1;
                    sliderPopupCount.children[0].children[0].textContent = slideNumber;
                }
            });
            //закрытие popup
        } else if (target.closest('.close')) {
            popup.style.visibility = 'hidden';
        }
    });
};

export default portfolio;