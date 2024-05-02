// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(string){
    const ParenthesesMap = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    const stack = [];
    for (let paren of string){
        if (ParenthesesMap.hasOwnProperty(paren)){
            stack.push(paren);
        } else {
            const openParenthese = stack.pop();
            if (paren !== ParenthesesMap[openParenthese]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

module.exports = isValid;