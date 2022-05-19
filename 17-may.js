function findSingle(a)
{
    let o = {};
    let b = [];
    a.forEach(i => {
        if(o[i])
        {
            o[i]+=1;
        }
        else
        {
            o[i]=1;
        }
    });

   for(let i in o)
   {
       if(o[i] > 1)
       {
           b.push(i);
       }
       else
       {
           return i;
       }
   }
}

let arr = [1,1,2,2,3];
console.log(findSingle(arr));