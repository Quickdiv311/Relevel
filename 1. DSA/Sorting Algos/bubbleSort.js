function bubbleSort(a)
{
    let swapp = 1;
    for(let i=a.length-1;i>=0 && swapp;i--)
    {
        swapp = 0;
        for(let j=0;j<i;j++)
        {
           if(a[j] > a[j+1])
           {
             [a[j],a[j+1]] = [a[j+1],a[j]];
             swapp = 1;
           }
        }
    }
    return a;
}

let a = [1,4,3,2];
console.log(bubbleSort(a));