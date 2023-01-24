function quickSort(arr)
{
    if(arr.length<1)
    return arr;
    let left = [];
    let right = [];
    let [pivot,...rest] = arr;

    rest.forEach(element => {
          element < pivot ? left.push(element) : right.push(element);
    });

    return quickSort(left).concat(pivot).concat(quickSort(right));
}

let a = [4,1,3,5,2];
console.log(quickSort(a));