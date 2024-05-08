function objectsAreEqual(obj1, obj2) {
  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if all keys and their corresponding values are equal
  for (let key of keys1) {
    // Check if the key exists in obj2
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }

    // Check if the values for the same key are equal
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  // If all conditions are met, the objects are equal
  return true;
}

// Example usage:
const obj1 = { a: 2 };
const obj2 = { a: 1 };
console.log(objectsAreEqual(obj1, obj2)); // Output: false

const obj3 = { a: "Hello" };
const obj4 = { a: 1 };
console.log(objectsAreEqual(obj3, obj4)); // Output: false

const obj5 = { a: 1 };
const obj6 = { a: 1 };
console.log(objectsAreEqual(obj5, obj6)); // Output: true
