function addWithoutPlus(a,b)
{
    while(b != 0)
    {
        let c = a & b; 
        a = a ^ b; 
        b = c << 1; 
    }

    return a;
}

console.log(addWithoutPlus(4,3));