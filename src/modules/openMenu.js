const openMenu = () => {
    const body = document.querySelector('body'),
        menu = document.querySelector('.popup-dialog-menu'),
        popupMenu = document.querySelector('.popup-menu'),
        popupTypes = document.querySelector('.popup-repair-types'),
        privacy = document.querySelector('.popup-privacy');
    
    if (document.documentElement.clientWidth > 576) {
        menu.style.cssText += 'transform: translate3d(645px, 0, 0)';
    } else {
        menu.style.cssText += 'transform: translate3d(0, -2000px, 0)';
    }
    let width = document.documentElement.clientWidth;
    //изменение расположения меню в зависимости от ширины экрана
    window.addEventListener('resize', () => {
        width = document.documentElement.clientWidth;
        if (width > 576) {
            menu.style.cssText += 'transform: translate3d(645px, 0, 0)';
        } else {
            menu.style.cssText += 'transform: translate3d(0, -2000px, 0)';
        }
    });
    
    const toggleMenu = () => {
        //если меню закрыто - открыть
        if (popupMenu.style.visibility === 'hidden' || popupMenu.style.visibility === '') {
            menu.style.transition = '1s';
            popupMenu.style.visibility = 'visible';
            menu.style.visibility = 'visible';
            //всплытие окна
            menu.style.cssText += 'transform: translate3d(0, 0, 0)';

            //если меню открыто - закрыть
        } else if (popupMenu.style.visibility === 'visible'){
            popupMenu.style.visibility = 'hidden';
            menu.style.position = 'absolute';
            if (width > 576) {
                menu.style.cssText += 'transform: translate3d(645px, 0, 0)';
            } else {
                menu.style.cssText += 'transform: translate3d(0, -2000px, 0)';
            }
        }
    };

    body.addEventListener('click', (event) => {
        let target = event.target;
        //открытие меню
        if (target.closest('.menu') && !target.closest('.menu-phone-icon')) {
            toggleMenu();
            //закрытие меню
        } else if (target.closest('.close-menu')) {
            toggleMenu();
            //пункты в меню
        } else if ((target.closest('.menu-link') && !target.closest('.no-overflow'))) {
            menu.style.transition = '0s';
            toggleMenu();
            //плавная прокрутка
            let href = target.getAttribute('href').slice(1);
	        const targetElem = document.getElementById(href);
 
	        const elemPosition = targetElem.getBoundingClientRect().top;
            const offsetPosition = elemPosition;
            let i = 0;
            const int = setInterval(function () {
                window.scrollTo(0, i);
                i += 20;
                if (i >= offsetPosition) clearInterval(int);
            }, 1);
            
        }
        else if (target.closest('a') && (target.textContent.match('Полный список услуг и цен') || target.tagName.toLowerCase() === 'svg' || target.tagName.toLowerCase() === 'path')) {
            //открытие и закрытие popup с типами работ, с политикой конфиденциальности
            if (popupMenu.style.visibility === 'visible'){
            toggleMenu();
            }
            popupTypes.style.visibility = 'visible';
        } else if (target.closest('.close') && target.parentNode.classList.contains('popup-repair-types')) {
            popupTypes.style.visibility = 'hidden';
        } else if (target.classList.contains('link-privacy')) {
            privacy.style.visibility = 'visible';
        } else if (target.classList.contains('close') && target.parentNode.classList.contains('popup-privacy')) {
            privacy.style.visibility = 'hidden';
        }
    });
};

export default openMenu;