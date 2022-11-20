var combinationSum = function(candidates, target) {
    let result = [];
    let obj = {};

    candidates.map(i => obj[i]=1);
                
        for(let i of candidates)
            {
                let arr = [];
                if(target%i===0)
                    {
                        let div = target/i;

                        for(let j=0;j<div;j++)
                        {
                            arr.push(i);
                        }
                        result.push(arr);
                    }
                else 
                {
                    for(let j=1;j<target/i;j++)
                    {
                    if(obj[target-i])
                            {
                               
                            }
                    }     
             }
            }
        return result;
    };

    let a = [2,3,5];
    let target = 8;
   let result = combinationSum(a,target);
   result.forEach(i => console.log(i));