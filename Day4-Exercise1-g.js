// Remove duplicates from an array
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

  const removeDuplicates = function(arr) {
    var uniqueArray = [];
    arr.forEach(function(element) {
        // Check if the element is not already in the uniqueArray
        if (uniqueArray.indexOf(element) === -1) {
            uniqueArray.push(element);
        }
    });
    return uniqueArray;
  };
  console.log(removeDuplicates(arr));
});