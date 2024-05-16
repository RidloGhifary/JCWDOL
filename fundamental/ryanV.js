const route = [
  "Surabaya",
  "RuasToll-01",
  "Ngawi",
  "RuasToll-02",
  "Solo",
  "RuasToll-03",
  "Batang",
  "RuasToll-04",
  "Palimanan",
  "RuasToll-05",
  "Cikampek",
  "RuasToll-06",
  "Jakarta",
];
const price = [
  0,
  [1000, 2000, 3000],
  0,
  [5000, 6000, 7000],
  0,
  [10000, 11000, 12000],
  0,
  [15000, 16000, 17000],
  0,
  [20000, 21000, 22000],
  0,
  [25000, 26000, 27000],
  0,
];

const enterGate = prompt("Gate Masuk:"); // Input Nama Kota
const exitGate = prompt("Gate Keluar: "); // Input Nama Kota
const vehicle = Number(
  prompt("Jenis Kendaraan: \n 1. Mobil \n 2. Bus \n 3. Truck")
); // Input 1 or 2 or 3

const start = route.indexOf(enterGate); // 12
const end = route.indexOf(exitGate); // 10

let total = 0;
if (end < start) {
  // 10 < 12? TRUE
  for (let i = start; i >= end; i--) {
    if (price[i] !== 0) {
      total += price[i][vehicle - 1];
    }
  }
} else {
  for (let i = start; i <= end; i++) {
    if (price[i] !== 0) {
      total += price[i][vehicle - 1];
    }
  }
}

alert(total);
