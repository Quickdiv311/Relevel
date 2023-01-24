// let students = [
//    {"name": "divyansh",
//     "Gender": "M",
//     "Grade": 73},
    
//     {"name": "diksha",
//     "Gender": "F",
//     "Grade": 93},

//     {"name": "Punit",
//     "Gender": "M",
//     "Grade": 80},

//     {"name": "Shivani",
//     "Gender": "F",
//     "Grade": 90},
// ]

// console.log(sortStudents(students));

// function sortStudents(items){

// }

function isSorted(a,n)
{
    if(n===a.length-1)
    {
        return true;
    }
    
    return (a[n] < a[n+1]) && isSorted(a,n+1);
}

console.log(isSorted([4,2,3],0));