function upperBound(a,x)
{
    let s = 0;
    let e = a.length-1;
    let ans = 0;

    while(s<=e)
    {
        let m = s + Math.floor((e-s)/2);

        if(a[m] <= x)
        {
            s = m + 1;
        }
        else
        {
           ans = m;
           e = m - 1;
        }
    }
    return ans;
}

function lowbound(a,x)
{
    let s = 0;
    let e = a.length-1;
    let ans = 0;

    while(s<=e)
    {
        let m = s + Math.floor((e-s)/2);

        if(a[m] >= x)
        {
            ans = m;
           e = m - 1;
        }
        else
        {
            s = m + 1;
        }
    }
    return ans;
}

function sextuples(a)
{
    let lhs = [];
    let rhs = [];

   for(let i=0;i<a.length;i++)
   {
    for(let j=0;j<a.length;j++)
    {
        for(let k=0;k<a.length;k++)
        {
            lhs.push((a[i] * a[j]) + a[k]);
            if(a[i]!=0)
            {
                rhs.push((a[i]) * (a[j] + a[k]));
            }
        }
    }
   }

   lhs.sort((a,b) => a-b);
   rhs.sort((a,b) => a-b);
   let ans = 0;

   for(let i=0;i<lhs.length;i++)
   {
      let ub = upperBound(rhs,lhs[i]);
      let lb = lowbound(rhs,lhs[i]);
      ans += (ub - lb); 
   }

   console.log(ans);
}

sextuples([2,3]);