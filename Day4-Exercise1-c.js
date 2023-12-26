// Sum of all numbers in an array
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
  var arr = userInput[0].split(' ');

  const sumOfNumbers = function(arr) {
    return arr.reduce(function(sum, num) {
        return Number(sum) + Number(num);
    }, 0);
};
  console.log(`The sum of the array is ${sumOfNumbers(arr)}`);
});