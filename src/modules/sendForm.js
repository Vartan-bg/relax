const sendForm = () => {
    const body = document.getElementsByTagName('body')[0],
        popup = document.querySelector('.popup-thank');
    
    body.addEventListener('submit', (event) => {
        event.preventDefault();
        let target = event.target;
        //если таргет - форма
        if (target.tagName === 'FORM') {
            //загрузка данных из формы в body
            const formData = new FormData(target);
            let body = {};

            for (let val of formData.entries()) {
                body[val[0]] = val[1];
            }
            //функция отправки данных
            const postData = (body) => {
                return fetch('./server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                });
            };
            
            const inputs = target.querySelectorAll('input');
            let error = 0;
            
            inputs.forEach((item) => {
                //если инпуты пустые и введено неправильное кол-во цифр в номер телефона
                if (item.value.trim() === '' || item.value.match(/_/g)) {
                    //выделяем инпуты красным цветом, добавляем переменной error +1
                    item.style.cssText += 'border: 3px solid red';
                    error++;
                    //если всё введено правильно, красное обрамление инпутов убирается
                } else item.style.cssText += 'border: none';
            });
            //если всё введено правильно (error=0)
            if (error === 0) {
                //функция отправки данных
                (async ()=> {
                    await postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        //появление popup
                        popup.style.visibility = 'visible';
                        //закрытие popup
                        popup.addEventListener('click', (event) => {
                            let target = event.target;
                            if (target.closest('.close')) {
                                popup.style.visibility = 'hidden';
                            }
                        });
                    });
                    //обнуление инпутов формы
                    target.reset();
                })(); 
            }
        }
    });
};

export default sendForm;
