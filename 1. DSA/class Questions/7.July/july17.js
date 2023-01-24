function rotatedMin(arr,start,end)
{

  while(start<=end)
  {
    let mid = start + Math.floor((end-start)/2);

    if(arr[mid] < arr[mid-1])
    {
        return arr[mid];
    }

    if(arr[mid] > arr[mid+1])
    {
        return arr[mid+1];
    }

    if(arr[mid] > arr[start] && arr[mid] > arr[end])
    {
        let min = Math.min(arr[start])
    }

    if(arr[mid] > arr[start] && arr[mid] > arr[end])
    {
        if(arr[start] > arr[end])
        {
            start = mid + 1;
        }
    }

    if(arr[mid] < arr[start] && arr[mid] < arr[end])
    {
        if(arr[start] > arr[end])
        {
            end = mid -1;
        }
    }
    }
    return undefined;
}

console.log(rotatedMin([6,7,1,2,3,4,5],0,6));
