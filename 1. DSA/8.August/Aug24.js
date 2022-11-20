function prevSm(ind,arr)
{
    let prev = ind -1;
    
    if(prev<0)
        {
            return prev;
        }
    
    while(prev >= 0)
        {
    if(arr[prev] < arr[ind])
        {
          return  prev;
        }
          prev--;
        }
}

function nextSm(ind,arr)
{
    let next = ind + 1;
    
    if(next>arr.length-1)
        {
            return arr.length;
        }
    
    while(next < arr.length)
        {
    if(arr[next] < arr[ind])
        {
          return  next;
        }
          next++;
        }

    
}

let a = [1,2,3];
console.log(nextSm(0,a));