function Cart() {
  this.items=[];
}


Cart.prototype.addItem=function(name,price) {
this.items.push({name,price});

};


Cart.prototype.total=function() {
return this.items.reduce(function(a,b){return a+b.price},0);
}



module.exports = Cart;

