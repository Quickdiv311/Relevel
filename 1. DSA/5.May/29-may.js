let students = [
    {
        "name": "Divyansh",
        "marks": 99
    },
    {
        "name": "Punit",
        "marks": 90
    },
    {
        "name": "Astik",
        "marks": 100
    },
]

maxMarks(students);

function maxMarks(a)
{
  let max = Number.MIN_SAFE_INTEGER;
  let index;
  for(let i in a)
  {
    if(max < a[i].marks)
    {
        max = a[i].marks;
        index = i;
    }
  }

  console.log(a[index]);
}
