let a = [{"Name":"J Buttler","Team":1,"Credits":10.5,"Skill":"WK"},{"Name":"S Samson","Team":1,"Credits":9,"Skill":"WK"},{"Name":"D Padikkal","Team":1,"Credits":8.5,"Skill":"BAT"},{"Name":"Y Jaiswal","Team":1,"Credits":8.5,"Skill":"BAT"},{"Name":"R Ashwin","Team":1,"Credits":9,"Skill":"ALL"},{"Name":"R Parag","Team":1,"Credits":8,"Skill":"ALL"},{"Name":"S Hetmyer","Team":1,"Credits":8.5,"Skill":"BAT"},{"Name":"Y Chahal","Team":1,"Credits":9.5,"Skill":"BOW"},{"Name":"T Boult","Team":1,"Credits":8.5,"Skill":"BOW"},{"Name":"P Krishna","Team":1,"Credits":8.5,"Skill":"BOW"},{"Name":"O McCoy","Team":1,"Credits":8,"Skill":"BOW"},{"Name":"MS Dhoni","Team":2,"Credits":8.5,"Skill":"WK"},{"Name":"N Jagdeesan","Team":2,"Credits":8,"Skill":"WK"},{"Name":"R Gaikwad","Team":2,"Credits":9,"Skill":"BAT"},{"Name":"D Conway","Team":2,"Credits":9.5,"Skill":"BAT"},{"Name":"A Rayudu","Team":2,"Credits":8.5,"Skill":"BAT"},{"Name":"M Ali","Team":2,"Credits":9.5,"Skill":"ALL"},{"Name":"M Santner","Team":2,"Credits":8,"Skill":"ALL"},{"Name":"M Choudary","Team":2,"Credits":8.5,"Skill":"BOW"},{"Name":"M Pathirana","Team":2,"Credits":8,"Skill":"BOW"},{"Name":"S Singh","Team":2,"Credits":8,"Skill":"BOW"},{"Name":"P Solanki","Team":2,"Credits":7.5,"Skill":"BOW"}];  let ability = {'BAT':'BAT','WK':'WK','ALL':'ALL','BOW':'BOW'};
let total = 0;
let playerCount=0;
let index;
let b =[];
let teamCount = {1:0,2:0};
let skillsCount = {'BAT':0,'WK':0,'ALL':0,'BOW':0};


  function selectPlayer(i)
  {
    teamCount[a[i].Team] +=1;
    skillsCount[a[i].Skill] +=1;
    total+=a[i].Credits;
    b.push(a[i]);
    a.splice(i,1);
    playerCount++;
  }

  function rejectPlayer(i)
  {
    a.splice(i,1);
  }

  function preSelect(i,n,sk)
  {
    if((skillsCount[a[i].Skill] < n) && (a[i].Skill===sk)) 
   {
    selectPlayer(i);
    }
  }


function selectTeam(a,b,...input)
{
b[0] = b[0]<1 || b[0]==undefined ? 1: b[0];
b[1] = b[1]<3 || b[1]==undefined ? 3: b[1];
b[2] = b[2]<1 || b[2]==undefined ? 1: b[2];
b[3] = b[3]<3 || b[3]==undefined ? 3: b[3];
let b1 = (b[0]+b[1]+b[2]+b[3]);
    for(let inp of input)
    {
        index = inp;
        if(total<=(100-a[index].Credits) && teamCount[a[index].Team] <7 && playerCount<b1)
        {
           preSelect(index,b[0],ability.WK);
           preSelect(index,b[1],ability.BAT);
           preSelect(index,b[2],ability.ALL);
           preSelect(index,b[3],ability.BOW);
        }
    }
}

function printResult()
{
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


selectTeam(a,0,1);

