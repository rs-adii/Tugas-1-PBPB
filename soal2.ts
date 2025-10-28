export{}

const nim = "048782784";
const duaDigitTerakhir = parseInt(nim.slice(-2)); // ambil 2 digit terakhir (84)
const digitKetigaDariBelakang = parseInt(nim[nim.length - 3]); // ambil digit ke-3 dari belakang (2)
const beda = digitKetigaDariBelakang + 1; // beda = 3
const jumlah = 10; // tampilkan 10 angka pertama

console.log("=== Deret Aritmatika dari NIM " + nim + " ===");
console.log("Angka awal =", duaDigitTerakhir);
console.log("Beda =", beda);
console.log();

let deret = "";
for (let i = 0; i < jumlah; i++) {
  deret += (duaDigitTerakhir + i * beda) + ", ";
}
console.log(deret.slice(0, -2));
