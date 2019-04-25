function Vehicle(make, model, year) {

    this.model = model;
    this.make = make;
    this.year = year;
    this.isRunning = false;

}

Vehicle.prototype.turnOn = function () {
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function () {
    this.isRunning = false;
}


Vehicle.prototype.honk = function () {
    return (this.isRunning) ? "beep" : "";
}