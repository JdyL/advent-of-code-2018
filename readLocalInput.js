var fs = require('fs');

let filename = 'input.txt';

var getInputFile = function getInputFile(){
    var contents = fs.readFileSync(filename, 'utf8');
    return contents;
};

var textToArray = function textToArray(input){
    return input.split("\n");
};

module.exports.getInputFile = getInputFile;
module.exports.textToArray = textToArray;