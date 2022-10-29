function reductionToZero(n)
{
    if(n===0) return 0;
    if(n<10) return 1;

    let ans = Infinity;
    let a = [];
    while(n>0)
    {
        a.push(n%10);
        n = parseInt(n/10);
    }  

    for(let i=0;i<a.length;i++)
    {
        if(a[i]===0) continue;
        ans = Math.min(ans,reductionToZero(n-a[i]));
    }
}

console.log(reductionToZero(23));