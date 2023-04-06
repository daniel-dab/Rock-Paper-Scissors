const greetingSection = document.querySelector('.greeting');
const gameSection = document.querySelector('.game');
const resultSection = document.querySelector('.result');
const submitButton = greetingSection.querySelector('.submitNickname');
const gameWeapons = gameSection.querySelectorAll('.game__weaponsList--weapon')
submitButton.addEventListener('click', startGame);
for(let weapon of gameWeapons)weapon.addEventListener('click', weaponClickHandler, true);
let playerScore = botScore = 0;

function startGame() {
    greetingSection.classList.toggle('invisible');
    gameSection.classList.toggle('invisible');
}
function weaponClickHandler(event){
    gameSection.classList.toggle('invisible');
    resultSection.classList.toggle('invisible');
    chooseWinner(event);
}
function chooseWinner(event){
    let botChoice = Math.random();
    const playerChoice = event.currentTarget.innerText.trim();
    if(botChoice<0.33)botChoice='Rock';
    else if(botChoice>0.66)botChoice='Scissors';
    else botChoice='Paper';
    if(playerChoice===botChoice)showResult('draw');
    else if((playerChoice==='Rock'&&botChoice==='Paper')||
    (playerChoice==='Paper'&&botChoice==='Scissors')||
    (playerChoice==='Scissors'&&botChoice==='Rock'))showResult('bot')
    else showResult('player');
    console.log(botChoice);
    console.log(playerChoice);
}

function showResult(result){
    console.log('working ' + result)
    const nickname = greetingSection.querySelector('.nicknameInput').value;
    if(result==='draw'){
        botScore++, playerScore++;
        resultSection.innerHTML=`<p>Draw!</p><span>${playerScore} : ${botScore}`;
    }
    else if(result==='player'){
        playerScore++;
        resultSection.innerHTML=`<p>${nickname!==''?nickname:'Player'} won!</p>
        <span>${playerScore} : ${botScore}</span>`;
    }
    else{
        botScore++; 
        resultSection.innerHTML = `<p>Bot won!</p>
        <span>${playerScore} : ${botScore}</span>`;
    }
    setTimeout(() => {
        resultSection.classList.toggle('invisible');
        gameSection.classList.toggle('invisible');
    }, 1500);
}