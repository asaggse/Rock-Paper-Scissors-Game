let playerScore = 0;
let cpuScore = 0;
const playerScore_span = document.getElementById("player-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const actionReset_p = document.getElementById("action-reset");

function gameReset() {
    playerScore_span.innerHTML = 0;
    playerScore = 0;
    cpuScore_span.innerHTML = 0;
    cpuScore = 0;
    result_p.innerHTML = "Make your move.";
}

function getCpuChoice() {
    const choices = ['r', 'p', 's'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function convertToWord(letter) {
    if (letter === "r") { 
        return "Rock";
    }
    else if (letter === "p") {
        return "Paper";
    }
    else 
        return "Scissors";
}

function win(playerChoice, cpuChoice) {
    playerScore += 1;
    playerScore_span.innerHTML = playerScore;
    cpuScore_span.innerHTML = cpuScore;
    const smallPlayerWord  = "player".fontsize(3).sub();
    const smallCpuWord  = "cpu".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} beats ${convertToWord(cpuChoice)}${smallCpuWord}. Player wins!`;
}

function lose(playerChoice, cpuChoice) {
    cpuScore += 1;
    playerScore_span.innerHTML = playerScore;
    cpuScore_span.innerHTML = cpuScore;
    const smallPlayerWord  = "player".fontsize(3).sub();
    const smallCpuWord  = "cpu".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} loses to ${convertToWord(cpuChoice)}${smallCpuWord}. Player losts...`;
}

function draw(playerChoice, cpuChoice) {
    const smallPlayerWord  = "player".fontsize(3).sub();
    const smallCpuWord  = "cpu".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} equals ${convertToWord(cpuChoice)}${smallCpuWord}. It's a tie.`;
}

function game(playerChoice) {
    const cpuChoice = getCpuChoice();
    switch (playerChoice + cpuChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, cpuChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, cpuChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, cpuChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })

    actionReset_p.addEventListener('click', function(){
        gameReset();
    })
}

main();