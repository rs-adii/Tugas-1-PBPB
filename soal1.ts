export{}

const nim = "048782784";
const tinggi = parseInt(nim[nim.length - 1]); // Ambil digit terakhir

console.log("=== Pola Segitiga ===");
for (let i = 1; i <= tinggi; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += j + " ";
  }
  console.log(baris.trim());
}

