const questions = [
    {
        question: "세계환경의 날은 언제일까요?",
        answers: [
            { text: "3월 22일", correct: false },
            { text: "4월 22일", correct: false },
            { text: "5월 31일", correct: false },
            { text: "6월 5일", correct: true }
        ]
    },
    {
        question: "바닷물에 플랑크톤이 급격히 증식하여 바닷물을 붉은색으로 변화시키는 현상을 무엇이라고 할까요?",
        answers: [
            { text: "녹조", correct: false },
            { text: "적조", correct: true },
            { text: "유기화", correct: false },
            { text: "백화", correct: false }
        ]
    },
    {
        question: "다음중 1급수에서 사는 생물이 아닌 것은",
        answers: [
            { text: "가재", correct: false },
            { text: "산천어", correct: false },
            { text: "버들치", correct: false },
            { text: "붕어", correct: true }
        ]
    },
    {
        question: "우리가 수돗물을 먹을 때 약한 냄새가 나는 것을 느낄 수 있습니다. 이 것은 수돗물에 무엇이 남아 있기 때문입니까?",
        answers: [
            { text: "암모니아", correct: false },
            { text: "염소", correct: true },
            { text: "나트륨", correct: false },
            { text: "산소", correct: false }
        ]
    },
    {
        question: "온실가스의 배출이 늘어남에 따라 지구의 평균 기온이상승하는 현상을 온실효과라 합니다. 다음중 온실효과에서 가장 큰 비중을 차지하는 것은 무엇일까요?",
        answers: [
            { text: "이산화탄소", correct: true },
            { text: "메탄", correct: false },
            { text: "프레온 가스", correct: false },
            { text: "이산화질소", correct: false }
        ]
    },
    {
        question: "다음중 오염물질을 흡수해서 물을 깨끗하게 정화시키는 능력이 뛰어난 식물은 무엇입니까?",
        answers: [
            { text: "개구리밥", correct: false },
            { text: "장미", correct: false },
            { text: "부레옥잠", correct: true },
            { text: "엉겅퀴", correct: false }
        ]
    },
    {
        question: "분리배출과 관련하여 다음 중 일반 쓰레기가 아닌것은 무엇일까요?",
        answers: [
            { text: "칫솔", correct: false },
            { text: "건전지", correct: true },
            { text: "달걀껍질", correct: false },
            { text: "인형", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resetKeyInput = document.getElementById('reset-key');
const resetButton = document.getElementById('reset-btn');
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

const RESET_KEY = "a6398175!"; // 리셋을 위한 비밀 키

function getRandomQuestions() {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
}

function startQuiz() {
    const quizCompleted = localStorage.getItem('quizCompleted') === 'true';
    
    if (quizCompleted) {
        questionElement.innerHTML = "퀴즈는 이미 완료되었습니다. 리셋 키를 입력해 재시작하세요.";
        answerButtonsElement.style.display = 'none';
        nextButton.style.display = 'none';
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    selectedQuestions = getRandomQuestions();
    nextButton.innerHTML = '다음';
    nextButton.style.display = 'none';
    answerButtonsElement.style.display = 'grid';
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
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
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        score++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
    });
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
    questionElement.innerHTML = `당신의 점수는 ${selectedQuestions.length}점 만점에 ${score}점입니다! 퀴즈가 종료되었습니다.`;
    nextButton.style.display = 'none';
    localStorage.setItem('quizCompleted', 'true');
}

// 리셋 버튼 이벤트 리스너
resetButton.addEventListener('click', () => {
    const inputKey = resetKeyInput.value.trim();
    if (inputKey === RESET_KEY) {
        localStorage.removeItem('quizCompleted');
        resetKeyInput.value = ''; // 입력 필드 초기화
        alert('퀴즈가 리셋되었습니다. 다시 시작할 수 있습니다.');
        startQuiz(); // 퀴즈 재시작
    } else {
        alert('잘못된 리셋 키입니다. 다시 시도하세요.');
    }
});

startQuiz();