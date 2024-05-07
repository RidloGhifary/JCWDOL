const products = [
  { name: "Apple", price: 7000 },
  { name: "Banana", price: 4000 },
  { name: "Grape", price: 9000 },
];

const userInput = prompt(
  products.map((product, index) => `${index + 1} = ${product.name}`).join("\n")
);

if (userInput !== null) {
  const index = parseInt(userInput - 1);
  const selectedProduct = products[index];
  if (selectedProduct) {
    alert(
      `${
        selectedProduct.name
      } - Price: Rp. ${selectedProduct.price.toLocaleString("id-Id")}`
    );
  } else {
    alert("Invalid input");
  }
} else {
  alert("No option selected.");
}
