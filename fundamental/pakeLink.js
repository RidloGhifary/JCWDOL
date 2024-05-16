class RuasToll {
  constructor(mobil, bus, truk) {
    this.mobil = mobil;
    this.bus = bus;
    this.truk = truk;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    //kalo kosong
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //insert at index
  insertAt(data, index) {
    //kalo index melebihi jumlah data
    if (index > 0 && index > this.size) {
      return;
    }
    //kalo index nya 0
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;
    //set current ke head
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index
  getAt(index) {
    if (index >= this.size) {
      return null;
    } else {
      let current = this.head;
      let count = 0;
      while (count < index) {
        current = current.next;
        count++;
      }
      return current.data;
    }
  }

  //Remove at index
  removeAt(index) {
    if (index >= this.size) {
      return null;
    } else {
      let current, previous;
      current = this.head;
      let count = 0;
      //kalo index 0
      if (index === 0) {
        this.head = current.next;
      } else {
        while (count < index) {
          previous = current;
          current = current.next;
          count++;
        }

        previous.next = current.next;
      }
    }

    this.size--;
  }

  //clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let kota = [
  "Surabaya",
  "Ngawi",
  "Solo",
  "Batang",
  "Palimanan",
  "Cikampek",
  "Jakarta",
];
const surabayaNgawi = new RuasToll(125000, 150000, 160000);
const ngawiSolo = new RuasToll(55000, 60000, 70000);
const soloBatang = new RuasToll(35000, 50000, 55000);
const batangPalimanan = new RuasToll(155000, 160000, 190000);
const palimananCikampek = new RuasToll(90000, 110000, 130000);
const cikampekJakarta = new RuasToll(35000, 40000, 50000);
let pairKota = [
  surabayaNgawi,
  ngawiSolo,
  soloBatang,
  batangPalimanan,
  palimananCikampek,
  cikampekJakarta,
];

let listKota = new linkedList();

//masukin data ke LinkedList
for (let i = 0; i < pairKota.length; i++) {
  if (i === 0) {
    listKota.insertFirst(pairKota[i]);
  } else {
    listKota.insertAt(pairKota[i], i);
  }
}

let pilihanKota = "";
kota.forEach((item, index) => {
  pilihanKota += `${index + 1}.${item}\n`;
});

let kondisi = true;
while (kondisi) {
  let kendaraan = prompt(
    "SELAMAT DATANG DI TOL!\nKedaraan apa yang anda gunakan?\n1.Mobil\n2.Bus\n3.Truk\n4.Exit"
  );
  if (kendaraan === "4" || kendaraan.toLowerCase === "exit") {
    kondisi = false;
    continue;
  }
  let asalKota =
    Number(prompt("Anda berangkat dari kota apa?\n" + pilihanKota)) - 1;
  let tujuanKota =
    Number(prompt("Anda akan pergi ke kota apa?\n" + pilihanKota)) - 1;
  let totalBiaya = 0;

  if (kendaraan === "1" || kendaraan.toLowerCase() === "mobil") {
    if (tujuanKota === asalKota) {
      totalBiaya = "Kamu harus memilih kota yang beberbeda!";
      continue;
    } else if (tujuanKota > asalKota) {
      for (let i = asalKota; i < tujuanKota; i++) {
        totalBiaya += listKota.getAt(i).mobil;
      }
    } else {
      for (let i = tujuanKota; i < asalKota; i++) {
        totalBiaya += listKota.getAt(i).mobil;
      }
    }
  }
  if (kendaraan === "2" || kendaraan.toLowerCase() === "bus") {
    if (tujuanKota === asalKota) {
      totalBiaya = "Kamu harus memilih kota yang beberbeda!";
      continue;
    } else if (tujuanKota > asalKota) {
      for (let i = asalKota; i < tujuanKota; i++) {
        totalBiaya += listKota.getAt(i).bus;
      }
    } else {
      for (let i = tujuanKota; i < asalKota; i++) {
        totalBiaya += listKota.getAt(i).bus;
      }
    }
  }
  if (kendaraan === "3" || kendaraan.toLowerCase() === "truk") {
    if (tujuanKota === asalKota) {
      totalBiaya = "Kamu harus memilih kota yang beberbeda!";
      continue;
    } else if (tujuanKota > asalKota) {
      for (let i = asalKota; i < tujuanKota; i++) {
        totalBiaya += listKota.getAt(i).truk;
      }
    } else {
      for (let i = tujuanKota; i < asalKota; i++) {
        totalBiaya += listKota.getAt(i).truk;
      }
    }
  }

  alert(
    `Total biaya yang akan dikeluarkan adalah Rp.${totalBiaya.toLocaleString(
      "id-ID"
    )}`
  );
}
