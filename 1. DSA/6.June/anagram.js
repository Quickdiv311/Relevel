function anagram(str1,str2)
{
    let obj = {};
    str1 = str1.toLowerCase().split('');
    str2 = str2.toLowerCase().split('');
    
    if(str1.length !== str2.length)
    {
      return false;
    }

    str1.map(i => {
     if(obj[i])
      obj[i] +=1;
     
     else
      obj[i] = 1;
    })
    str2.map(i => {
     if(obj[i])
      obj[i] -=1;
      
      if(obj[i] === 0) delete obj[i];
     
     else
     return false;
    });
    
    return Object.entries(obj).length === 0 ? true : false;
}

let s = 'keen';
let t = 'knee';
console.log(anagram(s,t));