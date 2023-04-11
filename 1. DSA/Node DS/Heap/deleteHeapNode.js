class Heap
{
  constructor(a)
  {
   this.arr = a;
  }

  upheapify(ind)
  {
    while(ind>0)
    {
      let pind = Math.floor((ind-1)/2);

      if(pind < ind)
      {
         [this.arr[pind],this.arr[ind]] = [this.arr[ind],this.arr[pind]];
          
         ind = pind;
      }
      else
      {
         break;
      }
    }
  }

  downheapify()
  {
     let i = 0;

     while((2*i)+1 < this.arr.length)
     {
        let left = (2*i)+1;
        let right = (2*i)+2;
        let c;

        if(right < this.arr.length)
        {
          c = this.arr[left] > this.arr[right] ? left : right;
        }
        else
        {
          c = left;
        }

        if(c > i)
        {
         [this.arr[c],this.arr[i]] = [this.arr[i],this.arr[c]];
         i = c;
        }
        else break;
     }
  }

  deleteNode(i)
  {
     this.arr[i] = Infinity;
     this.upheapify(i);
     this.arr[0] = this.arr[this.arr.length-1];
     this.arr.pop();
     this.downheapify();
  }
}

let a = [10,5,9,4,3,7,8,2,1,-3,-2];
let heap = new Heap(a);
heap.deleteNode(3);
console.log(heap.arr);
