'use strict';

let promise = new Promise(function (fulfill, reject) {
  // Your solution here
  setTimeout(() => fulfill('FULFILLED!'), 300);
});

// Your solution here
promise.then((response) => {
  console.log(response);
});