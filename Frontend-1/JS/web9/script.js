function greet() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("techlie");
      resolve();
    }, 1000);
  });
}
function intro() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("hello");
      resolve();
    }, 1000);
  });
}
function question() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("question solved");
      resolve();
    }, 1000);
  });
}

greet()
  .then(() => intro())
  .then(() => question())
  .then(() => console.log("Done"));
