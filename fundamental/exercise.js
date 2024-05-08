// TODO - Create a function to check if two objects are equal
function ObjectsAreEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const obj1 = { a: 2 };
const obj2 = { a: 2 };
console.log(ObjectsAreEqual(obj1, obj2));

// TODO - Create a function to get the intersection of two objects
function ObjectsIntersection(obj3, obj4) {
  const intersection = {};

  for (let key in obj3) {
    if (obj4.hasOwnProperty(key) && obj3[key] === obj4[key]) {
      intersection[key] = obj3[key];
    }
  }

  return intersection;
}

const obj3 = { a: 1, b: 2 };
const obj4 = { a: 1, c: 3 };
console.log(ObjectsIntersection(obj3, obj4));

// TODO - Create a function to merge two array of student data and remove duplicate data
function MergeAndRemoveDuplicates(array1, array2) {
  const mergedArray = array1.concat(array2);

  const uniqueEmailsObj = {};

  for (const student of mergedArray) {
    if (!uniqueEmailsObj.hasOwnProperty(student.email)) {
      uniqueEmailsObj[student.email] = student;
    }
  }

  const uniqueStudentsArray = Object.values(uniqueEmailsObj);

  return uniqueStudentsArray;
}

const array1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const array2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(MergeAndRemoveDuplicates(array1, array2));

// TODO - Create a function that can accept input as an array of objects and switch all values into property and property into value
function SwitchKeysAndValues(arr) {
  return arr.map((obj) => {
    const switchKey = {};

    for (const key in obj) {
      const value = obj[key];
      switchKey[value] = key;
    }

    return switchKey;
  });
}

const inputArray = [{ name: "David", age: 20 }];
console.log(SwitchKeysAndValues(inputArray));

// TODO - Create a function to find a factorial number using recursion
function FactorialNumber(num) {
  if (num === 0 || num === 1) return num;

  return num * FactorialNumber(num - 1);
}

console.log(FactorialNumber(5));

// TODO - Shooting Game
class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    this.power += item.power;
    this.health += item.health;
  }

  showStatus() {
    console.log(
      `Player ${this.name} has ${this.power} power and ${this.health} health`
    );
  }
}
