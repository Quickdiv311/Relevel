function insertionSort(a)
{
    for(let i=1;i<a.length;i++)
    {
        let v = a[i];
        let j = i;

        while(a[j-1] > v && j>=1)
        {
            a[j] = a[j-1];
            j--;
        }

        a[j] = v;
    }
    return a;
}

console.log(insertionSort([1,5,4,3,2]));