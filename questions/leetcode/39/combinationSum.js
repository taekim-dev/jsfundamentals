import _ from 'lodash';

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
};

const candidates1 = [2,3,6,7];
const target1 = 7;

console.log(_.isEqual(combinationSum(candidates1, target1), [[2,2,3],[7]]));

const candidates2 = [2,3,5];
const target2 = 8;

console.log(_.isEqual(combinationSum(candidates2, target2), [[[2,2,2,2],[2,3,3],[3,5]]]));

