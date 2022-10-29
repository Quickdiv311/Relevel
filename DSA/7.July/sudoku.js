let grid = [
    [3, '.', 6, 5, '.', 8, 4, '.', '.'],
    [5, 2, '.', '.', '.', '.', '.', '.', '.'],
    ['.', 8, 7, '.','.','.','.',3, 1],
    ['.','.',3, '.',1,'.','.',8,'.'],
    [9, '.','.', 8, 6, 3, '.','.',5],
    ['.', 5, '.','.',9,'.',6,'.','.'],
    [1,3,'.','.','.','.',2,5,'.'],
    ['.','.','.','.','.','.','.',7, 4],
    ['.','.',5, 2, '.', 6, 3, '.','.']
];

function canPlace(r,c,n)
{
  for(let i=0;i<9;i++)
  {
    if(grid[i][c] === n)
    return false;
  }

  for(let i=0;i<9;i++)
  {
    if(grid[r][i] === n)
    return false;
  }

  let row = Math.floor(r/3);
  let col = Math.floor(c/3);

  for(let i=row*3;i<(row*3)+3;i++)
  {
    for(let j=col*3;j<(col*3)+3;j++)
    {
      if(grid[i][j] === n)
      return false;
    }
  }
  return true;
}

function sudoku(r,c)
{
   if(c===9)
   {
    sudoku(r+1,0);
    return;
   }

   if(r===9)
   {
     for(let i=0;i<9;i++)
     {
      console.log(grid[i]);
     }
     console.log("***");
     return;
   }

   if(grid[r][c] === '.')
   {
   for(let n=1;n<=9;n++)
   {
   if(canPlace(r,c,n))
   {
     grid[r][c] = n;
     sudoku(r,c+1);
     grid[r][c] = '.';
   }
   }
   }
   else
   {
     sudoku(r,c+1);
   }
}

sudoku(0,0);