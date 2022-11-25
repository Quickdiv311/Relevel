function mul(a)
{
    let prev = a[0];
    a[0] = prev * a[1];
                                   
    for(let i=1;i<a.length-1;i++) 
    {                              
        let cur = a[i];

        a[i] = prev * a[i+1];

        prev = cur;
    }

    a[a.length-1] *= prev;

    console.log(a);
}

mul([1,2,3,4]);