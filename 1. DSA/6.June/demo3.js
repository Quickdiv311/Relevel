function generateMatrix(n) {
    let c = 1;
    let arr = [];
for(let i=0;i<n;i++)
{
    let temp = Array(n).fill(0);
    arr.push(temp);
}

    let rowStart = 0;
    let rowEnd = n-1;
    let colStart = 0;
    let colEnd = n-1;
    
while(rowStart<=rowEnd && colStart<=colEnd)
    {
    for(let i=colStart;i<=colEnd;i++)
        {
            if(c==(n*n)+1)break;
            arr[rowStart][i] = c;
            c++;
        }
    rowStart++;
    
    for(let i=rowStart;i<=rowEnd;i++)
        {
          if(c==(n*n)+1)break;
            arr[i][colEnd] = c;
            c++;   
        }
    colEnd--;
    
    for(let i=colEnd;i>=colStart;i--)
        {
      if(c==(n*n)+1)break;
            arr[rowEnd][i] = c;
            c++;   
        }
    rowEnd--;
    
    for(let i=rowEnd;i>=rowStart;i--)
        {
    if(c==(n*n)+1)break;
            arr[i][colStart] = c;
            c++;   
        }
    colStart++;
    }
    
    return arr;
};

let result = generateMatrix(3);
result.forEach(i => console.log(i));