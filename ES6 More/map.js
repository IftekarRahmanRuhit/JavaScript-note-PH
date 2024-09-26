// map ==> Loops through each element of the array and do the operation that you passed in the call back function and hold the result from the each operation in an array and finally returns you the array.

const numbers = [5,8,9,4];

function doubleIt(num) {
    return num * 2;
}
const reuslt = numbers.map(doubleIt);

// using arrow function 
const doubleIt2 = n => n*2;
const output = numbers.map(doubleIt2);
console.log(output);

// more shorter 

const output2 = numbers.map(n => n * 2);
console.log(output2);

const friends = ['Tom','Jhon','Ron'];
const length = friends.map(frnd => frnd.length);
console.log(length);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);