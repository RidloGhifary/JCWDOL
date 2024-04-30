// TODO - CONVERT CELSIUS TO FAHRENHEIT
const celsius = 60;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log("fahrenheit:", fahrenheit);

// TODO - CHECK WHETHER NUMBER IS ODD OR EVEN
const number = 25;
console.log(number % 2 === 0 ? "even number" : "odd number");

// TODO - FIND THE SUM OF THE NUMBER 1 TO N
let sumNumber = 3;
let sum = 0;
for (let i = 1; i <= sumNumber; i++) {
  sum += i;
}
console.log("sum:", sum);

// TODO - CHECK WHETHER THE NUMBER IS PRIME NUMBER OT NOT
function isPrime(num) {
  if (num / 1 === num || num / num === 1) {
    console.log(`${num} is prime number`);
  } else {
    console.log(`${num} is not prime number`);
  }
}
isPrime(10);

// TODO - FIND FACTORIAL NUMBER
let factorialNumber = 1;
for (let i = 6; i >= 1; i--) {
  factorialNumber *= i;
}
console.log("factorialNumber:", factorialNumber);
