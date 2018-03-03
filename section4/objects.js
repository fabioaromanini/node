// describing an object like an object literal, where motor is a nested object
var car = {
    model: 'Fusca',
    color: 'Blue',
    engine: {
        type: 'Electric',
        speed: 2400
    },
    accelerate: function() {
        console.log('vruuum');
    }
};

// conventional access
console.log(car.model);

// array-like access
console.log(car['model']);
var propertyIWantToAcess = 'color';
console.log(car[propertyIWantToAcess]);

// nested access
console.log(car['engine']['speed']);
console.log(car['engine']['speed'] === car.engine.speed);
