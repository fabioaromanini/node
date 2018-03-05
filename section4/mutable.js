var a = {
    firstMessage: 'Hello'
};
var b = a;
b.newMessage = 'Bye';

console.log(a.newMessage === undefined) // THIS IS FALSE

a = {
    thirdMessage: 'A new message!'
};

console.log(b.thirdMessage === undefined) // THIS IS TRUE
// The changes were not propagated to b, because the object pointed by a was not mutated, a was reassigned.
