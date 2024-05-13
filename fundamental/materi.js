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
  #phoneNumber;
  programSelected;
  address;

  static validateDataStudents() {
    let username = prompt("Input username");
    let usernameIsValid = false;
    while (!usernameIsValid) {
      if (username.length < 3) {
        alert("Username is not valid");
        username = prompt("Input username");
      } else {
        usernameIsValid = true;
      }
    }

    let email = prompt("Input email");
    let emailIsValid = false;
    while (!emailIsValid) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Email is not valid");
        email = prompt("Input email");
      } else {
        emailIsValid = true;
      }
    }

    let password = prompt("Input password");
    let passwordIsValid = false;
    while (!passwordIsValid) {
      if (!password || password.length < 8) {
        alert("Password is not valid");
        password = prompt("Input password");
      } else {
        passwordIsValid = true;
      }
    }

    let address = prompt("Input address");
    let addressIsValid = false;
    while (!addressIsValid) {
      if (address.length < 1) {
        alert("Address is not valid");
        address = prompt("Input address");
      } else {
        addressIsValid = true;
      }
    }

    let phoneNumber = prompt("Input phone number");
    let phoneNumberIsValid = false;
    while (!phoneNumberIsValid) {
      const phoneNumberRegex = /^((\+62)|0)(\d{3,4}-?){2}\d{3,4}$/;
      if (!phoneNumberRegex.test(phoneNumber)) {
        alert("Phone number is not valid");
        phoneNumber = prompt("Input phone number");
      } else {
        phoneNumberIsValid = true;
      }
    }

    let programSelected = prompt(
      "Select your program \nJCWD\nJCDM\nJCDS\nJCUI/UX\nJCVD"
    );
    let programSelectedIsValid = false;
    while (!programSelectedIsValid) {
      const validPrograms = ["JCWD", "JCDM", "JCDS", "JCUI/UX", "JCVD"];
      if (!validPrograms.includes(programSelected.toUpperCase())) {
        alert("Select the correct program");
        programSelected = prompt(
          "Select your program \nJCWD\nJCDM\nJCDS\nJCUI/UX\nJCVD"
        );
      } else {
        programSelectedIsValid = true;
      }
    }

    return {
      error: false,
      data: { username, email, password, address, programSelected },
    };
  }

  get getPassword() {
    return this.#password;
  }
}

const student = new Student();
const students = [];

do {
  const choices = prompt(
    "Choose an option:\n1. Insert student\n2. Show student list"
  );
  if (choices === "1") {
    const newStudent = Student.validateDataStudents();
    const isEmailAlreadyExist = students.some(
      (student) => student.email === newStudent.data.email
    );
    if (isEmailAlreadyExist) {
      alert("Email is already exist");
    } else {
      students.push(newStudent.data);
    }

    alert(
      `${students
        .map(
          (student, index) =>
            `${index + 1}. ${student.username}(${student.programSelected}) - ${
              student.email
            }`
        )
        .join("\n")}`
    );
  } else if (choices === "2") {
    if (students.length === 0) {
      alert("No student available yet");
    } else {
      alert(
        `${students
          .map(
            (student, index) =>
              `${index + 1}. ${
                student.username
              }(${student.programSelected.toUpperCase()}) - ${student.email}`
          )
          .join("\n")}`
      );
    }
  }
} while (true);
