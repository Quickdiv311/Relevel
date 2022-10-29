function permutations(nums)
{
    let result = [];
    getPermutations(nums,0,result);
    return result;
}

function getPermutations(nums,l,result)
{
  if(l==nums.length)
  {
            result.push([...nums]);
            return;
  }

  let check = {};
  for(let i=l;i<nums.length;i++)
  {
    if(check[nums[i]])continue;
    check[nums[i]] = true;
    [nums[i],nums[l]] = [nums[l],nums[i]];
    getPermutations(nums,l+1,result);
    [nums[i],nums[l]] = [nums[l],nums[i]];
  }
}

let result = permutations([1,1,2]);
result.forEach(i => console.log(i));

  