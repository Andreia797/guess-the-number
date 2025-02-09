let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const feedbackElement = document.getElementById('feedback');
    attempts++;
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedbackElement.textContent = "Por favor, insira um número entre 1 e 100.";
        return;
    }
    
    if (guess === secretNumber) {
        feedbackElement.innerHTML = `Parabéns! Você acertou o número secreto (${secretNumber}) em ${attempts} tentativas! 🎉`;
    } else if (guess > secretNumber) {
        feedbackElement.textContent = "Muito alto! Tente novamente.";
    } else {
        feedbackElement.textContent = "Muito baixo! Tente novamente.";
    }
}