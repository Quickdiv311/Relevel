function sqrtInt(x)
{
    let s = 1;
    let e = x-1;
    let ans = -1

    while(s<=e)
    {
        let m = s + Math.floor((e-s)/2);

        if(m*m == x) return m;

        if(m*m<x) 
        {
            ans = m; 
            s = m + 1;
        }
        else
        {
            e = m - 1;
        }
    }
    return ans;
}

function sqrt(x,k)
{
   let ans = sqrtInt(x);
   let s = 1;

   while(s<=k)
   {
    let a;
    for(let i=0;i<=9;i++)
    {
      if((ans+(i/Math.pow(10,s))) * (ans+(i/Math.pow(10,s))) <= x)
      {
        a = i/Math.pow(10,s);   
      }
      else break;
    }
    ans+=a;
    s++;
   }
   return ans;
}

console.log(sqrt(88,2));