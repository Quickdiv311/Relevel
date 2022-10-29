function canPlace(stalls,c,mid)
{
    let lastPlaced = 0;
    c--;

    for(let i=1;i<stalls.length;i++)
    {
        if((stalls[i] - stalls[lastPlaced]) >=mid)
        {
            c--;
            lastPlaced = i;
        }
    }

    if(c===0) return true;

    return false;
}

function cowStalls(stalls,c)
{
    let minDist = 1;
    let maxDist = stalls[stalls.length-1];
    let ans = 1;

    while(minDist <= maxDist)
    {
        let mid = Math.floor((minDist+maxDist)/2);

        if(canPlace(stalls,c,mid))
        {
            ans = mid;
            minDist = mid+1;
        }        
        else
        {
            maxDist = mid-1;
        }
    }

    return ans;
}

console.log(cowStalls([2,5,9,11],3));