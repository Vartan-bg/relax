const consultation = () => {
    const body = document.querySelector('body'),
        consultButton = body.querySelector('button'),
        popupConsult = document.querySelector('.popup-consultation');
    //открытие окна консультации
    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.textContent === 'Проконсультироваться') {
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