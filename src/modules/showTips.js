const showTips = () => {
    const formulaMain = document.querySelector('.formula'),
        formulaSlider = formulaMain.querySelector('.formula-slider'),
        sliderWrap = document.querySelector('.formula-slider-wrap');
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
        //если разрешение экрана между 1024 и 576px
    } else if (document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 576){
        //отобразить 3 элемента всего слайдера
        const first3Flex = () => {
            [...formulaSlider.children].forEach((item) => {
            item.style.display = 'none';
            });
            formulaSlider.children[0].style.display = 'flex';
            formulaSlider.children[1].style.display = 'flex';
            formulaSlider.children[2].style.display = 'flex';
        };
        first3Flex();
        formulaSlider.style.display = 'flex';
        formulaSlider.style.cssText += `align-items: flex-start;`;
        //обработчик события слайдера
        sliderWrap.addEventListener('click', (event) => {
            let target = event.target;
            //при нажатии влево, последний элемент слайдера вставляется в начало
            if (target.closest('#formula-arrow_left')) {
                formulaSlider.prepend(formulaSlider.children[formulaSlider.children.length-1]);
                first3Flex();
                //при нажатии вправо первый элемент слайдера вставляется в конец
            } else if (target.closest('#formula-arrow_right')) {
                formulaSlider.append(formulaSlider.children[0]);
                first3Flex();
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
            } else if (!target.classList.contains('formula-item')){
                [...formulaSlider.children].forEach((item) => {
                   item.children[0].children[0].style.visibility = 'hidden';
                });
            }
        });
        //если разрешение экрана 576 и меньше
    } else if (document.documentElement.clientWidth <= 576) {
        //отображается только 1 элемент слайдера
        const first1Flex = () => {
            [...formulaSlider.children].forEach((item) => {
            item.style.display = 'none';
            });
            formulaSlider.children[0].style.display = 'flex';
        };
        first1Flex();
        sliderWrap.addEventListener('click', (event) => {
            let target = event.target;
            //при нажатии на стрелку влево
            if (target.closest('#formula-arrow_left')) {
                //последний элемент слайдера вставляется в начало
                formulaSlider.prepend(formulaSlider.children[formulaSlider.children.length-1]);
                first1Flex();
                //скрытие подсказки
                [...formulaSlider.children].forEach((item) => {
                   item.children[0].children[0].style.visibility = 'hidden';
                });
                //при нажатии на стрелку вправо
            } else if (target.closest('#formula-arrow_right')) {
                //первый элемент вставляется в конец
                formulaSlider.append(formulaSlider.children[0]);
                first1Flex();
                //скрытие подсазки
                [...formulaSlider.children].forEach((item) => {
                   item.children[0].children[0].style.visibility = 'hidden';
                });
                //при нажатии на элемент слайдера
            } else if (target.closest('.formula-item') && !target.classList.contains('formula-item-popup') && !target.parentNode.classList.contains('formula-item-popup')) {
                //скрытие всех подсказок
                [...formulaSlider.children].forEach((item) => {
                   item.children[0].children[0].style.visibility = 'hidden';
                });
                //отображение подсказки того элемента, на который кликнули
                const tip = target.querySelector('.formula-item-popup');
                tip.style.visibility = 'visible';
                tip.style.opacity = 1;
                tip.style.transition = 'opacity 0.2s';
                target.parentElement.style.opacity = 1;
                //скрытие всех подсказок при клике в пустое место
            } else if (!target.classList.contains('formula-item')){
                [...formulaSlider.children].forEach((item) => {
                   item.children[0].children[0].style.visibility = 'hidden';
                });
            }
        });
    }
};

export default showTips;