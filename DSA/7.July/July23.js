function firstLast(arr,x)
{
  let start = 0;
  let end = arr.length -1;
  
  while(start <=end)
  {
    let mid = start + Math.floor((end - start)/2);
    if(arr[mid] === x)
    {
       let  ct=1;
       let  cs=1;
       while(arr[mid] === arr[mid + ct])
       {
         ct++;
       }
       
       while(arr[mid] === arr[mid-cs])
       {
         cs++;
       }

       let obj = [];
       obj.push(mid-(cs-1));
       obj.push(mid+(ct-1));
       return obj;
    }
    
    else if(arr[mid] < x)
    {
      start = mid + 1;
    }
    else
    {
      end = mid - 1;
    }
  }

}

//         0 1 2 3 4 5 6 7 8 9            
let arr = [1,1,1,2,2,3,4,4,4,4,5,6,7];

let o = firstLast(arr,4);
console.log(o[0]);
console.log(o[1]);