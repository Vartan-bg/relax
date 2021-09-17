const faq = () => {
    const accordeon = document.querySelector('.accordion');
    //функция закрывания всех участков
    const clearActive = () => {
        [...accordeon.children[0].children].forEach((item) => {
            item.children[0].classList.remove('msg-active');
        });
    };
    clearActive();
    
    //открытие участка по нажатию и закрытие всех остальных, если они открыты
    accordeon.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.title_block')) {
            clearActive();
            target.classList.add('msg-active');
        }
    });
};

export default faq;