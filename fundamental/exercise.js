// TODO - Create a function that can create a triangle pattern according to the height
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

// TODO - Create a function that receiving array as input, and this function can
// TODO - find maximum value in array without using built in method in javascript.
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

// TODO - Create a function that can loop the number of times according to the input we provide, and will
// TODO - replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// TODO - "FizzBuzz".
