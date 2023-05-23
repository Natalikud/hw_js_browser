const button = document.querySelector(".dropdown");
const value = document.querySelector(".dropdown__value");
const menu = document.querySelector("ul");
const links = Array.from(document.querySelectorAll("li"));


function open() {    
    if (menu.className == 'dropdown__list') {
        menu.className += ' dropdown__list_active';     
    } else {menu.className = 'dropdown__list'};
};
button.addEventListener('click', open);


links.forEach( (li) => {
    li.onclick =() => {
        //li.parentElement.className.remove(' dropdown__list_active');
        //menu.className.remove(' dropdown__list_active');
        value.textContent = li.textContent;
        return false;
    };
});

