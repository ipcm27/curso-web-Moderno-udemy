function job() {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello world");
    }, 2000);
  });
  return promise;
}

const button3 = document.querySelector("#btn3");

button3.addEventListener("click", function () {
  job();
});
