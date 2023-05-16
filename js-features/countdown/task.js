
const timer = document.getElementById('timer')


const play = setInterval( () => {
            timer.textContent = Number(timer.textContent)-1;
            if (timer.textContent <1) {
                clearInterval(play);
                alert('Вы победили в конкурсе!')
            }    
        },1000)
