import _ from 'lodash';

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    const results = [];

    function backtrack(start, currentCombination) {
        const currSum = arraySum(currentCombination);
        if (currSum === target) {
            results.push([...currentCombination]);
            return;
        }
        
        if (currSum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            currentCombination.push(candidates[i]);
            backtrack(i, currentCombination);
            currentCombination.pop();
        }

    }

    backtrack(0, []);

    return results;
};

var arraySum = function(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}

const candidates1 = [2,3,6,7];
const target1 = 7;

console.log(_.isEqual(combinationSum(candidates1, target1), [[2,2,3],[7]]));

const candidates2 = [2, 3, 5];
const target2 = 8;
console.log(_.isEqual(combinationSum(candidates2, target2), [[2, 2, 2, 2], [2, 3, 3], [3, 5]]));