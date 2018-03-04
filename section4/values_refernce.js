function changeValue(a) {
    a = "Potato";
}

var test = "Rice";
changeValue(test);
console.log(test); // test is still "Rice", because it is a primitive!

function changeObj(a) {
    a.trueValue =  "I have no value at all";
}

test = {
    trueValue: "I have a value!"
};

changeObj(test);
console.log(test); // now test has changed, because it is an object, and objects are passed by reference!

test.trueValue = "Once again, I have value!";
changeObj(Object.assign({}, test));
console.log(test); // now test hasn't changed, because a copy was passed to the function!
