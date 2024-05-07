// TODO - Create a function to calculate array of student data
const CalculateStudentData = (arr) => {
  const score = arr.sort((a, b) => a.score - b.score);
  const age = arr.sort((a, b) => a.age - b.age);

  let averageScore = 0;
  let averageAge = 0;

  for (const item of score) {
    averageScore += item.score;
  }

  for (const item of age) {
    averageAge += item.age;
  }

  console.log(`
    Highest score: ${score[arr.length - 1].name}(${score[arr.length - 1].score})
    Lowest score: ${score[0].name}(${score[0].score})
    Average score: ${averageScore / score.length}
    
    Highest age: ${score[arr.length - 1].name}(${score[arr.length - 1].age})
    Lowest age: ${score[0].name}(${score[0].age})
    Average age: ${averageAge / age.length}
  `);
};

const studentData = [
  { name: "Ridlo", email: "ridlo@gmail.com", age: 18, score: 90 },
  { name: "Asep", email: "asep@gmail.com", age: 40, score: 100 },
  { name: "Budi", email: "budi@gmail.com", age: 14, score: 93 },
  { name: "Ujang", email: "ujang@gmail.com", age: 24, score: 70 },
];

CalculateStudentData(studentData);

// TODO - Create a program to create transaction
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.products = {};
  }

  AddToCart(product, qty) {
    this.products = { product, qty };
    this.total += product.price * qty;
  }

  ShowTotal() {
    console.log(`Total transaction: Rp. ${this.total.toLocaleString("id-ID")}`);
  }

  Checkout() {
    return { total: this.total, products: this.products };
    // const checkout = `Transaction data: {total: ${this.total}, products: ${this.products}}`;
  }
}

const allProducts = {
  Apple: new Product("Apple", 7000),
  Banana: new Product("Banana", 8000),
  Orange: new Product("Orange", 9000),
};

const transaction = new Transaction();

transaction.AddToCart(allProducts.Apple, 3);
transaction.AddToCart(allProducts.Banana, 1);
transaction.AddToCart(allProducts.Orange, 2);

transaction.ShowTotal();

const transactionData = transaction.Checkout();
console.log(transactionData);
