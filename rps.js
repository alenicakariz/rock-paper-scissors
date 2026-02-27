let computer;
let randomNum;
let userScore = parseInt(localStorage.getItem('userScore') || 0);
let compScore = parseInt(localStorage.getItem('compScore') || 0);
let tieScore = parseInt(localStorage.getItem('tieScore') || 0);

document.getElementById('yourScoreId').textContent = `You: ${userScore}`;
document.getElementById('computerScoreId').textContent = `Computer: ${compScore}`;
document.getElementById('tieScoreId').textContent = `Tie: ${tieScore}`;

function computerPick(){
    randomNum = Math.random();
    if(randomNum<0.33){
        computer = 'Rock';
    }
    else if(randomNum<0.66){
        computer ='Paper';
    }
    else{
        computer='Scissors';
    }
}

function rockPicked(){
    computerPick();
    if(computer === 'Rock'){
        tieScore++;
        document.getElementById('tieScoreId').textContent = `Tie: ${tieScore}`;
    }
    else if(computer === 'Paper'){
        compScore++;
        document.getElementById('computerScoreId').textContent = `Computer: ${compScore}`;
    }
    else{
        userScore++;
        document.getElementById('yourScoreId').textContent = `You: ${userScore}`;
    }
    updLocalStorage()
    document.getElementById('userPickAnnouncement').textContent = 'Rock';
    document.getElementById('computerPickAnnouncement').textContent = computer;
}

function paperPicked(){
    computerPick();
    if(computer === 'Rock'){
        userScore++;
        document.getElementById('yourScoreId').textContent = `You: ${userScore}`;
    }
    else if(computer === 'Paper'){
        tieScore++;
        document.getElementById('tieScoreId').textContent = `Tie: ${tieScore}`;
    }
    else{
        compScore++;
        document.getElementById('computerScoreId').textContent = `Computer: ${compScore}`;
    }
    updLocalStorage()
    document.getElementById('userPickAnnouncement').textContent = 'Paper';
    document.getElementById('computerPickAnnouncement').textContent = computer;
}

function scissorsPicked(){
    computerPick();
    if(computer === 'Rock'){
        compScore++;
        document.getElementById('computerScoreId').textContent = `Computer: ${compScore}`;
    }
    else if(computer === 'Paper'){
        userScore++;
        document.getElementById('yourScoreId').textContent = `You: ${userScore}`;
    }
    else{
        tieScore++;
        document.getElementById('tieScoreId').textContent = `Tie: ${tieScore}`;
    }
    updLocalStorage()
    document.getElementById('userPickAnnouncement').textContent = 'Scissors';
    document.getElementById('computerPickAnnouncement').textContent = computer;
}

function resetScore(){
    compScore = 0;
    userScore = 0;
    tieScore = 0;

    document.getElementById('yourScoreId').textContent = `You: ${userScore}`;
    document.getElementById('computerScoreId').textContent = `Computer: ${compScore}`;
    document.getElementById('tieScoreId').textContent = `Tie: ${tieScore}`;
    document.getElementById('userPickAnnouncement').textContent = '';
    document.getElementById('computerPickAnnouncement').textContent = '';
    updLocalStorage();
}

function updLocalStorage(){
    localStorage.setItem('userScore', userScore);
    localStorage.setItem('compScore', compScore);
    localStorage.setItem('tieScore', tieScore);
}


