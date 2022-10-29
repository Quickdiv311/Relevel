let grid = [
    [1,1,0],
    [1,1,1],
    [0,1,1]
];
let visited = [];
for(let i=0;i<grid.length;i++)
{
    let temp = Array(grid[0].length).fill(false);
    visited.push(temp);
}

function ratMaze(i,j)
{
    let m = grid.length;
    let n =grid[0].length;

    if(i===m-1 && j===n-1)
    return 1;

    if(i<0 || j<0 || i>=m || j>=n || grid[i][j]===0 || visited[i][j]===true)
    return 0;

    visited[i][j] = true;
    let ans = 0;
    ans += ratMaze(i,j+1);
    ans += ratMaze(i+1,j);
    ans += ratMaze(i,j-1);
    ans += ratMaze(i-1,j);
    visited[i][j] = false;

    return ans;
}

console.log(ratMaze(0,0));