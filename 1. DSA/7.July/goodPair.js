function upperBound(arr,x,st)
{
  let start = st;
  let end = arr.length-1 ;
  let ans;
  
  while(start <=end)
  {
    let mid = start + Math.floor((end - start)/2);
    if(arr[mid] <=x)
    {
     start = mid+1; 
    }
    else
    {
     ans=mid;
     end = mid-1;
    }
  }
  
  return ans;
}

let a1 = [4,8,2,6,2];
let b1 = [4,5,4,1,3];

function goodPair(a,b)
{  
  let c = [];
  for(let i=0;i<a.length;i++)
  {
    c.push(a[i] - b[i]);
  }
  
  c.sort((a,b) => a-b);
  let ans = 0;
  for(let i=0;i<c.length-1;i++)
  {
    let ub = upperBound(c,-c[i],i+1);
    ans += c.length - ub;
  }
  
  return ans;
}

console.log(goodPair(a1,b1));