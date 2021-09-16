const consultation = () => {
    const main = document.querySelector('.director'),
        consultButton = main.querySelector('button'),
        popupConsult = document.querySelector('.popup-consultation');
    
    main.addEventListener('click', (event) => {
        let target = event.target;
        if (target === consultButton) {
            popupConsult.style.visibility = 'visible';
        }
    });

    popupConsult.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.close-consultation')){
            popupConsult.style.visibility = 'hidden';
        }
    });
};

export default consultation;