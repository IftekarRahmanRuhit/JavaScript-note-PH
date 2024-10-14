// 1. JSON (stringify, parse)

const product = {
    productName:'Watch',
    price: 1000,
    color: {
        c1: 'Black',
        c2: 'Grey'
    }

};
console.log(product);

// Converting into JSON
const productJSON = JSON.stringify(product);
console.log(productJSON);

// Converting JSON into normal JS object.

const productObj = JSON.parse(productJSON);
console.log(productObj);

// 2. fetch

fetch(url)
.then(res => res.json())
.then(data => console.log(data))


// keys  values

const keys = Object.keys(product);
const values = Object.values(product); 

// for of loop on array like object
// for in loop on object


const products = [
    {name: 'laptop', price: 32000, brand: 'lenevo', color: 'silver'},
    {name: 'IPhone', price: 200000, brand: 'Apple', color: 'silver'},
    {name: 'watch', price: 2000, brand: 'casio', color: 'Yellow'},
    {name: 'Sunglass', price: 320, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 42000, brand: 'Canon', color: 'black'}
];

const newProduct = {
    name: 'Tab', price: 49000, brand: 'Apple', color: 'black'
}

// copy the products array and then add newProduct

const newProducts = [...products,newProduct];

//  create a new array without one specific item 
// remove phone ....that means create a new array without phone

const remaining = products.filter(product => product.name !== 'phone');