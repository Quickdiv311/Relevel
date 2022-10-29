
function mergeSort(arr,left,right)
{
  if(left>=right)
  {
     return;
  }
    let mid = parseInt((left+right)/2);
    mergeSort(arr,left,mid);
    mergeSort(arr,mid+1,right);
    merge(arr,left,mid,right);
}

function merge(arr,left,mid,right)
{
   var m = mid-left+1;
   var n = right-mid;
   var a = new Array(m);
   var b = new Array(n);
   
   for(let i=0;i<m;i++)
   {
     a[i] = arr[left+i];
   }
   
   for(let j=0;j<n;j++)
   {
     b[j] = arr[mid+1+j];
   }
   
   var chintu = 0;
   var mintu = 0;
   var counter = left;
   
   while(chintu<m && mintu<n)
   {
      if(a[chintu]<=b[mintu])
      {
         arr[counter] = a[chintu];
         chintu++;
      }
      else
      {
         arr[counter] = b[mintu];
         mintu++;
      }
      counter++;
   }
   
   while(chintu<m)
   {
     arr[counter] = a[chintu];
      chintu++;
      counter++;
   }
   
    while(mintu<n)
   {
     arr[counter] = b[mintu];
      mintu++;
      counter++;
   }
}

const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
})

readline.question(``,input => {
   let arr = input.split(' ');
   mergeSort(arr,0,arr.length-1);
   console.log(arr.join(' '));
   readline.close();
})

   

