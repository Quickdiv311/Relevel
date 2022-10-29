class Heap {
    constructor() {
        this.arr = [];
    }
    upheapify(idx) {
     while(idx>0)
     {
        let parentIndex = Math.floor((idx-1)/2);
        if(idx > parentIndex)
        {
            let temp = this.arr[parentIndex];
            this.arr[parentIndex] = this.arr[idx];
            this.arr[idx] = temp;
            idx = parentIndex
        }
        if(idx == 0) break;
     }
    }

    downheadify(idx)
    {
       while(idx < this.arr.length)
       {
          let left = idx*2 + 1;
          let right = idx*2 + 2;
          let greatest = idx;

          if(left < this.arr.length && this.arr[left] > this.arr[greatest])
          {
             greatest = left;
          }
          
          if(right < this.arr.length && this.arr[right] > this.arr[greatest])
          {
             greatest = right;
          }
          if(greatest==idx) break;

          let temp = this.arr[greatest];
          this.arr[greatest] = this.arr[idx];
          this.arr[idx] = temp;
       }
    }

    insert(x)
    {
        this.arr.push(x);
        this.upheapify(this.arr.length-1);
    }

    removeRoot()
    {
        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length-1];
        this.arr[this.arr.length-1] = temp;

        this.arr.pop();
        this.downheadify(0);
    }

    display()
    {
        console.log(this.arr);
    }
}

let heap = new Heap();
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.removeRoot();
heap.display();




