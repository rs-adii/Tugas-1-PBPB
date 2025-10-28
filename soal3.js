"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nim = "048782784";
var duaDigit = parseInt(nim.slice(-2));
var batas = duaDigit + 10;
console.log("\n=== Bilangan Prima ===");
for (var i = 2; i <= batas; i++) {
    var prima = true;
    for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            prima = false;
            break;
        }
    }
    if (prima)
        process.stdout.write(i + " ");
}
console.log();
