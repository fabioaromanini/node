# node
Repository to store everything I'm learning on the course https://www.udemy.com/understand-nodejs/learn/v4/overview.

### Section 2:

V8 is an opensource Javascript Engine (turns Javascript code into machine language), built to power Google Chrome.
It's written in C++, and is easily integrated into other C++ programs.
Follows ECMASCRIPT standard.

### Section 3:

Nodejs is an opensorce Javascript Runtime (executes javascript code), built upon V8. As V8, Nodejs is also written in C++, but it also haves js code. It's aimed to suport servers, so it adds functionalities to Javascript, like:
- Deals with files
- Connects with database
- Communicate over the internet
- Accepts requests and send responses.

### Section 4:

- Functions are first-class, so you can assign them to variables, pass as arguments, etc.
- Modules are pieces of code that does not impact other pieces of code in a program. Ecmascript 6 support modules, but before it, javascript didn't had an official way to set them. Nodejs introduced modules into js, following a pattern called 'commonjs', which was a very used workaround.
- Objects in javascript are just a name-value pair. They can be described like an object literal, which is a list of 0 or more name-value pairs, surrounded by curly brackets. Name-pair values can be nested, it is, a value can be another name-pair value.
