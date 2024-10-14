// 1. Array Destructuring
// Note: In Array Destructuring index matter

const numbers = [42, 98];

// const [num1 ,num2] = [42, 98];
//or
const [num1 ,num2] = numbers;

console.log(num1,num2);

function boxify(n1,n2){
    const nums = [n1,n2];
    return nums;
}

const [first,second] = boxify(90,34);

// 2. Object Destructuring
// Note: In object Destructuring index doesn't matter

const {name,age} = {name:'Rahim' , age: 21};

const product = {
    productName:'Watch',
    price: 1000,
    color: {
        c1: 'Black',
        c2: 'Grey'
    }

}

const {productName , price} = product;

// optional chaining
// const {productName , price} = product?.color?.c1;
