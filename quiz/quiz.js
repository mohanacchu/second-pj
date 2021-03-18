let questionDirectory = [
  {
    questions: "Capital of Karnataka ?",
    a: "Mysore",
    b: "Mandya",
    c: "Belagavi",
    d: "Bengaluru",
    correctAnswer: "d",
  },
  {
    questions: "11 times French open winner ?",
    a: "Rafael Nadal",
    b: "Murry",
    c: "Federer",
    d: "Williamson",
    correctAnswer: "a",
  },
  {
    questions: "Mission Impossible Lead Actor ?",
    a: "Brad pitt",
    b: "Tom Cruose",
    c: "Will Smith",
    d: "Robert Downey Jr",
    correctAnswer: "b",
  },
];
const quizQuestion = document.querySelector(".quiz-question");
const option1 = document.querySelector("#option_1");
const option2 = document.querySelector("#option_2");
const option3 = document.querySelector("#option_3");
const option4 = document.querySelector("#option_4");
const label1 = document.querySelector(".label_1");
const label2 = document.querySelector(".label_2");
const label3 = document.querySelector(".label_3");
const label4 = document.querySelector(".label_4");
const submit = document.getElementById("submit");

let currentQuestionInd = 0;
let selected = undefined;

loadQuiz();

function loadQuiz() {
  let currentQuestion = questionDirectory[currentQuestionInd];
  quizQuestion.innerText = currentQuestion.questions;
  label1.innerText = currentQuestion.a;
  label2.innerText = currentQuestion.b;
  label3.innerText = currentQuestion.c;
  label4.innerText = currentQuestion.d;
}

function validateAnswer() {
    const options = document.querySelectorAll(".option");

  options.forEach((element) => {

    console.log(element.value);

  });
}

submit.addEventListener("click", function () {
  currentQuestionInd++;
  validateAnswer();

  if (currentQuestionInd < questionDirectory.length) {
    loadQuiz();
  } else {
    alert("Finished");
  }
});
