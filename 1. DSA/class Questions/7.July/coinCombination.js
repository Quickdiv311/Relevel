// function c(a,n,target)
// {
//     if(target===0)
//     return 1;

//     if(target<0)
//     return 0;

//     if(target>=1 && n<=0)
//     return 0;

//     let result = 0;

//     result += c(a,n-1,target) 
//     result += c(a,n,target - a[n-1]);

//     return result;
// }


// console.log(c([1,2,3],3,4));

function UniqueCombinations(target, arr, subArr, i, result) {
  
  if(target === 0)
  {
      let condition = false;
      subArr.sort((a,b) => a-b);
      for(let i=0;i<result.length;i++)
      {
        if(result[i].length === subArr.length)
        {
        let flag = 0;
        for(let j=0;j<subArr.length;j++)
        {  
           if(result[i][j] !== subArr[j])
           {
              flag = 1;
              break;
           }
        }
        if(flag === 0)
        {
             condition=true;
             break;
        }
       }
      }

      if(condition === false)
      {
        result.push([...subArr]);
      }
      return;
  }

  if(i === arr.length || target < 0) return;

  subArr.push(arr[i]);
  UniqueCombinations(target - arr[i], arr, subArr, i+1, result);
  subArr.pop();
  UniqueCombinations(target,arr,subArr,i+1,result);
}

let arr = [2,2,1,3,4,5];
let res = [];
UniqueCombinations(5,arr,[],0,res);
res.forEach(i => console.log(i));
