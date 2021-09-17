const numberOpacity = () => {
    const numberWrapper = document.querySelector('.header-contacts__phone-number-accord'),
        number = numberWrapper.querySelector('.header-contacts__phone-number'),
        arrowWrapper = document.querySelector('.header-contacts__arrow'),
        arrow = arrowWrapper.querySelector('img');

    arrowWrapper.addEventListener('click', () => {
        //если номер скрыт - показать его
        if (+getComputedStyle(number).opacity === 0) {
            number.style.margin = '25px 0 0 0';
            number.style.opacity = 1;
            arrow.style.cssText = `transform: rotate(180deg)`;
            //в ином случае - скрыть
        } else {
            number.style.margin = '0';
            number.style.opacity = 0;
            arrow.style.cssText = `transform: rotate(0deg)`;
        }
    });

};

export default numberOpacity;