let player = ['A Sharma','I Kishan',
    'Kane W','R Sharma',
    'R Tripathi','D Sams',
    'A Markram','T Verma',
    'N Pooran','T Stubbs',
    'W Sundar','Hritik S',
    'Shashank','T David',
    'M Jansen','Ramandeep',
    'B Kumar','KK Singh',
    'U Malik','J Bumrah',
    'T Natarajan','R Meredith'];

let points = [8.0,8.5,9.0,9.5,10.0];
let ability = ['BAT','WK','ALL','BOW'];
let a = [
{name: player[0], credits: points[1], team: 1, skill: ability[2]},{name: player[1], credits: points[2], team: 2, skill: ability[1]},
{name: player[2], credits: points[2], team: 1, skill: ability[0]},{name: player[3], credits: points[3], team: 2, skill: ability[0]},
{name: player[4], credits: points[3], team: 1, skill: ability[0]},{name: player[5], credits: points[1], team: 2, skill: ability[2]},
{name: player[6], credits: points[4], team: 1, skill: ability[2]},{name: player[7], credits: points[1], team: 2, skill: ability[0]},
{name: player[8], credits: points[3], team: 1, skill: ability[1]},{name: player[9], credits: points[0], team: 2, skill: ability[1]},
{name: player[10], credits: points[1], team: 1, skill: ability[2]},{name: player[11], credits: points[0], team: 2, skill: ability[3]},
{name: player[12], credits: points[0], team: 1, skill: ability[0]},{name: player[13], credits: points[1], team: 2, skill: ability[0]},
{name: player[14], credits: points[1], team: 1, skill: ability[2]},{name: player[15], credits: points[0], team: 2, skill: ability[0]},
{name: player[16], credits: points[1], team: 1, skill: ability[3]},{name: player[17], credits: points[0], team: 2, skill: ability[3]},
{name: player[18], credits: points[1], team: 1, skill: ability[3]},{name: player[19], credits: points[2], team: 2, skill: ability[3]},
{name: player[20], credits: points[2], team: 1, skill: ability[3]},{name: player[21], credits: points[1], team: 2, skill: ability[3]}];

let total = 0;
  let t=0;
  let f=0;
  let i;
  let b =[];
  let ot = {1:0,2:0};
  let os = {'BAT':0,'WK':0,'ALL':0,'BOW':0};

while(f<4)
{
    let i1=Math.floor(Math.random()*(a.length));

 if(os[a[i1].skill] === 0) 
 {
    ot[a[i1].team] +=1;
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




