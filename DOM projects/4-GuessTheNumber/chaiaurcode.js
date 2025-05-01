const randomNumber = parseInt(Math.random() * 100) + 1;
console.log(randomNumber);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const prevGuesses = document.querySelector(".guesses");
const guessesRemaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");

submit.addEventListener("click", function () {
  const userGuess = parseInt(userInput.value);
  console.log(userGuess);
});
