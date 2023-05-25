const subMenu = document.getElementsByClassName("menu menu_sub");
    
for(let i=0; i < subMenu.length; i++) {
    let link = subMenu[i].closest(".menu__item").querySelector(".menu__link");
        
    link.onclick = () => {
        if (subMenu[i].className == "menu menu_sub menu_active") {
            subMenu[i].className = "menu menu_sub";
        } else {subMenu[i].className += " menu_active";
        };
        return false;
    };
};