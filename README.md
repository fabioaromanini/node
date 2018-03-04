# node
Repository to store everything I'm learning on the course https://www.udemy.com/understand-nodejs/learn/v4/overview.

### Section 2:

V8 is an opensource Javascript Engine (turns Javascript code into machine language), built to power Google Chrome.
It's written in C++, and is easily integrated into other C++ programs.
Follows ECMASCRIPT standard.

### Section 3:

Nodejs is an opensorce Javascript Runtime (executes javascript code), built upon V8. As V8, Nodejs is also written in C++, but it also haves js code. It's aimed to suport servers, so it adds functionalities to Javascript, like:
* Deals with files
* Connects with database
* Communicate over the internet
* Accepts requests and send responses.

### Section 4:

* Functions are first-class, so you can assign them to variables, pass as arguments, etc.
* Modules are pieces of code that does not impact other pieces of code in a program. Ecmascript 6 support modules, but before it, javascript didn't had an official way to set them. Nodejs introduced modules into js, following a pattern called 'commonjs', which was a very used workaround.
* Objects in javascript are just a name-value pair. They can be described like an object literal, which is a list of 0 or more name-value pairs, surrounded by curly brackets. Name-pair values can be nested, it is, a value can be another name-pair value.
* Inheritance on javascript is based on prototypes. ES6 introduces the class keyword, but before that, only prototypes were used. Prototypes may be chained, and once a object a is a prototype of object b, a's properties may be accessed through b, like b.aProperty.
    * Js also provides function constructors, which are normal functions that are used to create new objects. The difference is that if this function is called after the "new" keyword, it will return a newly created object, and enable the "this" keyword to be used. Function constructors won't add anything to the prototype of an object, it will merely create a pattern for the objects "instatiated" using the constructor. You can also add name-value pairs to the prototype using FunctionConstructor.prototype.
* Primitive types are passed to functions by value, in other words, a copy of the value is passed to the function. When dealing with objects however, we pass a reference, a pointer to the adress of the object in the memory. Unless, of course, you make a copy of this object! 
* When a module is required, node will verify if the module was already loaded during the execution of the application. If not, node will wrap the content of the module into a function, so that everything the module does is kept INSIDE the scope of the function, assuring that it won't harm code from another module. Once the wrapper is set, node will create an new object called 'module', and the wrapper function will be compiled by V8, and be called with this 'module' as a parameter. When the function is called, it will modify the module object, assigning values to it's exports property (hence the module.exports assignment on each module), because OBJECTS ARE PASSED BY REFERENCE! Finally, the require function will return module.exports, assigning it to a var that you can safely use inside your application.
