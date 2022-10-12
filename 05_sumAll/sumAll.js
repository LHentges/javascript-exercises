const sumAll = function(startNum, lastNum) {
    let returnSum = 0
    let smallNum = startNum
    if (startNum>lastNum){
        smallNum = lastNum;
    }
    for (let i=smallNum; i<startNum+lastNum; i++){
        returnSum+=i
    }
    return returnSum
};

// Do not edit below this line
module.exports = sumAll;
