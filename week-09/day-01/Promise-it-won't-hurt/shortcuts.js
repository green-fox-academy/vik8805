'use strict';

let resolvedPromise = Promise.resolve('RESOLVED!');
let rejectedPromise = Promise.reject(new Error('REJECTED!'));

resolvedPromise.then((result) => console.log(result));

rejectedPromise.catch((error) => console.log(error.message));