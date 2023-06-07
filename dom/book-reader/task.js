const sizeButtons = Array.from(document.getElementsByClassName('font-size'))
console.log(sizeButtons[0])
const bookSize = document.getElementById('book')

for (let i=0; i<sizeButtons.length; i++) {
    sizeButtons[i].onclick = (() => {
        function active(el) {
            return el.classList.contains('font-size_active')
        }
        const activeIndex = sizeButtons.findIndex(active)

        if (sizeButtons[i].className == 'font-size font-size_small') {
            sizeButtons[activeIndex].classList.remove('font-size_active');
            sizeButtons[i].classList.add('font-size_active');
            bookSize.className = 'book book_fs-small'
        };
        
        if (sizeButtons[i].className == 'font-size font-size_big') {
            sizeButtons[activeIndex].classList.remove('font-size_active');
            sizeButtons[i].classList.add('font-size_active');
            bookSize.className = 'book book_fs-big'
        };
        
        if (sizeButtons[i].className == 'font-size') {
            sizeButtons[activeIndex].classList.remove('font-size_active');
            sizeButtons[i].classList.add('font-size_active');
            bookSize.className = "book"
        };
        return false;
    });
};