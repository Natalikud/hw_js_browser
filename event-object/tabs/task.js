const tabs = Array.from(document.getElementsByClassName('tab'));
const tabsContent = Array.from(document.getElementsByClassName('tab__content'));
console.log(tabs)


for (let i=0; i< tabs.length;i++) {
    tabs[i].onclick = () => {
        activeTabIndex = tabs.indexOf(document.querySelector('.tab_active'));

        if (tabs[i].className != 'tab tab_active') {           
            tabs[i].classList.add('tab_active');
            tabs[activeTabIndex].classList.remove('tab_active');

            tabsContent[i].classList.add('tab__content_active');
            tabsContent[activeTabIndex].classList.remove('tab__content_active');

        };
    };
};