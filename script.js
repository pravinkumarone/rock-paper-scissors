function getComputerChoice(){
	const play = ["rock","paper","scissor"];		
	return play[Math.floor(Math.random() * 3)];

}

function playRound(playerSelection, computerSelection){
	playerSelection.toLowerCase();

	if(playerSelection == computerSelection){
		
		console.log(`Computer: ${computerSelection} & You: ${playerSelection}`);
		console.log(`It is a tie! both are ${playerSelection}s`);
		return 0;

	} else if((playerSelection == "rock" && computerSelection == "paper") || 
		(playerSelection == "scissor" && computerSelection == "rock") || 
		(playerSelection == "paper" && computerSelection == "scissor")){
		
		console.log(`Computer: ${computerSelection} & You: ${playerSelection}`);
		console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
		return -1;

	} else if((playerSelection == "rock" && computerSelection == "scissor") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissor" && computerSelection == "paper")){
		
		console.log(`Computer: ${computerSelection} & You: ${playerSelection}`);
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
		return 1;
	}
}

function game(){
	let win = 0;
	let lose = 0;
	let tie = 0;

	for(let i = 1; i<= 5; i++){
		let ans = playRound(prompt("Enter any"),getComputerChoice());
		if(ans == 0){
			tie++;
		} else if(ans == 1){
			win++;
		} else if(ans == -1){
			lose++;
		}
	}
	if(win > lose){
		console.log(`Congratulations! You are the winner with ${win} wins and ${lose} lose` );
	} else if(lose > win){
		console.log(`We're sorry, You lost the game with ${lose} lose and ${win} wins`);
	}
}

game();
