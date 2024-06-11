/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length;
    const columns = grid[0]?.length;
    const visited = Array.from( {length: rows }, () => Array(columns).fill(0));
    let islandCount = 0;

    const dfs = (i, j) => {
        if (i < 0 || i >= rows || j < 0 || j >= columns || grid[i][j] === '0' || visited[i][j]){
            return;
        }

        visited[i][j] = true;

        dfs(i-1, j);
        dfs(i+1, j);
        dfs(i, j-1);
        dfs(i, j+1);
    };

    for (let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if (grid[i][j] === '1' && !visited[i][j]){
                islandCount++;
                dfs(i, j);
            }
        }
    }

    return islandCount;
};


const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]

console.log(numIslands(grid1) === 1);
  
const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]

console.log(numIslands(grid2) === 3);

  