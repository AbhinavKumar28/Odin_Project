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
console.log(gameBoard.board.map(r=>r[1]))
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