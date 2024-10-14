// 1. How to declare a variable using let and const
const fatherName = 'Arnolad'
let season = 'winter';
season = 'winter';

// 2. Conditions
// 6 basic condition > , < , === , !== , <= , >= 
// multiple conditions: && , || 

if(fatherName == 'Arnolad' || season == 'rainy'){

}
else{

}

//3. Array
// index, Length, Push , setting value using index

const numbers = [83,15,98,12];
numbers[0] = 55;

// 4. for loop

// 5. Function 

function multiply(num1,num2){
    const result = num1* num2;
    return result;
}
const output = multiply(20,10);
console.log(output);

// 6. Object
// 3 ways to access property 
const student = {
    name:'Arham',
    age: 10,
    class:5
}

const myVariable = 'age';

console.log(student.age); // access direct by property
console.log(student['age']); // access vai property name string
console.log(student[myVariable]); // access via property name in variable