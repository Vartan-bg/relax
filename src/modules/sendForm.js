const sendForm = () => {
    const body = document.getElementsByTagName('body')[0],
        popup = document.querySelector('.popup-thank');
    
    body.addEventListener('submit', (event) => {
        event.preventDefault();
        let target = event.target;
        if (target.tagName === 'FORM') {

            const formData = new FormData(target);
            let body = {};

            for (let val of formData.entries()) {
                body[val[0]] = val[1];
            }

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
                if (item.value.trim() === '' || item.value.match(/_/g)) {
                    item.style.cssText += 'border: 3px solid red';
                    error++;
                } else item.style.cssText += 'border: none';
            });

            if (error === 0) {
                (async ()=> {
                    await postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        popup.style.visibility = 'visible';

                        popup.addEventListener('click', (event) => {
                            let target = event.target;
                            if (target.closest('.close')) {
                                popup.style.visibility = 'hidden';
                            }
                        });
                    });
                    target.reset();

                })();
                
                
            }
        }
    });
};

export default sendForm;
