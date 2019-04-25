function Vehicle(make, model, year) {
    this.year = year;
    this.model = model;
    this.make = make;
}

Vehicle.prototype.start = function () {
    return "VROOM!";
}

Vehicle.prototype.toString = function () {
    return
    ` Make = ${this.make},
     Model =${this.model},
     Year =${this.year}
    `;
}


function Car(make, model, year) {
    Vehicle.apply(this, arguments);
    this.numWheels= 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;


function Motorcycle(make, model, year) {
    Vehicle.apply(this, arguments);
    this.numWheels= 2;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

