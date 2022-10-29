subsetsWithDup([1,2,3]);

function subsetsWithDup(nums) {
    let res = [];
    let sub = [];
    getSubsets(nums,0,sub,res);
    return res;
};

function getSubsets(arr,i,sub,res)
{
   if(i === arr.length)
       { let flag = true;
         for(let j=0;j<res.length;j++)
             {   
                 if(JSON.stringify(res[j])==JSON.stringify(sub))
                     {
                        flag = false;
                     }
             }
           
           if(flag === true)
               {
                   res.push([...sub]);
                   return;
               }
       }
    
   getSubsets(arr,i+1,sub,res);
   sub.push(arr[i]);
   getSubsets(arr,i+1,sub,res);
   sub.pop(arr[i]);
}