// Core Module

// Fille System
const fs = require("fs");

// console.log(fs);

// menuliskan String ke fille (Synchronous)
// cara bekerja : akan mencari jika tidak ada maka akan write. jika sdh ada maka akan ditimpa
// jika folder tidak ada maka tidak akan jalan.

// try {
//   fs.writeFileSync("test.txt", "Hello World!");
// } catch (e) {}

// Asynchronous bersifat non blocking.
// menuliskan string ke file (asynchronous)
fs.writeFileSync("test.txt", "Hello world secara async", (e) => {
  console.log(e);
});

// Membaca isi file(synchronous)
// Membaca isi file(synchronous)
// Membaca isi file(synchronous)
// Membaca isi file(synchronous)
// Membaca isi file(synchronous)
const data = fs.readFileSync("test.txt");
// atau
// console.log(fs.readFileSync("test.txt"));

// yang di cetak adalah Buffer dan bukan isinya maka kita harus rubah ke String file
console.log(data);
console.log(data.toString());

// Kita dapat merubah encodingnya menjadi UTF-8 yang artinya kita tidak perlu toString lagi.
const data2 = fs.readFileSync("test.txt", "utf-8");
console.log(data2);

// Aynchronously Read File
// Aynchronously Read File
// Aynchronously Read File
// Aynchronously Read File
// Aynchronously Read File

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("data3 : " + data);
});

// Readline
// Readline
// Readline
// Readline

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan nama anda : ", (nama) => {
  rl.question("Masukan notelp anda : ", (notelp) => {
    console.log(notelp);
    console.log(nama);
    rl.close();
  });
});
