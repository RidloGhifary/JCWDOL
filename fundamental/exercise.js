class Main {
  static calculateTol() {
    const validTolls = [
      "surabaya",
      "ngawi",
      "solo",
      "batang",
      "palimanan",
      "cikampek",
      "jakarta",
    ];

    const validVehicle = ["mobil", "truk", "bus"];

    let entryGate = prompt(
      "Masukkan gerbang tol masuk (Surabaya/Ngawi/Solo/Batang/Palimanan/Cikampek/Jakarta)"
    );
    let isValidEntryGate = false;
    while (!isValidEntryGate) {
      if (!validTolls.includes(entryGate.toLowerCase())) {
        isValidEntryGate = false;
        entryGate = prompt(
          "Masukkan gerbang tol masuk (Surabaya/Ngawi/Solo/Batang/Palimanan/Cikampek/Jakarta)"
        );
      } else {
        isValidEntryGate = true;
      }
    }

    let exitGate = prompt(
      "Masukkan gerbang tol keluar (Surabaya/Ngawi/Solo/Batang/Palimanan/Cikampek/Jakarta)"
    );
    let isValidExitGate = false;
    while (!isValidExitGate) {
      if (!validTolls.includes(exitGate.toLowerCase())) {
        isValidExitGate = false;
        exitGate = prompt(
          "Masukkan gerbang tol keluar (Surabaya/Ngawi/Solo/Batang/Palimanan/Cikampek/Jakarta)"
        );
      } else {
        isValidExitGate = true;
      }
    }

    let vehicleType = prompt("Masukkan jenis kendaraan Anda (mobil/bus/truk):");
    let isValidVehicleType = false;
    while (!isValidVehicleType) {
      if (!validVehicle.includes(vehicleType.toLowerCase())) {
        isValidVehicleType = false;
        vehicleType = prompt("Masukkan jenis kendaraan Anda (mobil/bus/truk):");
      } else {
        isValidVehicleType = true;
      }
    }

    return { entryGate, exitGate, vehicleType };
  }

  static calculateTolPrice(data) {
    if (!data) {
      alert("Data is not valid");
      return;
    }

    const { entryGate, exitGate, vehicleType } = data;

    const tollFees = {
      "surabaya-ngawi": { mobil: 125000, bus: 150000, truk: 160000 },
      "ngawi-solo": { mobil: 55000, bus: 60000, truk: 70000 },
      "solo-batang": { mobil: 35000, bus: 50000, truk: 55000 },
      "batang-palimanan": { mobil: 155000, bus: 16000, truk: 190000 },
      "palimanan-cikampek": { mobil: 90000, bus: 110000, truk: 130000 },
      "cikampek-jakarta": { mobil: 35000, bus: 40000, truk: 50000 },
    };

    let totalTollFee = 0;
    let currentGate = entryGate;
    let currentBackGate = entryGate;

    while (currentGate !== exitGate) {
      const key = currentGate + "-" + exitGate;
      if (tollFees[key]) {
        totalTollFee += tollFees[key][vehicleType];
        break;
      } else {
        let nextGate;
        let foundRoute = false;

        for (const route in tollFees) {
          if (route.startsWith(currentGate + "-")) {
            nextGate = route.split("-")[1];
            totalTollFee += tollFees[currentGate + "-" + nextGate][vehicleType];
            currentGate = nextGate;
            foundRoute = true;
            break;
          }
        }

        if (!foundRoute) {
          totalTollFee = 0;
          const reversedKey = exitGate + "-" + entryGate;
          if (tollFees[reversedKey]) {
            totalTollFee += tollFees[reversedKey][vehicleType];
            break;
          } else {
            let nextBackGate;
            for (const route in tollFees) {
              if (route.endsWith("-" + currentBackGate)) {
                nextBackGate = route.split("-")[0];
                totalTollFee +=
                  tollFees[nextBackGate + "-" + currentBackGate][vehicleType];
                currentBackGate = nextBackGate;
                foundRoute = false;
                break;
              }
            }
          }
        }
      }
    }

    console.log(totalTollFee);
    return totalTollFee;
  }
}

do {
  const ridlo = Main.calculateTol();
  const price = Main.calculateTolPrice(ridlo);
  alert(
    `${ridlo.entryGate}-${ridlo.exitGate}(${
      ridlo.vehicleType
    }) - Rp. ${price.toLocaleString("id")}`
  );
} while (true);
