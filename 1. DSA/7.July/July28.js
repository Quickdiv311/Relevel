function canPlace(stalls,mid,c)
{
  let lastPlacedPos = 0;
  c--;
  
  for(let i=1;i<stalls.length;i++)
  {
    if(stalls[i] - stalls[lastPlacedPos] >= mid)
     {c--;
     lastPlacedPos = i;
     }
     
     if(c===0) return true;
  }
  
  return false;
}

function getMaxMinDist(stalls, c)
{
 stalls.sort((a,b) => a-b);
 let minDis = 1;
 let maxDis = stalls[stalls.lenght-1];
 let ans = 1;
 
 while(minDis<=maxDis)
 {
  let mid = Math.floor((minDis + maxDis)/2);
  
  if(canPlace(stalls,mid,c))
  {
    ans = mid;
    minDis = mid+1;
  }
  else
  {
   maxDis = mid-1;
  }
 }
 
 return ans;
}

console.log(getMaxMinDist([2,5,9,11],3));