//Print odd numbers in an array
const { skip } = require("node:test");
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
    var arr = userInput[0].split(" ").map(function (ele){if(Number(ele) % 2 != 0){return ele}}).filter(function (ele){return ele != undefined});
    var printArr = function (i){for(i of arr){console.log(i)}}
    printArr(arr)
});
