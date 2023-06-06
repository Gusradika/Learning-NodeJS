const getUserSync = (id) => {
  //   let nama = "";
  //   if (id === 1) {
  //     nama = "Aditya";
  //   } else {
  //     nama = "Kesuma";
  //   }
  const nama = id === 1 ? "Aditya" : "Kesuma";
  return { id, nama };
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = "Hello World!";
console.log(halo);
