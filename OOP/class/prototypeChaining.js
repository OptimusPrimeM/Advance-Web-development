function Person(name) {
    this.name = name;
}

var optimus = new Person("Optimus");
var prime = new Person("Prime");

Person.prototype.isAutobots = true;

console.log(`optimus.isAutobots = ${optimus.isAutobots}`);
console.log(`prime.isAutobots = ${prime.isAutobots}`);

/*Prototype chaining*/

let arr = new Array;

console.log(arr.push(10));

/*Find this push() location*/
console.dir(arr);

console.log(arr.hasOwnProperty(length));

