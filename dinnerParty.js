// 1. Declare an object named dinner that uses the purchased food as the keys and the price of the food for the values

const dinner = {
  cheeseburger: 12,
  steak: 20,
  soup: 8,
  macAndCheese: 14,
  soupAndSalad: 16
};

console.table(dinner);

// 2. Using the dinner object, list all of the different foods that were eaten during the dinner.

console.log(Object.keys(dinner));

// 3. Using the dinner object, list the prices of the meals eaten during the dinner.

console.log(Object.values(dinner));

// // function getLength(values){
//     return values.length
// }

// 4. Using what we know about objects, add the values of the dinner object to calculate the total cost of the meal. 

const prices = Object.values(dinner);
let totalCost = 0;

for (let i = 0; i < prices.length; i++) {
  totalCost += prices[i];
}

console.log(totalCost);

// 5. Convert the answer for the previous question into a function that returns the total cost of any object that is shaped like dinner.

Show Answer
function calculateCost(meal){
  let total = 0;
  for (const food in meal){
    total += meal[food];
  }
  return total;
}