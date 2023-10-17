const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

rock.addEventListener("click", function(){
	playRound("rock",getComputerChoice())
});
paper.addEventListener('click', function(){
	playRound("paper",getComputerChoice());
});
scissor.addEventListener('click', function(){
	playRound("scissor", getComputerChoice());
});

function getComputerChoice(){
	const play = ["rock","paper","scissor"];		
	return play[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection){
	playerSelection.toLowerCase();

	if(playerSelection == computerSelection){
		
		console.log(`Computer: ${computerSelection} & You: ${playerSelection}`);
		console.log(`It is a tie! both are ${playerSelection}s`);

	} else if((playerSelection == "rock" && computerSelection == "paper") || 
		(playerSelection == "scissor" && computerSelection == "rock") || 
		(playerSelection == "paper" && computerSelection == "scissor")){
		
		console.log(`Computer: ${computerSelection} & You: ${playerSelection}`);
		console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);

	} else if((playerSelection == "rock" && computerSelection == "scissor") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissor" && computerSelection == "paper")){
		
		console.log(`Computer: ${computerSelection} & You: ${playerSelection}`);
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
	}
}

	let win = 0;
	let lose = 0;
	let tie = 0;

