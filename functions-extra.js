// Additional assignments for Day 5

function titleCreator(titleText, titleSymbol) {
  console.log(
    `\n${titleSymbol}${titleSymbol}${titleSymbol}${titleSymbol}${titleSymbol}${titleSymbol}${titleText}${titleSymbol}${titleSymbol}${titleSymbol}${titleSymbol}${titleSymbol}${titleSymbol}\n`
  );
}

function giveMeRandom(n) {
  let array = [];
  for (i = 0; i < n; i++) {
    array[i] = parseInt(Math.random() * 10);
  }
  return array;
}

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

titleCreator("EXTRA 1", "---");

function checkArray(array) {
  let biggerNumbersThan5 = [];
  let sumOfBiggerNumbersThan5 = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      console.log(
        `${i}th element of the given random array (${array[i]}) is bigger than 5.`
      );
      biggerNumbersThan5.push(array[i]);
    }
  }

  for (i = 0; i < biggerNumbersThan5.length; i++) {
    sumOfBiggerNumbersThan5 += biggerNumbersThan5[i];
  }

  console.log(
    `\nThe sum of bigger numbers than 5 is ${sumOfBiggerNumbersThan5}`
  );
}

checkArray(giveMeRandom(5));

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

titleCreator("EXTRA 2", "---");

function shoppingCartTotal(array) {
  let totalDueToTheShop = 0;
  for (i = 0; i < array.length; i++) {
    totalDueToTheShop += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  console.log(`Total due to shop is ${totalDueToTheShop} EUROs.`);
}

let shoppingCart = [
  { price: 500, name: "mobile phone", id: "#PH50", quantity: 8 },
  { price: 900, name: "playstation", id: "PS09", quantity: 4 },
  { price: 250, name: "headphone", id: "HP25", quantity: 12 },
  { price: 1700, name: "laptop", id: "PC17", quantity: 3 },
  { price: 50, name: "charger", id: "CH50", quantity: 17 },
];

shoppingCartTotal(shoppingCart);

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

titleCreator("EXTRA 3", "---");

function addToShoppingCart(object) {
  let totalNumbersOfItemsInShoppingCart = 0;
  shoppingCart.push(object);
  totalNumbersOfItemsInShoppingCart = shoppingCart.length;
  console.log(
    `You've added 1 new item to your shopping cart. Now there are ${totalNumbersOfItemsInShoppingCart} items. \n` // we already have 5 items in the shopping cart, that's why after adding new items we should have more then 5.
  );
}

addToShoppingCart({
  price: 350,
  name: "vacuum cleaner",
  id: "VC35",
  quantity: 5,
});

addToShoppingCart({
  price: 75,
  name: "power bank",
  id: "PB75",
  quantity: 9,
});

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

titleCreator("EXTRA 4", "---");

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

titleCreator("EXTRA 5", "---");

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

titleCreator("EXTRA 6", "---");

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

titleCreator("EXTRA 7", "---");

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

titleCreator("EXTRA 8", "---");

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

titleCreator("EXTRA 9", "---");

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

titleCreator("EXTRA 10", "---");

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the i of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

titleCreator("EXTRA 11", "---");

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
