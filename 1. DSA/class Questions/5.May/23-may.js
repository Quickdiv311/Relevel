//currying

// function sum(a)
// {
//     return function(b)
//     {
//         return function(c)
//         {
//             multiply(a,b,c);
//         }
//     }
// }

// console.log(sum(2)(3)(5));

// let b = [[5,6,9],[7,8,2],[5,9,2]];
// let o = b.reduce((a,i) => a.map((a,ind) => a+i[ind]));

// console.log(o);

//IIFE
// let o = ((a) => (b) => a+b)(2)(3);
// console.log(o);

// const readline = require("readline");

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout 
// });

// r1.question("Enter names: ", (a) => {
//     let arr = a.split(',');
//     for(let i of arr)
//     {
//         console.log(i);
//     }
//     r1.close();
// });

// function sum(a,...b)
// {   a=0;
//     for(let i of b)
//     {
//        a+=i;
//     }
//     return a;
// }

// function print(arr)
// {
//     sum(0,...arr);
// }

// let s = print([1,2,3]);
// console.log(s(0));