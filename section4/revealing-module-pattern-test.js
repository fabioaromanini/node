var comunicator = require('./revealing-module-pattern');

comunicator.showMessage();
comunicator.editMessage('this is new greet');
comunicator.showMessage();