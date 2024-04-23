//min and max
var a = [959, 22, 32, 42, 52];
var min = a[0];
var max = a[0];

for (var i = 0; i < 5; i++) {
  if (min > a[i]) {
    min = a[i];
  }
  if (max < a[i]) {
    max = a[i];
  }
}
console.log(`min value is ${min}`);
console.log(`max value is ${max}`);

function highlight(e) {
  e.style.background = "Red";
}
