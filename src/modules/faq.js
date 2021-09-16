const faq = () => {
    const accordeon = document.querySelector('.accordion');

    const clearActive = () => {
        [...accordeon.children[0].children].forEach((item) => {
            item.children[0].classList.remove('msg-active');
        });
    };
    clearActive();
    

    accordeon.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.title_block')) {
            clearActive();
            target.classList.add('msg-active');
        }
    });
};

export default faq;