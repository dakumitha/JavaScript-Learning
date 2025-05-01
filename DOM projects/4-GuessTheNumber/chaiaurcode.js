const randomNumber = parseInt(Math.random() * 100) + 1;
console.log(randomNumber);
const inputField = document.getElementById("guessField");
const submit = document.getElementById("subt");
const prevGuesses = document.querySelector(".guesses");
const guessesRemaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");

submit.addEventListener("click", function () {
  const userGuess = parseInt(inputField.value);
  const p = document.createElement("p");

  if (userGuess === randomNumber) {
    p.textContent = "You guessed it right!";
    prevGuesses.insertAdjacentElement("beforebegin", p);
  } else if (userGuess < randomNumber) {
    p.textContent = "Your guess is too low!";
    prevGuesses.insertAdjacentElement("beforebegin", p);
  } else {
    p.textContent = "Your guess is too high!";
    prevGuesses.insertAdjacentElement("beforebegin", p);
  }
});
