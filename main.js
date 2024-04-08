const playerDice = document.querySelectorAll('.dice')[1];
const computerDice = document.querySelectorAll('.dice')[0];
const rollButton = document.querySelector('.roll');
const resultWin = document.querySelector('.resultWin');
const resultLose = document.querySelector('.resultLose');
const tryAgainButton1 = document.querySelectorAll('.tryAgain')[0];
const tryAgainButton2 = document.querySelectorAll('.tryAgain')[1];
let computerValue;
let playerValue;

const randomDice = (dice, whoPlayed) => {
    const random = (Math.floor(Math.random() * 6) + 1);
    if(whoPlayed === 'player'){
        playerValue = random;
        rollButton.disabled = true;
    } else {
        computerValue = random;
    }
    rollDice(random, dice, whoPlayed);
}

const reset = () => {
    resultWin.style.display = 'none';
    resultLose.style.display = 'none';
    randomDice(computerDice, 'computer');
    rollButton.disabled = false;
}

const rollDice = (random, dice, whoPlayed) => {
    dice.style.animation = 'rolling 4s';

    setTimeout(() => {
        switch(random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            default:
                break
        }
        dice.style.animation = 'none';
        setTimeout(() => {
            if ((whoPlayed === 'player') && (computerValue === playerValue)) {
                resultWin.style.display = 'flex';
                resultWin.style.alignItems = 'center';
                resultWin.style.justifyContent = 'center';
            } else if ((whoPlayed === 'player') && (computerValue !== playerValue)) {
                resultLose.style.display = 'flex';
                resultLose.style.alignItems = 'center';
                resultLose.style.justifyContent = 'center';
            }
        }, 2000);
    }, 4050);

}

rollButton.addEventListener('click', () => randomDice(playerDice, 'player'));
tryAgainButton1.addEventListener('click', reset);
tryAgainButton2.addEventListener('click', reset);
randomDice(computerDice, 'computer');