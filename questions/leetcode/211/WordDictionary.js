
var WordDictionary = function() {
    this.dict = {};
    // [a] : {[b] : { [c, d]}...}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.dict;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!curr[char]) {
            curr[char] = {};
        }
        curr = curr[char];
    }
    curr.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const searchInNode = (node, word, index) => {
        if (index === word.length) {
            return node.isEnd === true;
        }

        const char = word[index];
        
        if (char === '.') {
            for(let key in node) {
                if (key !== 'isEnd' && searchInNode(node[key], word, index + 1)){
                    return true;
                }
            }
        } else {
            if (node[char] && searchInNode(node[char], word, index + 1)) {
                return true;
            }
        }
        
        return false;
    }

    return searchInNode(this.dict, word, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log (wordDictionary.search("pad") === false)
console.log (wordDictionary.search("bad") === true)
console.log (wordDictionary.search(".ad") === true)
console.log (wordDictionary.search("b..") === true)

const wordDictionary2 = new WordDictionary();
wordDictionary2.addWord("cat");
wordDictionary2.addWord("push");
wordDictionary2.addWord("dog");
console.log (wordDictionary2.search("g") === false)
console.log (wordDictionary2.search("put") === false)
console.log (wordDictionary2.search("p..h") === true)
console.log (wordDictionary2.search("..t") === true)
console.log (wordDictionary2.search("b..") === false)

const worldDictionary3 = new WordDictionary();
worldDictionary3.addWord("abcdefghijklmnop");
worldDictionary3.addWord("qrstuvwxyz");
console.log (worldDictionary3.search("defghijkl") === false)
console.log (worldDictionary3.search("vwxy") === false)
console.log (worldDictionary3.search("pqrstuv") === false)
console.log (worldDictionary3.search("...t") === false)
console.log (worldDictionary3.search("....t") === false)