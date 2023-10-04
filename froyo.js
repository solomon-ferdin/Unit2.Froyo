const userInputString = prompt ("Please enter a string of flavors separated by a coma");

const flavorsArray = userInputString.split(",");

const userString = "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
const strArray = userString.split(",")

// 5. Can you build an object to track which flavors you have observed so far?

const object = {
    vanilla: 3
    strawberry: 1
    coffee: 2
}

for (let i = 0; i < strArray.length; i++) {
    const current = strArray[i]
}

//  If you are feeling stuck, try answering the following questions:

// 1. Can you live serve the HTML file?
// 2. Is the HTML file connected to the JS file?
// 3. Can you prompt the user for froyo flavors and store their result?
// 4. Can you parse the user input into an array of froyo flavors?
// 5. Can you build an object to track which flavors you have observed so far?
// 6. As you iterate through the array of flavors, when should that object be updated?
// 7. Is your logic organized into a function?
