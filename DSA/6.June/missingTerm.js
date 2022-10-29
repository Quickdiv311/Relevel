let avenger = {
    name: 'Kamala',
    heroName: 'Ms Marvel',
    sideKick: {
        name: 'Bruno',
        heroName: 'Techy',
        
        cities: ['New Jersey','new york']
    },
    cities: ['New Jersey','New York','Karachi'],
};

let {name:name1,heroName,sideKick:{name:name2,heroName:hero,cities:[,city3]},cities: [,,city2]} = avenger;
console.log(name1);