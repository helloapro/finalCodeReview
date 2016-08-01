//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.addToTotalCost = function()  {
  return (this.toppings + this.size);
}


//user interface logic
$(function() {

  $("#submit").click(function() {
    var size = parseInt($("#size").val());
    //console.log(size);

    var toppings = document.getElementsByTagName("input"),
    count = 0;
    for (var i=0; i<toppings.length; i++) {
      if (toppings[i].type === "checkbox" && toppings[i].checked === true) {
        count++;

      }
    }
    //console.log(count);
    toppings = count * 0.5

    var newPizza = new Pizza(size, toppings);

    newPizza.cost = newPizza.addToTotalCost();
    var finalCost = newPizza.cost.toFixed(2)
    $("#pizza-cost").text("Alright, brother - Great selections! Your total comes to $" + finalCost + "! Your insanely hot, delicious pizza will be ready for pickup and hearty consumption in 15 minutes!")
    $("#pizza-order-img").show();

  });

});
