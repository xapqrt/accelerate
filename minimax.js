// minimax algo for tictactor


function checkWinner(board){
const lines=[
[0,1,2],[3,4,5],[6,7,8],


[0,3,6],[1,4,7],[2,5,8],


[0,4,8],[2,4,6]
]

for(let line of lines){


const [a,b,c]=line
if(board[a]&&board[a]===board[b]&&board[a]===board[c]){


return board[a]
}
}


return null
}



function isBoardFull(board){


for(let i=0;i<9;i++){
if(!board[i])return false


}
return true
}



function availableMoves(board){
const moves=[]


for(let i=0;i<9;i++){


if(!board[i])moves.push(i)
}


return moves
}



function minimax(board,depth,isMaximizing,aiPlayer,humanPlayer){
const winner=checkWinner(board)


if(winner===aiPlayer)return 10-depth


if(winner===humanPlayer)return depth-10


if(isBoardFull(board))return 0

if(isMaximizing){

let bestScore=-Infinity
for(let move of availableMoves(board)){


board[move]=aiPlayer
const score=minimax(board,depth+1,false,aiPlayer,humanPlayer)


board[move]=null
bestScore=Math.max(score,bestScore)


}
return bestScore
}else{

let bestScore=Infinity


for(let move of availableMoves(board)){
board[move]=humanPlayer


const score=minimax(board,depth+1,true,aiPlayer,humanPlayer)
board[move]=null


bestScore=Math.min(score,bestScore)
}


return bestScore
}
}



function getBestMove(board,aiPlayer,humanPlayer){

if(Math.random()<0.6){
const moves=availableMoves(board)


return moves[Math.floor(Math.random()*moves.length)]
}

let bestScore=-Infinity
let bestMove=-1

for(let move of availableMoves(board)){


board[move]=aiPlayer


const score=minimax(board,0,false,aiPlayer,humanPlayer)
board[move]=null

if(score>bestScore){


bestScore=score
bestMove=move


}
}

return bestMove


}
