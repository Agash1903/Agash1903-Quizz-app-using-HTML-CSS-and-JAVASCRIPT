const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'London', correct: false },
            { text: 'Rome', correct: false },
            { text: 'Berlin', correct: false }
        ]
    },
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '5', correct: false },
            { text: '6', correct: false }
        ]
    },
    {
        question: 'What is the national bird of India?',
        answers: [
            { text: 'Narendra Modi', correct: false },
            { text: 'Duck', correct: false },
            { text: 'Cukkoo', correct: false },
            { text: 'peacock', correct: true }
        ]
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: [
            { text: 'Uronous', correct: false },
            { text: 'Mars', correct: false },
            { text: 'Earth', correct: false },
            { text: 'Jupiter', correct: true }
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            { text: 'Indian Ocean', correct: false },
            { text: 'The Pacific Ocean', correct: true },
            { text: 'Arabic Ocean', correct: false },
            { text: 'Bay of Bengal', correct: false }
        ]
    },
    {
        question: 'What is the smallest prime number?',
        answers: [
            { text: '1', correct: false },
            { text: '4', correct: false },
            { text: '2', correct: true },
            { text: '5', correct: false }
        ]
    },
    {
        question: ' How many continents are there on Earth?',
        answers: [
            { text: 'Seven', correct: true },
            { text: 'Five', correct: false },
            { text: 'Three', correct: false },
            { text: 'Six', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for gold?',
        answers: [
            { text: 'Ma', correct: false },
            { text: 'H2O', correct: false },
            { text: 'Au', correct: true },
            { text: 'Co2', correct: false }
        ]
    },
    {
        question: 'What is the capital of Canada?',
        answers: [
            { text: 'Toronto', correct: false },
            { text: 'Montreal', correct: false },
            { text: 'Vancouver', correct: false },
            { text: 'Ottawa', correct: true }
        ]
    },
    {
        question: 'What year did World War II begin?',
        answers: [
            { text: '1935', correct: false },
            { text: '1939', correct: true },
            { text: '1950', correct: false },
            { text: '1945', correct: false }
        ]
    }
   
];

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.remove('hide');
    prevButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    questionElement.textContent = question.question;
    answerButtons.innerHTML = '';
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.classList.remove('hide');
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.classList.add('hide');
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        prevButton.classList.remove('hide');
        if (currentQuestionIndex === questions.length - 1) {
            nextButton.classList.add('hide');
        }
    } else {
        showResult();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.remove('hide');
        if (currentQuestionIndex === 0) {
            prevButton.classList.add('hide');
        }
    }
}

function showResult() {
    questionContainer.innerHTML = `
        <h2>Your score: ${score} out of ${questions.length}</h2>
        <button class="btn" onclick="startGame()">Restart</button>
    `;
    nextButton.classList.add('hide');
    prevButton.classList.add('hide');
}

startGame();
