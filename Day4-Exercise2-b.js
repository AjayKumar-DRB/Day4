//Convert all the strings to title caps in a string array
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
    var arr = userInput[0].split(' ')
    const convertToTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

    console.log(convertToTitleCaps(arr).join(' '));
});