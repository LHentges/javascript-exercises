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

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
