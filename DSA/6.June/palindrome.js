function isPalindrome(s,i)
{
   let a = s.split('');

   for(let i=0;i<a.length/2;i++)
   {
      if(a[i] === a[a.length-i-1])
      {
        
      }
   }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter a string: `, input => {
  isPalindrome(input,0);
  readline.close();
});

