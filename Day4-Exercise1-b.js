// Convert all the strings to title caps in a string array
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
  //Input format:this is a demo string
  var arr = userInput[0].toLowerCase().split(' ')
  
  const convertToTitleCaps = (function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });


  console.log(arr.map(convertToTitleCaps).join(' '))
});
