function findMax(matrix,m,n)
{
    let maxEl = [];
    let result = "";
    for(let i=0;i<m;i++)
    {
        let row = matrix[i];
        let max = Math.min(...row);
        maxEl.push(max);
    }

    for(let j=0;j<n;j++)
    {
        let min = -Infinity;
        for(let i=0;i<m;i++)
        {
            let temp = matrix[i][j];

            if(temp>min)
            {
              min = temp;
            }
        }

        if(maxEl.includes(min))
        {
          result += min + " ";
        }
    }

    return result;
}

let input = [[3,7,8],[9,11,13],[15,16,17]];
console.log(findMax(input,input.length,input[0].length));