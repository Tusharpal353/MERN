//rest i have used baki

function show(...baki) {
  console.log(baki);
  var s = 0;
  for (x of baki) {
    s = s + x;
    console.log(x);
  }
  console.log(`sum=${s}`);
}

show(11, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0, 20, 30, 4, 0, 50, 6, 0);

//spread
const sum = (n1, n2, n3, n4) => n1 + n2 + n3 + n4;
const arr = [11, 22, 3, 77];
console.log(`sum2=${sum(...arr)}`);

//destructuring assigment
//used to extract value from array

const nameList = ["techlive", "admin", "user"];
const [n1, n2, n3, n4] = nameList;

console.log(n1);
console.log(n2);
console.log(n3);
