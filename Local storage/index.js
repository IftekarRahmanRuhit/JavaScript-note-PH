
const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    console.log(product,quantity);
    productField.value = '';
    quantityField.value = '';
    displayProduct(product,quantity);
    saveProductToLocalStorage(product,quantity);
    
}

const displayProduct = (product,quantity) =>{
    const ul = document.getElementById('productContainer');
    const li = document.createElement('li');
    li.innerHTML = `
    Product Name: ${product} --  Quantity: ${quantity}`
    ul.appendChild(li);
}

const getStoredProductCart = () =>{
    let cart = {};

    const storedCart = localStorage.getItem('cart');  //calling cart in local storage 
    if(storedCart){
        cart =JSON.parse(storedCart); // if cart available
    }
    return cart; // if cart not available it will return empty object
}

// Declaring a function to save product information is local Storage 
const saveProductToLocalStorage = (product,quantity) =>{
    const cart = getStoredProductCart();
    cart[product] = quantity;
    const stringifiedCart = JSON.stringify(cart);
    localStorage.setItem('cart',stringifiedCart);
}

const displayProductFromLocalStorage = () => {
    const savedCart = getStoredProductCart();
    for(let product in savedCart){
        const quantity = savedCart[product];
        displayProduct(product,quantity);
    }
}
displayProductFromLocalStorage();