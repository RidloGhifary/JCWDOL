// ARRAY
// Case. List Student JCWD = Aboy, Immanuel, Wulan
// const studentJCWD1 = "Aboy";
// const studentJCWD2 = "Immanuel";
// const studentJCWD3 = "Wulan";

// // CRUD (Create, Read, Update, Delete)
// // Create Array
// const studentsJCWDArray = ["Aboy", "Immanuel", "Wulan"];
// //                           0          1         2
// // Read Array
// console.log(studentsJCWDArray[2]);
// console.log(studentsJCWDArray[0]);
// console.log(`${studentsJCWDArray[0]}, ${studentsJCWDArray[1]}`);
// // Update Array
// studentsJCWDArray[1] = "Rayhan";
// console.log(studentsJCWDArray);
// // Delete Array
// delete studentsJCWDArray[1];
// studentsJCWDArray[1] = "";
// console.log(studentsJCWDArray);

// // Method
// // .length
// const programInPwd = ["JCWD", "JCDM", "JCDS", "JCUIUX"];
// console.log(programInPwd.length);

// // .push: Menambahkan data di index paling akhir
// const fruits = ["Jeruk", "Anggur"];
// fruits.push("Durian");
// console.log(fruits);

// // .pop: Menghapus data di index paling akhir
// const vegetables = ["Sawi", "Kol"];
// vegetables.pop();
// console.log(vegetables);

// // .unshift: Menambahkan data di index paling awal
// const cars = ["Toyota", "Honda"];
// cars.unshift("Wuling");
// console.log(cars);

// // .shift: Menghapus data di index paling awal
// const snacks = ["Chitato", "Taro"];
// snacks.shift();
// console.log(snacks);

// // .slice
// const foods = ["Pizza", "Mie", "Burger"];
// console.log(foods.slice(0, 2));

// .splice: Menghapus & Menambah Data
// .splice(startIndex, totalToDelete, newData)
// const drinks = ["Haus", "Es Teh Manis Solo", "Fore", "Tomorow"];
// // drinks.splice(1, 1)
// // console.log(drinks)

// // drinks.splice(0, 1, 'Janji Jiwa')
// // console.log(drinks) // [ 'Janji Jiwa', 'Es Teh Manis Solo', 'Fore', 'Tomorow' ]

// // drinks.splice(1, 0, 'Kenangan')
// // console.log(drinks)

// // drinks.splice(0, 1, '')
// // console.log(drinks)

// // .indexOf
// const brands = ["Indomie", "Supermie", "Mie Sedap Enak"];
// const inputUser = "Enak";
// console.log(brands.indexOf(inputUser.toLowerCase()));

// // .includes: true atau false (boolean)
// console.log(brands.includes("Lemonilo"));
// console.log(brands.includes("Indomie"));

// // .sort
// const numbers = [5, 100, 1, 10, 3];
// numbers.sort((low, high) => high - low);

// const alphabets = ["bebas", "apa", "ziapa", "ada"];
// alphabets.sort();
// console.log(alphabets);

// // ARRAY SPECIAL METHOD FOR LOOPING
// // Case. Ingin Menampilkan Angka dari 1-5 Menggunakan console.log()
// for (let start = 1; start <= 5; start++) {
//   console.log(start);
// }

// const arrData = ['Abc', 123, undefined, null, {}, 'Bca'] // arrData.length = 6 - 1 = 5
// for(let start=0; start<=arrData.length-1; start++){
//     console.log(arrData[start])
// }

// .forEach: Mirip Seperti Looping For Biasa
// const arr = ["JCWD", "JCDM", "JCDS"];
// arr.forEach((value, idx) => {
//   value;
// });

// // .map: Menghasilkan Array Baru
// const newArr = arr.map((item, index) => {
//   return item;
// });
// console.log(newArr);

// // .filter: Menghasilkan Array Baru & Dapat Melakukan Filter
// const arrNumbers = [50, 70, 10, 30, 90];

// const newArrFilter = arrNumbers.filter((item, index) => {
//   return item >= 70;
// });
// const newArrMap = arrNumbers.map((item, index) => {
//   return item >= 70;
// });
// console.log(newArrFilter);
// console.log(newArrMap);

// FUNCTION: Wadah yang digunakan Untuk Menyimpan Baris Kode -> Reusable
// Tahapan Membuat Function:
// 1. Create Function
// 2. Call Function

// Type Function:
// 1. Declarative Function
// Output();
// function Output() {
//   console.log("Hello, World!");
// }

// // 2. Expression Function
// const PrintOutput = function () {
//   console.log("Hi, JCWD!");
// };
// PrintOutput();

// // 3. Arrow Function
// const ShowOutput = () => {
//   console.log("Hello, Student");
// };
// ShowOutput();

// // FUNCTION with PARAMETER(s)
// function OutputGreeting(param1) {
//   console.log(`Hello, ${param1}`);
// }

// OutputGreeting("Student(s)"); // Argument: Value yang dikirimkan Menuju Parameter
// OutputGreeting("Pak Purwa");

// // Case. Menampilkan Angka dari 1-5
// function ShowNumbers(number) {
//   // number = 100;
//   for (let i = 1; i <= number; i++) {
//     i <= 100;
//     console.log(i);
//   }
// }
// ShowNumbers(5);

// // Menampilkan Angka dari 1-100
// ShowNumbers(100);

// function Penjumlahan(num1, num2) {
//   // num1 = 10; num2 = 5
//   console.log(num1 + num2); // 10 + 5 = 15
// }

// Penjumlahan(10, 5);

// ? EXERCISE

function calculate(operation, num1, num2) {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "Invalid operation";
  }
}

console.log("Addition:", calculate("add", 5, 3));
console.log("Subtraction:", calculate("subtract", 10, 4));
console.log("Multiplication:", calculate("multiply", 2, 6));
console.log("Division:", calculate("divide", 10, 2));
console.log("Invalid operation:", calculate("modulus", 10, 2));
console.log("Division by zero:", calculate("divide", 5, 0));
