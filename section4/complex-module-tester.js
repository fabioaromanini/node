var complexModule = require('./complex-module');

complexModule.help();

console.log('Number of pages of the book Atlas Shrugged: ' + complexModule.pagesByBook.atlasShrugged);
console.log('Number of pages of the book The Fountainhead: ' + complexModule.pagesByBook.theFountainhead);
console.log('Number of pages of the book Prince of Thorns: ' + complexModule.pagesByBook.princeOfThorns);
