function medianOftwoSortedArrays(a, b) {
    let m = a.length;
    let n = b.length;
    if(m > n) {
        // a is grater than b, do binary search on B as it is smaller
        return medianOftwoSortedArrays(b, a);
    }

    if(m==0)
    {
      if(n%2==0)
      {
        return (b[Math.floor(n/2)] + b[Math.floor((n-1)/2)])/2;
      }
      else
      {
        return b[Math.floor(n/2)];
      }
    }

    let lo = 0, hi = m;
    while(lo <= hi) {
        let partitionA = lo + Math.floor((hi - lo) / 2); // mid point in search space of array a
        let partitionB = Math.floor((m + n + 1) / 2) - partitionA;
        let maxLeftA, maxLeftB, minRightA, minRightB;
        if(partitionA == 0) {
            // there are no elements on the left
            maxLeftA = -Infinity;
        } else {
            maxLeftA = a[partitionA - 1];
        }
        if(partitionB == 0) {
            // there are no elements on left of the partition in B
            maxLeftB = -Infinity;
        } else {
            maxLeftB = b[partitionB - 1];
        }
 
        if(partitionA == m) {
            // so you dont have anything on the right 
            minRightA = Infinity;
        } else {
            minRightA = a[partitionA];
        }
 
        if(partitionB == n) {
            minRightB = Infinity;
        } else {
            minRightB = b[partitionB];
        }
 
        if(maxLeftA <= minRightB && maxLeftB <= minRightA) {
            // found the median
            if((m+n)%2 == 0) {
                // even length array
                return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
            } else {
                // odd length array
                return Math.max(maxLeftA, maxLeftB);
            }
        }
        else if(maxLeftA > minRightB) {
            hi = partitionA - 1;
        } else {
            lo = partitionA + 1;
        }
    }
    return -1;
 }
 
 console.log(medianOftwoSortedArrays([3], [-2,-1]));
