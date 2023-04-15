
class Heap
{
  constructor(a)
  {
   this.arr = a;
   for(let i=this.arr.length-1;i>=0;i--)
   {
    this.downheapify(i);
   }
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

  downheapify(ind)
   {
      while(2*ind+1 < this.arr.length)
      {
            let cind = ((2*ind+2) < this.arr.length) ?  this.arr.indexOf(Math.max(this.arr[2*ind+1],this.arr[2*ind+2])) : (2*ind+1);

            if(this.arr[cind] > this.arr[ind])
            {
               [this.arr[cind],this.arr[ind]] = [this.arr[ind],this.arr[cind]];

               ind = cind;
            }
            else
            {
               break;
            }
      }
   }

  deleteNode(i)
  {
     this.arr[i] = Infinity;
     this.upheapify(i);
     this.arr[0] = this.arr[this.arr.length-1];
     this.arr.pop();
     this.downheapify(0);
  }
}

let a = [-4,5,9,4,3,7,8,2,1,-3,-2];
let heap = new Heap(a);
console.log(heap.arr);
heap.deleteNode(3);
console.log(heap.arr);

