counter = 0;

// basic declaration
function updateCounter() {
    counter += 1;
    return counter;
}

function greet() {
    console.log("hello!");
    console.log(updateCounter());
}

// basic invoke
greet();

// variable assignment
var func = greet;
func();

// passing as parameter
function helper(arg) {
    arg();
}
helper(greet);

// function expression
var greet2 = function(name) {
    console.log("Hello " + (name == undefined ? "anonymous!" : name));
    console.log(updateCounter());
}

greet2("Fabio");
helper(greet2);

// function "on the fly"
helper(function () {
    console.log("on the fly!");
    console.log(updateCounter());
})