const reverseString = function(inputString) {
    let reverseString = ''
    for (i=inputString.length; i>0; i--){
        reverseString+=inputString[i-1]
    }
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
