class Heap
{
   constructor(a)
   {
      this.arr = [];
   }

   downheapify(ind)
   {
      while(2*ind+1 < this.arr.length)
      {
            let cind = ((2*ind+2) < this.arr.length) ?  this.arr.indexOf(Math.max(this.arr[2*ind+1],this.arr[2*ind+2])) : (2*ind+1);

            if(this.arr[cind] > this.arr[ind])
            {
               let temp = this.arr[cind];
               this.arr[cind]  = this.arr[ind];
               this.arr[ind] = temp;

               ind = cind;
            }
            else
            {
               break;
            }
      }
   }

   deleteRoot()
   {
      this.arr[0] = this.arr[this.arr.length-1];
      this.arr.pop();
      this.downheapify(0);
   }
}

let a = [10,6,8,1,3,5,2];
let heap = new Heap(a);
heap.deleteRoot();
console.log(heap.arr);



