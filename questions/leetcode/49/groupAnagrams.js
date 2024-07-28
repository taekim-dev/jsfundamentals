import _ from 'lodash';

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        const status = new Array(strs.length).fill(false);
        const res = [];

        for(let i = 0; i < strs.length; i++) {
            if (status[i]) continue;

            let current = [strs[i]];
            status[i] = true;

            for (let j = i + 1; j < strs.length; j++) {
                if (this.isAnagram(strs[i], strs[j])) {
                    current.push(strs[j]);
                    status[j] = true;
                }
            }

            res.push(current);
        }

        return res;

    }

    isAnagram(str1, str2) {
        if (str1.length !== str2.length) return false;

        str1 = str1.split('').sort().join('');
        str2 = str2.split('').sort().join('');

        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) return false;
        }

        return true;
    }
}

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