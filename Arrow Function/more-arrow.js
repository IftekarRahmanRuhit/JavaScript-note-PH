const difference = (x,y) => x-y;
// single parameter 
const getAge = (person) => person.age;
const student = {name : 'Ruhit',age: 21};
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5,9,88,2,13]);
console.log(third);

// no parameter

const getPI = () => Math.PI;
console.log(getPI());

// large arrow function if you want to get anything from this function, then you have to return keyword .

const doMath = (x,y,z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}
