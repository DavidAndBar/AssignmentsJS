const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Middleware to parse URL-encoded bodies and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Sample questions and answers
const quizData = [
    {
        question: "What is the primary language used for AI application development?",
        options: ["JavaScript", "Python", "Ruby", "Java"],
        answer: "Python"
    },
    {
        question: "Which of the following is a popular library for deep learning?",
        options: ["TensorFlow", "React", "Django", "Flask"],
        answer: "TensorFlow"
    },
    {
        question: "What does NLP stand for in AI?",
        options: ["Natural Language Processing", "Neural Learning Program", "Network Learning Protocol", "None of the above"],
        answer: "Natural Language Processing"
    },
    {
        question: "Which algorithm is commonly used for classification problems?",
        options: ["K-Means", "Decision Tree", "Apriori", "Breadth-First Search"],
        answer: "Decision Tree"
    },
    {
        question: "What is the purpose of reinforcement learning?",
        options: ["To learn from labeled data", "To learn from unlabeled data", "To learn through rewards and punishments", "To optimize a function"],
        answer: "To learn through rewards and punishments"
    }
];

// Route to get quiz data
app.get('/quiz', (req, res) => {
    res.json(quizData);
});

// Route to check answer
app.post('/check-answer', (req, res) => {
    const { questionIndex, selectedAnswer } = req.body;
    const correctAnswer = quizData[questionIndex].answer;
    const isCorrect = selectedAnswer === correctAnswer;
    res.json({ isCorrect });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});