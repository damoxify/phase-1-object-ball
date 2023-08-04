// console.log(gameObject())

function gameObject() {
    const teamPlay = {
        home: {
            teamName: "BrooklynNets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "CharlotteHornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };

    return teamPlay;
}


// function homeTeamName(){
//     // let object = gameObject()
//     // return (object['home']['teamName'])
//     return gameObject()['home']['teamName']
// }

// console.log(homeTeamName());    

// Function takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored(playerName) {
    const gameData = gameObject(); 

    for (const team in gameData) {
        if (team in gameData) {
            const players = gameData[team].players;

            for (const player in players) {
                if (player in players && player === playerName) {
                    return players[player].points;
                }
            }
        }
    }

    return "Player not found";
}

console.log(numPointsScored("Ben Gordon"))



function shoeSize(playerName) {
    const gameData = gameObject(); 

    for (const team in gameData) {
        if (team in gameData) {
            const players = gameData[team].players;
            const playerData = players[playerName];

            if (playerData) {
                return playerData.shoe;
            }
        }
    }

    return "Player not found";
}

console.log(shoeSize("Mason Plumlee"))




function teamColors(teamName) {
    const gameData = gameObject(); // Assuming you have the gameObject function defined

    for (const team in gameData) {
        if (team in gameData && gameData[team].teamName === teamName) {
            return gameData[team].colors;
        }
    }

    return "Team not found";
}

console.log(teamColors("BrooklynNets"))


function teamNames(gameData) {
    const teamNamesArray = [];

    for (const team in gameData) {
        if (team in gameData) {
            teamNamesArray.push(gameData[team].teamName);
        }
    }

    return teamNamesArray;
}

const gameData = gameObject();
const names = teamNames(gameData)
// console.log(names)

// Example usage
// const gameData = gameObject(); // Assuming you have the gameObject function defined
// const names = teamNames(gameData);
// console.log(names); // Output: ["BrooklynNets", "CharlotteHornets"]





function playerNumbers(teamName) {
    const gameData = gameObject(); // Assuming you have the gameObject function defined
    const team = gameData.home.teamName === teamName ? 'home' : 'away';
    const players = gameData[team].players;
    const jerseyNumbers = [];

    for (const player in players) {
        if (player in players) {
            jerseyNumbers.push(players[player].number);
        }
    }

    return jerseyNumbers;
}

console.log(playerNumbers("BrooklynNets"));     // Output: [0, 30, 11, 1, 31]
console.log(playerNumbers("CharlotteHornets")); // Output: [4, 2, 2, 8, 33]






function playerStats(playerName) {
    const gameData = gameObject(); // Assuming you have the gameObject function defined

    for (const team in gameData) {
        if (team in gameData) {
            const players = gameData[team].players;
            const playerData = players[playerName];

            if (playerData) {
                return playerData;
            }
        }
    }

    return "Player not found";
}

console.log(playerStats("Alan Anderson"));

console.log(playerStats("LeBron James")); // Output: Player not found





function bigShoeRebounds() {
    const teamPlay = gameObject(); // Get the game data

    let largestShoeSize = 0;
    let playerWithLargestShoeSize = null;

    // Loop through both home and away teams
    for (const team in teamPlay) {
        const players = teamPlay[team].players;

        for (const playerName in players) {
            const player = players[playerName];

            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                playerWithLargestShoeSize = player;
            }
        }
    }

    if (playerWithLargestShoeSize) {
        return playerWithLargestShoeSize.rebounds;
    } else {
        return null; // No player found
    }
}

const rebounds = bigShoeRebounds();








//MOST POINT SCORED
function mostPointsScored() {
    const teamPlay = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = null;

    for (const team in teamPlay) {
        const players = teamPlay[team].players;

        for (const playerName in players) {
            const player = players[playerName];

            if (player.points > mostPoints) {
                mostPoints = player.points;
                playerWithMostPoints = playerName;
            }
        }
    }

    return playerWithMostPoints;
}

const mostPointsPlayer = mostPointsScored();
console.log(mostPointsPlayer);






//WINNING TEAM
function winningTeam() {
    const teamPlay = gameObject();
    let homeTeamTotalPoints = 0;
    let awayTeamTotalPoints = 0;

    const homePlayers = teamPlay.home.players;
    for (const playerName in homePlayers) {
        homeTeamTotalPoints += homePlayers[playerName].points;
    }

    const awayPlayers = teamPlay.away.players;
    for (const playerName in awayPlayers) {
        awayTeamTotalPoints += awayPlayers[playerName].points;
    }

    if (homeTeamTotalPoints > awayTeamTotalPoints) {
        return teamPlay.home.teamName;
    } else if (homeTeamTotalPoints < awayTeamTotalPoints) {
        return teamPlay.away.teamName;
    } else {
        return "It's a tie!";
    }
}
const winning = winningTeam();
console.log(winning);



//PLAYER WITH LONGEST NAME

function playerWithLongestName() {
    const teamPlay = gameObject();
    let longestName = "";
    let playerWithLongestName = null;

    for (const team in teamPlay) {
        const players = teamPlay[team].players;

        for (const playerName in players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
                playerWithLongestName = playerName;
            }
        }
    }

    return playerWithLongestName;
}

const longestNamePlayer = playerWithLongestName();
console.log(longestNamePlayer);




//DOES LONG NAME STEAL A TON
function doesLongNameStealATon() {
    const teamPlay = gameObject();
    let longestName = "";
    let playerWithLongestName = null;

    for (const team in teamPlay) {
        const players = teamPlay[team].players;

        for (const playerName in players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
                playerWithLongestName = players[playerName];
            }
        }
    }

    if (playerWithLongestName) {
        return playerWithLongestName.steals >= 10;
    } else {
        return false;
    }
}

const longNameStealsATon = doesLongNameStealATon();
console.log(longNameStealsATon);





