const showTips = () => {
    const formulaMain = document.querySelector('.formula'),
        formulaSlider = formulaMain.querySelector('.formula-slider'),
        sliderWrap = document.querySelector('.formula-slider-wrap');

    let width = document.documentElement.clientWidth;
    //функция отображения только 1 слайда
    const first1Flex = () => {
            [...formulaSlider.children].forEach((item) => {
            item.style.display = 'none';
            });
            formulaSlider.children[0].style.display = 'flex';
    };
    //функция отображения 3-х слайдов
    const first3Flex = () => {
            [...formulaSlider.children].forEach((item) => {
            item.style.display = 'none';
            });
            formulaSlider.children[0].style.display = 'flex';
            formulaSlider.children[1].style.display = 'flex';
            formulaSlider.children[2].style.display = 'flex';
            
    };
    //отображение правильного кол-ва слайдов при загрузке страницы
    const resize = (width) => {
        if (width <= 1024 && width > 576) {
            first3Flex();
            formulaSlider.style.display = 'flex';
            formulaSlider.style.cssText += `align-items: flex-start;`;
        } else if (width <= 576) {
            first1Flex();
            formulaSlider.style.display = 'block';
        }
    };
    resize(document.documentElement.clientWidth);
    
    //изменение кол-ва слайдов при изменении ширины экрана
    window.addEventListener('resize', () => {
        width = document.documentElement.clientWidth;
        resize(width);
    });

    //если разрешение экрана пользователя больше 1024 px
    if (document.documentElement.clientWidth > 1024) {
        //Отображение подсказки при наведении
        formulaMain.addEventListener('mouseover', (event) => {
            let target = event.target;
            if (target.closest('.formula-item__icon')) {
                const tip = target.parentNode.querySelector('.formula-item-popup');
                tip.style.visibility = 'visible';
                tip.style.opacity = 1;
                tip.style.transition = 'opacity 0.2s';
                target.parentElement.style.opacity = 1;
                //если подсказка не попадает на экран полностью, перевернуть её
                if (tip.getBoundingClientRect().y < 0) {
                    tip.style.transform = 'translateY(310px)';
                    tip.classList.add('formula-item-popup--before');
                }
            }
        });
        //скрытие подсказки при отведении
        formulaMain.addEventListener('mouseout', (event) => {
            let target = event.target;
            if (target.closest('.formula-item__icon')) {
                const tip = target.parentNode.querySelector('.formula-item-popup');
                tip.style.visibility = 'hidden';
                tip.style.opacity = 0;
                tip.style.transition = 'opacity 0.2s';
                tip.style.transform = 'translateY(0)';
                tip.classList.remove('formula-item-popup--before');
            }
        });
    }
        
        //обработчик события слайдера
        sliderWrap.addEventListener('click', (event) => {
            let target = event.target;
                //при нажатии влево, последний элемент слайдера вставляется в начало
                if (target.closest('#formula-arrow_left')) {
                    formulaSlider.prepend(formulaSlider.children[formulaSlider.children.length - 1]);
                    //отображение кол-ва слайдов в зависимости от расширения экрана
                    resize(document.documentElement.clientWidth);
                    //при нажатии вправо первый элемент слайдера вставляется в конец
                } else if (target.closest('#formula-arrow_right')) {
                    formulaSlider.append(formulaSlider.children[0]);
                    //отображение кол-ва слайдов в зависимости от расширения экрана
                    resize(document.documentElement.clientWidth);
                    //при нажатии на элемент слайдера
                } else if (target.closest('.formula-item') && !target.classList.contains('formula-item-popup') && !target.parentNode.classList.contains('formula-item-popup')) {
                    //скрываются все открытые подсказки
                    [...formulaSlider.children].forEach((item) => {
                        item.children[0].children[0].style.visibility = 'hidden';
                    });
                    //отображается подсказка элемента, на который нажали
                    const tip = target.querySelector('.formula-item-popup');
                    tip.style.visibility = 'visible';
                    tip.style.opacity = 1;
                    tip.style.transition = 'opacity 0.2s';
                    target.parentElement.style.opacity = 1;
                    //при нажатии в пустое место, все подсказки закрываются
                } else if (!target.classList.contains('formula-item')) {
                    [...formulaSlider.children].forEach((item) => {
                        item.children[0].children[0].style.visibility = 'hidden';
                    });
                }
        });
    
};

export default showTips;