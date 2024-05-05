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
