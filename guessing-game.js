function guessingGame() {
    let count = 0;
    const target = Math.floor(Math.random() * 100);
    let gameOver = false;

    return function guess(num){
        if(gameOver) return "The game is over, you already won!";
        count ++;
        if(num === target){
            gameOver = true;
            const guess = count === 1 ? "guess" : "guesses";
            return `You win! You found ${num} in ${count} ${guess}.`;
        }
            if(num < target) return `${num} is too low!`;
            if(num > target) return `${num} is too high!`;
        }
}

module.exports = { guessingGame };