import { isPalindrome } from './isPalindrome.js';

test('An empty string is a palindrome', () => {
    expect(isPalindrome('')).toBe(true);
});

test('A single character string is a palindrome', () => {
    expect(isPalindrome('a')).toBe(true);
});

test('A simple palindrome string', () => {
    expect(isPalindrome('racecar')).toBe(true);
});

test('A simple non-palindrome string', () => {
    expect(isPalindrome('hello')).toBe(false);
});

test('A palindrome string with mixed case', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
});

test('A palindrome string with spaces', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
});

test('A non-palindrome string with spaces', () => {
    expect(isPalindrome('This is not a palindrome')).toBe(false);
});
