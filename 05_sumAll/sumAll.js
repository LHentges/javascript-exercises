const sumAll = function(startNum, lastNum) {
    let returnSum = 0
    for (let i=startNum; i<startNum+lastNum; i++){
        returnSum+=i
    }
    return returnSum
};

// Do not edit below this line
module.exports = sumAll;
