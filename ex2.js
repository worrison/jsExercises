// Take an array of numbers and make them strings
// Example input [2, 5, 100] ex output: ["2", "5", "100"]

function stringItUp(numbers){
    // your code here
    let array=numbers.map(function(x)
    {
        x=""+x;
        console.log(x);
        return  x; 
    })
    console.log(array);
}




const test = require('./tools/test');

test(stringItUp, [[2, 5, 100]], ["2", "5", "100"]);
test(stringItUp, [[]], []);
test(stringItUp, [[1]], ["1"]);