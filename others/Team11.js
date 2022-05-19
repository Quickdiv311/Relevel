  let a = [{"Name":"W Saha","Team":1,"Credits":9,"Skill":"WK"},{"Name":"S Gill","Team":1,"Credits":9,"Skill":"BAT"},{"Name":"M Wade","Team":1,"Credits":8,"Skill":"WK"},{"Name":"H Pandya","Team":1,"Credits":9,"Skill":"ALL"},{"Name":"D Miller","Team":1,"Credits":9,"Skill":"BAT"},{"Name":"R Tewatia","Team":1,"Credits":8.5,"Skill":"ALL"},{"Name":"R Khan","Team":1,"Credits":9.5,"Skill":"BOW"},{"Name":"A Joseph","Team":1,"Credits":8,"Skill":"BOW"},{"Name":"R S Kishore","Team":1,"Credits":8,"Skill":"BOW"},{"Name":"M Shami","Team":1,"Credits":9,"Skill":"BOW"},{"Name":"Y Dayal","Team":1,"Credits":8,"Skill":"BOW"},{"Name":"V Kohli","Team":2,"Credits":8.5,"Skill":"BAT"},{"Name":"F Du Plessis","Team":2,"Credits":9.5,"Skill":"BAT"},{"Name":"R Patidar","Team":2,"Credits":8.5,"Skill":"BAT"},{"Name":"M Lomror","Team":2,"Credits":8,"Skill":"BAT"},{"Name":"G Maxwell","Team":2,"Credits":9.5,"Skill":"ALL"},{"Name":"D Karthik","Team":2,"Credits":9,"Skill":"WK"},{"Name":"S Ahmed","Team":2,"Credits":8.5,"Skill":"ALL"},{"Name":"H Patel","Team":2,"Credits":9,"Skill":"BOW"},{"Name":"W Hasaranga","Team":2,"Credits":9.5,"Skill":"BOW"},{"Name":"M Siraj","Team":2,"Credits":8.5,"Skill":"BOW"},{"Name":"J Hazelwood","Team":2,"Credits":9,"Skill":"BOW"}]
  let ability = {'BAT':'BAT','WK':'WK','ALL':'ALL','BOW':'BOW'};

  let total = 0;
  let t=0;
  let f=0;
  let i;
  let i1;
  let b =[];
  let ot = {1:0,2:0};
  let os = {'BAT':0,'WK':0,'ALL':0,'BOW':0};


function prefilter(n,sk)
  {
    if((os[a[i1].Skill] < n) && (a[i1].Skill===sk) && ot[a[i1].Team] <7) 
   {
    ot[a[i1].Team] +=1;
    os[a[i1].Skill] +=1;
    t+=a[i1].Credits;
    b.push(a[i1]);
    a.splice(i1,1);
    f++;
    }
  }

function selectTeam(a,n1,n2,n3,n4)
{
n1 = n1<1 ? 1: n1;
n2 = n2<3 ? 3: n2;
n3 = n3<1 ? 1: n3;
n4 = n4<3 ? 3: n4;

if(n1+n2+n3+n4 <=11)
{
while(f<(n1+n2+n3+n4))
{
  i1=Math.floor(Math.random()*(a.length));

  prefilter(n1,'WK');
  prefilter(n2,'BAT');
  prefilter(n3,'ALL');
  prefilter(n4,'BOW');
}

while(f<11)
{
    i=Math.floor(Math.random()*(a.length));

    if(t<=(100-a[i].Credits) && ot[a[i].Team] <7)
    {
        ot[a[i].Team] +=1;
        os[a[i].Skill] +=1;
        t+=a[i].Credits;
        b.push(a[i]);
        a.splice(i,1);
        f++;
    }
}
  
let b1 = b.filter(i => i.Skill === ability.WK);
console.log(ability.WK);
b1.forEach(i => console.log(i.Name));
let b2 = b.filter(i => i.Skill === ability.BAT);
console.log(ability.BAT);
b2.forEach(i => console.log(i.Name));
let b3 = b.filter(i => i.Skill === ability.ALL);
console.log(ability.ALL);
b3.forEach(i => console.log(i.Name));
let b4 = b.filter(i => i.Skill === ability.BOW);
console.log(ability.BOW);
b4.forEach(i => console.log(i.Name));

console.log('');
console.log('CAPTAIN');
let j=Math.floor(Math.random()*(b.length));
let n= b[j];
console.log(n.Name);
console.log('VICE CAPTAIN');
b.splice(j,1);
let j1=Math.floor(Math.random()*(b.length));
n= b[j1];
console.log(n.Name);
}
else
{
  console.log("Players more than 11");
}
}

selectTeam(a,1,4,1,3);

