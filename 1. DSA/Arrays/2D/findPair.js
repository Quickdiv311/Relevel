function findPairs(matrix,m,n)
{

    let o = {};
   for(let i=0;i<m;i++)
   {
      matrix[i].map(i=> {
        if(o[i])
        {
           o[i] = i;
        }
        else
        {
            o[i] = 1;
        }
      })
   }
   let result = Object.entries(o);
   result.forEach(i => {
                         i[0] = Number([i[0]])
                         console.log(i)
                        });
}


let matrix = [[3,3,8],[9,8,9],[15,15]];
findPairs(matrix,matrix.length,matrix[0].length);