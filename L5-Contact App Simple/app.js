const contacts = require("./contact");

// object destructuring jadi tidak perlu menulis contacts di awal
const { tulisPertanyaan, simpanContact } = require("./contact");

const main = async () => {
  //   const nama = await pertanyaan1();
  //   const email = await pertanyaan2();
  //   const notelp = await pertanyaan3();

  // not object destructuring
  const nama = await contacts.tulisPertanyaan("Masukan nama anda : ");

  // ini adalah contoh penggunaan hasil dari object destructuring
  const email = await tulisPertanyaan("Masukan email anda : ");
  const noTelp = await tulisPertanyaan("Masukan noTelp anda : ");
  simpanContact(nama, email, noTelp);
};

main();
