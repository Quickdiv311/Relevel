function sqrt(x)
{
    let s = 1;
    let e = x-1;
    let ans = -1

    while(s<=e)
    {
        let m = s + Math.floor((e-s)/2);

        if(m*m == x) return m;

        if(m*m < x)
        {
            ans = m;
            s = m + 1;
        }

        else
        {
            e = m-1;
        }
    }
    return ans;
}

console.log(sqrt(10));