const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Mark Language", "None of the above"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "jQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "JQuery", "NodeJS", "ReactJS"],
    answer: "Python Script"
  },
  {
    question: "Which language is used for web apps?",
    options: ["PHP", "Python", "JavaScript", "All"],
    answer: "All"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.innerText = option;
    div.onclick = () => selectOption(div, q.answer);
    optionsEl.appendChild(div);
  });
}

function selectOption(selectedDiv, correctAnswer) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(option => option.classList.remove("selected"));
  selectedDiv.classList.add("selected");

  if (selectedDiv.innerText === correctAnswer) {
    score++;
  }
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.classList.remove("hidden");
  resultEl.innerText = `You scored ${score} out of ${quizData.length}!`;
}

window.onload = () => {
  loadQuestion();
  nextBtn.disabled = true;
};
