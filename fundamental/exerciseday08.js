/* 1. Find the unique values.
 */
function unique(arr) {
  const newArr = new Set(arr);
  return Array.from(newArr);
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare, Krishna, :-O

/*
2. Write a function aclean(arr) that returns an array cleaned from anagrams.
*/

function aclean(arr) {
  let map = new Map();

  for (const item of arr) {
    let sorted = item.toLowerCase().split("").sort().join("");
    console.log(item);
    console.log(sorted);
    map.set(sorted, item);
  }

  console.log(map);

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,cteachers, ear" or "PAN, cheaters, era"

/*
3. Solve the error!
*/
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more"); // Error: keys.push is not a function
console.log(keys);
