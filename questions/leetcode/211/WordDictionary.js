
var WordDictionary = function() {
    
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
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
console.log (wordDictionary2.search("g") === true)
console.log (wordDictionary2.search("put") === false)
console.log (wordDictionary2.search("p..h") === true)
console.log (wordDictionary2.search("..t") === true)
console.log (wordDictionary2.search("b..") === false)