// ### Task 3.1 ###

const dropdown = document.querySelector('.dropdown');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLinks = document.querySelectorAll('.dropdown__link');

let selectedDropdownValue = dropdownValue.innerHTML;
console.log(selectedDropdownValue);



function operateSubMenu(event) {
    elem = event.target;
    
    if ((dropdownList.classList.contains("dropdown__list_active")) && (!elem.classList.contains("dropdown__item"))) { // если подменю уже открыто и клик производится только по верхней(ранее выбранной) части
        dropdownList.classList.remove("dropdown__list_active"); // закрываем открытое подменю без изменений
       
    } else {
        dropdownList.classList.add("dropdown__list_active");  // открываем подменю
    };
};



for (i = 0; i < dropdownLinks.length; i++) {   // присвоение onclick-события элементам dropdownItems через цикл       
    
    (function(n) {
        dropdownLinks[n].onclick = function (){

            if (dropdownLinks[n]) {  

                selectedDropdownValue = dropdownLinks[n].innerHTML; // извлекаем текстовое значение из выбранного элемента и помещаем в переменную
                dropdownValue.textContent = selectedDropdownValue;    //производим замену значения по выбору пункта меню
                
                 console.log(dropdownValue.textContent);            
                return false;                                  // Запрещаем переход по ссылке для тех пунктов, что имеют вложенное подменю
            }; 

            dropdownList.classList.remove("dropdown__list_active"); // закрываем открытое подменю                             // Запрещаем переход по ссылке для тех пунктов, что имеют вложенное подменю
        };
    }(i));
 }

 dropdown.addEventListener('click', operateSubMenu)  // обработка события клика на элемент dropdown (открыть/закрыть подменю)