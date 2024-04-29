# Question: Implement `arrayMap`

Implement a function called `arrayMap` that behaves like the native `Array.prototype.map` function. Your function should take an array and a callback function as parameters and return a new array where each element is the result of calling the callback on each element of the input array.

## Requirements:

- The function `arrayMap` must not use the built-in `Array.prototype.map`.
- It should work for arrays containing any type of elements.
- It should properly pass the element, index, and original array to the callback function.

## Example Usage:

```javascript
const numbers = [1, 2, 3];
const doubled = arrayMap(numbers, (item) => item * 2);
console.log(doubled); // Should output: [2, 4, 6]
```
