// Mengambil Argument dari Command Line
// argv = arugment
// const command = process.argv[2];
// cek library NPM Yargs.

const { type } = require("os");
const yargs = require("yargs");
const contacts = require("./contact");

yargs
  .command({
    command: "add",
    describe: "Menambahkan Contact",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "String",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "String",
      },
      noTelp: {
        describe: "No Telp",
        demandOption: true,
        type: "String",
      },
    },
    handler(argv) {
      // console.log(argv);
      contacts.simpanContact(argv.nama, argv.email, argv.noTelp);
    },
  })
  .demandCommand();

// menampilkan daftar Contact
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama & no HP contact",
  handler() {
    contacts.listContact();
  },
});

yargs.command({
  command: "detail",
  describe: "Menampilkan detail sebuah contact detail",
  builder: {
    nama: {
      describe: "nama Lengkap",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

yargs.parse();

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

// main();
