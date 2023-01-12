// The map method takes a callback function that is called on each element in the array.
// The callback should return the new value for the element.
// The map method returns a new array with the updated values.

const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers); // [2, 4, 6, 8, 10]

const stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers); // ['1', '2', '3', '4', '5']

// The filter method takes a callback function that is called on each element in the array.
// The callback should return a boolean value indicating whether to include the element in the new array.
// The filter method returns a new array with only the elements for which the callback returned true.

const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5]

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// The reduce method takes a callback function that is called on each element in the array,
// as well as an optional initial value for the accumulator.
// The callback should return the updated accumulator value.
// The reduce method returns a single value that is the result of the reduction.

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product); // 120