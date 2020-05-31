
let userScore = 0;
let computerScore = 0;

//caching the DOM
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

const scoreBoard_div = document.querySelector('.score-board');

const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


//game time

//computer
const getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    const randomNumber =  Math.floor(Math.random() * 3);
    //giver number between zero and three and rounds off
    return choices[randomNumber];
}


//convert
const convertToWord = (letter) => {
    if(letter ===  "r") return "Rock"
    if(letter === "p") return "Paper"
    return "Scissors"
}

//winner
const win = (user, computer) => {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const user_div = document.getElementById(user);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `${convertToWord(user)} ${smallUserWord}  beats ${convertToWord(computer)} ${smallCompWord}  ,You Win !!`;

    user_div.classList.add('green-glow');
    setTimeout(() => { user_div.classList.remove('green-glow');},300);
}

//loser
const lose = (user, computer) => {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const user_div = document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `${convertToWord(computer)} ${smallUserWord}  beats ${convertToWord(user)} ${smallCompWord}  ,You Lose . . . `;

    user_div.classList.add('red-glow');
    setTimeout(() => { user_div.classList.remove('red-glow'); }, 300);
} 

//draw
const draw = (user, computer) => {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const user_div = document.getElementById(user);

    result_p.innerHTML = `${convertToWord(user)} ${smallUserWord}  beats ${convertToWord(computer)} ${smallCompWord}  It's a Draw.`;

    user_div.classList.add('grey-glow');
    setTimeout(() => { user_div.classList.remove('grey-glow'); }, 300);
}


//solution
const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

const main = () => {
    rock_div.addEventListener('click',()=>{
        game("r")
    })

    paper_div.addEventListener('click', () => {
        game("p")
    })

    scissors_div.addEventListener('click', () => {
        game("s")
    })
}

main();
