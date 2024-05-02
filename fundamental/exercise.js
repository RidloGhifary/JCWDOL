// TODO - Write a code to display the multiplication table of a given integer.
const number = 9;

for (let i = 1; i <= number; i++) {
  console.log(`${i}. ${number} x ${i} = ${number * i}`);
}

// TODO - Write a code to check whether a string is a palindrome or not.
function isPalindrome(str) {
  str = str.toLowerCase();
  if (str.length <= 1) return true;

  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

let str = "madam";
if (isPalindrome(str)) console.log("'" + str + "' is a palindrome.");
else console.log("'" + str + "' is not a palindrome.");

// TODO - Write a code to convert centimeter to kilometer.
const centimeter = 100000;
const kilometer = centimeter / 100000;
console.log(`${centimeter}Cm is equal to ${kilometer}Km`);

// TODO - Write a code to format number as currency (IDR)
let currency = 1000;
console.log(`Rp. ${currency.toLocaleString("id")},00`);

// TODO - Write a code to remove the first occurrence of a given “search string” from a string
let givenString = "Hello world",
  searchString = "ell";

const index = givenString.indexOf(searchString);
console.log(
  givenString.slice(0, index) + givenString.slice(index + searchString.length)
);

// TODO - Write a code to capitalize the first letter of each word in a string
const words = "hello world";
let word = words.split(" ");
for (let i = 0; i < word.length; i++) {
  word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
}
console.log(word.join(" "));

// TODO - Write a code to reverse a string.
const reverseSrt = "hello";
let reverse = "";
for (let i = reverseSrt.length - 1; i >= 0; i--) {
  reverse += reverseSrt[i];
}
console.log("reverse a string.", reverse);

// TODO - Write a code to swap the case of each character from string
let swapString = "The QuiCk BrOwN Fox";
let swapStringResult = "";
for (let i = 0; i < swapString.length; i++) {
  if (swapString.charCodeAt(i) >= 65 && swapString.charCodeAt(i) <= 90) {
    swapStringResult += swapString[i].toLowerCase();
  } else if (
    swapString.charCodeAt(i) >= 97 &&
    swapString.charCodeAt(i) <= 122
  ) {
    swapStringResult += swapString[i].toUpperCase();
  } else {
    swapStringResult += swapString[i];
  }
}
console.log("Original string:", swapString);
console.log("Swapped case string:", swapStringResult);

// TODO - Write a code to find the largest of two given integers
let findLargestNum1 = 42,
  findLargestNum2 = 27;

console.log(
  findLargestNum1 > findLargestNum2 ? findLargestNum1 : findLargestNum2
);

// TODO - Write a conditional statement to sort three numbers
let sortNum1 = 42;
let sortNum2 = 27;
let sortNum3 = 18;

if (sortNum1 > sortNum2) {
  let currentNumber = sortNum1;
  sortNum1 = sortNum2;
  sortNum2 = currentNumber;
}

if (sortNum1 > sortNum3) {
  let currentNumber = sortNum1;
  sortNum1 = sortNum3;
  sortNum3 = currentNumber;
}

if (sortNum2 > sortNum3) {
  let currentNumber = sortNum2;
  sortNum2 = sortNum3;
  sortNum3 = currentNumber;
}

console.log(sortNum1, sortNum2, sortNum3);

// TODO - Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
const checkDataType = "hello";
if (typeof checkDataType === "string") console.log(1);
else if (typeof checkDataType === "number") console.log(2);
else console.log(3);

// TODO - Write a code to change every letter a into * from a string of input
const changeLetterA = "An apple a day keeps the doctor away"
  .toLowerCase()
  .slice("");

let changeLetterAResult = "";
for (let i = 0; i < changeLetterA.length; i++) {
  if (changeLetterA[i] === "a") {
    changeLetterAResult += "*";
  } else {
    changeLetterAResult += changeLetterA[i];
  }
}
console.log(changeLetterAResult);
