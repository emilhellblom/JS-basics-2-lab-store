// TODO:
var products = [
  { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
  { referenceNumber: 1232, name: "Power Mat", price: 20 },
  { referenceNumber: 1233, name: "Block", price: 30 },
  { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
  { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
  { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
  { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
  { referenceNumber: 1238, name: "Light On Yoga", price: 10 }
]
var shoppingCart = []
// Declare `shoppingCart`, something where you will be storing all products that the user buys. check
// Declare `products`, the different that you will be selling under each of the departments. check

var shopFromStore = function () {

  // }
  console.log('From shopping cart',  shoppingCart)
  // Add the product with the matching referenceNumber to the shoppingCart

  displayProductsFromShoppingCart();

  function sumPrice() {
    var iMax = shoppingCart.length
    var totalPrice = 0
    for (i=0; i<iMax; i++) {
      totalPrice += shoppingCart[i].price;
    }
    displayTotalPrice(totalPrice);
  }
  sumPrice();

  function continueShopping() {

  }
  // Ask the user if they want to continue shopping,
  // if yes, call this function again
  // if no, print the goodbye message
};
// addItem()
console.log(shoppingCart)

var displayProductsFromShoppingCart = function() {
    for(var cartItem of shoppingCart){
      // create elements for refNr, name, price, with a class and the proper innerText
      var referenceNumberElement = document.createElement('span');
      referenceNumberElement.className  = 'referenceNumber';
      referenceNumberElement.innerText = cartItem.referenceNumber;

      var nameElement = document.createElement('span');
      nameElement.className  = 'name';
      nameElement.innerText = cartItem.name;

      var priceElement = document.createElement('span');
      priceElement.className  = 'price';
      priceElement.innerText = cartItem.price;

      // Wrap our just created elements in a div
      var productElement = document.createElement('div');
      productElement.className = 'cart';

      productElement.appendChild(referenceNumberElement);
      productElement.appendChild(nameElement);
      productElement.appendChild(priceElement);

      document.getElementById('shopping-cart').appendChild(productElement);
    }
};

var askUserForReferenceNumber = function() {
    var refNr = Number(prompt("What is the reference number of the item you are interested in?"))

    switch (refNr) {
      case 1231:
        shoppingCart.push(products[0]);
        break;
      case 1232:
        shoppingCart.push(products[1]);
        break;
      case 1233:
        shoppingCart.push(products[2]);
        break;
      case 1234:
        shoppingCart.push(products[3]);
        break;
      case 1235:
        shoppingCart.push(products[4]);
        break;
      case 1236:
        shoppingCart.push(products[5]);
        break;
      case 1237:
        shoppingCart.push(products[6]);
        break;
      case 1238:
        shoppingCart.push(products[7]);
        break;
      };
        shopFromStore();
      console.log('shopping cart', shoppingCart);
  // then, return the response from this function back to our caller
};


//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
};

console.log(products)
var printProductsOnScreen = function () {
  for(var product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);
  }
  var button = document.createElement('button');
  document.getElementById('shopping-cart').appendChild(button);
  button.addEventListener('click',() => askUserForReferenceNumber());
  button.className = 'button';
  var buttonText = document.createTextNode('Add item');
  button.appendChild(buttonText);
  console.log(button);
    // iterate over the shoppingCart and display the contents
};

var runApp = function () {
  printProductsOnScreen();
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  };
};
