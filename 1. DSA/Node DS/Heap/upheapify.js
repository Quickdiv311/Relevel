class Heap
{
   constructor()
   {
      this.arr = [];
   }

   upheapify(ind)
   {
   
   while(ind > 0)
   {  
    let pind = Math.floor((ind-1)/2);

   if(this.arr[pind] < this.arr[ind])
   {
      let temp = this.arr[pind];
      this.arr[pind] = this.arr[ind];
      this.arr[ind] = temp;

      ind = pind;
   }

   else
   {
      break;
   }}
   }

   insert(x)
   {
      this.arr.push(x);
      this.upheapify(this.arr.length-1);
   }
}

let heap = new Heap();
let a = [10,1,6,3,9,-1,11];
for(let i=0;i<a.length;i++)
{
   heap.insert(a[i]);
}
let result = heap.arr;
result.forEach(i => console.log(i));
