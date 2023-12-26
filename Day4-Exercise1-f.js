// Return median of two sorted arrays of the same size.
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
  var arr1 = userInput[0].split(' ').map(Number);
  var arr2 = userInput[1].split(' ').map(Number);

  const getMedian = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const midIndex = Math.floor(mergedArray.length / 2);
    
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    } else {
        return mergedArray[midIndex];
    }
  };

  console.log(getMedian(arr1,arr2));
});