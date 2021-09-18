const transparency = () => {
    const popup = document.querySelector('.popup-transparency'),
        sliderWrap = document.querySelector('.transparency-slider-wrap'),
        slider = sliderWrap.querySelector('.transparency-slider'),
        popupSlider = document.querySelector('.popup-transparency-slider'),
        sliderPopupCount = document.getElementById('transparency-popup-counter');
    let width = document.documentElement.clientWidth;

    window.addEventListener('resize', () => {
        width = document.documentElement.clientWidth;
        //если ширина экрана клиента меньше либо равна 1024
    if (document.documentElement.clientWidth <= 1090) {
        //скрыть все документы кроме первого
        [...slider.children].forEach((item) => {
            item.style.display = 'none';
        });
        slider.children[0].style.display = 'flex';
        //при нажатии стрелок
        sliderWrap.addEventListener('click', (event) => {
            let target = event.target;
            let count = 0;
            //при нажатии стрелки влево
            if (target.closest('#transparency-arrow_left')) {
                [...slider.children].forEach((item) => {
                    if (count === 0) {
                        //определяем у какого слайда display ='flex'
                        if (item.style.display === 'flex') {
                            //добавляем ему display ='none'
                            item.style.display = 'none';
                            //если у слайда есть предыдущий родственник
                            if (item.previousElementSibling) {
                                //добавляем родственнику display ='flex'
                                item.previousElementSibling.style.display = 'flex';
                                count++;
                                //если нет предыдущего родственника
                            } else {
                                //добавляем display ='flex' последнему слайду
                                slider.children[slider.children.length - 1].style.display = 'flex';
                                count++;
                            }
                        }
                    }
                });
                //при нажатии стрелки вправо
            } else if (target.closest('#transparency-arrow_right')) {
                [...slider.children].forEach((item) => {
                    if (count === 0) {
                        //определяем у какого слайда display ='flex'
                        if (item.style.display === 'flex') {
                            //добавляем ему display ='none'
                            item.style.display = 'none';
                            //если у слайда есть предыдущий родственник
                            if (item.nextElementSibling) {
                                //добавляем родственнику display ='flex'
                                item.nextElementSibling.style.display = 'flex';
                                count++;
                            //если нет предыдущего родственника
                            } else {
                                //добавляем display ='flex' последнему слайду
                                slider.children[0].style.display = 'flex';
                                count++;
                            }
                        }
                    }
                });
            }
        });
    } else {
        [...slider.children].forEach((item) => {
            item.style.display = 'flex';
        });
    }
    });

    
    
    //появление popup при нажатии на документ
    sliderWrap.addEventListener('click', (event) => {
        let target = event.target;
        
        if (target.closest('.transparency-item')) {
            popup.style.visibility = 'visible';
            //определение какой именно слайд показать
            [...slider.children].forEach((item, index) => {
                if (item.children[0] === target) {
                    popupSlider.prepend(popupSlider.children[index]);
                    //определение общего кол-ва слайдов
                    sliderPopupCount.children[0].children[1].textContent = popupSlider.children.length;
                    //определение номера текущего слайда
                    sliderPopupCount.children[0].children[0].textContent = index + 1;
                }
            });
            
        }
    });
    //обработчик событий popup
    popup.addEventListener('click', (event) => {
        let target = event.target;
        //закрытие popup
        if (target.closest('.close')) {
            popup.style.visibility = 'hidden';
        }
        //при нажатии кнопки влево, последний элемент слайдера встаёт на первое место
        else if (target.closest('#transparency_left')) {
            popupSlider.prepend(popupSlider.children[popupSlider.children.length - 1]);
            let slideNumber = sliderPopupCount.children[0].children[0].textContent;
            slideNumber++;
            //ограничение счётчика слайдов
            if (slideNumber > popupSlider.children.length) slideNumber = 1;
            sliderPopupCount.children[0].children[0].textContent = slideNumber;
            //при нажатии кнопки вправо, первый элемент встаёт на последнее место
        } else if (target.closest('#transparency_right')) {
            popupSlider.append(popupSlider.children[0]);
            let slideNumber = sliderPopupCount.children[0].children[0].textContent;
            slideNumber--;
            //ограничение счётчика слайдов
            if (slideNumber < 1 ) slideNumber = popupSlider.children.length;
            sliderPopupCount.children[0].children[0].textContent = slideNumber;
        }
    });

    
};

export default transparency;