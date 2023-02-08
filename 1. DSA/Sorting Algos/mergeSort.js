function main(arr)
{
   mergeSort(arr,0,arr.length-1);
   return arr;
}

function mergeSort(nums,left,right)
{
    if(left>=right)
     return;

    let mid = left + Math.floor((right-left)/2);
    mergeSort(nums,left,mid);
    mergeSort(nums,mid+1,right);
    merge(nums,left,mid,right);
}

function merge(nums,left,mid,right)
{
   let m = mid - left + 1;
   let n = right - mid;
   let a = new Array(m);
   let b = new Array(n);

   for(let i=0;i<m;i++)
   {
       a[i] = nums[left+i];
   }

   for(let i=0;i<n;i++)
   {
       b[i] = nums[(mid+1)+i]
   }

   let aCounter = 0;
   let bCounter = 0;
   let counter = left;

   while(aCounter<m && bCounter<n)
   {
       if(a[aCounter] <= b[bCounter])
       {
           nums[counter] = a[aCounter];
           aCounter++;
           counter++;
       }
       else
       {
           nums[counter] = b[bCounter];
           bCounter++;
           counter++;
       }
   }

   while(aCounter<m)
   {
           nums[counter] = a[aCounter];
           aCounter++;
           counter++;
   }

   while(bCounter<n)
   {
           nums[counter] = b[bCounter];
           bCounter++;
           counter++;
   }
}

let a = [2,4,3,1];
console.log(main(a));