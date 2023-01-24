function canAlott(books,s,mid)
{
  let students = 1;
  let currAllocated = 0;
  
  for(let i=0;i<books.length;i++)
  {
    if(currAllocated + books[i] >= mid)
    {
        students++;
        currAllocated = books[i];
        if(students > s) return false;
    }
    else
    {
        currAllocated += books[i];
    }
  }

  return true;
}

function bookAllocation(books,s)
{
    let minPages = books[books.length - 1];
    let maxPages = 0;

    for(let i=0;i<books.length;i++)
    {
    maxPages+=books[i];
    let ans = minPages;
    while(minPages <= maxPages)
    {
        let mid = Math.floor((maxPages+minPages)/2);
         if(canAlott(books,s,mid))
         {
           ans = mid;
           maxPages = mid-1;
         }
         else
         {
            minPages = mid+1;
         }
    }
    return ans;
    }
}

let books = [12,34,67,90];
console.log(bookAllocation(books,2));
