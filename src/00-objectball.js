

function gameObject(){
    obj = {
        home : {
            teamName : 'Brooklyn Nets' ,
            colors : ['Black', 'White'] ,
            players : {
                'Alan Anderson' : {
                    number : 0,
                    shoe : 16,
                    points : 22 ,
                    rebounds : 12 ,
                    assists :12 ,
                    steals :3 ,
                    blocks :1 ,
                    slamDunks :1
                } ,
                'Reggie Evans' : {
                    number : 30 ,
                    shoe :14 ,
                    points :12 ,
                    rebounds :12 ,
                    assists :12 ,
                    steals :12 ,
                    blocks :12 ,
                    slamDunks :7
                } ,
                'Brook Lopez' : {
                    number : 11 ,
                    shoe :17 ,
                    points :17 ,
                    rebounds :19 ,
                    assists : 10 ,
                    steals :3 ,
                    blocks : 1, 
                    slamDunks : 15
                } ,
                'Mason Plumlee' : {
                    number : 1 ,
                    shoe :19 ,
                    points :26 ,
                    rebounds :12 ,
                    assists :6 ,
                    steals :3 ,
                    blocks :8 ,
                    slamDunks :5
                } ,
                'Jason Terry' : {
                    number : 31 , 
                    shoe : 15 ,
                    points :19 ,
                    rebounds :2 ,
                    assists :2 ,
                    steals :4 ,
                    blocks :11 ,
                    slamDunks : 1
                } 

            }
        },
        away : {
            teamName : 'Charlotte Hornets' ,
            colors : ['Turquoise', 'Purple'] ,
            players : {
                'Jeff Adrien' : {
                    number : 4,
                    shoe : 18,
                    points : 10 ,
                    rebounds : 1 ,
                    assists :1 ,
                    steals :2 ,
                    blocks :7 ,
                    slamDunks :2
                } ,
                'Bismak Biyombo' : {
                    number : 0 ,
                    shoe :16 ,
                    points :12 ,
                    rebounds :4 ,
                    assists :7 ,
                    steals :7 ,
                    blocks :15 ,
                    slamDunks :10
                } ,
                'DeSagna Diop' : {
                    number : 2 ,
                    shoe :14 ,
                    points :24 ,
                    rebounds :12 ,
                    assists : 12 ,
                    steals :4 ,
                    blocks : 5, 
                    slamDunks : 5
                } ,
                'Ben Gordon' : {
                    number : 8 ,
                    shoe :15 ,
                    points :33 ,
                    rebounds :3 ,
                    assists :2 ,
                    steals :1 ,
                    blocks :1 ,
                    slamDunks :0
                } ,
                'Brendan Haywood' : {
                    number : 33 , 
                    shoe : 15 ,
                    points :6 ,
                    rebounds :12 ,
                    assists :12 ,
                    steals :22 ,
                    blocks :5 ,
                    slamDunks : 12
                } 

            }
        }
    }
    return obj;
}

console.log(gameObject());


function numPointsScored(name){
    for (let team in obj) {
        if (obj[team].players[name]) {
            return obj[team].players[name].points;
        }
    }
    return 'Player not found';
}



function shoeSize(name) {
    for (let team in obj) {
        if (obj[team].players[name]) {
            return obj[team].players[name].shoe;
        }
    }
    return 'Player not found';
}

function teamColors(teamName) {
    for (let team in obj) {
        if (obj[team].teamName === teamName) {
            return obj[team].colors;
        }
    }
    return 'Team not found';
}

function teamNames() {
    return [obj.home.teamName, obj.away.teamName];
}


function playerNumbers(teamName){
    const num = [];
    for(let team in obj) {
        if(obj[team].teamName === teamName) {
            for(let player in obj[team].players) {
                playerNumbers.push(obj[team].players[player].num)
            }
        }
    }
    return num
}


function playerStats(name) {
    for(let team in obj) {
        if(obj[team].players[name]) {
            return obj[team].players[name];
        }
    }
    return 'Team not found';

}


