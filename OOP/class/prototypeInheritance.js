function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHi = function () {
    return `Hello ${this.firstName} ${this.lastName}`;
}

function Student(firstName, lastName) {
    return Person.apply(this, arguments);
}

Student.prototype.sayHi = function () {
    return `Hello ${this.firstName} ${this.lastName}`;
}

/*Way to use sayHi() in the person method*/

function Person_1(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person_1.prototype.sayHi = function () {
    return `Hello ${this.firstName} ${this.lastName}`;
}

function Student_1(firstName, lastName) {
    return Person_1.apply(this, arguments);
}

Student_1.prototype = Object.create(Person_1.prototype);

Student_1.prototype.constructor = Student_1;

var person_1 = new Person_1("Optimus", "Prime");
console.log(person_1.sayHi());

var student_1 = new Student_1("Optimus_student", "Prime_student");
console.log(student_1.sayHi());
