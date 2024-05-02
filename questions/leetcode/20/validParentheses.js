// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(string){
    const bracketMap = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    const stack = [];
    for (let char of string){
        if (bracketMap[char]){
            stack.push(char);
        } else {
            if(stack.length === 0) return false;

            const lastOpen = stack.pop();
            if (char !== bracketMap[lastOpen]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

module.exports = isValid;