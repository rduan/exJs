let cart = require('./cart');

cart.addItem('bike',200);
cart.addItem('car',20000);
cart.addItem('plane',2300);
cart.addItem('motorbike',2004);
console.log(cart.total());
