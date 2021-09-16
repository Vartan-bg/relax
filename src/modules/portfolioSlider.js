const portfolioSlider = () => {
    const portfolio = document.querySelector('#portfolio'),
        portfolioSlider = portfolio.querySelector('.portfolio-slider'),
        arrowRight = portfolio.querySelector('#portfolio-arrow_right'),
        arrowLeft = portfolio.querySelector('#portfolio-arrow_left');
    let count = 0;
    portfolio.addEventListener('click', (event) => {
        let target = event.target;
        let maxCount;
        if (document.documentElement.clientWidth <= 576) {
            maxCount = 8;
        } else if (document.documentElement.clientWidth > 576 && document.documentElement.clientWidth <= 768) {
            maxCount = 4;
        } else if (document.documentElement.clientWidth > 768 && document.documentElement.clientWidth <= 1024) {
            maxCount = 3;
        }else {
            maxCount = 2;
        }
        
        if (target.closest('#portfolio-arrow_right')) {
            if (count < maxCount) {
                arrowLeft.style.display = 'flex';
                portfolioSlider.append(portfolioSlider.children[0]);
                count++;
            }
            if (count === maxCount) {
                arrowRight.style.display = 'none';
            }
        } else if (target.closest('#portfolio-arrow_left')) {
            if (count > 0) {
                arrowRight.style.display = 'flex';
                portfolioSlider.prepend(portfolioSlider.children[portfolioSlider.children.length-1]);
                count--;
            }
            if (count === 0) {
                arrowLeft.style.display = 'none';
            }
        }
    });
};

export default portfolioSlider;