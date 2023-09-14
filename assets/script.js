var start = document.querySelector('.start')
var quizBox = document.querySelector('.quiz-box')
var button = document.querySelector('.button')
var quiz = document.querySelector('.question-title')
var choices = document.querySelector('.choices')

var timeLeft = 60;
var quizDuration;

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
        answer: 'A: Toronto Canada'
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
        answer: 'B: New York Knicks'
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
        answer: 'C: The Black Mamba'
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
        answer: 'B: Charlotte Hornets'
    }
]


function showQuestions() {
    quizBox.classList.remove('hide')
    start.classList.add('hide')
    quiz.textContent = questions[0].questionsTitle
    for (var i = 0; i < questions.length; i++) {
        var btn = document.createElement('button')
        btn.textContent = questions[0].wordChoice[i]
        choices.appendChild(btn)
    
    }
    
}

button.addEventListener('click', showQuestions)