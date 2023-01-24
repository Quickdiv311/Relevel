function binarySearch(arr,start,end,target)
{
    let mid = Math.floor(start + (end-start)/2);
    
    if(target === arr[mid])
    {
        while(target === arr[mid]);
        {
            mid++;
        }
        return mid;
    }

    else if(target > arr[mid])
    {
        binarySearch(arr,mid+1,end,target);
    }

    else 
    {
        binarySearch(arr,start,mid-1,target);
    }

    return undefined;
}
// 0,1,2,3,4,5,6,7,8,9
let arr=[1,2,3,3,3,4,5,5,6,7];
console.log(binarySearch(arr,0,arr.length-1,3));