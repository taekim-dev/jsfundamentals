/**
 * @param {any} x
 * @return {number}
 */
function mySqrt(x) {
    if (isNaN(x) || x < 0) return NaN;
    if (x === 0) return 0;

    let left = 1
    let right = Math.floor(x / 2) + 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

console.log(mySqrt(0)=== 0)
console.log(mySqrt(1)=== 1)
console.log(mySqrt(2)=== 1)
console.log(mySqrt(4)=== 2)
console.log(mySqrt(50000)=== 223)
console.log(Object.is(mySqrt(NaN), NaN))
console.log(Object.is(mySqrt(-1), NaN));