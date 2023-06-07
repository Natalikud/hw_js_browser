const cases = Array.from(document.querySelectorAll('.rotator__case'));
const active = setInterval(() => {
    let activeIndex = cases.findIndex(el => el.classList.contains('rotator__case_active'));
    cases[activeIndex].classList.remove('rotator__case_active');
    activeIndex++;
    if (activeIndex > cases.length - 1) {
        activeIndex = 0;
    }
    cases[activeIndex].classList.add('rotator__case_active');
}, 1000);