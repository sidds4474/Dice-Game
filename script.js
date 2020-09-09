let player1turn=true

const meassge=document.getElementById('message')
const player1=document.getElementById('player1Scoreboard')
const player2=document.getElementById('player2Scoreboard')
const player1dice=document.getElementById('player1Dice')
const player2dice=document.getElementById('player2Dice')
const rollbtn=document.getElementById('rollBtn')
const resetbtn=document.getElementById('resetBtn')



rollbtn.addEventListener("click",numberGenerate)
resetbtn.addEventListener("click",resetEverything)

let score1=0,score2=0
function numberGenerate(){
    const i=Math.floor((Math.random() * 6) + 1)
    if(player1turn){

      score1=i+score1
      player1.innerText=score1
      player1dice.innerText=i
      message.innerText='Player 1 Turn'
      player1dice.classList.add('active')
      player2dice.classList.remove('active')
    }
  else{
    score2=score2+i
    player2.innerText=score2
    player2dice.innerText=i
    message.innerText='Player 2 Turn'
    player2dice.classList.add('active')
    player1dice.classList.remove('active')
  }
  if(score1>=20){
    message.innerText='Player 1 Won'
    hideandShow()
  }
  if(score2>=20){
    message.innerText='Player 2 Won'
    hideandShow()
   }
  player1turn=!player1turn
}
///end of this function

function resetEverything(){
  score1=0,score2=0
  message.innerText='New Game'
  player1.innerText='0'
  player1dice.innerText='-'
  player2.innerText='0'
  player2dice.innerText='-'
  rollbtn.style.display='inline-flex'
  resetbtn.style.display='none'
  player1turn=true
  player1dice.classList.add('active')
  player2dice.classList.remove('active')
}
function hideandShow(){
  rollbtn.style.display='none'
  resetbtn.style.display='inline-flex' 
}