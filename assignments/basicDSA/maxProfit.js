function maxProfit(a)
{
   let j = a[0];
   let p = 0;

   for(let i of a)
   {
     if(i > j)
     {
         p += i - j;
     }
     j = i;
   }

   console.log(p);
}

maxProfit([100,180,260,310,40,535,695,30])


