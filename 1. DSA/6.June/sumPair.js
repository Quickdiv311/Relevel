function sumPair(a,N)
{
  let o = {};
 for(let i=0;i<a.length;i++)
 {
    if(o[a[i]])
    {
      console.log((o[a[i]]-1)+" "+i);
    }
    else
    {
      o[N-a[i]] = i+1; 
    }
  }
}

let a = [10,20,30,40,50];
let N = 50;

sumPair(a,N);