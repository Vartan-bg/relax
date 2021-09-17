const modal = document.getElementById('modal'),
    form = document.querySelector('form'),
    modalHeader = modal.querySelector('.modal__header'),
    inputs = form.querySelectorAll('input'),
    saveBtn = document.querySelector('.button-ui_firm'),
    table = document.querySelector('#table'),
    addBtn = document.querySelector('.btn-addItem'),
    closeBtn = document.querySelector('.button__close'),
    cancelBtn = document.querySelector('.cancel-button'),
    bodyWrap = document.querySelector('body'),
    typeSelect = document.getElementById('typeItem'),
    tbody = document.getElementById('tbody');

// редирект на страницу авторизации если куки пустые
const redirect = () => {
    if (document.cookie === '') window.location.href = './index.html';
};
redirect();


const getData = () => fetch('http://localhost:3000/api/items');

const getDataTypes = (data) => {
    let typesArr = [];

    data.forEach(item => typesArr.push(item.type));

    typesArr = typesArr.filter((item, index) => typesArr.indexOf(item) == index);
    return typesArr;
};

const showData = (data, typeArr) => {
        
    tbody.innerHTML = '';

    // список селект
    typeArr.forEach(item => {
        typeSelect.insertAdjacentHTML('beforeend', `
        <option value="${item}">${item}</option>
        `);
    });

    // верстка таблицы 
    const tbodyLayout = (item) => {
        let units = item.units.replace(/\d/g, (a) => `<sup>${a}</sup>`);
        tbody.insertAdjacentHTML('beforeend', `
        <tr class="table__row">
          <td class="table__id table__cell">${item.id}</td>
          <td class="table-type table__cell">${item.type}</td>
          <td class="table-name table__cell">${item.name}</td>
          <td class="table-units table__cell">${units}</td>
          <td class="table-cost table__cell">${item.cost}</td>
          <td>
            <div class="table__actions table__cell">
              <button class="button action-change">
                <span class="svg_ui"
                  ><svg class="action-icon_change">
                    <use
                      xlink:href="./img/sprite.svg#change"
                    ></use></svg></span
                ><span>Изменить</span>
              </button>
              <button class="button action-remove">
                <span class="svg_ui"
                  ><svg class="action-icon_remove">
                    <use
                      xlink:href="./img/sprite.svg#remove"
                    ></use></svg></span
                ><span>Удалить</span>
              </button>
            </div>
            </td>
        </tr>
      `);
    };
    // данные в таблице
    data.forEach(item => tbodyLayout(item));

    // фильтрация по селекту
    typeSelect.addEventListener('change', () => {
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
        data.forEach(item => {
            if (item.type === typeSelect.value) tbodyLayout(item);
        });
        if (typeSelect.value === 'Все услуги') printTable();
    });
};

//отображение данных на странице
const printTable = () => {
    typeSelect.innerHTML = `<option value = 'Все услуги'>Все услуги</doption>`;

    getData()
        .then(resolve => resolve.json())
        .then(data => {
            let typeArr = getDataTypes(data);
            showData(data, typeArr);
        });
};
printTable();

//удаление пункта в базе
const deleteData = (id) => {
    return fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

//отслеживание удаления
table.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.action-remove')) {
        let id = target.closest('.table__row').children[0].textContent;
        (async () => {
            await deleteData(id).catch((err) => console.error(err));
            //рендер таблицы после удаления элемента
            printTable();
        })();
    }
});

//функция добавления элемента в базу данных
const postData = (body) => {
    return fetch('http://localhost:3000/api/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
};

//функция изменения элемента в базе данных
const changeData = (id, body) => {
    return fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
};

//обработчик события на изменение или удаление элемента в базе данных
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let target = event.target;
    let body = {};
    inputs.forEach((item) => {
        if (item.id === 'type') body.type = item.value;
        if (item.id === 'name') body.name = item.value;
        if (item.id === 'units') body.units = item.value;
        if (item.id === 'cost') body.cost = item.value;
    });

    if (modalHeader.textContent === 'Добавление новой услуги'){
            
        // вызов функции отправки
        (async () => {
            await postData(body)
                .then((response) => {
                    if (response.status == 422) {
                        validationError = document.createElement('div');
                        validationError.classList = 'error';
                        validationError.textContent = 'Введите корректные данные. Тип услуги - буквы, вид работ - буквы, ед.измерения - буквы и(или) цифры, цена - цирфы';
                        target.prepend(validationError);
                        throw new Error('Введите корректные данные');
                    }
                    if (target.children[0].classList.contains('error')) {
                        target.children[0].remove();
                    }
                    inputs.forEach(input => input.value = '');
                })
                .catch((err) => console.error(err));
                
                printTable();
        })();
    } else if (modalHeader.textContent === 'Изменение услуги') {
        //вызов функции изменения
        (async () => {
            await changeData(id, body)
                .then((response) => {
                    if (response.status == 422) {
                        validationError = document.createElement('div');
                        validationError.classList = 'error';
                        validationError.textContent = 'Введите корректные данные. Тип услуги - буквы, вид работ - буквы, ед.измерения - буквы и(или) цифры, цена - цирфы';
                        target.prepend(validationError);
                        throw new Error('Введите корректные данные');
                    }
                    if (target.children[0].classList.contains('error')) {
                        target.children[0].remove();
                    }
                    inputs.forEach(input => input.value = '');
                })
                .catch((err) => console.error(err));

            printTable();
        })();
    }
});
    



//  открытие/закрытие модального окна
const togglePopup = () => {

  //  открытие и закрытие  модального окна
    bodyWrap.addEventListener('click', (event) => {
        let target = event.target;
        //если нажали на "добавить услугу", появляется popup с добавлением услуги
        if (target.closest('.btn-addItem')) {
            modalHeader.textContent = 'Добавление новой услуги';
            modal.style.display = 'flex';
            //если нажали на изменение услуги, появляется popup с заполненными инпутами
        } else if (target.closest('.action-change')) {
            inputs.forEach((item) => {
                modalHeader.textContent = 'Изменение услуги';
                modal.style.display = 'flex';
                if (item.id === 'type') item.value = target.closest('.table__row').children[1].textContent;
                if (item.id === 'name') item.value = target.closest('.table__row').children[2].textContent;
                if (item.id === 'units') item.value = target.closest('.table__row').children[3].textContent;
                if (item.id === 'cost') item.value = target.closest('.table__row').children[4].textContent;
            });
            return (id = target.closest('.table__row').children[0].textContent);
        }
    
    });
    //закрытие popup, обнуление инпутов
    const closePopup = (event) => {
        event.preventDefault();
        modal.style.display = 'none';
        inputs.forEach((item) => {
            item.value = '';
        });
    };
  closeBtn.addEventListener('click',  closePopup);
  cancelBtn.addEventListener('click', closePopup);
};
togglePopup();