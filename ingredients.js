var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var n = 0
while (n < ingredients.length) {
  console.log(ingredients[n]);
  n++
}

// Write a for loop that prints out the contents of ingredients:
for (n = 0; n < ingredients.length; n++) {
  console.log(ingredients[n]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (n = ingredients.length-1; n >= 0; n--) {
  console.log(ingredients[n]);
}