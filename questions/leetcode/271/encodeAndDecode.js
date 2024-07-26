import _ from 'lodash';

class Solution {

    constructor() {
        this.key = this.generateKey();
    }

    generateKey() {
        return String.fromCharCode(257)
    }
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const key = this.key;
        return strs.join(key);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const key = this.key;
        return str.split(key)
    }
}

const solution = new Solution();
const input = ["neet","code","love","you"];
const encoded = solution.encode(input);
const decoded = solution.decode(encoded);
console.log(_.isEqual(input, decoded));

const solution2 = new Solution();
const input2 = ["we","say",":","yes"];
const encoded2 = solution2.encode(input2);
const decoded2 = solution2.decode(encoded2);
console.log(_.isEqual(input2, decoded2));
