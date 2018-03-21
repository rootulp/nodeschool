'use strict';

var promise = new Promise((fulfill) => {
    fulfill('PROMISE VALUE')
});

promise.then(console.log)

console.log('MAIN PROGRAM');
