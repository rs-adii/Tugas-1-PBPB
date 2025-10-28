export {}
const nim = "048782784";
const duaDigit = parseInt(nim.slice(-2)); // 84
const batas = duaDigit + 10;  // 94



console.log("\n=== Bilangan Prima ===");
for (let i = 2; i <= batas; i++) {
    let prima = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if(i % j === 0) { 
        prima = false;
        break;
        }
    }
    if (prima) process.stdout.write(i + " ");
}

console.log();