const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resetKeyInput = document.getElementById('reset-key');
const resetButton = document.getElementById('reset-btn');
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let userAnswers = [];
let hasAnswered = false;

const RESET_KEY = "a6398175!";

function getRandomQuestions() {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const result = shuffled.slice(0, 5);
    return result;
}

function startQuiz() {
    const quizCompleted = localStorage.getItem('quizCompleted') === 'true';
    const lastQuizDate = localStorage.getItem('quizDate');
    const today = new Date().toISOString().split('T')[0];
    const resetDate = '2025-06-10'; // 고정된 리셋 날짜

    // 퀴즈가 완료되었고, 오늘 날짜가 지정된 리셋 날짜 이상이면 리셋
    if (quizCompleted && today >= resetDate) {
        localStorage.removeItem('quizCompleted');
        localStorage.removeItem('quizScore');
        localStorage.removeItem('quizUserAnswers');
        localStorage.removeItem('quizSelectedQuestions');
        localStorage.removeItem('quizDate');
    }

    const isQuizCompleted = localStorage.getItem('quizCompleted') === 'true';
    if (isQuizCompleted) {
        const savedScore = localStorage.getItem('quizScore');
        const savedUserAnswers = JSON.parse(localStorage.getItem('quizUserAnswers'));
        const savedQuestions = JSON.parse(localStorage.getItem('quizSelectedQuestions'));

        if (savedScore && savedUserAnswers && savedQuestions) {
            score = parseInt(savedScore);
            userAnswers = savedUserAnswers;
            selectedQuestions = savedQuestions;
            showScore();
        } else {
            questionElement.innerHTML = "퀴즈는 이미 완료되었습니다. 리셋 키를 입력해 재시작하세요.";
            answerButtonsElement.style.display = 'none';
            nextButton.style.display = 'none';
        }
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    selectedQuestions = getRandomQuestions();
    nextButton.innerHTML = '다음';
    nextButton.style.display = 'none';
    answerButtonsElement.style.display = 'flex';
    localStorage.setItem('quizDate', today); // 퀴즈 시작 날짜 저장
    showQuestion();
}

function showQuestion() {
    resetState();
    hasAnswered = false;
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer, { once: true });
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    if (hasAnswered) return;

    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
    }

    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answers.find(answer => answer.correct).text;
    userAnswers.push({
        question: currentQuestion.question,
        userAnswer: selectedButton.innerHTML,
        correctAnswer: correctAnswer,
        isCorrect: correct
    });

    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });

    hasAnswered = true;
    nextButton.style.display = 'block';
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    console.log("Final Score:", score, "Total Questions:", selectedQuestions.length);
    if (score > selectedQuestions.length) {
        score = selectedQuestions.length;
        console.warn("Score exceeded total questions. Adjusted to:", score);
    }

    questionElement.innerHTML = `당신의 점수는 ${selectedQuestions.length}점 만점에 ${score}점입니다!`;
    nextButton.style.display = 'none';

    const resultsDiv = document.createElement('div');
    resultsDiv.classList.add('results');

    userAnswers.forEach((answer, index) => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.classList.add(answer.isCorrect ? 'correct' : 'incorrect');

        const questionP = document.createElement('p');
        questionP.innerHTML = `<strong>${index + 1}. ${answer.question}</strong>`;

        const userAnswerP = document.createElement('p');
        userAnswerP
