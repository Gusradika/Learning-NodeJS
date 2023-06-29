const express = require("express");
const app = express();
// Sebuahh Library yang digunakna untuk struktur seperti index-layout.ejs / main-layout.ejs
const expressLayouts = require("express-ejs-layouts");
const port = 3000;
let ejs = require("ejs");

// Gunakan EJS
app.set("view engine", "ejs");
app.use(expressLayouts);

// Route
app.get("/", (req, res) => {
  // res.send("Hello World!");
  // res.json({
  //   nama: "Aditya Kesuma",
  //   email: "adityaKesuma@gmail.com",
  //   noHP: "081330293390",
  // });
  // res.sendFile("./index.html", { root: __dirname });
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

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  // console.log(req.ip);
  // console.log(req.route);
  // console.log(req.hostname);
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
