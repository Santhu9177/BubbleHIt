let timerValue = 30;
let scoreValue = 0;
let hitsValue = 0;
let timeInterval;

const createBubble = () => {
    let contentbox = '';
    for (let i = 0; i < 120; i++) {
        contentbox += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector('.content').innerHTML = contentbox;
}

const setTiming = () => {
    clearInterval(timeInterval);
    timeInterval = setInterval(() => {
        if (timerValue > 0) {
            timerValue--;
            document.querySelector('.timer').textContent = timerValue;
        } else {
            clearInterval(timeInterval);
            document.querySelector('.content').innerHTML = `
                <div class="gameOver">
                    <h1>Game Over</h1>
                    <h3>Your Score: ${scoreValue}</h3>
                    <button class="restart-btn" onclick="restartGame()">Restart</button>
                </div>
            `;
        }
    }, 1000);
}

const hitsGenerate = () => {
    hitsValue = Math.floor(Math.random() * 10);
    document.querySelector('.hitsvalue').textContent = hitsValue;
}

const score = () => {
    scoreValue += 10;
    document.querySelector('.scoreValue').textContent = scoreValue;
}

document.querySelector('.content').addEventListener('click', (e) => {
    if (e.target.classList.contains('bubble') && Number(e.target.textContent) === hitsValue) {
        score();
        createBubble();
        hitsGenerate();
    }
});

const restartGame = () => {
    scoreValue = 0;
    timerValue = 30;
    document.querySelector('.scoreValue').textContent = scoreValue;
    document.querySelector('.timer').textContent = timerValue;
    createBubble();
    setTiming();
    hitsGenerate();
}

const Startingfun = () => {
    scoreValue = 0;
    timerValue = 30;
    document.querySelector('.scoreValue').textContent = scoreValue;
    document.querySelector('.timer').textContent = timerValue;
    createBubble();
    setTiming();
    hitsGenerate();
}
