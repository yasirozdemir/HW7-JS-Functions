/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

function titleCreator(titleText, titleSymbol) {
  console.log(
    `\n${titleSymbol}${titleSymbol}${titleSymbol}${titleSymbol}${titleSymbol}${titleSymbol}${titleText}${titleSymbol}${titleSymbol}${titleSymbol}${titleSymbol}${titleSymbol}${titleSymbol}\n`
  );
}

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

titleCreator("EXERCISE 1", "---");

function areaCalculator(l1, l2) {
  let area = l1 * l2;
  return area;
}

let base = 10;
let height = 6;

console.log(
  `The area of rectangle with ${base} cms of base and ${height} cms of height is equal to ${areaCalculator(
    base,
    height
  )}`
);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

titleCreator("EXERCISE 2", "---");

function crazySum(num1, num2) {
  let sum;
  if (num1 === num2) {
    sum = (num1 + num2) * 3;
    console.log(
      `Since those two values are the same the crazy sum is: ${sum}.`
    );
    return sum;
  } else {
    sum = num1 + num2;
    console.log(`The sum of those two values is: ${sum}.`);
    return sum;
  }
}

crazySum(4, 4);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

titleCreator("EXERCISE 3", "---");

function crazyDiff(num1) {
  let difference;
  if (num1 >= 19) {
    difference = num1 - 19;
    console.log(
      `The absolute difference between ${num1} and 19 is: ${difference}.`
    );
    return difference;
  } else {
    difference = 19 - num1;
    console.log(
      `The absolute difference between 19 and ${num1} is: ${difference}.`
    );
    return difference;
  }
}

crazyDiff(34);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

titleCreator("EXERCISE 4", "---");

function boundary(n) {
  let isBetween20and100orIsEqual400;
  if ((n >= 20 && n <= 100) || n === 400) {
    isBetween20and100orIsEqual400 = true;
    console.log(
      `${n} is within 20 and 100 (included) or is equal to 400. The previous statement is: ${isBetween20and100orIsEqual400}.`
    );
    return;
  } else {
    isBetween20and100orIsEqual400 = false;
    console.log(
      `${n} is within 20 and 100 (included) or is equal to 400. The previous statement is: ${isBetween20and100orIsEqual400}.`
    );
    return;
  }
}

boundary(50);

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

titleCreator("EXERCISE 5", "---");

function strivify(string) {
  if (string.startsWith("Strive")) {
    console.log(string);
  } else {
    console.log(`Original sentence was: ${string}.`);
    string = "Strive " + string;
    console.log(`\nThe edited version of the sentence is: ${string}.`);
  }
}

strivify("hello world!");

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

titleCreator("EXERCISE 6", "---");

function check3and7(num1) {
  let isMultipleOf3or7;
  if (num1 % 3 === 0 || num1 % 7 === 0) {
    isMultipleOf3or7 = true;
    console.log(`${num1} is multiple of 3 or 7.`);
    return isMultipleOf3or7;
  } else {
    isMultipleOf3or7 = false;
    console.log(`${num1} is not multiple of 3 or 7.`);
  }
}

check3and7(94);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

titleCreator("EXERCISE 7", "---");

function reverseString(string) {
  let reversedString = [];
  let reverseText = "";

  for (i = 0, j = string.length - 1; i < string.length; i++, j--) {
    reversedString[i] = string[j];
  }
  for (i = 0; i < reversedString.length; i++) {
    reverseText += reversedString[i];
  }

  console.log(reverseText);
  return reversedString;
}

reverseString("Never gonna let you down.");

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

titleCreator("EXERCISE 8", "---");

function upperFirst(string) {
  let words = string.split(" "); //the piece of code to split each word in the sentence using space as a separator.

  for (i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  return words.join(" "); //putting together the words that we split from the sentence.
}

console.log(upperFirst("Korkma sönmez bu şafaklarda yüzen alsancak."));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

titleCreator("EXERCISE 9", "---");

function cutString(string) {
  console.log(`The old version of the string: ${string} \n`);
  withoutFirstAndLastChar = string.substring(1, string.length - 1);
  console.log(
    `Without the first and the last char: ${withoutFirstAndLastChar}`
  );
  return withoutFirstAndLastChar;
}

function cutStringAlternative(string) {
  woFirstAndLastChar = "";
  console.log(`The old version of the string: ${string} \n`);
  for (i = 1; i < string.length; i++) {
    woFirstAndLastChar += string[i];
  }
  console.log(`The old version of the string: ${woFirstAndLastChar} \n`);
  return woFirstAndLastChar;
}

console.log("\n----USING SUBSTRING FUNCTION---\n");

cutString("EPICODE");

console.log("\n----USING FOR LOOP---\n");

cutString("TURKIYE");

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

titleCreator("EXERCISE 10", "---");

function giveMeRandom(n) {
  let array = [];
  for (i = 0; i < n; i++) {
    array[i] = parseInt(Math.random() * 10);
  }
  // Since Math.random() function gives me numbers between 0(included) and 1(excluded) I multiplied it
  // by ten and using parseInt I prevented floating numbers to show up in my code.
  console.log(array);
  return array;
}

giveMeRandom(3);

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
