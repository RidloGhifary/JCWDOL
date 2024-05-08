// OBJECT
// Case. Data Students -> Name, Address, FatherName, MotherName, Schools
// Key & Value ---> Property

// CRUD
// const objStudents = {
//     fullname: {
//         firstName: 'Defryan',
//         lastName: 'Ryan'
//     },
//     address: 'Bogor',
//     school: 'Telkom'
// }

// // READ
// console.log(objStudents.fullname.firstName)
// console.log(objStudents['address'])
// objStudents['newAddress'] = objStudents['address']

// // UPDATE
// objStudents.name = 'Ryan'
// objStudents.school = null

// // DELETE
// delete objStudents.school
// console.log(objStudents)

// // METHOD (Function yang disimpan kedalam Object)
// const print = {
//     name: 'Immanuel',
//     greeting(){
//         console.log(this.name)
//     },
//     welcoming: () => {
//         console.log(this.name)
//     }
// }
// print.greeting()
// print.welcoming()

// Chaining Condition
// const student = {
//   fullname: {
//     firstName: "Ryan",
//     lastName: "Defryan",
//   },
// };

// console.log(student?.fullName?.firstname); // Conditional Chaining

// CLASS
// Cetakan untuk Membuat Object dengan Property yg Sama

// Case. Name, Price, Discount
// const products = [
//     { name: 'A', price: 5000, discount: 0 },
//     { name: 'B', price: 10000, discount: 10 },
//     { name: 'C', Price: 15000, discount: 15 }
// ]

// products.forEach(item => {
//     console.log(`${item.name} = ${item.price}`)
// })

// class Products{
//     name = ''
//     price = 0
//     discount = 0

//     constructor(name, price, discount){
//         this.name = name;
//         this.price = price;
//         this.discount = discount;
//     }
// }

// const product1 = new Products('Apel', 10000, 10)
// console.log(product1)

// const arrProducts = [
//     new Products('Apel', 10000, 10),
//     new Products('Jeruk', 15000, 15),
//     new Products('Anggur', 20000, 20)
// ]

// console.log(arrProducts)

// Case. Sebuah Class untuk Data Student yang ada di Pwd
class Student {
  constructor(fullName, email, program, batch) {
    this.fullName = fullName;
    this.email = email;
    this.program = program;
    this.batch = batch;
  }

  sayHello() {
    return `Hallo saya ${this.fullName} dari ${this.program}-${this.batch}`;
  }
}

const studentArray = [
  new Student("ridlo achmad ghifary", "ridlo@gmail.com", "JWDOL", "14"),
  new Student("ucok baba", "ucok@gmail.com", "JWDOL", "15"),
];

console.log(studentArray);
studentArray.forEach((item) => console.log(item.sayHello()));
