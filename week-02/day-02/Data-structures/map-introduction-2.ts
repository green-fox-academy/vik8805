'use strict';

//  Create a map where the keys are strings and the values are strings with the following initial values
//    Key	                Value
//    978-1-60309-452-8	  A Letter to Jo
//    978-1-60309-459-7	  Lupus
//    978-1-60309-444-3	  Red Panda and Moon Bear
//    978-1-60309-461-0	  The Lab
let map2: object = {
  '978-1-60309-452-8': 'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moon Bear',
  '978-1-60309-461-0': 'The Lab'
};

//  Print all the key-value pairs in the following format
//    A Letter to Jo (ISBN: 978-1-60309-452-8)
//    Lupus (ISBN: 978-1-60309-459-7)
//    Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
//    The Lab (ISBN: 978-1-60309-461-0)
for (let key in map2) {
  console.log(`${map2[key]} (ISBN: ${key})`);
};

//  Remove the key-value pair with key 978-1-60309-444-3
delete map2['978-1-60309-444-3'];

//  Remove the key-value pair with value The Lab
for (let key in map2) {
  if (map2[key] === 'The Lab')
  delete map2[key];
};

//  Add the following key-value pairs to the map
//    Key	                Value
//    978-1-60309-450-4	  They Called Us Enemy
//    978-1-60309-453-5	  Why Did We Trust Him?
map2['978-1-60309-450-4'] = 'They Called Us Enemy';
map2['978-1-60309-453-5'] = 'Why Did We Trust Him?';

//  Print whether there is an associated value with key 478-0-61159-424-8 or not
let check: boolean = false;
for (let key in map2) {
  if (key === '478-0-61159-424-8') {
    check = true;  
  };
};

if (check) {
  if (map2['478-0-61159-424-8']) {
    console.log(`\r\nKey 478-0-61159-424-8's value is ${map2['478-0-61159-424-8']}`);
  } else {
    console.log(`\r\nKey 478-0-61159-424-8 of map2 is without a value!`);
  };
} else {
  console.log(`\r\nKey 478-0-61159-424-8 doesn't exist!`);
};

//  Print the value associated with key 978-1-60309-453-5
console.log(`\r\nKey 978-1-60309-453-5's value is ${map2['978-1-60309-453-5']}`);