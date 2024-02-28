function sum() {
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);

  var ans1 = n1 + n2;
  document.getElementById("result").innerHTML = ans1;
}

function sub() {
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);

  var ans2 = n1 - n2;
  document.getElementById("result").innerHTML = ans2;
}

function mul() {
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);

  var ans3 = n1 * n2;
  document.getElementById("result").innerHTML = ans3;
}

function div() {
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);

  var ans4 = n1 / n2;
  document.getElementById("result").innerHTML = ans4;
}

function mod() {
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);

  var ans5 = n1 % n2;
  document.getElementById("result").innerHTML = ans5;
}

// var nn = document.getElementById("result").innerHTML;
// var nnn = "Please enter a value";
// if (isNaN(nn)) {
//   nn = Number(nn);
// } else {
//   console.log("hhhhhh");
// }
// console.log(Number(null));
