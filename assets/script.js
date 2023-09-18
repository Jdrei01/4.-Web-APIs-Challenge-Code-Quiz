var startScreenEl = document.querySelector('.start-screen');
var saveScreenEl = document.querySelector('.saveScreen');
var quizBox = document.querySelector('.quiz-box')
var startBtnEl = document.querySelector('.start-btn')
var quiz = document.querySelector('.question-title')
var choices = document.querySelector('.choices')
var timeLeftEl = document.querySelector('#time-left');
var viewScore = document.querySelector('.view-score');
var rightAnswer = 0;

var currentQuestionIndex = 0; // number of questions answered
var timeLeft = 60;
var interValId;

var questions = [
    {
        questionsTitle: 'Where did the first NBA game take place?',
        wordChoice:
            [
                'A: Toronto Canada',
                'B: New York',
                'C: Los Angeles',
                'D: Brooklyn'
            ],
        answerIndex: 'A: Toronto Canada'
    },
    {
        questionsTitle: 'Which team won the first-ever NBA game?',
        wordChoice:
            [
                'A: Boston Celtics',
                'B: New York Knicks',
                'C: Toronto Huskies',
                'D: Chicago Stags'
            ],
        answerIndex: 'B: New York Knicks'
    },
    {
        questionsTitle: 'What nickname did Kobe Bryant give to himself?',
        wordChoice:
            [
                'A: KB-24',
                'B: Ocho',
                'C: The Black Mamba',
                'D: Mr.81'
            ],
        answerIndex: 'C: The Black Mamba'
    },
    {
        questionsTitle: 'Which team drafted Kobe Bryant?',
        wordChoice:
            [
                'A: Los Angeles Lakers',
                'B: Charlotte Hornets',
                'C: Undrafted',
                'D: None of the above'
            ],
        answerIndex: 'B: Charlotte Hornets'
    }
]

// function to display the current time in our 'time-left' then modify the time left
function functionThatRepeats() {
    timeLeftEl.textContent = `${timeLeft} second(s)`;
    timeLeft = timeLeft - 1;
    viewScore.disabled = true;

    // Time is equal to 0, so QUIZ is up! 
    if (timeLeft <= 0) {
        clearInterval(interValId);
        timeLeftEl.textContent = 'Time is UP!';
        viewScore.disabled = false;
        

    }
}

function renderCurrentQuestion() {

}

//  function to start the timer
function startTimer() {
    interValId = setInterval(functionThatRepeats, 1000);


}

startBtnEl.addEventListener('click', startTimer);
var savedScores = JSON.parse(localStorage.getItem('scores')) || []

// function to show current question and choices for that question
function saveScore(score) {
    var initial = document.querySelector('#input').value
    console.log(initial, score);
    var playerScore = {
        initial: initial,
        score: score,
    }
    console.log(savedScores)
    savedScores.push(playerScore)
    console.log(savedScores)
    localStorage.setItem('scores', JSON.stringify(savedScores));
}
function showQuestions() {
var inputBtn = document.querySelector('#inputBtn')
    quizBox.classList.remove('hide')
    startScreenEl.classList.add('hide')
    /*
if the number of questions answered is more than the max number of questions, end the quiz
else get the next answer
    */
    if (currentQuestionIndex >= questions.length) {
        // number of questions answered is more than the total number of questions, so end the quiz
        // hide the quiz-box question & answers
        quizBox.classList.add('hide');
        // stop the timer and say quiz is done
        clearInterval(interValId);
        timeLeftEl.textContent = 'You completed the quiz. Your score is ' + rightAnswer;
        saveScreenEl.classList.remove('hide');
        //var input = document.createElement('input');
        //timeLeftEl.append(input);
        inputBtn.addEventListener('click', ()=>{
            saveScore(rightAnswer)
        })
        // show the score
        //alert('score: ' + rightAnswer);
        // get the initial
        // show the high score
        viewScore.disabled = false;
    } else {
        // there are still unanswered questions, so get the next answer
        choices.replaceChildren(); // clear out choices
        var question = questions[currentQuestionIndex];
        quiz.textContent = question.questionsTitle
        question.wordChoice.forEach((choice, choiceIndex) => {
            var btn = document.createElement('button')
            btn.textContent = choice
            btn.addEventListener('click', () => {
                currentQuestionIndex += 1; // go to the next question by increasing the current question index by 1
                // check if the answer is correct
                // check if the answer click is the same as the answerIndex
                if (choice === question.answerIndex) {
                    // if the answer is correct, increase the count of correct answer by one
                    rightAnswer += 1;

                }
                showQuestions();
            });
            choices.appendChild(btn);

        });

    }

}

startBtnEl.addEventListener('click', showQuestions);
