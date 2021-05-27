//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.
const input = require("readline-sync");
let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let starch = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let drink = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
for (let i = 0; i < protein.length; i++) {
  let meals = (`Your meal will consist of ${protein[i]}, ${starch[i]}, and ${vegetable[i]} with ${drink[i]} and ${dessert[i]} for dessert`);
  console.log(meals);
  if (meals.includes("kale")) {
    console.log("Don't worry, you can have double chocolate tomorrow.")
  }
  }
  


//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.

let prepare = input.question("How many meals need to be made?");
while (meals > 6) {
  prepare = input.question("That's too many, How many meals need to be made?")
}
console.log("Meals needed: " + prepare);


//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
let pantry = [protein + starch + vegetable + drink + dessert];
console.log(pantry);
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”