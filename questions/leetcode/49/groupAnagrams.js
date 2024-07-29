import _ from 'lodash';

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            const sortedStr = str.split('').sort().join('');
            if (map.has(sortedStr)) {
                map.get(sortedStr).push(str);
            } else {
                map.set(sortedStr, [str]);
            }
        }

        return Array.from(map.values());
    }
}

const solution = new Solution();

const strs1 = ["act", "pots", "tops", "cat", "stop", "hat"];
const output1 = [["hat"], ["act", "cat"], ["stop", "pots", "tops"]];
console.log(areAnagramGroupsEqual(solution.groupAnagrams(strs1), output1));

const strs2 = ["x"];
const output2 = [["x"]];
console.log(_.isEqual(solution.groupAnagrams(strs2), output2));

const strs3 = [""];
const output3 = [[""]];
console.log(_.isEqual(solution.groupAnagrams(strs3), output3));

function areAnagramGroupsEqual(actual, expected) {
    if (actual.length !== expected.length) return false;

    const normalize = (arr) => arr.map(group => group.sort()).sort();

    actual = normalize(actual);
    expected = normalize(expected);

    return _.isEqual(actual, expected);
}
