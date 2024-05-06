// TODO - Example / Create a function that can create a triangle pattern according to the height
const createTriangle = (height) => {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
};

createTriangle(5);

// TODO - Example / Create a function that receiving array as input, and this function can find maximum value in array without using built in method in javascript.
const findMaximumValue = (arr) => {
  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
};

console.log(findMaximumValue([1, 2, 3, 4, 2, 10]));

// TODO - Create a function that can create a triangle pattern according to the height
const CreateTriangleHeight = (height) => {
  let number = 1;
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += number.toString().padStart(2, "0") + " ";
      number++;
    }
    console.log(row);
  }
};

CreateTriangleHeight(4);

// TODO - 2. Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
const FizzBuzz = (num) => {
  if (!num || typeof num !== "number") {
    console.log("Input valid number");
  }

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`fizz buzz`);
    } else if (i % 5 === 0) {
      console.log(`buzz`);
    } else if (i % 3 === 0) {
      console.log(`fizz`);
    } else {
      console.log(i);
    }
  }
};

FizzBuzz(15);

// TODO - 3. Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))2
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

const CalculateBmi = (weight, height) => {
  const result = weight / (height / 100) ** 2;

  if (result < 18.5) return "less weight";
  else if (result >= 18.5 && result <= 24.9) return "ideal";
  else if (result >= 25.0 && result <= 29.9) return "overweight";
  else if (result >= 30.0 && result <= 39.9) return "very overweight";
  else if (result > 39.9) return "obesity";
  else return "invalid number";
};

const myBmi = CalculateBmi(65, 173);
console.log(myBmi);

// TODO - 4. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
const RemoveOddNumber = (arr) => {
  if (!arr) console.log("Array is empty");

  console.log(arr.filter((item) => item % 2 === 0));
};

RemoveOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// TODO - 5. Write a function to split a string and convert it into an array of words
const SplitString = (str) => {
  if (!str) console.log("String is empty");

  console.log(str.split(" "));
};

SplitString("Hello World");

function Box(n, m) {
  let box = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      box += "*" + " ";
    }
    box += "\n";
  }
  console.log(box);
}

Box(4, 5);
