/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
};

const numCourses1 = 2;
const prerequisites1 = [[0, 1]];
console.log(canFinish(numCourses1, prerequisites1) === true)

const numCourses2 = 2;
const prerequisites2 = [[0, 1], [1,0]];
console.log(canFinish(numCourses2, prerequisites2) === false)

const numCourses3 = 5;
const prerequisites3 = [[0, 1], [2, 0], [3, 2], [4, 1]];
console.log(canFinish(numCourses3, prerequisites3) === true)

const numCourses4 = 5;
const prerequisites4 = [[0, 1], [4, 0], [3, 2], [4, 1]];
console.log(canFinish(numCourses4, prerequisites4) === false)