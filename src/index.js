
import numberOpacity from './modules/numberOpacity';
import openMenu from './modules/openMenu';
import showTips from './modules/showTips';
import phoneMask from './modules/phoneMask';
import repairTypes from './modules/repairTypes';
import portfolio from './modules/portfolio';
import portfolioSlider from './modules/portfolioSlider';
import transparency from './modules/transparency';
import consultation from './modules/consultation';
import reviews from './modules/reviews';
import faq from './modules/faq';
import tBody from './modules/tBody';
import sendForm from './modules/sendForm';
//номер телефона в header
numberOpacity();

//меню, плавная прокрутка
openMenu();

//всплытие подсказок при наведении, слайдер элементов при маленьком разрешении
showTips();

//маска для инпутов с телефоном
phoneMask();

//слайдер виды ремонта
repairTypes();

//слайдер портфолио в popup
portfolio();

//слайдер портфолио на странице
portfolioSlider();

//документы
transparency();

//popup консультация
consultation();

//слайдер отзывы
reviews();

//аккордеон
faq();

//инфо для repairTypes
tBody();

//отправка формы
sendForm();