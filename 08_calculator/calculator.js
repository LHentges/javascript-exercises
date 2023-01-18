const add = function(a, b) {
  return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(array) {
  let totalSum = array.reduce((total, current) => {
    return total + current
  }, 0)
  return totalSum
}

const multiply = function(array) {
  let totalProduct = array.reduce(function(returnedValue, currentArrayValue){
    let currentTotal = returnedValue*currentArrayValue
    return currentTotal
  }, 1)
  return totalProduct

};

const power = function(a, b) {
  return a ** b
};

const factorial = function(factor) {
  let total = 1
  if (factor !== 0 && factor !== 1){
    for (let i = 2; i<=factor; i++){
      total*=i
    }
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
