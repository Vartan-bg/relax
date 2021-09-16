const showTips = () => {
    const formulaMain = document.querySelector('.formula'),
        formulaSlider = formulaMain.querySelector('.formula-slider'),
        sliderWrap = document.querySelector('.formula-slider-wrap');
    
    if (document.documentElement.clientWidth > 1024) {
        formulaMain.addEventListener('mouseover', (event) => {
            let target = event.target;
            if (target.closest('.formula-item__icon')) {
                const tip = target.parentNode.querySelector('.formula-item-popup');
                tip.style.visibility = 'visible';
                tip.style.opacity = 1;
                tip.style.transition = 'opacity 0.2s';
                target.parentElement.style.opacity = 1;
                if (tip.getBoundingClientRect().y < 0) {
                    tip.style.transform = 'translateY(310px)';
                    tip.classList.add('formula-item-popup--before');
                }
            }
        });
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
    } else if (document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 576){
        
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
        sliderWrap.addEventListener('click', (event) => {
            let target = event.target;
            if (target.closest('#formula-arrow_left')) {
                formulaSlider.prepend(formulaSlider.children[formulaSlider.children.length-1]);
                first3Flex();
            } else if (target.closest('#formula-arrow_right')) {
                formulaSlider.append(formulaSlider.children[0]);
                first3Flex();
            } else if (target.closest('.formula-item') && !target.classList.contains('formula-item-popup') && !target.parentNode.classList.contains('formula-item-popup')) {
                [...formulaSlider.children].forEach((item) => {
                   item.children[0].children[0].style.visibility = 'hidden';
                });
                const tip = target.querySelector('.formula-item-popup');
                tip.style.visibility = 'visible';
                tip.style.opacity = 1;
                tip.style.transition = 'opacity 0.2s';
                target.parentElement.style.opacity = 1;
            } else if (!target.classList.contains('formula-item')){
                [...formulaSlider.children].forEach((item) => {
                   item.children[0].children[0].style.visibility = 'hidden';
                });
            }
        });
    } else if (document.documentElement.clientWidth <= 576) {
        const first1Flex = () => {
            [...formulaSlider.children].forEach((item) => {
            item.style.display = 'none';
            });
            formulaSlider.children[0].style.display = 'flex';
        };
        first1Flex();
        sliderWrap.addEventListener('click', (event) => {
            let target = event.target;
            if (target.closest('#formula-arrow_left')) {
                formulaSlider.prepend(formulaSlider.children[formulaSlider.children.length-1]);
                first1Flex();
                [...formulaSlider.children].forEach((item) => {
                   item.children[0].children[0].style.visibility = 'hidden';
                });
            } else if (target.closest('#formula-arrow_right')) {
                formulaSlider.append(formulaSlider.children[0]);
                first1Flex();
                [...formulaSlider.children].forEach((item) => {
                   item.children[0].children[0].style.visibility = 'hidden';
                });
            } else if (target.closest('.formula-item') && !target.classList.contains('formula-item-popup') && !target.parentNode.classList.contains('formula-item-popup')) {
                [...formulaSlider.children].forEach((item) => {
                   item.children[0].children[0].style.visibility = 'hidden';
                });
                const tip = target.querySelector('.formula-item-popup');
                tip.style.visibility = 'visible';
                tip.style.opacity = 1;
                tip.style.transition = 'opacity 0.2s';
                target.parentElement.style.opacity = 1;
            } else if (!target.classList.contains('formula-item')){
                [...formulaSlider.children].forEach((item) => {
                   item.children[0].children[0].style.visibility = 'hidden';
                });
            }
        });
    }
};

export default showTips;