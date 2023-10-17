const container = document.querySelector(".container");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const result = document.querySelector('.result');
const score = document.querySelector('.score');

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

let computer = 0;
let you = 0;

function playRound(playerSelection, computerSelection){
	playerSelection.toLowerCase();

	if(playerSelection == computerSelection){
		
		// console.log();
		result.innerText = "It is a tie! both are " + playerSelection + "s";
		result.style.backgroundColor = 'grey';

	} else if((playerSelection == "rock" && computerSelection == "paper") || 
		(playerSelection == "scissor" && computerSelection == "rock") || 
		(playerSelection == "paper" && computerSelection == "scissor")){
		
		result.innerHTML = "You Lose! " + computerSelection + " beats " + playerSelection;
		result.style.backgroundColor = "red";
		computer++;
		score.innerText = `You: ${you} \t Computer: ${computer}`;

	} else if((playerSelection == "rock" && computerSelection == "scissor") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissor" && computerSelection == "paper")){
		
		result.innerHTML = "You Win! " + playerSelection + " beats " + computerSelection;
		result.style.backgroundColor = "green";
		you++;
		score.innerText = `You: ${you} \t Computer: ${computer}`;
	}
}