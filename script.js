const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const iRock = document.getElementById("iRock");
const iPaper = document.getElementById("iPaper");
const iScissors = document.getElementById("iScissors");

const botRock = document.getElementById("botRock");
const botPaper = document.getElementById("botPaper");
const botScissors = document.getElementById("botScissors");
const iBotRock = document.getElementById("iBotRock");
const iBotPaper = document.getElementById("iBotPaper");
const iBotScissors = document.getElementById("iBotScissors");

const start = document.getElementById("start");
const error = document.getElementById("error");

const scoreBar = document.getElementById("score");
let score = 0;


let click;
let botClick;

let running = false;

rock.onclick = function () {
    rock.style.background = "#313131";
    iRock.style.color = "#fff";
    rock.style.transition = "all 0.3s ease-in-out";

    paper.style.background = "#fff";
    iPaper.style.color = "#313131";
    paper.style.transition = "all 0.3s ease-in-out";

    scissors.style.background = "#fff";
    iScissors.style.color = "#313131";
    scissors.style.transition = "all 0.3s ease-in-out";

    error.style.opacity = "0";

    click = "rock";
}

paper.onclick = function () {
    rock.style.background = "#fff";
    iRock.style.color = "#313131";
    rock.style.transition = "all 0.3s ease-in-out";

    paper.style.background = "#313131";
    iPaper.style.color = "#fff";
    paper.style.transition = "all 0.3s ease-in-out";

    scissors.style.background = "#fff";
    iScissors.style.color = "#313131";
    scissors.style.transition = "all 0.3s ease-in-out";

    error.style.opacity = "0";

    click = "paper";
}

scissors.onclick = function () {
    rock.style.background = "#fff";
    iRock.style.color = "#313131";
    rock.style.transition = "all 0.3s ease-in-out";

    paper.style.background = "#fff";
    iPaper.style.color = "#313131";
    paper.style.transition = "all 0.3s ease-in-out";

    scissors.style.background = "#313131";
    iScissors.style.color = "#fff";
    scissors.style.transition = "all 0.3s ease-in-out";

    error.style.opacity = "0";

    click = "scissors";
}

start.onclick = function () {
    if (click === "rock" || click === "paper" || click === "scissors") {
        error.style.opacity = "0";
        running = true;
        if (running === true) {
            const botMind = Math.floor(Math.random() * 3 - 1 + 1) + 1;
            if (botMind === 1) {
                botRock.style.background = "#313131";
                iBotRock.style.color = "#fff";
                botRock.style.transition = "all 0.3s ease-in-out";

                botPaper.style.background = "#fff";
                iBotPaper.style.color = "#313131";
                botPaper.style.transition = "all 0.3s ease-in-out";

                botScissors.style.background = "#fff";
                iBotScissors.style.color = "#313131";
                botScissors.style.transition = "all 0.3s ease-in-out";

                botClick = "rock";
            }
            else if (botMind === 2) {
                botRock.style.background = "#fff";
                iBotRock.style.color = "#313131";
                botRock.style.transition = "all 0.3s ease-in-out";

                botPaper.style.background = "#313131";
                iBotPaper.style.color = "#fff";
                botPaper.style.transition = "all 0.3s ease-in-out";

                botScissors.style.background = "#fff";
                iBotScissors.style.color = "#313131";
                botScissors.style.transition = "all 0.3s ease-in-out";

                botClick = "paper";
            }
            else {
                botRock.style.background = "#fff";
                iBotRock.style.color = "#313131";
                botRock.style.transition = "all 0.3s ease-in-out";

                botPaper.style.background = "#fff";
                iBotPaper.style.color = "#313131";
                botPaper.style.transition = "all 0.3s ease-in-out";

                botScissors.style.background = "#313131";
                iBotScissors.style.color = "#fff";
                botScissors.style.transition = "all 0.3s ease-in-out";

                botClick = "scissors";
            }

            if (click === "rock" && botClick === "scissors") {
                error.textContent = "You Won!";
                error.style.opacity = "1";
                score += 10;
                scoreBar.textContent = "Score: " + score;
            }
            else if (click === "rock" && botClick === "paper") {
                error.textContent = "You Lost!";
                error.style.opacity = "1";
                score -= 10;
                scoreBar.textContent = "Score: " + score;
            }
            else if (click === "paper" && botClick === "scissors") {
                error.textContent = "You Lost!";
                error.style.opacity = "1";
                score -= 10;
                scoreBar.textContent = "Score: " + score;
            }
            else if (click === "paper" && botClick === "rock") {
                error.textContent = "You Won!";
                error.style.opacity = "1";
                score += 10;
                scoreBar.textContent = "Score: " + score;
            }
            else if (click === "scissors" && botClick === "paper") {
                error.textContent = "You Won!";
                error.style.opacity = "1";
                score += 10;
                scoreBar.textContent = "Score: " + score;
            }
            else if (click === "scissors" && botClick === "rock") {
                error.textContent = "You Lost!";
                error.style.opacity = "1";
                score -= 10;
                scoreBar.textContent = "Score: " + score;
            }
            else {
                error.textContent = "Tie!";
                error.style.opacity = "1";
                scoreBar.textContent = "Score: " + score;
            }

        }
        else {
            return;
        }
    }
    else {
        error.style.opacity = "1";
    }
}


















