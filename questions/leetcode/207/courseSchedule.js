/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = {};
    for (let i = 0; i < prerequisites.length; i++) {
        const curr = prerequisites[i][1];
        const next = prerequisites[i][0];
        if (curr in graph) {
            graph[curr].push(next);
        } else {
            graph[curr] = [next];
        }
    }

    for (let i = 0; i < numCourses; i++) {
        if (!(i in graph)) {
            graph[i] = [];
        }
    }

    const visited = new Set();
    const stack = new Set();

    const hasCycle = (course) => {
        if (stack.has(course)) {
            return true; // cycle
        }

        if (visited.has(course)) {
            return false;
        }

        visited.add(course);
        stack.add(course);

        for (let neighbor of graph[course]) {
            if (hasCycle(neighbor)) { 
                return true;
            }
        }

        stack.delete(course);
        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        if(hasCycle(i)) {
            return false;
        }
    }
    return true;
};

const numCourses1 = 2;
const prerequisites1 = [[0, 1]];
console.log(canFinish(numCourses1, prerequisites1) === true)

const numCourses2 = 2;
const prerequisites2 = [[0, 1], [1, 0]];
console.log(canFinish(numCourses2, prerequisites2) === false)

const numCourses3 = 5;
const prerequisites3 = [[0, 1], [2, 0], [3, 2], [4, 1]];
console.log(canFinish(numCourses3, prerequisites3) === true)

const numCourses4 = 3;
const prerequisites4 = [[0, 1], [1, 2], [2, 0]];
console.log(canFinish(numCourses4, prerequisites4) === false);

const numCourses5 = 3;
const prerequisites5 = [];
console.log(canFinish(numCourses5, prerequisites5) === true);
