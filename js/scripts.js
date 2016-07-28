//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addToTotalCost = function()  {
  return (this.toppings + this.size);
  alert("hi");
}


//user interface logic
$(function() {
  var newPizza = new Pizza();

  $("#submit").click(function() {
    var size = parseInt($("#size").val());
    console.log(size);
    if (size === 1) {
      this.size = 6;
    }
    if (size === 2) {
      this.size = 8;
    }

    var toppings = document.getElementsByTagName("input"),
    count = 0;
    for (var i=0; i<toppings.length; i++) {
      if (toppings[i].type === "checkbox" && toppings[i].checked === true) {
        count++;
      }
    }
    console.log(count);
    this.toppings = count * 0.5

    newPizza.cost = newPizza.addToTotalCost();
    $("#pizza-cost").text("Alright, brother - Great selections! Your total comes to " + newPizza.cost + "! Your insanely hot, delicious pizza will be ready for pickup and hearty consumption in 15 minutes!")
    
  });

});
