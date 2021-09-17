const tBody = () => {
    const table = document.querySelector('.popup-repair-types-content-table'),
        navList = document.querySelector('.nav-list-popup-repair'),
        navListMobile = document.querySelector('.popup-repair-types-tab'),
        popupTitle = document.querySelector('.popup-repair-types-content__head-title'),
        popup = document.querySelector('.popup-repair-types');
    table.innerHTML = '';
    navList.innerHTML = '';
    const getData = async () => {
    // путь к запросу
    const data = await fetch('http://localhost:3000/api/items');
        if (data.ok) {
            return data.json();
        } else {
            // вызов сообщения об ошибке
            throw new Error(`Данные небыли получены, ошибка ${data.status} ${data.statusText}`);
        }
    };
    getData()
        .then(data => {
            let obj = new Map();
            data.forEach((item) => {
                obj.set(item.type);
            });
            [...obj.keys()].forEach((elem) => {
                let tableList = document.createElement('div');
                tableList.classList.add('popup-repair-types-content-table__list');
                let tBody = document.createElement('tbody');
                let typeButton = document.createElement('button');
                typeButton.classList = 'button_o popup-repair-types-nav__item';
                typeButton.textContent = elem;
                navList.append(typeButton);

                data.forEach((item) => {
                    if (item.type === elem) {
                        let tr = document.createElement('tr');
                        tr.classList.add('mobile-row');
                        let unit = item.units.replace(/\d/, (a) => `<sup>${a}</sup>`);
                        tr.innerHTML = `
                        <td class="repair-types-name">${item.name}</td>
									<td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
									<td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
									<td class="repair-types-value">${unit}</td>
									<td class="repair-types-value">${item.cost} руб.</td>
                        `;
                        tBody.append(tr);
                    }
                });
                tBody.children[0].classList.add('showHide');
                tableList.append(tBody);
                table.append(tableList);
            });
             if (document.documentElement.clientWidth <= 1024){
                [...navList.children].forEach((item, index) => {
                    if (index !== 0) item.style.display = 'none';
                    else item.style.display = 'inline';
                });
            }
            
        })
        .catch(err => { console.error(err); });
    
    
    if (document.documentElement.clientWidth > 1024) {
        navList.addEventListener('click', (event) => {
            let target = event.target;

            if (target.closest('.popup-repair-types-nav__item')) {
                [...table.children].forEach((item) => {
                    item.style.display = 'none';
                });

                [...navList.children].forEach((item, index) => {
                    item.classList.remove('active');
                    if (item === target) {
                        target.classList.add('active');
                        table.children[index].style.display = 'block';
                    }
                });
                popupTitle.textContent = target.textContent;
            }
        });
    }else {
        navListMobile.addEventListener('click', (event) => {
            let target = event.target;
            let count = 0;
            if (target.closest('#nav-arrow-popup-repair_left')) {
                [...navList.children].forEach((item) => {
                    if (count === 0) {
                        if (item.style.display === 'inline') {
                            item.style.display = 'none';
                            if (item.previousElementSibling) {
                                item.previousElementSibling.style.display = 'inline';
                                count++;
                            } else {
                                navList.children[navList.children.length - 1].style.display = 'inline';
                                count++;
                            }
                        }
                    }
                });
            } else if (target.closest('#nav-arrow-popup-repair_right')) {
                [...navList.children].forEach((item) => {
                    if (count === 0) {
                        if (item.style.display === 'inline') {
                            item.style.display = 'none';
                            if (item.nextElementSibling) {
                                item.nextElementSibling.style.display = 'inline';
                                count++;
                            } else {
                                navList.children[0].style.display = 'inline';
                                count++;
                            }
                        }
                    }
                });
            }
            [...navList.children].forEach((item, index) => {
                if (item.style.display === 'inline') {
                    popupTitle.textContent = item.textContent;
                    [...table.children].forEach((item) => {
                        item.style.display = 'none';
                    });
                    table.children[index].style.display = 'block';
                }
            });
            
        });
    }
};

export default tBody;