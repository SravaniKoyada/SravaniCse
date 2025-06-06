const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: 1
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: 3
  },
  {
    question: "Who wrote 'Macbeth'?",
    options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
    answer: 0
  },
  {
    question: "What is the chemical symbol for Gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    answer: 0
  }
];

const questionEl = document.getElementById('question');
const answersList = document.getElementById('answers-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const scoreContainer = document.getElementById('score-container');
const quizContent = document.getElementById('quiz-content');

let currentQuestion = 0;
let answers = new Array(quizData.length).fill(null);

function loadQuestion(index) {
  const q = quizData[index];
  questionEl.textContent = `Q${index + 1}. ${q.question}`;
  answersList.innerHTML = '';

  q.options.forEach((option, i) => {
    const li = document.createElement('li');

    const input = document.createElement('input');
    input.type = 'radio';
    input.id = `option${i}`;
    input.name = 'answer';
    input.value = i;
    if (answers[index] === i) {
      input.checked = true;
    }

    const label = document.createElement('label');
    label.htmlFor = `option${i}`;
    label.textContent = option;

    li.appendChild(input);
    li.appendChild(label);
    answersList.appendChild(li);
  });

  prevBtn.disabled = index === 0;
  nextBtn.style.display = (index === quizData.length - 1) ? 'none' : 'inline-block';
  submitBtn.style.display = (index === quizData.length - 1) ? 'inline-block' : 'none';
}

function saveAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (selected) {
    answers[currentQuestion] = parseInt(selected.value, 10);
  }
}

prevBtn.addEventListener('click', () => {
  saveAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
});

nextBtn.addEventListener('click', () => {
  saveAnswer();
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  }
});

submitBtn.addEventListener('click', () => {
  saveAnswer();
  if (answers.includes(null)) {
    alert("Please answer all questions before submitting.");
    return;
  }
  let score = 0;
  answers.forEach((ans, idx) => {
    if (ans === quizData[idx].answer) score++;
  });
  quizContent.style.display = 'none';
  scoreContainer.style.display = 'block';
  scoreContainer.textContent = `You scored ${score} out of ${quizData.length}!`;
});

// Initialize quiz
loadQuestion(currentQuestion);
