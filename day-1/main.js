let customModule = require('../readLocalInput');

const INPUT_FILE = customModule.textToArray(customModule.getInputFile());

const DUMMY_TEST = ['+1','-2','+3','+1','+1','-2'];
const DUMMY_TEST_2 = ['+3','+3','+4','-2','-4'];
const DUMMY_TEST_3 = ['-6','+3','+8','+5','-6'];
const DUMMY_TEST_4 = ['+7','+7','-2','-7','-4'];

//// Part 2 variables
var partTwoAddition = 0;
var partTwoArray = [];

function stringToInt(input) {
    return parseInt(input) || 0;
}

var partOne = function partOne(input) {
    //addition of the array
    let result = 0;
    for (var x = 0; x<input.length;x++) {
        if (input[x] !== '') {
        result += stringToInt(input[x]);
        }
    }
    return result;
}

var partTwo = function partTwo(input) {
    for (var x = 0; x<input.length;x++) {
        if (input[x] !== '') {
            partTwoAddition += stringToInt(input[x]);
            partTwoArray.push(partTwoAddition);

            let checkOccurence = findSameOccurence(partTwoArray, partTwoAddition);

            if (!(checkOccurence === false)) {
                return checkOccurence;
            }
        }
    }

    return partTwo(input);
}

function findSameOccurence(input, value) {
    // console.log(input,value);
    for (var i = input.length-2;i>=0;i--) {
        if (value == input[i]) {
            // console.log(i,j)
            return value;
        }
    }
    return false;
}


try {
    // console.log(partOne(INPUT_FILE));
    // console.log(partTwo(DUMMY_TEST));
    // console.log('The answer is:', partTwo(DUMMY_TEST_2));
    // console.log('The answer is:', partTwo(DUMMY_TEST_3));
    // console.log('The answer is:', partTwo(DUMMY_TEST_4));
    // console.log('The answer is:', partTwo(INPUT_FILE));
    console.log(partTwo(INPUT_FILE));
}
catch(e) {
    console.log("Something went wrong ", e);
}