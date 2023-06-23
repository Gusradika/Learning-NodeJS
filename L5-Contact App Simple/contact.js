// Core Module

// Fille System
const fs = require("fs");
const validator = require("validator");
const yargs = require("yargs");

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// Mkdir make directory
const dirPath = "./data";

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//membuat contact json jika not exist
const dataPath = "./data/contacts.json";

if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// Callback hell, tidak bagus
// rl.question("Masukan nama anda : ", (nama) => {
//   rl.question("Masukan notelp anda : ", (notelp) => {
//     rl.question("Masukan email anda :", (email) => {});
//     const contact = { nama, notelp };
//     const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
//     const contacts = JSON.parse(fileBuffer);
//     contacts.push(contact);

//     fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

//     console.log(notelp);
//     console.log(nama);
//     rl.close();
//   });
// });

// Solution Async Awaits

//Resolve terjadi jika fullfilled
// reject jika gagal
// const pertanyaan1 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukan nama anda : ", (nama) => {
//       resolve(nama);
//     });
//   });
// };

// const pertanyaan2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukan email anda : ", (email) => {
//       resolve(email);
//     });
//   });
// };

// const pertanyaan3 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukan notelp anda : ", (notelp) => {
//       resolve(notelp);
//     });
//   });
// };

// 1 dinamic case
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(`${pertanyaan}`, (result) => {
      resolve(result);
    });
  });
};

const loadContact = () => {
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

const simpanContact = (nama, email, noTelp) => {
  const contact = { nama, email, noTelp };
  //  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  //  const contacts = JSON.parse(fileBuffer);
  const contacts = loadContact();

  // Cek Duplicate
  // 1 cek dulu dari JSON
  const duplikat = contacts.find((contact) => contact.nama === nama); // mencari kedalam json
  if (duplikat) {
    console.log("Contact sudah terdaftar, gunakan nama lain!.");

    return false;
  }

  //cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log("Email tidak valid");
      return false;
    }
  }

  if (!validator.isMobilePhone(noTelp.toString(), "id-ID")) {
    console.log("noTelp tidak valid");
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
};

const listContact = () => {
  const contacts = loadContact();
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noTelp}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contact) {
    console.log("Tidak diTemukan!");
    return false;
  } else {
    console.log("Detail");
    console.log(`${contact.nama} - ${contact.noTelp}`);
  }
};

// not ES6 compatible. key dan value
// module.exports = {tulisPertanyaan : tulisPertanyaan, simpanContact : simpanContact};
module.exports = { tulisPertanyaan, simpanContact, listContact, detailContact };
