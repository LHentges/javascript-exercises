const sumAll = function(startNum, lastNum) {
    let returnSum = 0
    let smallNum = startNum
    if (startNum<0 || lastNum<0){
        return "ERROR"
    }
    if (!Number.isInteger(startNum) || !Number.isInteger(lastNum)){
        return "ERROR"
    }
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
