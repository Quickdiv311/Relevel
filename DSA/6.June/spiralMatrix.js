function spiral(matrix)
{
    let rowStart = 0;
    let colStart = 0;
    let rowEnd = matrix.length-1;
    let colEnd = matrix[0].length-1;
    let size = matrix.length * matrix[0].length;
  let result = [];
  while(rowStart<=rowEnd && colStart<=colEnd)
  {
      for(let i=colStart;i<=colEnd;i++)
          {
              if(result.length==size) break;
              result.push(matrix[rowStart][i]);
          }
        rowStart++;
      for(let i=rowStart;i<=rowEnd;i++)
          {
            if(result.length==size) break;
              result.push(matrix[i][colEnd]);
          }
              colEnd--;
      for(let i=colEnd;i>=colStart;i--)
          {
            if(result.length==size) break;
              result.push(matrix[rowEnd][i]);
          }
                rowEnd--;
      for(let i=rowEnd;i>=rowStart;i--)
          {
            if(result.length==size) break;
              result.push(matrix[i][colStart]);
          }
                colStart++;  
  }
                    return result;
}

let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiral(arr));