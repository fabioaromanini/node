console.log("module1.js is being exported...");

// exporting a function expression

// var module1_function = function(name) {
//     console.log("hello, " + name + "!");
// };

// module.exports = module1_function;

// exporting a function

function module1_function(name) {
    console.log("hello, " + name + "!");    
}

module.exports = module1_function;
