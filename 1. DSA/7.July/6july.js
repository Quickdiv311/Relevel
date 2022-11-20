function maze(i,j,m,n)
{
  if(i===m-1 && j===n-1) return 1;
  if(i>=m || j>=n) return 0;

  return maze(i,j+1,m,n) + maze(i+1,j,m,n);
}

console.log(maze(0,0,2,3));

