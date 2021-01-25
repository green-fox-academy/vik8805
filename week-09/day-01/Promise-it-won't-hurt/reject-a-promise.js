'use strict';

let promise = new Promise((fulfill, reject) => {
  setTimeout(() => reject(new Error('REJECTED!')), 300);
  // Your solution here
});

function onReject (error) {
  // Your solution here
  console.log(error.message);
};

promise.then(null, onReject);
// Your solution here