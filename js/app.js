// -------- Screens ---------
const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {
  screens.forEach(function (screen) {
    screen.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");
}

// ----- Quiz state -----
let currentIndex = 0;

// ----- Show one question -----
function showQuestion(index) {
  const q = questions[index];

  document.getElementById("question-number").textContent =
    `Question ${index + 1} of ${questions.length}`;
  document.getElementById("question-category").textContent =
    `${q.category} - ${q.difficulty}`;
  document.getElementById("question-text").textContent = q.question;

  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = ""; // empty the box first

  q.options.forEach(function (optionText, i) {
    const btn = document.createElement("button");
    btn.textContent = optionText;
    btn.classList.add("option-btn");
    btn.dataset.index = i;
    optionsBox.appendChild(btn);
  });
}

// -------------- Buttons ---------------
document.getElementById("start-btn").addEventListener("click", function () {
  currentIndex = 0;
  showQuestion(currentIndex);
  showScreen("quiz-screen");
});

document.getElementById("next-btn").addEventListener("click", function () {
  if (currentIndex < questions.length - 1) {
    currentIndex = currentIndex + 1;
    showQuestion(currentIndex);
  }
});

document.getElementById("finish-btn").addEventListener("click", function () {
  showScreen("result-screen");
});

document.getElementById("home-btn").addEventListener("click", function () {
  showScreen("home-screen");
});

// -------------- Test Score ----------------
let score = 3;
document.getElementById("final-score").textContent = score;
