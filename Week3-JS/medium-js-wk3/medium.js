//medium
function cutPizzaSlices(slices){
    return function(person){
        return (`Each Person gets ${slices/person} slices of pizza`);  
      }
}

var sharePizza;
sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
console.log(sharePizza(3));
