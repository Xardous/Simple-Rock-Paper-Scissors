const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock'||userInput === 'scissors'||userInput === 'paper')
    return userInput;
  else{
    console.log('there has been an error')
  }
};

const getComputerChoice = () =>{
  const getRandomNumber = Math.floor(Math.random() * 3);
  switch(getRandomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}
    
const determineWinner =(userChoice,computerChoice) => {
  if(userChoice === computerChoice){
    return  'It is a tie'
  }
  if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The Computer won'
    }
    else{
      'The user won'
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'The computer won'
      }
      else{
        'The user won'
      }
      if(userChoice === 'scissors'){
        if(computerChoice === 'paper'){
          return 'The computer won'
        }
        else{
          'the user won'
        }
      }
    }
  }
}

const playGame = () =>{
 const userChoice = getUserChoice('rock')
 const computerChoice = getComputerChoice();
  console.log(`Your choice is ${userChoice}`)
  console.log(`The computer's choice is ${computerChoice}`)
  console.log(determineWinner(userChoice,computerChoice))
}

playGame()