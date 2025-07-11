import { Player } from "./player.js";
import { Gameboard } from "./gameboard.js";

const DOMController = (() => {
    const playerBoard = document.getElementById("player-board");
    const computerBoard = document.getElementById("computer-board");
    const statusDiv = document.getElementById("status");
    const placeForm = document.getElementById("place-form");
    const startGameBtn = document.getElementById("start-game");

    let humanPlayer;
    let computerPlayer;
    let humanShipLengths = [];
    let shipsPlaced = false;

    function renderBoard(board, container, isEnemy = false) {
        container.innerHTML = "";
        for (let y = 0; y < 10; y++) {
            const row = document.createElement("div");

            row.classList.add("row");
            for (let x = 0; x < 10; x++) {
                const cell = document.createElement("button");

                cell.classList.add("cell");
                cell.dataset.x = x;
                cell.dataset.y = y;

                if (board.gameboardArray[x][y] === true) {
                    cell.classList.add("attacked");

                    if (board.shipArray[x][y]) {

                        // This was a hit
                        cell.classList.add("hit");
                    }
                }
                if (!isEnemy && board.shipArray[x][y]) {
                    cell.classList.add("ship");
                }

                if (isEnemy && board.gameboardArray[x][y] === false) {
                    cell.addEventListener("click", () => handlePlayerAttack(x, y));
                }
                row.appendChild(cell);
            }
            container.appendChild(row);
        }
    }

    function updateStatus(msg) {
        statusDiv.textContent = msg;
    }
    function placeComputerShips() {
        const directions = ["up", "down", "left", "right"];

        humanShipLengths.forEach(length => {
            let placed = false;

            while (!placed) {
                const x = Math.floor(Math.random() * 10);
                const y = Math.floor(Math.random() * 10);
                const dir = directions[Math.floor(Math.random() * directions.length)];
                const result = computerPlayer.gameboard.place(length, dir, [x, y]);

                if (result === "valid") placed = true;
            }
        });
    }

    function startGame() {
        Player.reset();
        humanPlayer = new Player(false);
        computerPlayer = new Player(true);

        // computerPlayer.gameboard.place(5, "right", [0, 0]);
        // computerPlayer.gameboard.place(4, "down", [2, 2]);

        renderBoards();
        updateStatus("Place your ships first.");
    }

    function renderBoards() {
        renderBoard(humanPlayer.gameboard, playerBoard, false);
        renderBoard(computerPlayer.gameboard, computerBoard, true);
    }
    let gameOver = false;

    function handlePlayerAttack(x, y) {
        if (gameOver) return;
        if (!shipsPlaced) {
            shipsPlaced = true;
            placeComputerShips();
        }
        const result = humanPlayer.attack(computerPlayer.gameboard, x, y);

        renderBoards();
        if (computerPlayer.gameboard.report() === true) {
            updateStatus("You win!");
            gameOver = true;
            return;
        }
        setTimeout(() => {
            computerTurn();
        }, 2000);
    }

    function computerTurn() {
        computerPlayer.randomAttack(humanPlayer.gameboard);
        renderBoards();
        if (humanPlayer.gameboard.report() === true) {
            updateStatus("Computer wins!");
            gameOver = true;
        } else {
            updateStatus("Your turn. Attack the enemy!");
        }
    }

    function handlePlaceFormSubmit(e) {
        e.preventDefault();
        if (shipsPlaced) return;
        const length = parseInt(document.getElementById("ship-length").value);
        const direction = document.getElementById("ship-direction").value;
        const indexInput = document.getElementById("ship-start").value;
        const [x, y] = indexInput.split(",").map(Number);

        const result = humanPlayer.gameboard.place(length, direction, [x, y]);

        renderBoards();

        if (result === "valid") {
            humanShipLengths.push(length);
            updateStatus("Ship placed. Place another or start game.");
        } else {
            updateStatus("Invalid placement. Try again.");
        }
    }

    placeForm.addEventListener("submit", handlePlaceFormSubmit);
    startGameBtn.addEventListener("click", () => {
        startGame();
        updateStatus("Place your ships using the form.");
    });

    return { startGame };
})();

export default DOMController;
