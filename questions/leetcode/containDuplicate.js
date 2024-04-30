// Given an integer array nums, 
// return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

function containDuplicate(array){
    if (array.length < 2){
        return false;
    }
    console.log(array);
    const nonDuplicate = new Set(array);
    return nonDuplicate.size !== array.length;
}

module.exports = containDuplicate;
