function Person(name) {
    this.name = name;
}

/*Access prototype function*/
console.log(Person.prototype)


var optimus = new Person("Optimus");
var prime = new Person("Prime");

console.log(`optimus.__proto__ === Person.prototype => ${optimus.__proto__ === Person.prototype}`);
console.log(`prime.__proto__ === Person.prototype => ${prime.__proto__ === Person.prototype}`);