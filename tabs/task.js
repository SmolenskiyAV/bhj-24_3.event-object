// ### Task 3.1 ###

const tabItems = document.querySelectorAll('.tab'); // поиск элементов "вкладка"
const tabItemsLength = tabItems.length;

const tabContentItems = document.querySelectorAll('.tab__content'); // поиск элементов "содержимое вкладки"
const tabContentItemsLength = tabContentItems.length;

const tabsItem = document.querySelector('.tabs'); // поиск элемента, содержащего вкладки и контент

function changeTabParameters(tabNumber) {  // функция замены активной вкладки и её содержимого

    tabItems[tabNumber].classList.add('tab_active'); // открытие следующего слайда
    tabContentItems[tabNumber].classList.add('tab__content_active'); // активирование(подсветка) новой точки
        
};

for (let i =0; i < tabItemsLength; i++) { //цикл для обработки кликов по вкладкам

    tabItems[i].onclick = function (){ // обработка клика на любом элементе коллекции вкладок

        let activeTabNumber = [...tabItems].findIndex(item => item.classList.contains( 'tab_active')); //поиска номера элемента в коллекцци, к-му принадлежит открытая вкладка
        let activeContentNumber = [...tabContentItems].findIndex(item => item.classList.contains( 'tab__content_active')); // поиска номера элемента в коллекцци, к-му принадлежит открытый контент
                
       if ((tabItems[i]) && (i <= (tabContentItemsLength - 1))) { // определение элемента, по к-му произошёл клик + проверка соответвия количества владок количеству контентных блоков
        tabItems[activeTabNumber].classList.remove('tab_active'); // закрытие открытой вкладки
        tabContentItems[activeContentNumber].classList.remove('tab__content_active');   // скрыть содержимое открытой вкладки       
        changeTabParameters(i);
       } else {
            console.log('Ошибка! Количество контентных блоков не равно количеству вкладок!');
            return;
       };
    };
 };