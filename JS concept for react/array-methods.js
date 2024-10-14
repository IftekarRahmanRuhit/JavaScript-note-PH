
const products = [
    {name: 'laptop', price: 32000, brand: 'lenevo', color: 'silver'},
    {name: 'IPhone', price: 200000, brand: 'Apple', color: 'silver'},
    {name: 'watch', price: 2000, brand: 'casio', color: 'Yellow'},
    {name: 'Sunglass', price: 320, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 42000, brand: 'Canon', color: 'black'}
];
// 1. Map 
const brands = products.map(product => product.brand);
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices);

//2.forEach  
// Note: forEach doesn't return

products.forEach(product => console.log(product.color));

products.forEach(product => {

}); // for multiple line 

// 3. filter 
//Note: filter works based on condition and return a array 

const cheapProduct = products.filter(product => product.price <= 5000);
console.log(cheapProduct);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// 4. find 

// Note: find and filter are almost similar but find return the first thing that match with given condition ,on the otherhand filters return all the things that match with given condition

const special = products.find(product => product.includes('n'));
console.log(special);






