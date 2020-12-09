'use strict';

export function fibonacci(nthFibonacciNumber: number) {
  if (nthFibonacciNumber === 0) {
    return 0;
  } else if (nthFibonacciNumber === 1) {
    return 1;
  } else {
    return fibonacci(nthFibonacciNumber - 1) + fibonacci(nthFibonacciNumber - 2);
  }
}
