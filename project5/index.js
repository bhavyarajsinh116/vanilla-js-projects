const btnEl=document.querySelectorAll("button");
const resultEl=document.getElementById("result")
const playerScore=document.getElementById("user-score");
const computerScore=document.getElementById("computer-score");
let player=0;
let computer=0;
btnEl.forEach((button)=>{
    button.addEventListener("click",()=>{

    const result=playRound(button.id,computerPlay());
    resultEl.textContent=result;
    })
})

function computerPlay(){
    const choise =["rock","paper","scissor"];
    const randomChoise=Math.floor(Math.random()*choise.length);
    return choise[randomChoise];
}
function playRound(playerSelection,computerSelection){
 if (playerSelection === computerSelection) {
  return "it is tie!"
} else if ((playerSelection==="rock" && computerSelection==="scissor") || (playerSelection==="paper"&&computerSelection==="rock") || (playerSelection==="scissor"&&computerSelection==="paper")) {
    player++;
    playerScore.textContent=player;
    return "you win!!" + playerSelection + " beats " + computerSelection;
} else {
    computer++;
    computerScore.textContent=computer;
    return "computer Win!!" + playerSelection + " beats " + computerSelection;

}
}

