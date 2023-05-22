//Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link
//Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active
//Запрещайте переход по ссылке для тех, 
//что имеют вложенное меню. Остальные пункты меню должны без помех переводить пользователя на соответствующие страницы.

const link = document.querySelectorAll('.menu__link');

for (let i = 0; i < link.length; i++) {  
    let parent2 = link[i].closest('ul');
    let child = link[i].closest("li").querySelector('ul');
    link[i].onclick = () => {
        if (parent2.className == "menu menu_main" && child.className == "menu menu_sub") {
            child.className += " menu_active";
            return false;
        };
    };      
};