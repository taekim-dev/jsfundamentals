/**
 * @param {any} x
 * @return {number}
 */
function mySqrt(x) {
    if (isNaN(x) || x < 0) return NaN;

    for(let i = 0; i <= x; i++){
        const curr = (i * i);
        const next = ((i+1) * (i+1));

        if (curr <= x && x < next) return i;
    }

}

console.log(mySqrt(0)=== 0)
console.log(mySqrt(1)=== 1)
console.log(mySqrt(2)=== 1)
console.log(mySqrt(4)=== 2)
console.log(mySqrt(50000)=== 223)
console.log(Object.is(mySqrt(NaN), NaN))
console.log(Object.is(mySqrt(-1), NaN));