let player = ['Quinton de Kock',' KL Rahul',' Deepak Hooda',' Marcus Stoinis',' Ayush Badoni',' Krunal Pandya',' Jason Holder',
             ' Avesh Khan',' Dushmantha Chameera',' Mohsin Khan',' R Bishnoi',
             ' Venkatesh Iyer',' Ajinkya Rahane',' Shreyas Iyer ',' Nitish Rana',' Sam Billings ',' Andre Russell',' Rinku Singh',
             ' Sunil Narine',' Tim Southee',' Umesh Yadav',' Varun Chakravarty'];
let ability = {'BAT':'BAT','WK':'WK','ALL':'ALL','BOW':'BOW'};
let a = [
{name: player[0],  team: 1,credits: 9.0,  skill: ability.WK},
{name: player[1],  team: 1,credits: 10.0, skill: ability.BAT},{name: player[2],  team: 1, credits: 9.5, skill: ability.BAT},
{name: player[3],  team: 1,credits: 8.5,  skill: ability.BAT},{name: player[4],  team: 1, credits: 8.0, skill: ability.BAT},
{name: player[5],  team: 1,credits: 8.5,  skill: ability.ALL},{name: player[6],  team: 1, credits: 8.5, skill: ability.ALL},

{name: player[7],  team: 1,credits: 9.0, skill: ability.BOW},{name: player[8],  team: 1, credits: 8.5, skill: ability.BOW},
{name: player[9],  team: 1,credits: 8.5, skill: ability.BOW},{name: player[10], team: 1, credits: 8.5, skill: ability.BOW},

{name: player[11], team: 2,credits: 8.5, skill: ability.BAT},
{name: player[12], team: 2,credits: 8.0, skill: ability.BAT},{name: player[13], team: 2,credits: 9.0, skill: ability.BAT},
{name: player[14], team: 2,credits: 9.0, skill: ability.BAT},{name: player[15], team: 2,credits: 8.5, skill: ability.WK},
{name: player[16], team: 2,credits: 10.5, skill: ability.ALL},{name: player[17], team: 2,credits: 8.0, skill: ability.BAT},

{name: player[18], team: 2,credits: 8.5, skill: ability.ALL},{name: player[19], team: 2,credits: 8.5, skill: ability.BOW},
{name: player[20], team: 2,credits: 9.0, skill: ability.BOW},{name: player[21], team: 2,credits: 8.0, skill: ability.BOW}];

let total = 0;
  let t=0;
  let f=0;
  let i;
  let i1;
  let b =[];
  let ot = {1:0,2:0};
let os = {'BAT':0,'WK':0,'ALL':0,'BOW':0};


while(f<8)
{
  i1=Math.floor(Math.random()*(a.length));

 if(os[a[i1].skill] === 0 && (a[i1].skill==='WK'|| a[i1].skill==='ALL') && ot[a[i1].team] <7) 
 {
    ot[a[i1].team] +=1;
    os[a[i1].skill] +=1;
    t+=a[i1].credits;
    b.push(a[i1]);
    a.splice(i1,1);
    f++;
 }

 else if(os[a[i1].skill] < 3  && (a[i1].skill==='BAT' || a[i1].skill==='BOW') && ot[a[i1].team] <7) 
 {
    ot[a[i1].team] +=1;
    os[a[i1].skill] +=1;
    t+=a[i1].credits;
    b.push(a[i1]);
    a.splice(i1,1);
    f++;
 }
}

while(f<11)
{
    i=Math.floor(Math.random()*(a.length));

    if(t<=(100-a[i].credits) && ot[a[i].team] <7)
    {
        ot[a[i].team] +=1;
        os[a[i].skill] +=1;
        t+=a[i].credits;
        b.push(a[i]);
        a.splice(i,1);
        f++;
    }
}
  
b.forEach(i => console.log(i));
console.log('cap');
let j=Math.floor(Math.random()*(b.length));
let n= b[j];
console.log(n);
console.log('vc');
b.splice(j,1);
let j1=Math.floor(Math.random()*(b.length));
n= b[j1];
console.log(n);




