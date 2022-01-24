function job(data) {
  return new Promise((resolve, reject) => {
    if (typeof data != "number") {
      reject("error");
    } else if (data % 2 === 0) {
      setTimeout(() => {
        reject("even");
      }, 2000);
    } else {
      setTimeout(() => {
        resolve("odd");
      }, 1000);
    }
  });
}

job("abc").then((value) =>
  console.log("aeee").catch((erro) => console.log("deu erro, amiguinho"))
);
