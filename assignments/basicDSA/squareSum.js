function squareSum(n)
{
    let a = 0; 

    while(a*a< n)
    {  
    let b = 0;
        while(b*b<n)
        {
            if(a*a + b*b == n)
            {
                if(a<b)
                {
                console.log(`${a} , ${b}`);
                }
            }
            b++;
        }
        a++;        
    }
}

squareSum(50);