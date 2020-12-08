'use strict';
import { Reptile } from './reptile';
import { Mammal } from './mammal';
import { Bird } from './bird';

const reptile = new Reptile('Crocodile', 5, 'male');
const mammal = new Mammal('Koala', 2, 'female');
const bird = new Bird('Parrot', 7, 'female');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}.`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}.`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}.`);

console.log(`\r\n`);

console.log('What kind of animals are in the Zoo?');
console.log(`There is a ${reptile.getAge()} years old ${reptile.getGender()} ${reptile.getName()}. It's covered with ${reptile.getSkin()} and ${reptile.move()}.`);
console.log(`There is a ${mammal.getAge()} years old ${mammal.getGender()} ${mammal.getName()}. It's covered with ${mammal.getSkin()} and ${mammal.move()}.`);
console.log(`There is a ${bird.getAge()} years old ${bird.getGender()} ${bird.getName()}. It's covered with ${bird.getSkin()} and ${bird.move()}.`);
