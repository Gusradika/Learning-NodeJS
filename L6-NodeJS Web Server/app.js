const fs = require("fs");
const http = require("http");
const port = 3000;

const renderHTML = (path, res) => {
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.writeHead(404);
      res.write("Error File Not Found");
    } else {
      res.write(data);
    }
    res.end(); // Menambahkan res.end() di sini
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const url = req.url;

    if (url === "/about") {
      renderHTML("./about.html", res);
    } else if (url === "/contact") {
      res.write(
        '<h1>Ini adalah halaman Contact</h1><br><a href="/about">about</a>'
      );
      res.end();
    } else {
      renderHTML("./index.html", res);
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

// Menggunakan Switchh Case

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const url = req.url;

    switch (url) {
      case "/about":
        renderHTML("./about.html", res);
        break;
      case "/contact":
        renderHTML("./contact.html", res);
        break;
      case "/index":
        renderHTML("./index.html", res);
        break;
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

//   Pertanyaan
//  kenapa port 3000. sebenernya banyak port yang bisa dipakai dan kita tidak tahu port mana yang
// sudah dipakai. maka kita bermain aman dan menggunakan port 3000.
