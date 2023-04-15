class Heap{
    constructor()
    {
       this.arr = [];
    }
  
    upheapify(ind)
    { 
    while(ind > 0)
    {  
     let pind = Math.floor((ind-1)/2);
 
    if(this.arr[pind] > this.arr[ind])
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
   
    downheapify(ind)
    {
       while(2*ind+1 < this.arr.length)
       {
             let cind = ((2*ind+2) < this.arr.length) ?  this.arr.indexOf(Math.min(this.arr[2*ind+1],this.arr[2*ind+2])) : (2*ind+1);
 
             if(this.arr[cind] < this.arr[ind])
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
 
    insert(e)
    {
     this.arr.push(e);
     this.upheapify(this.arr.length-1);
    }
 }
 
 function kthlargest(nums,k)
 {
    let heap = new Heap();
    let i = 0;
    while(i<k)
    {
       heap.insert(nums[i]);
       i++;
    }
 
    for(let i=k;i<nums.length;i++)
    {
       if(nums[i] > heap.arr[0])
       {
          heap.arr[0] = nums[i];
          heap.downheapify(0);
       }
    }
 
    console.log(heap.arr[0]);
 }
 
 kthlargest([-4,5,9,4,3,7,8,2,1,-3,-2],2);