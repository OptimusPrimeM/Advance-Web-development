/*Constructor function with code duplication*/

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numberOfWheels = 4;
}

function Motorcycle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numberOfWheels = 4;
}

/*Refactoring above function with multiple constructors */

/* Using call()*/
function Car_1(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numberOfWheels = 4;
}

function Motorcycle_1(make, model, year) {
    Car_1.call(this, make, model, year);
    this.numberOfWheels = 2;
}



var benz = new Car_1("Benz", "Benz-class S", 2017);
var ducati = new Motorcycle_1("Benz", "Ducati S", 2013);


console.log(benz);
console.log(ducati);



/* Using apply()*/
function Car_2(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numberOfWheels = 4;
}

function Motorcycle_2(make, model, year) {
    Car_1.apply(this, [make, model, year]);
    this.numberOfWheels = 2;
}

var benz_1 = new Car_2("Benz", "Benz-class S", 2017);
var ducati_1 = new Motorcycle_2("Benz", "Ducati S", 2013);


console.log(benz_1);
console.log(ducati_1);


/*Using argument*/
function Truck() {
    Car_1.apply(this, arguments);
    this.numberOfWheels = 2;
}

var benz_truck = new Truck("Benz_truck", "Benz-class S", 2021);
console.log(benz_truck);

