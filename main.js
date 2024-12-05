let days = 8;
let hours = 23;
let minutes = 1;
let seconds = 3;

const day = document.querySelector(`.day`);
const hour = document.querySelector(`.hour`);
const minute = document.querySelector(`.minute`);
const second = document.querySelector(`.second`);

const dayRoll = document.querySelector(`#day`);
const hourRoll = document.querySelector(`#hour`);
const minuteRoll = document.querySelector(`#minute`);
const secondRoll = document.querySelector(`#second`);

setInterval(() => {
    while(days > 0 || hours > 0 || minutes > 0 || seconds > 0){
        seconds--;
        addClassForOneSecond(secondRoll, `roll`);
        if(seconds < 0){
            seconds = 59;
            minutes--;
            addClassForOneSecond(minuteRoll, `roll`);
            if(minutes < 0){
                minutes = 59;
                hours--;
                addClassForOneSecond(hourRoll, `roll`);
                if(hours < 0){
                    hours = 23;
                    days--;
                    addClassForOneSecond(dayRoll, `roll`);
                }
            }
        }

        day.textContent = days;
        hour.textContent = hours;
        minute.textContent = minutes;
        second.textContent = seconds;
        sleep(1000);
    }
}, 1000);

function addClassForOneSecond(element, className) {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
    }, 900);
}