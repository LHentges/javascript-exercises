const findTheOldest = function(array) {
    let oldestPerson = {}
    array.reduce(function(currentOldAge, arrayItem){
        if (!arrayItem.hasOwnProperty('yearOfDeath')){
            const d = new Date();
            arrayItem.yearOfDeath = d.getFullYear(); 
        }
        let personAge = arrayItem.yearOfDeath - arrayItem.yearOfBirth
        if (personAge > currentOldAge){
            oldestPerson = arrayItem
            currentOldAge = personAge
        }
        return currentOldAge
    }, 0)
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
