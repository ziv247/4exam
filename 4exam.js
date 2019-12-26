const readline = require('readline-sync');

function randomBetween(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}

function round(player1, player2, roundNum) {

    let randNum = randomBetween(-5, 13);
    let winner = {};
    if (randNum % 2 == 0) {
        player1.score += 1;
        winner = player1;

    } else {
        player2.score += 1;
        winner = player2;
    }
    console.log(`Round #${roundNum}, random number is ${randNum}, ${winner.name} scored!`);
    console.log(`Status: ${player1.name} ${player1.score}, ${player2.name} ${player2.score}`);

    return winner;

}
// //Phase1

function phase1() {
    const player1 = new Player(readline.question("Enter Player 1 name: "));
    const player2 = new Player(readline.question("Enter Player 2 name: "));

    for (let i = 0; i < 5; i++) {
        let winner = round(player1, player2, i + 1);

        if (winner.score == 3) {
            console.log(`\n${winner.name} Win!`);
            break;
        }
    }
}

function phase2() {

    const players = [];
    let winner = {};
    let roundsCounter = 0;

    console.log("Welcome! Please insert 2-7 players!");
    for (let i = 0; i < 7; i++) {
        let name = i < 2
            ?
            readline.question(`Enter Player ${i + 1} name: `)
            :
            readline.question(`Enter Player ${i + 1} name, to stop pick player insert 0 (Zero) `);
        if (name == "0") {
            break;
        }
        players.push(new Player(name));
    }

    while (winner.score != 3) {
        let index = randomBetween(0, players.length - 1);
        [players[index], players[0]] = [players[0], players[index]];
        let player1 = players[0];
        let player2 = players[randomBetween(1, players.length - 1)];
        winner = round(player1, player2, ++roundsCounter);
    }
    console.log(`\n${winner.name} Win!`);
}

phase2();
