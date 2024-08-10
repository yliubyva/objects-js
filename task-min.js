'use strict';

let vehicleInfo = {
    manufacturer: 'Volkswagen',
    model: 'CC/Passat CC',
    yearOfProdaction: '2010',
    averageSpeed: 80,
    fuelTankCapacity: 70,
    averageFuelConsumption: 10,
    drivers: '',

    showDisplayInfo() {
        alert(`Manufacturer: ${this.manufacturer}`);
        alert(`Model: ${this.model}`);
        alert(`Year of Prodaction: ${this.yearOfProdaction}`);
        alert(`Average Speed: ${this.averageSpeed}`);
        alert(`Fuel Tank Capacity: ${this.fuelTankCapacity}`);
        alert(`Average Fuel Consumption: ${this.averageFuelConsumption}`);
        alert(`Drivers: ${this.drivers || 'No drivers assigned'}`);
    },

    addNameDriver() {
        let name = prompt(`Введіть імʼя водія`);
        this.drivers = name;
        alert(`Drivers: ${this.drivers || 'No drivers assigned'}`);
    },

    checkNameDriver() {
        console.log('drivers' in vehicleInfo);
    },

    calcTimeAndFuel() {
        let distance;
        let requiredTime;
        let fuelConsumption;
        let calculated = false;

        function convToTime(time) {
            let hours = Math.floor(time);
            let minutes = Math.round((time - hours) * 60);
            if (minutes < 10) {
                minutes = `0` + minutes
            }
            return `${hours}` + `:` + `${minutes}`;
        }


        while (!calculated) {
            distance = Number(prompt(`Введіть потрібну відстань в км`));

            if (isNaN(distance) || distance <= 0) {
                alert(`Будь ласка, введіть коректні числа`);
            } else {
                let nonStopTime = distance / this.averageSpeed;
                let quantityStops = nonStopTime / 4;
                quantityStops = Math.floor(quantityStops);
                let timeAllStops = quantityStops * 1;
                requiredTime = nonStopTime + timeAllStops;
                fuelConsumption = distance * this.averageFuelConsumption / 100;

                calculated = true;
            }
        }
        
        let time = convToTime(requiredTime);

        return alert(`Для подолання відстані у ${distance}км автомобілем ${this.manufacturer} ${this.model}, Вам необхідно ${time}год та ${fuelConsumption}л палива`);

    },
};

vehicleInfo.showDisplayInfo();
vehicleInfo.addNameDriver();
vehicleInfo.checkNameDriver();
vehicleInfo.calcTimeAndFuel();