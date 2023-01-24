function selectionSort(a)
{
    for(let i=a.length-1;i>=0;i--)
    {
        let max = i;
        for(let j=0;j<i;j++)
        {
            if(a[j] > a[max])
            {
                max = j;
            }
        }
      [a[i],a[max]] = [a[max],a[i]];
    }

    return a;
}

let a = [1,5,3,2,6,4];
console.log(selectionSort(a));