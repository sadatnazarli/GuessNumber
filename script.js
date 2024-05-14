const secretNumber = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const againBtn = document.querySelector(".again");

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highscore = 0;

checkBtn.addEventListener("click", function () {
    const guessValue = Number(guess.value);
    if (!guessValue) {
        message.textContent = "No number!";
        message.classList.remove("correct", "wrong");
    } else if (guessValue > randomNumber) {
        if (currentScore > 1) {
            message.textContent = "Too high!";
            message.classList.add("wrong");
            message.classList.remove("correct");
            currentScore--;
            score.textContent = currentScore;
        } else {
            message.textContent = "You lost the game!";
            message.classList.add("wrong");
            message.classList.remove("correct");
            score.textContent = 0;
        }
    } else if (guessValue < randomNumber) {
        if (currentScore > 1) {
            message.textContent = "Too low!";
            message.classList.add("wrong");
            message.classList.remove("correct");
            currentScore--;
            score.textContent = currentScore;
        } else {
            message.textContent = "You lost the game!";
            message.classList.add("wrong");
            message.classList.remove("correct");
            score.textContent = 0;
        }
    } else {
        message.textContent = "Correct number!";
        message.classList.add("correct");
        message.classList.remove("wrong");
        document.body.style.backgroundColor = "#60b347";
        secretNumber.textContent = randomNumber;

        if (currentScore > highscore) {
            highscore = currentScore;
            highScore.textContent = highscore;
        }
    }
});

againBtn.addEventListener("click", function () {
    currentScore = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;

    message.textContent = "Start guessing...";
    message.classList.remove("correct", "wrong");
    score.textContent = currentScore;
    secretNumber.textContent = "?";
    guess.value = "";
    document.body.style.backgroundColor = "#222";
});
