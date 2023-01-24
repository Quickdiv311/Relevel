let result = [];

function threeSum(nums)
{
  result = [];
  nums.sort((a,b)=>a-b);
  for(let i=0;i<nums.length;i++)
  {
    let c = nums[i]*-1;
    twoSum(nums,i+1,c,result);
  }
  return result;
}

function twoSum(nums,low,c,result)
{
   let high = nums.length-1;

   while(low<high)
   {
      if(nums[low] + nums[high] == c)
      {
        result.push([c*-1,nums[low],nums[high]]);
        while(nums[low]==nums[low+1] && low<high)low++;
        while(nums[high]==nums[high-1] && low<high)high--;
        low++;
        high--;
      }
      else if(nums[low]+nums[high] < c)
      {
        low++;
      }
      else
      {
        high--;
      }
   }
}
