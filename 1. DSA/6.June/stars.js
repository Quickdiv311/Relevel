function stars(n)
{
    if(n===1)
    {
      return;    
    }
    let sum = '* ';
    
    stars(n-1);
    return sum + stars(n-1);
}

