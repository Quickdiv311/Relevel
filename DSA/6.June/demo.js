// var city  = new Array("lucknow","jalandar","kolkata");

// for(let i=0;i<city.length;i++)
// {
// console.log(city[i]);
// }

var student = {
    name: 'div',
    roll: 32,
    subjects: [
        {
                name: 'english',
                marks: 80
        }
    ],
    study: function(clas)
    {
        return clas + 'class';
    }
}

nums.sort((a,b) => a - b);
    const triplets = [];

    for(let i=0; i < nums.length - 2; i++){
        if(nums[i] != nums[i-1]){ // making sure our solution set does not contain duplicate triplets
            let left = i + 1;
          let right = nums.length - 1;

            while (left < right){
                const currentSum = nums[i] + nums[left] + nums[right];
                if (currentSum === 0){
                    triplets.push([nums[i], nums[left], nums[right]]);
                    while(nums[left] == nums[left + 1]) left ++
                    while(nums[right] == nums[right - 1]) right -- // making sure our solution set does not contain duplicate triplets
                    left ++;
                    right --;
                } else if(currentSum < 0) {
                    left ++
                } else if(currentSum > 0){
                    right --
                }
            }
        }
    }
    return triplets

// console.log(student.subjects[0].marks);
// var st2 = Object.entries(student);
// console.log(student.study('8th'));
// var objs = Object.values(student);


// function removeDuplicate(arr)
// {   
//     let o = {};

//     for(let i of arr)
//     {
//         o[i] = 1;
//     }

//     return Object.keys(o);
// }

// function secondLargest(arr)
// {
//     let arr1 = removeDuplicate(arr);
//     arr1.sort();

//     return arr1[arr1.length - 2];
// }

// let arr = [1,2,2,3,5,7,6,7,7];
// console.log(secondLargest(arr));


let isEven = function(a)
{  
  return a%2===0;
} 

function filter(arr,func)
{
    let a = [];
    for(let i in arr)
    {
        if(func(i))
        {
              a.push(i);
        }
    }
}

let arr = [2,1,4,3];
// arr.sort();
// arr.reverse();
// console.log(arr);
// console.log(arr.sort((a,b) => b-a));

// console.log(filter(arr,isEven));
// console.log(arr.filter(a => a >= 3));
// console.log(arr.map(a => a*a*a));
console.log(arr.reduce((i,a) => i+a,5));

arr.sp


