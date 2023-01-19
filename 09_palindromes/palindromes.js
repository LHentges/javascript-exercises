const palindromes = function (string) {
let cleanString = string.toLowerCase().replace(/[^a-z]/g, "")
let revCleanString = cleanString.split("").reverse().join("")
return cleanString == revCleanString
}

// Do not edit below this line
module.exports = palindromes;
