function replaceOne(arr,obj,i,max)
{
    let index;
   let ct;
   while(arr[i] === 1)
   {
    ct++;
    i++;
   }

   while(arr[i]=== 0 && ct===0)
   {
     i++;
   } 

   if(arr[i]===0 && arr[i+1]!==0 && ct!==0)
   {
     index = i;
     ct++;
     let result = replaceOne(arr,obj,i+1,max);
     obj[index] = result; 
     max = Math.max(max,result);
   }

   return ct;
}

//       i
//[0,0,1,0,1,1,0,0,1]