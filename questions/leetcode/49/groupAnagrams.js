import _ from 'lodash';

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // To be implemented
    }
}

// Test cases
const solution = new Solution();

const strs1 = ["act", "pots", "tops", "cat", "stop", "hat"];
const output1 = [["hat"], ["act", "cat"], ["stop", "pots", "tops"]];
console.log(_.isEqual(solution.groupAnagrams(strs1), output1));

const strs2 = ["x"];
const output2 = [["x"]];
console.log(_.isEqual(solution.groupAnagrams(strs2), output2));

const strs3 = [""];
const output3 = [[""]];
console.log(_.isEqual(solution.groupAnagrams(strs3), output3));