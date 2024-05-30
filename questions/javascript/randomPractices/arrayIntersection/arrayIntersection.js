/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
export default function getIntersection(arr1, arr2) {
    // const set1 = new Set(arr1);
    // const set2 = new Set(arr2);

    // const res = [];
    // set1.forEach(element => {
    //     if(set2.has(element)) {
    //         res.push(element);
    //     }
    // })

    // return res;
    const res = new Set();
    const set1 = new Set(arr1.map(element => typeof element === 'object' ? JSON.stringify(element) : element));
    arr2.forEach(element => {
        const key = typeof element === 'object' ? JSON.stringify(element) : element;
        if (set1.has(key)){
            res.add(element);
        }
    })
    return Array.from(res);
}


  