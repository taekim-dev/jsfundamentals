/**
 * @param {Array<any>} list
 * @returns {void}
 */
function moveZeros(list) {
    if (list.length < 2) return list;
    let zeroCount = 0;
    let i = 0;

    for (let j  = 0; j < list.length; j++) {
        if (list[j] !== 0) {
            list[i] = list[j];
            i++;
        } else {
            zeroCount++;
        }
    }

    while (zeroCount > 0) {
        list[i] = 0;
        i++;
        zeroCount--;
    }

    return list;
}
  


const list = [1,0,0,2,3]
moveZeros(list) 
console.log(list) // [1,2,3,0,0]

const list2 = [0,0,0,0,5,4,3,2,1]
moveZeros(list2) 
console.log(list2) // [5,4,3,2,1,0,0,0,0]

const list3 = []
moveZeros(list3) 
console.log(list3) // []