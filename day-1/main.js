let customModule = require('../readLocalInput');

const INPUT_FILE = customModule.textToArray(customModule.getInputFile());

const DUMMY_TEST = ['+14','+1','-12','-17','+17','-1'];

function stringToInt(input) {
    return parseInt(input) || 0;
}

var calculate = function calculate(input) {
    var result = 0;
    try {
        for (x in input) {
            result += stringToInt(input[x]);
        }
        return result;
    }
    catch(e) {
        console.log("Something went wrong ", e);
    }
}

console.log(calculate(INPUT_FILE));