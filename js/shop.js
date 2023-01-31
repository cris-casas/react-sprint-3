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
 var cartList = [];
 
 // Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
 var cart = [];
 
 var total = 0;
 
 // Exercise 1
 function buy(id) {
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cartList array
 
     for (let i=0; i<products.length; i++){

         if (products[i].id == id) {
             cartList.push(products[i]);
             console.log(products[i]);
         }  
     }
     console.log(cartList);
 }
 

 // Exercise 2
 function cleanCart() {
    //cartList.length = 0;

    let cartList = document.getElementById("cart_list");
    let totalPrice = document.getElementById("total_price");

    cart.length = 0;
    cartList.innerHTML = "";
    totalPrice.innerHTML = "";

 }
 
 // Exercise 3
 function calculateTotal() {
     // Calculate total price of the cart using the "cartList" array
 
     // for (let i=0; i<cartList.length; i++){
     //   total += cartList[i].price;
     // }

     for (let i=0; i<cart.length; i++){

        if (cart[i].subtotalWithDiscount == null) {

            total += cart[i].subtotal;

        } else {

            total += cart[i].subtotalWithDiscount;
        }

    }

    console.log(total);
 
 }
 
 // Exercise 4
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
                 //console.log(cart);
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
     console.log(cart);

     cartList.length = 0;
     console.log(cartList);
 
 }
 
 // Exercise 5
 function applyPromotionsCart() {
     // Apply promotions to each item in the array "cart"
 
     for (let i=0; i<cart.length; i++){
 
         if((cart[i].name === 'cooking oil') && (cart[i].quantity >= cart[i].offer.number)) {
 
             cart[i].subtotalWithDiscount = cart[i].offer.price * cart[i].quantity;
 
         } else if ((cart[i].name === 'Instant cupcake mixture') && (cart[i].quantity >= cart[i].offer.number)) {
 
             let priceWithDiscount = cart[i].price * (100 - cart[i].offer.percent) / 100;
             cart[i].subtotalWithDiscount = priceWithDiscount * cart[i].quantity;
        }

    }

    console.log(cart);

 }

 
 // Exercise 6
 function printCart() {
     // Fill the shopping cart modal manipulating the shopping cart dom

    let cartList = document.getElementById("cart_list");
    let totalPrice = document.getElementById("total_price");

   for (let i=0; i<cart.length; i++){

         if (cart[i].subtotalWithDiscount === null ) {

            cartList.insertAdjacentHTML("beforeend", 
            `<tr>
            <th scope='row'>${cart[i].name}</th>
            <td>$${cart[i].price}</td>
            <td>${cart[i].quantity}</td>
            <td>$${cart[i].subtotal}</td>
            </tr>`);

        } else {

            cartList.insertAdjacentHTML("beforeend", 
            `<tr>
            <th scope='row'>${cart[i].name}</th>
            <td>$${cart[i].price}</td>
            <td>${cart[i].quantity}</td>
            <td>$${cart[i].subtotalWithDiscount}</td>
            </tr>`);

        }
     }

     totalPrice.innerHTML = total;
     console.log("print-cart");

  /*
     <tbody id="cart_list">
     <tr>
       <th scope="row">Cooking oil</th>
       <td>$10.5</td>
       <td>2</td>
       <td>$21</td>
     </tr>
     <tr>
       <th scope="row">Pasta</th>
       <td>$6.25</td>
       <td>1</td>
       <td>$6.25</td>
     </tr>
     <tr>
       <th scope="row">Lawn dress</th>
       <td>$15</td>
       <td>3</td>
       <td>$45</td>
     </tr>
   </tbody>
*/
     
    }
 
 
 // ** Nivell II **
 
 // Exercise 7
 function addToCart(id) {
     // Refactor previous code in order to simplify it 
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cart array or update its quantity in case it has been added previously.
 }
 
 // Exercise 8
 function removeFromCart(id) {
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cartList array
 }
 
 function open_modal(){
     console.log("Open Modal");

     generateCart();
     applyPromotionsCart();
     calculateTotal();
     printCart();
 }