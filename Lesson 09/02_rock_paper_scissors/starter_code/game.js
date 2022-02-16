document.addEventListener('DOMContentLoaded', function(event) {

    // Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
    function computerChoice() {
    
        // Pick a random number from 1->3
        let computerChoiceInt = Math.random() * 3;
    
        // Make the number an Int
        computerChoiceInt = Math.ceil(computerChoiceInt);
    
        // Assign a play value based on the number
        if(computerChoiceInt == 1){
            return "rock";
        }else if(computerChoiceInt == 2){
            return "paper";
        }else{
            return "scissors";
        }
    };
    
    
    /* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.
    
     */
    function compare(me, opponent) {
    
        if(typeof me == "undefined" || typeof opponent == "undefined"){
            winner = "tie";
        }
    
        let winner = "";
        me = me.trim().toLowerCase();
        opponent = opponent.trim().toLowerCase();
    
        // Determine who wins
        if(me == opponent){
            // Tie
            winner= "tie";
        }else if(me == "rock"){
            if(opponent == "paper"){
                // opponent
                winner="opponent";
            }else{
                // Me
                winner="me";
            }
        }else if(me == "paper"){
            if(opponent == "scissors"){
                // opponent
                winner="opponent";
            }else{
                // Me
                winner="me";
            }
        }else{
            if(opponent == "rock"){
                // opponent
                return "opponent";
            }else{
                // Me
                winner="me";
            }
        }
    
        // Output to the screen
        document.querySelector("#computerSelection").innerText =opponent;
    
        if(winner == "me"){
            document.querySelector("#decision").innerText = "I WON!";
        }else if(winner == "opponent"){
            document.querySelector("#decision").innerText = "I LOST!";
        }else{
            document.querySelector("#decision").innerText = "It's a Tie!";
        }
    
    
    };
    
    
        // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
    
        document.querySelector("#rock").addEventListener("click",function(e){
    
            e.preventDefault();
    
            let me = "rock";
            let theComputerChoice = computerChoice();
    
            compare(me,theComputerChoice);
        });
    
    
        document.querySelector("#paper").addEventListener("click",function(e){
    
            e.preventDefault();
    
            let me = "paper";
            let theComputerChoice = computerChoice();
    
            compare(me,theComputerChoice);
        });
    
        document.querySelector("#scissors").addEventListener("click",function(e){
    
            e.preventDefault();
    
            let me = "scissors";
            let theComputerChoice = computerChoice();
    
            compare(me,theComputerChoice);
        });
    
    });