// Return all the prime numbers in an array
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
    //Input format:1 2 3 4 5 6 7 9 11 12 13
    var arr = userInput[0].split(' ').map(Number);

    const getPrimeNumbers = arr => arr.filter(num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });

    console.log(getPrimeNumbers(arr))
});
