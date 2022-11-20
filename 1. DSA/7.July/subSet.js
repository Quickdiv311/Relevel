function prefix(arr,i)
{
    if(i===0)
    return arr[i];

    return prefix(arr,i-1) + arr[i]; 
}

function subset(arr,target)
{
    let result = [];
    let obj = {};
    let ij = [];
    let c = 0;

    for(let i=0;i<arr.length;i++)
    {
        result.push(prefix(arr,i));
    }
    
    result.forEach(i => {
        if(!obj[i])
        {
           obj[i] = 1;
        }
        else
        {
            obj[i] +=1;
        }
    });

    for(let e of result)
    {
        if(obj[e]>0 || e===0)
        {
            ij[c] = e;
            c++;
        }
    }
}

console.log(subset([1,-1,2,-3,1]));