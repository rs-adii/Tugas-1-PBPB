"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nim = "048782784";
var tinggi = parseInt(nim[nim.length - 1]); // Ambil digit terakhir
console.log("=== Pola Segitiga ===");
for (var i = 1; i <= tinggi; i++) {
    var baris = "";
    for (var j = 1; j <= i; j++) {
        baris += j + " ";
    }
    console.log(baris.trim());
}
