function stars(n)
{
    if(n===0)
    {
      return;    
    }
    var star = "";

    stars(n-1);
    
    for(let i=0;i<n;i++)
    {
        star += "* ";
    }
    console.log(star);
}

stars(5);