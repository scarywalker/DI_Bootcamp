const express = require("express");
const router = express.Router();

let score = 0;
let counter = 0;

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

router.get("/quiz", (req, res) => {
  res.json(triviaQuestions[counter].question);
});

router.get("/quiz/score", (req, res) => {
  res.send(`score: ${score}`);
});

router.post("/quiz", (req, res) => {
  const answer = req.body.answer;
  if (answer.toLowerCase() === triviaQuestions[counter].answer.toLowerCase()) {
    score++;
  }
  counter++;
  if (counter < triviaQuestions.length) {
    const nextQuestion = triviaQuestions[counter].question;

    res.status(201).json({ message: "answer received", score, nextQuestion });
  } else {
    res.status(200).json({ message: "quiz completed", score });
  }
});

module.exports = router;
