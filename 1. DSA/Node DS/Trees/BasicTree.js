// Height

function height(n)
{
   if(n==null) return -1;

   return 1 + Math.max(height(n.left),height(n.right));
}

