//функция заполнения таблицы "все виды работ"
const tBody = () => {
    const table = document.querySelector('.popup-repair-types-content-table'),
        navList = document.querySelector('.nav-list-popup-repair'),
        navListMobile = document.querySelector('.popup-repair-types-tab'),
        popupTitle = document.querySelector('.popup-repair-types-content__head-title');
    //обнуление существующей вёрстки 
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
    //получение данных с сервера
    getData()
        .then(data => {
            let obj = new Map();
            data.forEach((item) => {
                //внесение всех видов работ в массив
                obj.set(item.type);
            });
            //для каждого из представленных видов работ
            [...obj.keys()].forEach((elem) => {
                //создать элемент div с классом popup-repair-types-content-table__list
                let tableList = document.createElement('div');
                tableList.classList.add('popup-repair-types-content-table__list');
                //создать элемент tbody
                let tBody = document.createElement('tbody');
                //создать кнопку для переключения видов работ
                let typeButton = document.createElement('button');
                typeButton.classList = 'button_o popup-repair-types-nav__item';
                //содержание кнопки - название вида работ
                typeButton.textContent = elem;
                navList.append(typeButton);

                //для каждого элемента из базы данных
                data.forEach((item) => {
                    //если его тип совпадает с одним из типов из массива obj.keys() 
                    if (item.type === elem) {
                        //создать элемент tr
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
                        //вставить все элементы tr в tBody, соответствующий типу работ
                        tBody.append(tr);
                    }
                });
                tBody.children[0].classList.add('showHide');
                tableList.append(tBody);
                table.append(tableList);
            });
            //если ширина экрана клиента меньше 1024, спрятать все кнопки кроме первой
             if (document.documentElement.clientWidth <= 1024){
                [...navList.children].forEach((item, index) => {
                    if (index !== 0) item.style.display = 'none';
                    else item.style.display = 'inline';
                });
            }
            
        })
        .catch(err => { console.error(err); });
    
    //если ширина экрана клиента больше 1024
    if (document.documentElement.clientWidth > 1024) {
        navList.addEventListener('click', (event) => {
            let target = event.target;
            //фильтрация типов работ при нажатии на кнопку
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
        //если ширина экрана меньше либо равна 1024
    }else {
        navListMobile.addEventListener('click', (event) => {
            let target = event.target;
            let count = 0;
            //переключение типов работ по кнопкам вправо и влево
            //кнопка влево
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
                //кнопка вправо
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
            //после каждого нажатия на стрелку, изменять title видов работ
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