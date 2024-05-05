// TODO - 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
const GetStatsWithoutSort = (arr) => {
  if (arr.length === 0) return "Array is empty";

  let max = arr[0];
  let min = arr[0];
  let ave = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    ave += arr[i];
  }

  const average = ave / arr.length;

  console.log("Without sort =>", {
    highest: max,
    lowest: min,
    average,
  });
};

GetStatsWithoutSort([12, 5, 23, 18, 4, 45, 32]);

const GetStatsWithSort = (arr) => {
  if (arr.length === 0) return "Array is empty";

  arr.sort((a, b) => a - b);

  let ave = 0;
  for (const newArr of arr) {
    ave += newArr;
  }

  console.log("With sort", {
    highest: arr[arr.length - 1],
    lowest: arr[0],
    average: ave / arr.length,
  });
};

GetStatsWithSort([12, 5, 23, 18, 4, 45, 32]);

// TODO - 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
const CombineArray = (arr) => {
  let str = "";
  for (const newArr of arr) {
    str += newArr + ", ";
  }

  console.log(`[${arr}] -> ${str}`);
};

CombineArray(["apple", "banana", "cherry", "date"]);

// TODO - 3. Write a function to split a string and convert it into an array of words
const SplitString = (str) => {
  console.log(str.split(" "));
};

SplitString("Hello World");

// TODO - 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
const SumTwoArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return "Arrays must be of the same length";
  }

  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }

  console.log(result);
};

SumTwoArray([1, 2, 3], [3, 2, 1]);

// TODO - 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
const AddElements = (arr, num) => {
  if (!num || !arr) console.log("Value cannot be empty");

  if (!arr.includes(num)) {
    arr.push(num);
    console.log(arr);
  } else {
    console.log(arr);
  }
};

AddElements([1, 2, 3, 4], 7);

// TODO - 1. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
const RemoveOddNumbers = (arr) => {
  let array = [];
  for (const newArr of arr) {
    if (newArr % 2 === 0) {
      array.push(newArr);
    }
  }

  console.log(array);
};

RemoveOddNumbers([1, 2, 3, 4, 5, 6]);

// TODO - 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
const InsertIntoArray = (maxSize, ...integers) => {
  const result = [];
  for (let num of integers) {
    if (result.length < maxSize) {
      result.push(num);
    } else {
      break;
    }
  }

  console.log(result);
};

const integers = [5, 10, 24, 3, 6, 7, 8];
InsertIntoArray(5, ...integers);

// TODO - 3. Write a function that will combine 2 given array into one array
const CombineGivenArray = (arr1, arr2) => {
  console.log([...arr1, ...arr2]);
};

CombineGivenArray([1, 2, 3], [4, 5, 6]);

// TODO - Write a function to find duplicate values in an array
const FindDuplicateNumber = (arr) => {
  const duplicates = [];
  const counts = {};

  for (let num of arr) {
    if (counts[num] === undefined) {
      counts[num] = 1;
    } else {
      counts[num]++;
    }
  }

  for (let key in counts) {
    if (counts[key] > 1) {
      duplicates.push(parseInt(key));
    }
  }

  console.log(duplicates);
};

FindDuplicateNumber([1, 2, 2, 2, 3, 3, 4, 5, 5]);

// TODO - Write a function to find the difference in 2 given array
