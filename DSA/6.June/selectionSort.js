function selectionSort(arr) {
    let n = arr.length
    for(let i=0;i<n;i++) {
        let minIndex = i;
        for(let j=i;j<n;j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        for(let k=minIndex;k>i;k--)
        {
             arr[k] = arr[k-1];            
        }
        arr[i] = arr[minIndex];
    }
}

// let swap = (arr, i, j) => {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(``,input => {
    let arr = input.split(' ');
    arr.forEach(i => parseInt(i));
    selectionSort(arr);
    console.log(arr.join(' '));    
    readline.close();
})