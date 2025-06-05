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
    },
    {
        "question": "지구 온난화를 일으키는 주요 기체는 무엇일까요?",
        "answers": [
            { "text": "산소", "correct": false },
            { "text": "이산화탄소", "correct": true },
            { "text": "질소", "correct": false },
            { "text": "수증기", "correct": false }
        ]
    },
    {
        "question": "나무를 심으면 어떤 환경 문제가 해결될까요?",
        "answers": [
            { "text": "물 부족", "correct": false },
            { "text": "공기 오염", "correct": true },
            { "text": "소음 공해", "correct": false },
            { "text": "빛 공해", "correct": false }
        ]
    },
    {
        "question": "플라스틱 쓰레기를 줄이려면 어떤 행동이 가장 좋을까요?",
        "answers": [
            { "text": "일회용 컵을 사용해요", "correct": false },
            { "text": "재사용 가능한 물병을 써요", "correct": true },
            { "text": "플라스틱을 땅에 묻어요", "correct": false },
            { "text": "플라스틱을 태워요", "correct": false }
        ]
    },
    {
        "question": "물을 아끼기 위해 샤워할 때 무엇을 해야 할까요?",
        "answers": [
            { "text": "물을 계속 틀어놓고 샤워해요", "correct": false },
            { "text": "샤워 시간을 짧게 해요", "correct": true },
            { "text": "뜨거운 물만 써요", "correct": false },
            { "text": "샤워를 안 해요", "correct": false }
        ]
    },
    {
        "question": "동물들의 서식지를 보호하려면 무엇을 해야 할까요?",
        "answers": [
            { "text": "숲을 없애고 건물을 지어요", "correct": false },
            { "text": "숲을 보존하고 나무를 심어요", "correct": true },
            { "text": "공장을 더 많이 지어요", "correct": false },
            { "text": "쓰레기를 숲에 버려요", "correct": false }
        ]
    },
    {
        "question": "공기를 덜 오염시키는 교통수단은 무엇일까요?",
        "answers": [
            { "text": "자동차", "correct": false },
            { "text": "자전거", "correct": true },
            { "text": "비행기", "correct": false },
            { "text": "오토바이", "correct": false }
        ]
    },
    {
        "question": "재활용이 가능한 물건은 무엇일까요?",
        "answers": [
            { "text": "종이컵", "correct": true },
            { "text": "음식물 쓰레기", "correct": false },
            { "text": "더러운 기저귀", "correct": false },
            { "text": "깨진 유리병", "correct": false }
        ]
    },
    {
        "question": "지구 온난화를 막으려면 무엇을 줄여야 할까요?",
        "answers": [
            { "text": "나무 심기", "correct": false },
            { "text": "화석 연료 사용", "correct": true },
            { "text": "재활용", "correct": false },
            { "text": "태양광 에너지 사용", "correct": false }
        ]
    },
    {
        "question": "바다를 오염시키는 주요 원인 중 하나는 무엇일까요?",
        "answers": [
            { "text": "물고기", "correct": false },
            { "text": "플라스틱 쓰레기", "correct": true },
            { "text": "모래", "correct": false },
            { "text": "해초", "correct": false }
        ]
    },
    {
        "question": "전기를 아끼기 위해 집에서 할 수 있는 일은 무엇일까요?",
        "answers": [
            { "text": "불을 켜놓고 나가요", "correct": false },
            { "text": "사용하지 않는 전자제품을 꺼요", "correct": true },
            { "text": "TV를 밤새 켜놔요", "correct": false },
            { "text": "냉장고 문을 열어놔요", "correct": false }
        ]
    },
    {
        "question": "태양의 힘으로 전기를 만드는 기술은 무엇일까요?",
        "answers": [
            { "text": "풍력 발전", "correct": false },
            { "text": "태양광 발전", "correct": true },
            { "text": "수력 발전", "correct": false },
            { "text": "화력 발전", "correct": false }
        ]
    },
    {
        "question": "바람을 이용해 전기를 만드는 것은 무엇일까요?",
        "answers": [
            { "text": "태양광 패널", "correct": false },
            { "text": "풍력 터빈", "correct": true },
            { "text": "댐", "correct": false },
            { "text": "공장 굴뚝", "correct": false }
        ]
    },
    {
        "question": "쓰레기를 줄이는 방법 중 하나는 무엇일까요?",
        "answers": [
            { "text": "물건을 재사용해요", "correct": true },
            { "text": "새 물건을 계속 사요", "correct": false },
            { "text": "쓰레기를 땅에 묻어요", "correct": false },
            { "text": "쓰레기를 강에 버려요", "correct": false }
        ]
    },
    {
        "question": "공기 오염을 줄이려면 무엇을 많이 사용해야 할까요?",
        "answers": [
            { "text": "자동차", "correct": false },
            { "text": "대중교통", "correct": true },
            { "text": "비행기", "correct": false },
            { "text": "오토바이", "correct": false }
        ]
    },
    {
        "question": "물을 오염시키는 나쁜 행동은 무엇일까요?",
        "answers": [
            { "text": "강에 쓰레기를 버려요", "correct": true },
            { "text": "물을 아껴 써요", "correct": false },
            { "text": "강을 청소해요", "correct": false },
            { "text": "물을 끓여 마셔요", "correct": false }
        ]
    },
    {
        "question": "나무를 베면 어떤 문제가 생길까요?",
        "answers": [
            { "text": "공기가 깨끗해져요", "correct": false },
            { "text": "동물들이 살 곳이 없어져요", "correct": true },
            { "text": "물이 더 많아져요", "correct": false },
            { "text": "땅이 더 단단해져요", "correct": false }
        ]
    },
    {
        "question": "지구를 따뜻하게 만드는 ‘온실 효과’를 줄이려면 무엇을 해야 할까요?",
        "answers": [
            { "text": "나무를 더 심어요", "correct": true },
            { "text": "공장을 더 많이 지어요", "correct": false },
            { "text": "석탄을 더 써요", "correct": false },
            { "text": "플라스틱을 태워요", "correct": false }
        ]
    },
    {
        "question": "재활용을 하면 어떤 좋은 점이 있을까요?",
        "answers": [
            { "text": "쓰레기가 늘어요", "correct": false },
            { "text": "자원을 아껴요", "correct": true },
            { "text": "공기가 더러워져요", "correct": false },
            { "text": "물이 낭비돼요", "correct": false }
        ]
    },
    {
        "question": "환경을 위해 우리가 줄여야 할 것은 무엇일까요?",
        "answers": [
            { "text": "나무", "correct": false },
            { "text": "일회용품", "correct": true },
            { "text": "햇빛", "correct": false },
            { "text": "공기", "correct": false }
        ]
    },
    {
        "question": "물 부족 문제를 해결하려면 무엇을 해야 할까요?",
        "answers": [
            { "text": "물을 낭비해요", "correct": false },
            { "text": "빗물을 모아요", "correct": true },
            { "text": "강에 쓰레기를 버려요", "correct": false },
            { "text": "물을 계속 틀어놔요", "correct": false }
        ]
    },
    {
        "question": "공기가 더러워지면 어떤 문제가 생길까요?",
        "answers": [
            { "text": "숨쉬기 힘들어요", "correct": true },
            { "text": "물이 깨끗해져요", "correct": false },
            { "text": "나무가 잘 자라요", "correct": false },
            { "text": "동물들이 더 많아져요", "correct": false }
        ]
    },
    {
        "question": "환경을 보호하는 데 도움이 되는 에너지는 무엇일까요?",
        "answers": [
            { "text": "석탄", "correct": false },
            { "text": "태양광", "correct": true },
            { "text": "기름", "correct": false },
            { "text": "가스", "correct": false }
        ]
    },
    {
        "question": "숲이 사라지면 어떤 동물이 위험해질까요?",
        "answers": [
            { "text": "물고기", "correct": false },
            { "text": "새", "correct": true },
            { "text": "돌고래", "correct": false },
            { "text": "상어", "correct": false }
        ]
    },
    {
        "question": "플라스틱이 바다에 버려지면 어떤 일이 생길까요?",
        "answers": [
            { "text": "물고기가 건강해져요", "correct": false },
            { "text": "바다가 오염돼요", "correct": true },
            { "text": "물이 더 맑아져요", "correct": false },
            { "text": "해초가 잘 자라요", "correct": false }
        ]
    },
    {
        "question": "지구를 위해 우리가 할 수 있는 작은 행동은 무엇일까요?",
        "answers": [
            { "text": "쓰레기를 아무 데나 버려요", "correct": false },
            { "text": "재활용 쓰레기를 분리해요", "correct": true },
            { "text": "물건을 낭비해요", "correct": false },
            { "text": "나무를 베어요", "correct": false }
        ]
    },
    {
        "question": "화석 연료 대신 사용할 수 있는 깨끗한 에너지는 무엇일까요?",
        "answers": [
            { "text": "석탄", "correct": false },
            { "text": "바람", "correct": true },
            { "text": "기름", "correct": false },
            { "text": "가스", "correct": false }
        ]
    },
    {
        "question": "공기를 맑게 유지하려면 무엇을 해야 할까요?",
        "answers": [
            { "text": "자동차를 더 많이 타요", "correct": false },
            { "text": "나무를 심고 숲을 지켜요", "correct": true },
            { "text": "공장을 더 많이 지어요", "correct": false },
            { "text": "쓰레기를 태워요", "correct": false }
        ]
    },
    {
        "question": "물을 아끼려면 양치할 때 무엇을 해야 할까요?",
        "answers": [
            { "text": "물을 계속 틀어놓고 해요", "correct": false },
            { "text": "컵에 물을 받아서 해요", "correct": true },
            { "text": "물을 낭비해요", "correct": false },
            { "text": "양치를 안 해요", "correct": false }
        ]
    },
    {
        "question": "쓰레기를 태우면 어떤 문제가 생길까요?",
        "answers": [
            { "text": "공기가 깨끗해져요", "correct": false },
            { "text": "공기가 오염돼요", "correct": true },
            { "text": "물이 맑아져요", "correct": false },
            { "text": "나무가 잘 자라요", "correct": false }
        ]
    },
    {
        "question": "환경을 위해 우리가 먹을 수 있는 음식 쓰레기를 줄이려면 어떻게 해야 할까요?",
        "answers": [
            { "text": "먹을 만큼만 요리해요", "correct": true },
            { "text": "음식을 많이 만들어 버려요", "correct": false },
            { "text": "음식물을 땅에 묻어요", "correct": false },
            { "text": "음식을 강에 버려요", "correct": false }
        ]
    },
    {
        "question": "지구 온난화로 인해 어떤 문제가 생길까요?",
        "answers": [
            { "text": "빙하가 녹아요", "correct": true },
            { "text": "나무가 더 잘 자라요", "correct": false },
            { "text": "공기가 깨끗해져요", "correct": false },
            { "text": "물이 더 많아져요", "correct": false }
        ]
    },
    {
        "question": "환경을 보호하려면 어떤 가방을 사용하는 게 좋을까요?",
        "answers": [
            { "text": "비닐봉지", "correct": false },
            { "text": "천 가방", "correct": true },
            { "text": "일회용 플라스틱 가방", "correct": false },
            { "text": "종이봉투", "correct": false }
        ]
    },
    {
        "question": "공장 굴뚝에서 나오는 연기는 무엇을 오염시킬까요?",
        "answers": [
            { "text": "물", "correct": false },
            { "text": "공기", "correct": true },
            { "text": "땅", "correct": false },
            { "text": "소리", "correct": false }
        ]
    },
    {
        "question": "물고기가 살기 좋은 강을 만들려면 무엇을 해야 할까요?",
        "answers": [
            { "text": "쓰레기를 강에 버려요", "correct": false },
            { "text": "강을 정기적으로 청소해요", "correct": true },
            { "text": "기름을 강에 흘려요", "correct": false },
            { "text": "공장을 강 옆에 지어요", "correct": false }
        ]
    },
    {
        "question": "전기를 아끼면 어떤 자원을 덜 쓰게 될까요?",
        "answers": [
            { "text": "나무", "correct": false },
            { "text": "석탄", "correct": true },
            { "text": "공기", "correct": false },
            { "text": "햇빛", "correct": false }
        ]
    },
    {
        "question": "환경을 위해 우리가 줄여야 할 것은 무엇일까요?",
        "answers": [
            { "text": "재활용", "correct": false },
            { "text": "에너지 낭비", "correct": true },
            { "text": "나무 심기", "correct": false },
            { "text": "대중교통 이용", "correct": false }
        ]
    },
    {
        "question": "숲을 보호하면 어떤 동물이 더 안전해질까요?",
        "answers": [
            { "text": "곰", "correct": true },
            { "text": "물고기", "correct": false },
            { "text": "돌고래", "correct": false },
            { "text": "상어", "correct": false }
        ]
    },
    {
        "question": "플라스틱 대신 사용할 수 있는 친환경 재료는 무엇일까요?",
        "answers": [
            { "text": "유리", "correct": true },
            { "text": "기름", "correct": false },
            { "text": "석탄", "correct": false },
            { "text": "고무", "correct": false }
        ]
    },
    {
        "question": "지구 온난화를 막으려면 어떤 행동이 필요할까요?",
        "answers": [
            { "text": "에어컨을 더 많이 틀어요", "correct": false },
            { "text": "에너지 효율이 좋은 전구를 써요", "correct": true },
            { "text": "히터를 계속 켜놔요", "correct": false },
            { "text": "창문을 열지 않아요", "correct": false }
        ]
    },
    {
        "question": "쓰레기를 줄이려면 쇼핑할 때 무엇을 해야 할까요?",
        "answers": [
            { "text": "비닐봉지를 더 달라고 해요", "correct": false },
            { "text": "장바구니를 들고 가요", "correct": true },
            { "text": "물건을 더 많이 사요", "correct": false },
            { "text": "포장된 물건만 사요", "correct": false }
        ]
    },
    {
        "question": "공기를 덜 오염시키는 전기 만드는 방법은 무엇일까요?",
        "answers": [
            { "text": "석탄 태우기", "correct": false },
            { "text": "태양광 사용", "correct": true },
            { "text": "기름 태우기", "correct": false },
            { "text": "가스 태우기", "correct": false }
        ]
    },
    {
        "question": "환경을 위해 우리가 먹는 음식에서 줄여야 할 것은 무엇일까요?",
        "answers": [
            { "text": "채소", "correct": false },
            { "text": "고기", "correct": true },
            { "text": "과일", "correct": false },
            { "text": "물", "correct": false }
        ]
    },
    {
        "question": "나무가 많아지면 어떤 좋은 일이 생길까요?",
        "answers": [
            { "text": "공기가 더러워져요", "correct": false },
            { "text": "이산화탄소가 줄어들어요", "correct": true },
            { "text": "물이 부족해져요", "correct": false },
            { "text": "땅이 메말라요", "correct": false }
        ]
    },
    {
        "question": "바다를 보호하려면 무엇을 줄여야 할까요?",
        "answers": [
            { "text": "물고기 잡기", "correct": false },
            { "text": "플라스틱 사용", "correct": true },
            { "text": "모래 채취", "correct": false },
            { "text": "해초 키우기", "correct": false }
        ]
    },
    {
        "question": "지구를 위해 우리가 할 수 있는 행동은 무엇일까요?",
        "answers": [
            { "text": "쓰레기를 분리수거해요", "correct": true },
            { "text": "쓰레기를 아무 데나 버려요", "correct": false },
            { "text": "물건을 낭비해요", "correct": false },
            { "text": "나무를 베어요", "correct": false }
        ]
    },
    {
        "question": "환경에 나쁜 영향을 주는 연료는 무엇일까요?",
        "answers": [
            { "text": "태양광", "correct": false },
            { "text": "석유", "correct": true },
            { "text": "바람", "correct": false },
            { "text": "물", "correct": false }
        ]
    },
    {
        "question": "공기 오염을 줄이려면 어떤 교통수단을 더 많이 이용해야 할까요?",
        "answers": [
            { "text": "자동차", "correct": false },
            { "text": "기차", "correct": true },
            { "text": "비행기", "correct": false },
            { "text": "오토바이", "correct": false }
        ]
    },
    {
        "question": "물을 아끼기 위해 설거지를 할 때 무엇을 해야 할까요?",
        "answers": [
            { "text": "물을 계속 틀어놓고 해요", "correct": false },
            { "text": "그릇을 물에 담가놓고 해요", "correct": true },
            { "text": "물을 낭비해요", "correct": false },
            { "text": "설거지를 안 해요", "correct": false }
        ]
    },
    {
        "question": "지구 온난화로 인해 어떤 곳이 위험해질까요?",
        "answers": [
            { "text": "사막", "correct": false },
            { "text": "북극", "correct": true },
            { "text": "산", "correct": false },
            { "text": "강", "correct": false }
        ]
    },
    {
        "question": "환경을 위해 우리가 매일 할 수 있는 일은 무엇일까요?",
        "answers": [
            { "text": "쓰레기를 길에 버려요", "correct": false },
            { "text": "전기를 아껴 써요", "correct": true },
            { "text": "물건을 낭비해요", "correct": false },
            { "text": "나무를 베어요", "correct": false }
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
    
    if (quizCompleted) {
        // 수정: 저장된 데이터를 불러와 점수와 결과를 표시
        const savedScore = localStorage.getItem('quizScore'); // 점수 불러오기
        const savedUserAnswers = JSON.parse(localStorage.getItem('quizUserAnswers')); // 사용자 답변 불러오기
        const savedQuestions = JSON.parse(localStorage.getItem('quizSelectedQuestions')); // 선택된 문제 불러오기

        // 저장된 데이터가 모두 존재하는지 확인
        if (savedScore && savedUserAnswers && savedQuestions) {
            score = parseInt(savedScore); // 저장된 점수를 정수로 변환
            userAnswers = savedUserAnswers; // 사용자 답변 복원
            selectedQuestions = savedQuestions; // 선택된 문제 복원
            showScore(); // 점수와 결과를 표시
        } else {
            // 저장된 데이터가 없으면 리셋 안내 메시지 표시
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
        button.addEventListener('click', selectAnswer, { once: true }); // 한 번만 실행되도록 설정
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
        selectedButton.classList.add('correct'); // 정답일 때 색상 적용
    } else {
        selectedButton.classList.add('incorrect'); // 오답일 때 색상 적용
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
    // 점수와 문제 수 확인
    console.log("Final Score:", score, "Total Questions:", selectedQuestions.length);  
    if (score > selectedQuestions.length) {   
        score = selectedQuestions.length; // 최대 점수를 문제 수로 제한  
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
        userAnswerP.classList.add('user-answer');
        userAnswerP.innerHTML = `당신의 답변: ${answer.userAnswer}`;
        
        const correctAnswerP = document.createElement('p');
        correctAnswerP.classList.add('correct-answer');
        correctAnswerP.innerHTML = `정답: ${answer.correctAnswer}`;
        
        resultItem.appendChild(questionP);
        resultItem.appendChild(userAnswerP);
        resultItem.appendChild(correctAnswerP);
        resultsDiv.appendChild(resultItem);
    });
    
    answerButtonsElement.appendChild(resultsDiv);
    
    // 수정: localStorage에 퀴즈 데이터를 저장하여 새로고침 후에도 결과가 유지되도록 함
    localStorage.setItem('quizCompleted', 'true'); // 퀴즈 완료 상태 저장
    localStorage.setItem('quizScore', score.toString()); // 점수를 문자열로 저장
    localStorage.setItem('quizUserAnswers', JSON.stringify(userAnswers)); // 사용자 답변을 JSON 문자열로 저장
    localStorage.setItem('quizSelectedQuestions', JSON.stringify(selectedQuestions)); // 선택된 문제를 JSON 문자열로 저장
}

resetButton.addEventListener('click', () => {
    const inputKey = resetKeyInput.value.trim();
    if (inputKey === RESET_KEY) {
        // 수정: 리셋 시 모든 저장된 데이터를 삭제하여 퀴즈를 초기화
        localStorage.removeItem('quizCompleted'); // 퀴즈 완료 상태 삭제
        localStorage.removeItem('quizScore'); // 저장된 점수 삭제
        localStorage.removeItem('quizUserAnswers'); // 저장된 사용자 답변 삭제
        localStorage.removeItem('quizSelectedQuestions'); // 저장된 선택된 문제 삭제
        resetKeyInput.value = '';
        alert('퀴즈가 리셋되었습니다. 다시 시작할 수 있습니다.');
        startQuiz();
    } else {
        alert('잘못된 리셋 키입니다. 다시 시도하세요.');
    }
});

startQuiz();
