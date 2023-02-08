function countingSort(a)
{
    let max = Math.max(...a);
    let min = Math.min(...a);
    let range = max - min + 1;
    let freq = Array(range).fill(0);

    for(let i=0;i<a.length;i++)
    {
        freq[a[i] - min]++;
    }

    for(let i=1;i<freq.length;i++)
    {
        freq[i] += freq[i-1];
    }

    let result = new Array(a.length);
    for(let i=a.length-1;i>=0;i--)
    {
        let index = freq[a[i] - min]-1;
        result[index] = a[i];
        freq[a[i] - min]--;
    }
    return result;
}

console.log(countingSort([4,3,6,1,-1]));