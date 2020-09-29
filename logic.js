let gameArray = ["", "", "", "", "", "", "", "", "",]
let playerOneTurn = true;
let moves = 0;
let halTrue;
let validMove;
const green = "rgb(59, 180, 75)";

const result = document.querySelector(".result");
const display = document.createElement("div");
display.innerHTML = "Select Game Mode"
result.appendChild(display)

const Player = (name, symbol) => {
    const move = (playerMove) => {
        if (playerMove == "one" && gameArray[0] == "") {
            gameArray[0] = symbol;
            validMove = true;
        } else if (playerMove == "two" && gameArray[1] == "") {
            gameArray[1] = symbol;
            validMove = true;
        } else if (playerMove == "three" && gameArray[2] == "") {
            gameArray[2] = symbol;
            validMove = true;
        } else if (playerMove == "four" && gameArray[3] == "") {
            gameArray[3] = symbol;
            validMove = true;
        } else if (playerMove == "five" && gameArray[4] == "") {
            gameArray[4] = symbol;
            validMove = true;
        } else if (playerMove == "six" && gameArray[5] == "") {
            gameArray[5] = symbol;
            validMove = true;
        } else if (playerMove == "seven" && gameArray[6] == "") {
            gameArray[6] = symbol;
            validMove = true;
        } else if (playerMove == "eight" && gameArray[7] == "") {
            gameArray[7] = symbol;
            validMove = true;
        } else if (playerMove == "nine" && gameArray[8] == "") {
            gameArray[8] = symbol;
            validMove = true;
        } else {
            alert("That space is not available")
            moves--;
            validMove = false
        }
    }

    const checkWin = () => {
        let winner;

        if (gameArray[0] == symbol && gameArray[1] == symbol && gameArray[2] == symbol) {
            winner = name                        
            gameArray = ["", "", "", "", "", "", "", "", "",]
            const highlight1 = document.getElementById("one");
            highlight1.style.backgroundColor = green
            const highlight2 = document.getElementById("two");
            highlight2.style.backgroundColor = green
            const highlight3 = document.getElementById("three");
            highlight3.style.backgroundColor = green
            moves = 0
            display.innerHTML = `${winner} wins!`;

            
        } else if (gameArray[3] == symbol && gameArray[4] == symbol && gameArray[5] == symbol) {
            winner = name
            gameArray = ["", "", "", "", "", "", "", "", "",]
            const highlight1 = document.getElementById("four");
            highlight1.style.backgroundColor = green
            const highlight2 = document.getElementById("five");
            highlight2.style.backgroundColor = green
            const highlight3 = document.getElementById("six");
            highlight3.style.backgroundColor = green
            moves = 0
            display.innerHTML = `${winner} wins!`;


        } else if (gameArray[6] == symbol && gameArray[7] == symbol && gameArray[8] == symbol) {
            winner = name
            gameArray = ["", "", "", "", "", "", "", "", "",]
            const highlight1 = document.getElementById("seven");
            highlight1.style.backgroundColor = green
            const highlight2 = document.getElementById("eight");
            highlight2.style.backgroundColor = green
            const highlight3 = document.getElementById("nine");
            highlight3.style.backgroundColor = green
            moves = 0
            display.innerHTML = `${winner} wins!`;


        } else if (gameArray[0] == symbol && gameArray[3] == symbol && gameArray[6] == symbol) {
            winner = name
            gameArray = ["", "", "", "", "", "", "", "", "",]
            const highlight1 = document.getElementById("one");
            highlight1.style.backgroundColor = green
            const highlight2 = document.getElementById("four");
            highlight2.style.backgroundColor = green
            const highlight3 = document.getElementById("seven");
            highlight3.style.backgroundColor = green
            moves = 0
            display.innerHTML = `${winner} wins!`;


        } else if (gameArray[1] == symbol && gameArray[4] == symbol && gameArray[7] == symbol) {
            winner = name
            gameArray = ["", "", "", "", "", "", "", "", "",]
            const highlight1 = document.getElementById("two");
            highlight1.style.backgroundColor = green
            const highlight2 = document.getElementById("five");
            highlight2.style.backgroundColor = green
            const highlight3 = document.getElementById("eight");
            highlight3.style.backgroundColor = green
            moves = 0
            display.innerHTML = `${winner} wins!`;


        } else if (gameArray[2] == symbol && gameArray[5] == symbol && gameArray[8] == symbol) {
            winner = name
            gameArray = ["", "", "", "", "", "", "", "", "",]
            const highlight1 = document.getElementById("three");
            highlight1.style.backgroundColor = green
            const highlight2 = document.getElementById("six");
            highlight2.style.backgroundColor = green
            const highlight3 = document.getElementById("nine");
            highlight3.style.backgroundColor = green
            moves = 0
            display.innerHTML = `${winner} wins!`;


        } else if (gameArray[0] == symbol && gameArray[4] == symbol && gameArray[8] == symbol) {
            winner = name
            gameArray = ["", "", "", "", "", "", "", "", "",]
            const highlight1 = document.getElementById("one");
            highlight1.style.backgroundColor = green
            const highlight2 = document.getElementById("five");
            highlight2.style.backgroundColor = green
            const highlight3 = document.getElementById("nine");
            highlight3.style.backgroundColor = green
            moves = 0
            display.innerHTML = `${winner} wins!`;


        } else if (gameArray[2] == symbol && gameArray[4] == symbol && gameArray[6] == symbol) {
            winner = name
            gameArray = ["", "", "", "", "", "", "", "", "",]
            const highlight1 = document.getElementById("three");
            highlight1.style.backgroundColor = green
            const highlight2 = document.getElementById("five");
            highlight2.style.backgroundColor = green
            const highlight3 = document.getElementById("seven");
            highlight3.style.backgroundColor = green
            moves = 0
            display.innerHTML = `${winner} wins!`;

        }
    }
    return { name, symbol, move, checkWin }
};

const GameBoard = () => {
    try {
        display.innerHTML = `${Player1.name}'s turn`;
    } catch {
        //pass
    }

    let idListed = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const container = document.querySelector(".container");
    removeAllChildNodes(container)

    for (let i = 0; i < 9; i++) {
        const space = document.createElement('div');
        space.classList.add("grid-item");
        space.setAttribute("id", idListed[i]);
        space.innerHTML = gameArray[i]
        container.appendChild(space)
    }

    const button = Array.from(document.querySelectorAll('.grid-item'));
    button.forEach(button => button.addEventListener('click', function(e) {

        let playerMove = this.id;

        if (halTrue) {
            if (playerOneTurn) {

                Player1.move(playerMove);

                if (validMove) {
                    GameBoard()
                    playerOneTurn = false;
                    display.innerHTML = `${Player2.name}'s turn`; 
                    const change = document.getElementById(this.id);
                    change.innerHTML = Player1.symbol
                    if (moves < 8) {
                        setTimeout(() => document.getElementById("one").click(), 1500)
                    }
                }

            } else if (!playerOneTurn) {

                let needMove = true;

                while (needMove) {
                    randomNum = Math.floor((Math.random() * 10));
                    if (gameArray[randomNum] == "") {
                        playerMove = idListed[randomNum]
                        needMove = false
                    }
                }

                Player2.move(playerMove);
                GameBoard()
                display.innerHTML = `${Player1.name}'s turn`;
                playerOneTurn = true;
            } 
        } else {
            if (playerOneTurn) {

                Player1.move(playerMove);

                if (validMove) {
                    GameBoard()
                    playerOneTurn = false;
                    display.innerHTML = `${Player2.name}'s turn`; 
                    const change = document.getElementById(this.id);
                    change.innerHTML = Player1.symbol
                }

                
            } else if (!playerOneTurn) {

                Player2.move(playerMove);

                if (validMove) {
                    GameBoard()
                    playerOneTurn = true;
                    display.innerHTML = `${Player1.name}'s turn`;
                    const change = document.getElementById(this.id);
                    change.innerHTML = Player2.symbol
                }
            } 
        };

        moves++;

        Player1.checkWin()
        Player2.checkWin()

        if (moves === 9) {
            winner = `The game was a tie`
            gameArray = ["", "", "", "", "", "", "", "", "",]
            moves = 0
            display.innerHTML = winner;
        }
    }));
}

const gameButton = document.querySelector(".gameButton");
gameButton.addEventListener('click', function() {
    moves = 0
    playerOneTurn = true

    let p1Name = window.prompt("Player 1 name","Player 1");
    Player1 = Player(p1Name, "X");

    let p2Name = window.prompt("Player 2 name","Player 2");
    Player2 = Player(p2Name, "O");

    halTrue = false
    gameArray = ["", "", "", "", "", "", "", "", "",]
    GameBoard()

})

const aiButton = document.querySelector(".aiButton");
aiButton.addEventListener('click', function() {
    moves = 0
    playerOneTurn = true
    let p1Name = window.prompt("Player 1 name","Player 1");
    Player1 = Player(p1Name, "X");
    let p2Name = `HAL`;
    halTrue = true
    Player2 = Player(p2Name, "O");
    gameArray = ["", "", "", "", "", "", "", "", "",]
    GameBoard()
})

const restart = document.querySelector(".restart");
restart.addEventListener('click', function() {
    moves = 0
    playerOneTurn = true;
    gameArray = ["", "", "", "", "", "", "", "", "",]
    GameBoard()
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

GameBoard()
