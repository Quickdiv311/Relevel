let n = 6;
let grid = [];
for(let i=0;i<n;i++)
{
    let temp = Array(n).fill(0);
    grid.push(temp);
}

function canPlace(r,c)
{
  for(let i=r-1;i>=0;i--)
  {
    if(grid[i][c] === 1)
    return false;
  }

   for(let i=r-1,j=c+1;i>=0 && j<n; i--,j++)
   {
     if(grid[i][j] === 1)
     return false;
   }

   for(let i=r-1,j=c-1;i>=0 && j>=0; i--,j--)
   {
    if(grid[i][j] === 1)
    return false;
   }

   return true;
}

function nQueen(r)
{
  if(r===n)
  return 1;
  
  let ans = 0;
  for(let c=0;c<n;c++)
  {
    if(canPlace(r,c))
    {
        grid[r][c] = 1;
        ans+=nQueen(r+1);
        grid[r][c] = 0;
    }
  }

  return ans;
}

console.log(nQueen(0));
