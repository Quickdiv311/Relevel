function negLast(arr)
{
    let j = arr.length-1;
   
    while(arr[j]<0)
    {
        j--;
    }
    for(let i=0;i<=j;i++)
    {
        if(arr[i] < 0)
        {
            swap(arr,i,j);
            j--;
        }
    }
}

function swap(arr,i,j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [2,3];
negLast(arr);
console.log(arr);