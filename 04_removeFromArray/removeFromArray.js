const removeFromArray = function(inputArray, ...args) {
    for (const arg of args){
        index = inputArray.indexOf(arg)
        if (index!==-1){
            inputArray.splice(index, 1)
        }
    }
    return inputArray
};

// Do not edit below this line
module.exports = removeFromArray;
