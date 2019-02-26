var output = document.getElementById('output');

var burger = new Object();

burger.name ="Burgernator";
burger.bun = "sesame";
burger.veggy = "lettuce";
burger.cheese = "marble";
burger.sauce = "ketchup";
burger.pattyType = "chicken";
burger.pattyAmount = "double";
burger.extra = "hot peppers";

burger.blurb = function() {
  output.textContent = "Your burger is the " + burger.name + ". It has some " + burger.veggy + " with "  + burger.cheese + " cheese, topped with " + burger.sauce + ", all on top of "  + burger.pattyAmount + burger.pattyType + " with a little bit of " + burger.extra + ". All that goodness is wrapped in a " + burger.bun + "bun.";
}
