let currentQuestionIndex = 0;
let score = 0;
let quizData = [];

document.addEventListener("DOMContentLoaded", () => {
    fetchQuizData();
});

function fetchQuizData() {
    fetch('/quiz')
        .then(response => response.json())
        .then(data => {
            quizData = data;
            displayQuestion();
        });
}

function displayQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const questionData = quizData[currentQuestionIndex];
        document.getElementById('question').innerText = questionData.question;
        const optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = '';
        questionData.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.innerHTML = `
                <input type="radio" name="option" value="${option}" id="${option}">
                <label for="${option}">${option}</label>
            `;
            optionsDiv.appendChild(optionElement);
        });
        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('score-container').style.display = 'none';
    } else {
        displayScore();
    }
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const selectedAnswer = selectedOption.value;
        fetch('/check-answer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                questionIndex: currentQuestionIndex,
                selectedAnswer: selectedAnswer
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.isCorrect) {
                score++;
            }
            currentQuestionIndex++;
            displayQuestion();
        });
    } else {
        alert('Please select an option!');
    }
}

function displayScore() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('score').innerText = `Your score: ${score} out of ${quizData.length}`;
    document.getElementById('score-container').style.display = 'block';
}