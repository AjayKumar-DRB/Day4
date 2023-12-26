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
    //Input format:1 2 3 4 5 6
    var arr = userInput[0].split(' ')

    const sumOfNumbers = arr => arr.reduce((sum, num) => Number(sum) + Number(num), 0);

    console.log(sumOfNumbers(arr))
});
