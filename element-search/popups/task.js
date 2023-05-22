//В момент запуска скрипта, покажите окно #modal_main
//Для того, чтобы окно было активно (показывалось на странице), добавьте ему класс modal_active:
const main = document.getElementById("modal_main");
const success = document.getElementById("modal_success");

main.className += " modal_active";

//Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
//Элементы с классом modal__close предназначены для закрытия активного окна.
const close = document.getElementsByClassName("modal__close_times");

for ( let i=0; i < close.length; i++) {
    close[i].onclick = () => {
        main.className = "modal";
        success.className = "modal";
    };
};

//По нажатию на элемент с классом show-success покажите окно #modal_success
const show = document.getElementsByClassName("show-success");


show[0].onclick = () => {
    main.className = "modal";
    success.className += " modal_active";
    };
