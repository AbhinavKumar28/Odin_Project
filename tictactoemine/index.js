const gameBoard = (()=>{
    const board = [[0,0,0],[0,0,0],[0,0,0]]
    const setCell=(row,column,symbol)=>{
        if (board[row][column]===0){
            board[row][column]=symbol
            return true
        }else{
            return false
        }
    }
    const resetCell = ()=>{
        for (let i=0; i<3; i++){
            for (let j=0;j<3; j++){
                board[i][j]=0
            }
        }
    }
    return {board, setCell, resetCell}
})()
// console.log(gameBoard.board.map(r=>r[1]))
let gameController = (function () {
    let currentPlayer1;
    let currentPlayer2;
    let turn = 1;
    let marker;

    //Initialize the game round
    function init(player1, player2) {
        currentPlayer1 = player1;
        currentPlayer2 = player2;
        turn = 1;
    
        // Reinitialize the event listeners for the cells
        let cells = document.querySelectorAll(".container div div");
        Array.from(cells).forEach((cell) => {
            // Remove any existing click events before reattaching
            cell.removeEventListener("click", cellClickListener);

            // Re-attach the event listener to each cell
            cell.addEventListener("click", cellClickListener);
        });
    }

    // Function to handle cell click
    function cellClickListener(event) {
        // If the cell is already marked or the game is over, do nothing
        if (event.target.textContent != "" || gameBoard.gameResult()) {
            return;
        }

        // Determine whose turn it is and set the marker
        if (turn === 1) {
            marker = currentPlayer1.marker;
            turn = 2;
        } else {
            marker = currentPlayer2.marker;
            turn = 1;
        }

        // Place the marker in the clicked cell
        const row = event.target.dataset.row;
        const column = event.target.dataset.column;
        gameBoard.placeMarker(row, column, marker, currentPlayer1, currentPlayer2);
    }

    return { init };
})();

const gameController=(player1name="name1",player2name="name2")=>{
    const gameCheck =()=>{
        if (
            board[0].every((v) => v === 1) ||
            board[1].every((v) => v === 1) ||
            board[2].every((v) => v === 1)
        ) {
            return 1
        }else if(
            board.map(row => row[1]).every((v) => v === 1) ||
            board.map(row => row[0]).every((v) => v === 1) ||
            board.map(row => row[2]).every((v) => v === 1)
        ) {
            return 1
        }else if((
            board[0][0]===1 && board[1][1]===1 && board[2][2]===1
        ) || (
            board[2][0]===1 && board[1][1]===1 && board[0][2]===1
        )){
            return 1
        }else if (
            board[0].every((v) => v === 2) ||
            board[1].every((v) => v === 2) ||
            board[2].every((v) => v === 2)
        ) {
            return 2
        }else if(
            board.map(row => row[1]).every((v) => v === 2) ||
            board.map(row => row[0]).every((v) => v === 2) ||
            board.map(row => row[2]).every((v) => v === 2)
        ) {
            return 2
        }else if((
            board[0][0]===2 && board[1][1]===2 && board[2][2]===2
        ) || (
            board[2][0]===2 && board[1][1]===2 && board[0][2]===2
        )){
            return 2
        }else if (!(board.some(row => row.includes(0)))){
            return null
        }else{
            return "Draw"
        }
    }
    const board = gameBoard()
    const players = [
        {
            name:player1name,
            token:1,
            marker:"X"
        },
        {
            name:player2name,
            token:2,
            marker:"O"
            
        }
    ]
    let activePlayer=players[0]
    const gamePlay = ()=>{
        board.setCell(ro)
    } 
    const switchPlayerTurn = () => {
        activePlayer = activePlayer===players[0]? players[1]:players[0]
    }
    const getActivePlayer = () => activePlayer
    return { gameCheck, triggered}
}
function player(name, marker) {
    return { name, marker }
}