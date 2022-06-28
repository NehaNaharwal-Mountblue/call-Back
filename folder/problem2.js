let fs = require("fs");
let path = require("path");

//solution1
function callbackProblem2(){
fs.readFile("/lipsum.txt", "utf-8", function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            console.log(data)
        }
    });

};
module.exports = callbackProblem2;
