'use strict';

let a: number = 3;
console.log('a =', a);
// make it bigger by 10
a += 10;
console.log('after I made a bigger by 10: a =', a);

let b: number = 100;
console.log('b =', b);
// make it smaller by 7
b -= 7;
console.log('after I made b smaller by 7: b =', b);

let c: number = 44;
console.log('c =', c);
// double c's value
c *= 2;
console.log('after I double c\'s value: c =', c);

let d: number = 125;
console.log('d =', d);
// divide d's value by 5
d /= 5;
console.log('after I divided d\'s value by 5: d =', d);

let e: number = 8;
console.log('e =', e);
// what's the cube of e's value?
e **= 3;
console.log('the cube of e\'s value: e =', e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
console.log('Is', f1, 'bigger than', f2, '?:', f1 > f2);

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (as a boolean)
console.log('Is', g2, '* 2 bigger than', g1, '?:', g2 * 2 > g1);

let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
console.log('Is 11 a divisor of', h, '?:', h % 11 === 0);

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
console.log('Is', i1, 'higher than', i2, 'squared and smaller than', i2, 'cubed?:', i2 ** 3 > i1 && i1 > i2 ** 2);

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
console.log('Is', j, 'divisible by 3 or 5 ?:', j % 3 === 0 || j % 5 === 0);