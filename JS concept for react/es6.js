const numbers = [83,15,98,12];
const student = {
    name:'Arham',
    age: 10,
    class:5
}

//1. Template string 
const about = ` Student name is ${student.name} age is ${student.age} read in class ${student.class} get marks in math ${numbers[2]}`
console.log(about);

// 2. Arrow Function

const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x,y,z) => x + y + z;
// multiline function 
// note: for multiline function you have to use return keyword 
const doMath = (num1,num2) =>{
    const sum = num1 + num2;
    return sum;
}

// 3. Spread operator

const newNumbers = [...numbers];
newNumbers.push(55);
numbers.push(92);

// Create an array from an older array and add an element

const currentNummbers = [...numbers, 70];


