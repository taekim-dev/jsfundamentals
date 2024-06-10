/**
 * interface Matcher {
 *  toBe(data: any): void
 * }
 */
/**
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
function myExpect(input) {
    return {
        toBe(data) {
            if (data !== input) {
                throw new Error();
            }
        },
        not: {
            toBe(data) {
                if (data === input) {
                    throw new Error();
                }
            }
        }
    }
}
  
  
try {
    myExpect(3).toBe(3);
    console.log('test1 passed');
} catch (e) {
    console.log('test1 failed');
}

try {
    myExpect(4).toBe(3);
    console.log('test2 failed');
} catch (e) {
    console.log('test2 passed');
}

try {
    myExpect(3).not.toBe(3);
    console.log('test3 failed');
} catch (e) {
    console.log('test3 passed');
}

try {
    myExpect(4).not.toBe(3);
    console.log('test4 passed');
} catch (e) {
    console.log('test4 failed');
}