let playGame = confirm("shell we play game!")
if (playGame) {
    //plAYY
    playerChoise = prompt("Play enter Rock Paper Scissor")
    if (playerChoise) {
        let playerOne = playerChoise.trim().toLowerCase();
        // console.log(playerOne)
        if (playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scissor") {
            let computerChoise = Math.floor(Math.random()*3+1)
            // console.log(computerChoise)
            let computer = computerChoise === 1 ? "rock" :
                computerChoise === 2 ? "paper" : "scissor"
                console.log(computer)
            let result = playerOne === computer ? "tie game"
                : playerOne === "rock" && computer === "paper" ?
                    `playerOne:${playerOne}\n computer:${computer}\n computer win!`
                    : playerOne === "paper" && computer === "scissor" ?
                        `playerOne:${playerOne}\n computer:${computer}\n computer win!`
                        : playerOne === "scissor" && computer === "rock" ?
                            `playerOne:${playerOne}\n compputer:${computer}\n coomputer win!`
                            : `playerOne:${playerOne}\ncomputer:${computer}\n player win!`;


                alert(result);

            let playAgain = confirm("play Again ?");
            playAgain ? location.reload() : alert("ok, thanks for playing");


        }
        
        else {
            alert("you didn't enter the game");
        }


    } 

    else {
        alert("i guss you change your mind");
    }

}
else {
    alert("ok may be next time come");

}