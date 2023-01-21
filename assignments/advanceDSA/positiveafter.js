function positiveSort(a)
{
   let ptrPlus = a.length -1;
   let ptrMinus = 0;
   
   while(ptrMinus<ptrPlus)
   {
      if(a[ptrMinus] < 0)
      {
         ptrMinus++;
      }

      if(a[ptrPlus] > 0)
      {
        ptrPlus--;
      }

      if(a[ptrMinus] >0 && a[ptrPlus]<0) 
      {
        [a[ptrMinus], a[ptrPlus]] = [a[ptrPlus], a[ptrMinus]]; 
        ptrPlus--;
        ptrMinus++;   
      }     
   }

   return a;
}

console.log(positiveSort([2,3,-2,-1,6]));





// 2 3 0 -1 -2 5