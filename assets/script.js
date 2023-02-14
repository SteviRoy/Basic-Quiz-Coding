// Initial values for the quiz
let score = 0;
let questionIndex = 0;
let time = questions.length * 15;

// Elements from the HTML
const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");
const endContainer = document.getElementById("end");
const highScoresContainer = document.getElementById("high-scores-container");
const timerEl = document.getElementById("timer");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const finalScoreEl = document.getElementById("final-score");
const initialsEl = document.getElementById("initials");
const startBtn = document.getElementById("start");
const saveBtn = document.getElementById("save");
const clearBtn = document.getElementById("clear");