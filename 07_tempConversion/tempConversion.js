const ftoc = function(tempF) {
  let tempC = (tempF-32)/1.8
  return parseFloat(tempC.toFixed(1))
};

const ctof = function(tempC) {
  let tempF = (tempC*1.8)+32
  return parseFloat(tempF.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
