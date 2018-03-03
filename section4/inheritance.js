function Person(name) {
    if (name !== undefined) {
        this.name = name;
    } else {
        this.name = "Anonymous";
    }
    this.salute = function() {
        console.log("Hi!");
    };
}

var person1 = new Person();
person1.salute();

Person.prototype.safeGreet = function() {
    console.log("Hello, " + this.name);
};

Person.prototype.unsafeGreet = function() {
    console.log("Hello, " + name);
};

var name = "batata";
person1.safeGreet();
person1.unsafeGreet();
console.log(person1.__proto__);
console.log(person1);
