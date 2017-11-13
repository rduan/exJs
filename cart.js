
// module.exports = function () {
  
//   let items=[];
    
  
//   this.addItem = function(name,price){
//     items.push({name,price});
  
//   };
  
//   // function total() {
    
//   // }

//   addItem('ts',100);
//   // console.log(items);
  
  
//   this.total = () => {
//     return items.reduce(function(a,b){return a+b.price},0);
//   }
  
// };
  let items=[];
    
  
  function addItem(name,price) {
    items.push({name,price});
  
  };
  
  
  exports.total=function() {
    return items.reduce(function(a,b){return a+b.price},0);
  }
  // total = () => {
  //   return items.reduce(function(a,b){return a+b.price},0);
  // }
  

exports.addItem = addItem;
// exports.total = total;


