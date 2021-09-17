const repairTypes = () => {
    const wrapper = document.querySelector('.repair-types'),
        smallSlider = document.querySelector('.repair-types-slider'),
        leftButtons = [...wrapper.querySelectorAll('.repair-types-nav__item')],
        sliderCountCurrent = document.querySelector('.slider-counter-content__current'),
        sliderCountTotal = document.querySelector('.slider-counter-content__total'),
        navWrapper = wrapper.querySelector('.nav-list-repair');
    let count = 1;

    wrapper.addEventListener('click', (event) => {
        let target = event.target;
        
        const deleteTextNodes = (elem) => {
                elem.childNodes.forEach((item) => {
                    if (item.nodeName === '#text') {
                        item.remove();
                    }
                });
            if (elem === smallSlider) {
                elem.childNodes[0].childNodes.forEach((item) => {
                    if (item.nodeName === '#text') {
                        item.remove();
                    }
                });
            }
        };
        
        deleteTextNodes(smallSlider);
        sliderCountTotal.textContent = smallSlider.firstChild.childNodes.length;
        
        if (target.classList.contains('repair-types-nav__item') || target.classList.contains('nav-arrow_left') || target.classList.contains('nav-arrow_right')) {
            if (target.classList.contains('repair-types-nav__item')) {
                let sliderNumber = target.classList[2].match(/\d/);
                let slider = document.querySelector(`.types-repair${sliderNumber[0]}`);
                smallSlider.prepend(slider);
                leftButtons.forEach((item) => {
                    item.classList.remove('active');
                });
                target.classList.add('active');
            } else {
                if (target.classList.contains('nav-arrow_right')) {
                    deleteTextNodes(navWrapper);
                    let slide = navWrapper.firstChild;
                    navWrapper.append(slide);
                    let slides = document.querySelector('.nav-list-repair').children;
                    navWrapper.lastChild.classList.remove('active');
                    slides[0].classList.add('active');
                } else if (target.classList.contains('nav-arrow_left')) {
                    deleteTextNodes(navWrapper);
                    let slide = navWrapper.lastChild;
                    navWrapper.prepend(slide);
                    let slides = document.querySelector('.nav-list-repair').children;
                    slides[1].classList.remove('active');
                    slides[0].classList.add('active');
                }
                let sliderNumber = navWrapper.children[0].classList[2].match(/\d/);
                let slider = document.querySelector(`.types-repair${sliderNumber[0]}`);
                smallSlider.prepend(slider);
            }
                deleteTextNodes(smallSlider);
                sliderCountTotal.textContent = smallSlider.firstChild.childNodes.length;
                count = 1;
                sliderCountCurrent.textContent = count;
            
        } else if (target.closest('.slider-arrow_right')) {
            smallSlider.firstChild.append(smallSlider.firstChild.firstChild);
            count++;
            if (count > smallSlider.firstChild.childNodes.length) {
                count = 1;
            }
            sliderCountCurrent.textContent = count;
        } else if (target.closest('.slider-arrow_left')) {
            smallSlider.firstChild.prepend(smallSlider.firstChild.lastChild);
            count--;
            if (count < 1) {
                count = smallSlider.firstChild.childNodes.length;
            }
            sliderCountCurrent.textContent = count;
        }
    });
    
};

export default repairTypes;