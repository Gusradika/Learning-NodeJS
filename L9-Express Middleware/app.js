const express = require("express");
let ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const morgan = require("morgan");
// Sebuahh Library yang digunakna untuk struktur seperti index-layout.ejs / main-layout.ejs
const port = 3000;

// Gunakan EJS
app.set("view engine", "ejs");

// Third party Middleware
app.use(expressLayouts);
app.use(morgan("dev"));

// Application-Level Middleware
app.use((req, res, next) => {
  console.log("Time: " + Date.now());
  next();
});
// middleware kedua (middleware bisa lebih dari 1)
// middleware dijalankan dari Line 1 ke lain terakhir. maka next akan memberikan arahan bahwa kita harus menjalankan apa selanjutnya.
// maka konsepnya adalah jika kita meletakan middleware setelah route. maka middleware tidak akan jalan
// ini adalah application Level Middleware.
app.use((req, res, next) => {
  console.log("Time: " + Date.now());
  next();
});

// Built-in Middleware
app.use(express.static("public"));

// Route
app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Aditya Kesuma",
      email: "adityaKesuma@gmail.com",
    },
    {
      nama: "Aditya Kesuma2",
      email: "adityaKesuma@gmail.com",
    },
    {
      nama: "Aditya Kesuma3",
      email: "adityaKesuma@gmail.com",
    },
  ];
  res.render("index", {
    layout: "layouts/index-layout",
    nama: "Aditya Kesuma",
    title: "home",
    mahasiswa: mahasiswa,
  });
});

// tanpa next maka akan di console.log("ISI") tanpa redirect kedalam routing.
// jika memakai next meskipun tidak render page. maka akan di lanjutkan menuju Middleware 404
// krn kita tidak memiliki isian
app.get("/about", (req, res, next) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
  console.log("Halaman About");
  next();
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category : ${req.query.nameCat}`
  ); // params berlaku seperti ORM // query seperti $_GET
});

// middleware : pakai use
// ini akan selalu jalan untuk request apapun
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
