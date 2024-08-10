'use strict';

let time = {
    hours: 20,
    minutes: 59,
    seconds: 45,

    showTime() {
        alert(
            `${this.hours}` +
            `год ` +
            `${this.minutes}` +
            `хв ` +
            `${this.seconds}` +
            `сек`,
        );
    },

    changeSeconds(secValue) {
        this.seconds += secValue;
        if (this.seconds >= 60) {
            let fractionalValue = this.seconds / 60;
            this.minutes += Math.floor(fractionalValue);
            this.seconds = Math.round((fractionalValue - Math.floor(fractionalValue)) * 60);
        }        
    },

    changeMinutes(minValue) {
        this.minutes += minValue;
        if (this.minutes >= 60) {
            let fractionalValue = this.minutes / 60;
            this.hours += Math.floor(fractionalValue);
            this.minutes = Math.round((fractionalValue - Math.floor(fractionalValue)) * 60);
        } 
    },

    changeHours(hourValue) {
        this.hours += hourValue;
    },

    changeTime() {
        let addSec;
        let addMin;
        let addHour;
        let added = false;
        while (!added) {
            addSec = Number(prompt(`Додати секунди`));
            addMin = Number(prompt(`Додати хвилини`));
            addHour = Number(prompt(`Додати години`));

            if (isNaN(addSec) || isNaN(addMin) || isNaN(addHour)) {
                alert(`Введіть корректні числа. Наприклад: 45`);
            } else {
                this.changeSeconds(addSec);
                this.changeMinutes(addMin);
                this.changeHours(addHour);
                added = true;
            }
        }
    },
};

time.showTime();
let message = confirm(`Бажаєте змінити час?`);
if (message === true) {
    time.changeTime();
    time.showTime();
}


