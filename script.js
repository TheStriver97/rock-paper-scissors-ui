let playerScore = 0;
let computerScore = 0;
choice = ["rock", "paper", "scissors"];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", ()=>{
    console.log("rock");
})
paper.addEventListener("click", ()=>{
    console.log("paper");
})
scissors.addEventListener("click", ()=>{
    console.log("scissors");
})

const getComputerChoice = (choice)=>{
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
};

//  const playRound = (playerSelection,computerSelection)=>
//  {
//      if (playerSelection =='rock' && computerSelection =='paper'){
//          computerScore+=1
//          return "one point for computer - Paper beats rock";      
//      }
//      if(playerSelection =='rock' && computerSelection=='scissors'){
//          playerScore+=1
//          return "one point for player - Rock beats scissors";
//      }
//      if(playerSelection =='rock' && computerSelection =='rock'){
//          return "Tie - rock rock rock rock";
//      }
//      if(playerSelection =='scissors' && computerSelection=='scissors'){
//          return "Tie - scissors scissors scissors scissors";
//      }
//      if(playerSelection =='scissors' &&computerSelection =='rock'){
//          computerScore+=1
//          return "one point for computer - scissors cannot beat rock";
//      }
//      if(playerSelection =='scissors' && computerSelection=='paper'){
//          playerScore+=1
//          return "one point for Player - paper cannot beat scissors";      
//      }
//      if(playerSelection =='paper' && computerSelection =='scissors'){
//          computerScore+=1;
//          return"one point for Computer - paper cannot beat scissors";
//      }
//      if(playerSelection =='paper' && computerSelection=='rock'){
//          playerScore+=1;
//          return"one point for Player - rock cannot beat papers";      
//      }
//      if(playerSelection =='paper' &&computerSelection =='paper'){
//          return"Tie - paper paper paper paper";
//      }
//  };
//  const ending = () =>{
//      if(playerScore<computerScore){
//          console.log("Computer won")
//      }
//      else if(playerScore>computerScore){
//          console.log("Player won")
//      }
//      else if(playerScore=computerScore){
//          console.log("Tie")
//      }
//  };
//   const PlayGame= ()=>{
//         let computerSelection = getComputerChoice(choice); 
//           let playerSelection = prompt("Choose one from rock paper or scissors").toString().toLowerCase();
          
//           playRound(playerSelection,computerSelection)
//           console.log(`Your score: ${playerScore}`)
//           console.log(`Computer score: ${computerScore}`)
      
//       ending();
//   }
//   PlayGame();
//  // console.log(computerSelection);
//  console.log(computerScore);
//  console.log(playerSelection);
// //  console.log(playerScore);