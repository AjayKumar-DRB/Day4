// Rotate an array by k times
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //Input format:1 2 3 4 5 6
  //             2
  //First line contains the array and the second line contains the number of rotations
  var arr = userInput[0].split(' ');
  var rotation = Number(userInput[1]);

  const rotateArray = function(arr, k) {
  const rotations = k % arr.length;
  return arr.slice(rotations).concat(arr.slice(0, rotations));
  }
  
  console.log(rotateArray(arr,rotation));
});
