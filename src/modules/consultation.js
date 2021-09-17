const consultation = () => {
    const body = document.querySelector('body'),
        consultButton = main.querySelector('button'),
        popupConsult = document.querySelector('.popup-consultation');
    //открытие окна консультации
    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target === consultButton) {
            popupConsult.style.visibility = 'visible';
        }
    });
    //закрытие окна консультации
    popupConsult.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.close-consultation')){
            popupConsult.style.visibility = 'hidden';
        }
    });
};

export default consultation;