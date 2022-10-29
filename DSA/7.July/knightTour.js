let grid = [];
let n = 5;
for(let i=0;i<n;i++)
{
    let temp = Array(n).fill(-1);
    grid.push(temp);
}


function knightTour(r,c,count)
{

    if(r<0 || c<0 || r>=n || c>=n || grid[r][c]!==-1)
    {
      return;
    }
    
   if(count === (n*n) - 1)
   {
    let str = "";
    grid[r][c] = count;

     for(let i=0;i<n;i++)
     {
        for(let j=0;j<n;j++)
        {
            str += grid[i][j] + " ";
        }
        str +="\n";
     }

     grid[r][c] = -1;
     console.log(str);
     console.log("********");
     return;
   }

    grid[r][c] = count;
    knightTour(r+1,c+2,count+1);
    knightTour(r+2,c+1,count+1);
    knightTour(r-1,c+2,count+1);
    knightTour(r-2,c+1,count+1);
    knightTour(r+1,c-2,count+1);
    knightTour(r+2,c-1,count+1);
    knightTour(r-1,c-2,count+1);
    knightTour(r-2,c-1,count+1);
    grid[r][c] = -1;
}

knightTour(0,0,0);