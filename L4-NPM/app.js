// console.log("Hello world!");
import chalk from "chalk";

console.log(chalk.blue.bgRed("Hello world!"));
console.log(chalk.black.bgBlue("Hello world!"));

// Using Template litteral

const pesan = `I add type="module" or not, there are always errors. However, 
in the official document of Spatial Illusions, there isn't any type="module". 
I'm now really confused. How do they manage to get it  adding the type?`;

console.log(chalk.bgWhite.italic(pesan));

// try {

//   //   const chalk = require("chalk");
//   //   console.log(validator.isMobilePhone("08330293390", "id-ID"));
//   console.log(validator.isNumeric("08330293390"));
//   console.log(chalk.bgBlue("Hello World!"));
// } catch (e) {
//   console.log(e);
// }
