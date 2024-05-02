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
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
const primeNumber = 3;
if (isPrime(primeNumber)) console.log(`${primeNumber} is a prime number`);
else console.log(`${primeNumber} is not a prime number`);

// TODO - FIND FACTORIAL NUMBER
let factorialNumber = 1;
for (let i = 4; i >= 1; i--) {
  factorialNumber *= i;
}
console.log("factorialNumber:", factorialNumber);

// TODO - PRINT FIRST N FIBONACCI NUMBER
var i;
var fib = [0, 1];

for (i = 2; i <= 15; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
