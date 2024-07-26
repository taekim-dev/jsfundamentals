import _ from 'lodash';

class Solution {

    getKey() {
        return "3lkdkau12*a!da"
    }
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        const key = this.getKey();
        for(let i = 0; i < strs.length-1; i++) {
            encoded += strs[i];
            encoded += key;
        }
        encoded += strs[strs.length-1];

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const key = this.getKey();
        const decoded = str.split(key);
        return decoded;
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
