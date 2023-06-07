const reveals = Array.from(document.getElementsByClassName('reveal'))
//console.log(reveals)

document.onscroll =() => {
    reveals.forEach ( (r) => {
        function IsVisible (el) {
            const {top,bottom} = el.getBoundingClientRect();
            if (bottom <0) {
                return false
            };
            if (top > window.innerHeight) {
                return false
            };
            return true;
        };
        
        if (IsVisible(r)) {
            r.className += " reveal_active"
        };
    });
};