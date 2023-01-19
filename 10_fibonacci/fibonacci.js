const fibonacci = function(fibNum) {
    if (fibNum <= 0){
        return "OOPS"
    }
    let prevStepOne = 1
    let prevStepTwo = 1
    let currentFib = 1
    if (fibNum != 1 && fibNum != 2){
        for (let i = 2; i < fibNum; i++){
            currentFib = prevStepOne+prevStepTwo
            prevStepTwo = prevStepOne
            prevStepOne = currentFib
        }
    }
    return currentFib    
};

// Do not edit below this line
module.exports = fibonacci;
