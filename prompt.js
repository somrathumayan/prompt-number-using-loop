// Author Md. Humayan Kabir 

// Get user input difficulty
let difficulty = prompt("Choose anyone one - Easy, Medium and Hard").toLocaleLowerCase();



// Guess the number function 
function guessNumber(difficulty){
    let randomNumber;
    let attempts=0;
    let maxAttempts;
    let range;

    // set difficulty-based parameters
    switch(difficulty){
        case 'easy':
            maxAttempts = 5;
            range = 10;
            randomNumber = Math.floor(Math.random()*10)+1;
            console.log(randomNumber);
            break;

        case 'medium':
            maxAttempts = 7;
            range = 100;
            randomNumber = Math.floor(Math.random()*100)+1;
            console.log(randomNumber);
            break;
        case 'hard':
            maxAttempts = 10;
            range = 1000;
            randomNumber = Math.floor(Math.random()*1000)+1;
            console.log(randomNumber);
            break;
        default:
            console.error("Invalid word write correctly");
    }

    while(attempts<maxAttempts){
        let guess = parseInt(prompt(`Guess a number between 1 and ${range}. You have ${maxAttempts-attempts} attempts left`));
        attempts++;

        if(guess===randomNumber){
            console.log("Congratulations");
            break;
        }
        else if(guess<randomNumber){
            console.log("Too low. Try Again");
        }
        else{
            console.log("Too high. Try Again");

        }
        // console.log(guess);
    }

    
};


guessNumber(difficulty);
