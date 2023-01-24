function insertionSort(arr)
{
    let n = arr.length;
    let c;

    for(let i=0;i<n-1;i++)
    {
        c = arr[i+1];
        j = i;

        while(j>=0 && a[j]> c)
        {
            a[j+1] = a[j];
            j--;
        }
        a[j+1] = c;
    }
}

let a = [3,1,5,2];
insertionSort(a);
console.log(a);