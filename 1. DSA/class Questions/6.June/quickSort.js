function partitionEnd(arr, low, high) {

    let pivot = arr[high];
    let i = low;
    for(let j=low;j<high;j++) {
        if(arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, high, i);
    return i;
}

function partitionMiddle(arr, low, high) {
    let pivot = arr[parseInt((low+high)/2)];
    let start = low;
    let end = high;
    while(start < end) {
        while(arr[start] < pivot) {
            start++;
        }
        while(arr[end] > pivot) {
            end--;
        }
        swap(arr, start, end);
    }
    return end;
}

let arr = [1, 10, 14,5,9, 7, 8];

function swap(arr, l, r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

function quickSort(arr, low, high) {

    if(low>=high)
        return;
    let partitionIndex = partitionEnd(arr, low, high);
    quickSort(arr, low, partitionIndex-1);
    quickSort(arr, partitionIndex+1, high);
}
