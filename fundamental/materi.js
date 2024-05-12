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
// class Student {
//   constructor(fullName, email, program, batch) {
//     this.fullName = fullName;
//     this.email = email;
//     this.program = program;
//     this.batch = batch;
//   }

//   sayHello() {
//     return `Hallo saya ${this.fullName} dari ${this.program}-${this.batch}`;
//   }
// }

// const studentArray = [
//   new Student("ridlo achmad ghifary", "ridlo@gmail.com", "JWDOL", "14"),
//   new Student("ucok baba", "ucok@gmail.com", "JWDOL", "15"),
// ];

// console.log(studentArray);
// studentArray.forEach((item) => console.log(item.sayHello()));

// class Product {
//   constructor(name, stock, price) {
//     this.name = name;
//     this.stock = stock;
//     this.price = price;
//   }

//   getInfo() {
//     return `Product: ${this.name}, Stock: ${
//       this.stock
//     }, Price Rp. ${this.price.toLocaleString("id-ID")}`;
//   }
// }

// class ElectronicProduct extends Product {
//   constructor(name, stock, brand, price) {
//     super(name, stock, price);
//     this.brand = brand;
//   }

//   getInfo() {
//     return `${super.getInfo()}, Brand: ${this.brand}`;
//   }
// }

// class FashionProduct extends Product {
//   constructor(name, stock, size, color, price) {
//     super(name, stock, price);
//     this.size = size;
//     this.color = color;
//   }

//   getInfo() {
//     return `${super.getInfo()}, Size: ${this.size}, Color: ${this.color}`;
//   }
// }

// class SnackProduct extends Product {
//   constructor(name, stock, flavor, expirationDate, price) {
//     super(name, stock, price);
//     this.flavor = flavor;
//     this.expirationDate = expirationDate;
//   }

//   getInfo() {
//     return `${super.getInfo()}, Flavor: ${this.flavor}, Expiration Date: ${
//       this.expirationDate
//     }`;
//   }
// }

// const electronicProduct = new ElectronicProduct("Laptop", 10, "Apple", 200000);
// const fashionProduct = new FashionProduct("T-Shirt", 20, "M", "Blue", 30000);
// const snackProduct = new SnackProduct(
//   "Chips",
//   50,
//   "Barbecue",
//   "2024-06-30",
//   5000
// );

// console.log(electronicProduct.getInfo());
// console.log(fashionProduct.getInfo());
// console.log(snackProduct.getInfo());

class Student {
  username;
  email;
  #password;
  phoneNumber;
  programSelected;

  constructor(address) {
    this.address = address;
  }

  set validateUsername(username) {
    if (username.length > 3) {
      this.username = username;
    } else {
      throw new Error("Username is not valid");
    }
  }

  set maskPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber.slice(0, -5) + "*****";
  }

  set validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      this.email = email;
    } else {
      throw new Error("Email is not valid");
    }
  }

  set validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (passwordRegex.test(password)) {
      this.#password = password;
    } else {
      throw new Error("Password is not valid");
    }
  }

  set validateSelectedProgram(program) {
    const validPrograms = ["JCWD", "JCDM", "JCDS", "JCUI/UX", "JCVD"];
    if (validPrograms.includes(program.toUpperCase())) {
      this.programSelected = program.toUpperCase();
    } else {
      throw new Error("Program selected is not valid");
    }
  }

  get getInfo() {
    return `Username: ${this.username}\nEmail: ${this.email}\nPassword: ${
      this.#password
    }\nAddress: ${this.address}\nPhone Number: ${
      this.phoneNumber
    }\nProgram Selected: ${this.programSelected}`;
  }
}

const student1 = new Student("Indonesia");

student1.validateUsername = "ridlo achmad ghifary";
student1.maskPhoneNumber = "08583022564";
student1.validateEmail = "ridlo@gmail.com";
student1.validatePassword = "Pass1234";
student1.validateSelectedProgram = "jcwd";

console.log(student1.getInfo);
