/**
 * @param {Array<any>} list
 * @returns {void}
 */
// function moveZeros(list) {
//     if (list.length < 2) return list;

//     let zeroCount = 0;
//     let i = 0;
//     //first pass: move non zeros forward
//     for(let j = 0; j < list.length; j++) {
//         if (list[j] !== 0) {
//             list[i] = list[j];
//             i++;
//         } else {
//             zeroCount++;
//         }
//     }

//     //second pass: add zeroes
//     while (zeroCount > 0) {
//         list[i] = 0;
//         i++;
//         zeroCount--;
//     }

//     return list;
// }
  

function moveZeros(list) {
    let nextNonZeroPosition = 0;

    for(let i = 0; i < list.length; i++) {
        if (list[i] !== 0) {
            [list[nextNonZeroPosition], list[i]] = [list[i], list[nextNonZeroPosition]];
            nextNonZeroPosition++;
        }
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

const list4 = [1,0,2,0,3,0,4,0]
moveZeros(list4) 
console.log(list4) // [1,2,3,4,0,0,0,0]