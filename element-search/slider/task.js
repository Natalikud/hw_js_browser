//коллекция слайдов {массив}
const sliders = document.getElementsByClassName('slider__item');

//коллекция кнопок - влево, вправо {массив}
const navigations = document.getElementsByClassName('slider__arrow');
//кнопки
const prev = navigations[0];
const next = navigations[1];

//сохранить в переменную номер активного слайда 
//( при смене слайда, значение будет меняться)
const number = function() {
    for (i=0; i < sliders.length; i++) {
        if (sliders[i].className.includes('slider__item slider__item_active')) {
            return i;
        };
    };
};

function slider(index) {
    for (let i=0; i < sliders.length; i++) {
        sliders[i].className = 'slider__item';
    };
    sliders[index].className += ' slider__item_active';
};
slider(0);

//обработчик событий на кнопки
prev.onclick = () => {
    let id = number();
    if (id  == 0) {
        id = sliders.length -1;
    } else {
        id -= 1
    };
    slider(id);
};

next.onclick = () => {
    let id = number();
    if (id  == sliders.length -1) {
        id = 0;
    } else {
        id +=1
    };
    slider(id);
};