class Student {
  username;
  email;
  #password;
  #phoneNumber;
  programSelected;

  constructor(address) {
    this.address = address;
  }

  set validateUsername(username) {
    if (username.length > 3) {
      this.username = username;
    } else {
      this.username = null;
    }
  }

  set maskPhoneNumber(phoneNumber) {
    this.#phoneNumber = phoneNumber.slice(0, -5) + "*****";
  }

  set validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      this.email = email;
    } else {
      this.email = null;
    }
  }

  set validatePassword(password) {
    if (password.length >= 8) {
      this.#password = password;
    } else {
      this.#password = null;
    }
  }

  set validateSelectedProgram(program) {
    const validPrograms = ["JCWD", "JCDM", "JCDS", "JCUI/UX", "JCVD"];
    if (validPrograms.includes(program.toUpperCase())) {
      this.programSelected = program.toUpperCase();
    } else {
      this.programSelected = null;
    }
  }

  get getPassword() {
    return this.#password;
  }

  get getInfo() {
    return `Username: ${this.username}\nEmail: ${this.email}\nPassword: ${
      this.#password
    }\nAddress: ${this.address}\nProgram Selected: ${this.programSelected}`;
  }
}

const student = new Student();
const students = [];

function insertStudent() {
  let isValidUsername = false;
  while (!isValidUsername) {
    let username = prompt("Type your username");
    student.validateUsername = username;
    if (student.username) {
      student.username = username;
      isValidUsername = true;
    } else {
      alert("Username is not valid. Please try again.");
    }
  }

  let isValidEmail = false;
  while (!isValidEmail) {
    let email = prompt("Type your email");
    student.validateEmail = email;
    console.log(student.email);
    if (student.email) {
      student.email = email;
      isValidEmail = true;
    } else {
      alert("Email is not valid. Please try again.");
    }
  }

  let isValidPassword = false;
  while (!isValidPassword) {
    let password = prompt("Type your password");
    student.validatePassword = password;
    if (student.getPassword) {
      student.password = password;
      isValidPassword = true;
    } else {
      alert("Password is not valid. Please try again.");
    }
  }

  let phoneNumber = prompt("Type your phone number");
  student.maskPhoneNumber = phoneNumber;

  student.address = prompt("Type your address");

  let isValidProgram = false;
  while (!isValidProgram) {
    let program = prompt(
      `Select your program \nJCWD\nJCDM\nJCDS\nJCUI/UX\nJCVD`
    );
    student.validateSelectedProgram = program;
    console.log(student.programSelected);
    if (student.programSelected) {
      student.programSelected = program.toUpperCase();
      isValidProgram = true;
    } else {
      alert("Program is not valid. Please try again.");
    }
  }

  return student;
}

function showStudents(students) {
  if (students.length === 0) {
    alert("No students available.");
  } else {
    const info = students
      .map((student, index) => {
        if (student !== null) {
          return (
            `Student ${index + 1}:\n` +
            `Username: ${student.username}\n` +
            `Email: ${student.email}\n` +
            `Address: ${student.address}\n` +
            `Program Selected: ${student.programSelected}\n`
          );
        } else {
          return "";
        }
      })
      .join("\n");
    alert("Student Information:\n" + info);
    main();
  }
}

function main() {
  const choice = prompt("Choose an option:\n1. Insert\n2. Show");

  switch (choice) {
    case "1":
      const newStudent = insertStudent();

      if (newStudent) {
        students.push(newStudent);
        alert("Student inserted successfully!");
      }
      showStudents(students);
      break;
    case "2":
      showStudents(students);
      main();
      break;
    default:
      main();
      break;
  }
}

main();
