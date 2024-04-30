// Given an integer array nums, 
// return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

function containDuplicate(array){
    if (array.length < 2){
        return false;
    }
    
    const nonDuplicate = new Set();
    for(const element of array){
        if (nonDuplicate.has(element)){
            return true;
        }
        nonDuplicate.add(element);
    }

    return false;
}

module.exports = containDuplicate;
