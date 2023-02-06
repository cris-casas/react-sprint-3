// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
         id: 1,
         name: 'cooking oil',
         price: 10.5,
         type: 'grocery',
         offer: {
             number: 3,
             price: 10
         }
     },
     {
         id: 2,
         name: 'Pasta',
         price: 6.25,
         type: 'grocery'
     },
     {
         id: 3,
         name: 'Instant cupcake mixture',
         price: 5,
         type: 'grocery',
         offer: {
             number: 10,
             percent: 30
         }
     },
     {
         id: 4,
         name: 'All-in-one',
         price: 260,
         type: 'beauty'
     },
     {
         id: 5,
         name: 'Zero Make-up Kit',
         price: 20.5,
         type: 'beauty'
     },
     {
         id: 6,
         name: 'Lip Tints',
         price: 12.75,
         type: 'beauty'
     },
     {
         id: 7,
         name: 'Lawn Dress',
         price: 15,
         type: 'clothes'
     },
     {
         id: 8,
         name: 'Lawn-Chiffon Combo',
         price: 19.99,
         type: 'clothes'
     },
     {
         id: 9,
         name: 'Toddler Frock',
         price: 9.99,
         type: 'clothes'
     }
 ]
 // Array with products (objects) added directly with push(). Products in this array are repeated.
 //var cartList = [];
 
 // Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
 var cart = [];
 
 var total = 0;
 
 // Exercise 1
 /*
 function buy(id) {
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cartList array
 
     for (let i=0; i<products.length; i++){

         if (products[i].id == id) {
             cartList.push(products[i]);
         }  
     }
 }
 */

 // Exercise 2
 function cleanCart() {
    //cartList.length = 0;

    let carrito = document.getElementById("cart_list");
    let totalPrice = document.getElementById("total_price");

    cart.length = 0;
    total = 0;
    carrito.innerHTML = "";
    totalPrice.innerHTML = "";

 }
 
 // Exercise 3
 function calculateTotal() {
     // Calculate total price of the cart using the "cartList" array
 
     total = 0;

     for (let i=0; i<cart.length; i++){

        if (cart[i].subtotalWithDiscount) {

            total += cart[i].subtotalWithDiscount;

        } else {

            total += cart[i].subtotal;
            
        }
    }
 
 }
 
 // Exercise 4
 /*
 function generateCart() {
     // Using the "cartlist" array that contains all the items in the shopping cart, 
     // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
     
     for (let i=0; i<cartList.length; i++){
 
         let j = 0;
         let encontrado = false;
 
         while(j < cart.length && !encontrado) {
 
             if(cartList[i].name === cart[j].name) {
                 encontrado = true;
                 cart[j].quantity = cart[j].quantity + 1;
                 cartList[i].subtotal = cart[j].quantity * cartList[i].price ;
             }
 
             j++
         }
 
         if(!encontrado){
 
             cartList[i].quantity = 1;
             cartList[i].subtotal = cartList[i].price;
             cartList[i].subtotalWithDiscount = null;
             cart.push(cartList[i]);
         } 
     }

     cartList.length = 0;
 
 }
 */
 
 // Exercise 5
 function applyPromotionsCart() {
     // Apply promotions to each item in the array "cart"

    cart.forEach(element => {

        if((element.name == 'cooking oil') && (element.quantity >= element.offer.number)) {
            element.subtotalWithDiscount = element.offer.price * element.quantity;

        } else if ((element.name == 'Instant cupcake mixture') && (element.quantity >= element.offer.number)) {

            let priceWithDiscount = element.price * (100 - element.offer.percent) / 100;
            element.subtotalWithDiscount = priceWithDiscount * element.quantity;
        
        } else {

            element.subtotalWithDiscount = null;

        }
    });

 }

 
 // Exercise 6
 function printCart() {
     // Fill the shopping cart modal manipulating the shopping cart dom

    let carrito = document.getElementById("cart_list");
    let totalPrice = document.getElementById("total_price");
    carrito.innerHTML = " ";

   for (let i=0; i<cart.length; i++){

         if (cart[i].subtotalWithDiscount != null) {

            carrito.insertAdjacentHTML("beforeend", 
            `<tr>
            <th scope='row'>${cart[i].name}</th>
            <td>$${cart[i].price}</td>
            <td>${cart[i].quantity}</td>
            <td>$${cart[i].subtotalWithDiscount}</td>
            <td><button type="button" onclick="removeFromCart(${cart[i].id})" class="btn btn-outline-dark">Rest product</button></td>
            </tr>`);

        } else {

            carrito.insertAdjacentHTML("beforeend", 
            `<tr>
            <th scope='row'>${cart[i].name}</th>
            <td>$${cart[i].price}</td>
            <td>${cart[i].quantity}</td>
            <td>$${cart[i].subtotal}</td>
            <td><button type="button" onclick="removeFromCart(${cart[i].id})" class="btn btn-outline-dark">Rest product</button></td>
            </tr>`);

        }
     }

     totalPrice.innerHTML = total;
}
 
 
 // ** Nivell II **
 
 // Exercise 7
 function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart

    // let product = products[id-1]; // OPCIÓN SIN LOOP
    let product = products.find (element => element.id == id);

    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    let prodEncontrado = cart.find ( element => element.name == product.name );

    if(prodEncontrado) {
    product.quantity += 1;
    product.subtotal += product.price;

    } else {
    product.quantity = 1;
    product.subtotal = product.price;
    cart.push(product);
    }
    
    applyPromotionsCart();
    calculateTotal();
}

 
 // Exercise 8
 function removeFromCart(id) {
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cartList array

     let i = 0;
     let encontrado = false;
 
     while (i < cart.length && !encontrado) {
 
         if (cart[i].id == id) {
 
             if(cart[i].quantity > 1) {
                 cart[i].quantity -= 1;
                 cart[i].subtotal -= cart[i].price;
         
             } else {
                 cart.splice(i, 1);
             }
             encontrado = true;
         }
 
         i++;
     }
 
     applyPromotionsCart();
     calculateTotal();
     printCart();
     
 }
 
 function open_modal(){
    printCart();
 }