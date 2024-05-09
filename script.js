let problems = [];
//random arithmetic problems
function generateProblems() {
    for (let i = 0; i < 10; i++) {
        let operand1, operand2, operator, result;

        if (i < 5) {
            operand1 = getRandomNumber(1, 50);
            operand2 = getRandomNumber(1, 50);
            operator = getRandomOperator(['+', '-']);
        } else {
            operand1 = getRandomNumber(1, 12);
            operand2 = getRandomNumber(1, 12);
            operator = getRandomOperator(['×', '÷']);
        }

        result = calculateResult(operand1, operand2, operator);
        problems.push({ operand1, operand2, operator, result });
    }
}

// display pproblems
function displayProblems() {
    problems.forEach((problem, index) => {
        let problemElement = document.getElementById(`problem${index + 1}`);
        problemElement.textContent = `${problem.operand1} ${problem.operator} ${problem.operand2} = `;
    });
}

// calculate score
function checkAnswers() {
    let score = 0;
    problems.forEach((problem, index) => {
        let answer = parseFloat(document.getElementById(`answer${index + 1}`).value);
        if (!isNaN(answer) && answer === problem.result) {
            score++;
        }
    });
    document.getElementById('feedback').textContent = `Drill complete! Your score: ${score}/10`;
}

// Restart
function restart() {
    problems = [];
    generateProblems();
    displayProblems();
    document.getElementById('feedback').textContent = '';
    for (let i = 0; i < 10; i++) {
        document.getElementById(`answer${i + 1}`).value = '';
    }
}

//random number within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//random arithmetic operator
function getRandomOperator(operators) {
    return operators[Math.floor(Math.random() * operators.length)];
}

// result of an arithmetic operation
function calculateResult(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case 'x':
            return operand1 * operand2;
        case '÷':
            return operand1 / operand2;
    }
}

generateProblems();
displayProblems();
