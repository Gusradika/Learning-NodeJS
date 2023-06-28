// Install ExpressJS Framework dengan cara
// npm install express

// docs : expressjs.com

const express = require("express");
const app = express();
const port = 3000;

// Route
app.get("/", (req, res) => {
  // res.send("Hello World!");
  // res.json({
  //   nama: "Aditya Kesuma",
  //   email: "adityaKesuma@gmail.com",
  //   noHP: "081330293390",
  // });
  res.sendFile("./index.html", { root: __dirname }); // root : __dirname artinya relatif terhadap file ini app.js
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  // console.log(req.ip);
  // console.log(req.route);
  // console.log(req.hostname);
  res.sendFile("./contact.html", { root: __dirname });
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
