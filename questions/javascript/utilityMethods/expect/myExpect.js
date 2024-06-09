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
    
}
  
  
  
expect(3).toBe(3) // ✅
expect(4).toBe(3) // ❌
expect(3).not.toBe(3) // ❌
expect(4).not.toBe(3) // ✅