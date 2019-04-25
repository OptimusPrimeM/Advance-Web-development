function Person(name) {
    this.name = name;
    this.sayHi = function () {
        return `Hi ${this.name}`;
    }
}

let optimus = new Person("Optimus");
console.log(optimus.sayHi());

/*Best way to implement*/

function Person_1(name) {
    this.name = name;
}

Person_1.prototype.sayHi = function () {
    return `Hi ${this.name}`;
}


let prime = new Person_1("Prime");
console.log(prime.sayHi());
