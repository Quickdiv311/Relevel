// let a = Array.from(Array(3), () => new Array(3));

// let a = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

// a.forEach(i => i.forEach(e => console.log(e)));

// function spiral(a)
// {
  
//   for(let i=1;i<a.length;i++)
//   {
//     if(a[i].length !== a[0].length)
//     {
//       return;
//     }
//   }
     
//   let rowend = a.length-1;
//   let columnend = a[0].length-1;
//   let rowstart = 0;
//   let columstart = 0;
//   let output = [];

//   while(rowend >= rowstart && columnend>=columstart)
//   {
//     for(let i=columstart;i<=columnend;i++)
//     {
//         output.push(a[rowstart][i]);
//     }

//     rowstart++;

//     for(let i=rowstart;i<=rowend;i++)
//     {
//         output.push(a[i][columnend]);
//     }

//     columnend--;

//     if(rowend >= rowstart)
//     {
//     for(let i=columnend;i>=columstart;i--)
//     {
//        output.push(a[rowend][i]);
//     }
//     }

//     rowend--;

//     if(columnend>=columstart)
//     {
//     for(let i=rowend;i>=rowstart;i--)
//     {
//       output.push(a[i][columstart]);
//     }
//     }
//     columstart++;
//   }

//   return output;
// }

// console.log(spiral(a));

let a = [[1,2,6],[3,4,8]];
let b = [[5,6,9],[7,8,2],[5,9,2]];
 let c = Array.from(Array(2), () => new Array(2)); 

function multiplyArrays(a,b)
{
  let r1=a.length;
  let c1=a[0].length;
  let r2=b.length;
  let c2=b[0].length;
  let result = Array.from(Array(r1),() => new Array(c2));
  let sum;

  if(r2 !== c1)
  {
    return;
  }
    for(let i=0;i<r1;i++)
    {
      for(let j=0;j<c2;j++)
      { 
        sum = 0; 

        for(let k=0;k<c1;k++)
        {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum; 
      }
    }   
    return result;
}

let r = multiplyArrays(a,b);
r.forEach(i => console.log(i));