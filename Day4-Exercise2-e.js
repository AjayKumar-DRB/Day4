// Return all the palindromes in an array
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
    //Input format:level kayak hello pop
    var arr = userInput[0].split(' ');

    const getPalindromes = arr => arr.filter(str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  });

    console.log(getPalindromes(arr));
});
