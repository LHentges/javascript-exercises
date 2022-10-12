const sumAll = function(startNum, lastNum) {
    let returnSum = 0
    if (startNum>lastNum){
        let smallNum = lastNum
    } else {
        let smallNum = startNum
    }
    for (let i=smallNum; i<startNum+lastNum; i++){
        returnSum+=i
    }
    return returnSum
};

// Do not edit below this line
module.exports = sumAll;
