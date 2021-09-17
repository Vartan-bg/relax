const portfolioSlider = () => {
    const portfolio = document.querySelector('#portfolio'),
        portfolioSlider = portfolio.querySelector('.portfolio-slider'),
        arrowRight = portfolio.querySelector('#portfolio-arrow_right'),
        arrowLeft = portfolio.querySelector('#portfolio-arrow_left');
    let count = 0;
    portfolio.addEventListener('click', (event) => {
        let target = event.target;
        let maxCount;
        //определение сколько раз можно кликнуть вправо или влево (т.к. слайдер не бесконечный и стрелка должна пропадать в конце и начале слайдера)
        if (document.documentElement.clientWidth <= 576) {
            maxCount = 8;
        } else if (document.documentElement.clientWidth > 576 && document.documentElement.clientWidth <= 768) {
            maxCount = 4;
        } else if (document.documentElement.clientWidth > 768 && document.documentElement.clientWidth <= 1024) {
            maxCount = 3;
        }else {
            maxCount = 2;
        }
        //при нажатии стрелки вправл
        if (target.closest('#portfolio-arrow_right')) {
            //если это не конец слайдера
            if (count < maxCount) {
                //перелистнуть
                arrowLeft.style.display = 'flex';
                portfolioSlider.append(portfolioSlider.children[0]);
                count++;
            }//если это конец слайдера, спрятать стрелку
            if (count === maxCount) {
                arrowRight.style.display = 'none';
            }
            //при нажатии стрелки влево
        } else if (target.closest('#portfolio-arrow_left')) {
            //если это не начало слайдера
            if (count > 0) {
                //перелистнуть
                arrowRight.style.display = 'flex';
                portfolioSlider.prepend(portfolioSlider.children[portfolioSlider.children.length-1]);
                count--;
            }//если это начало слайдера, спрятать стрелку
            if (count === 0) {
                arrowLeft.style.display = 'none';
            }
        }
    });
};

export default portfolioSlider;