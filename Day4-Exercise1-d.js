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
  var arr = userInput[0].split(' ').map(Number)

  const getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
  };

  console.log(getPrimeNumbers(arr))
});