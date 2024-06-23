const levels = [
    {
        level: "Level 1: Basic Syntax",
        instruction: "Write a function that returns the sum of two numbers.",
        correctCode: `function sum(a, b) {
    return a + b;
}`
    },
    {
        level: "Level 2: Conditionals",
        instruction: "Write a function that checks if a number is even.",
        correctCode: `function isEven(num) {
    return num % 2 === 0;
}`
    },
    {
        level: "Level 3: Loops",
        instruction: "Write a function that returns the factorial of a number.",
        correctCode: `function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}`
    }
];

let currentLevelIndex = 0;

function loadLevel() {
    const levelData = levels[currentLevelIndex];
    document.getElementById("level").innerText = levelData.level;
    document.getElementById("instruction").innerText = levelData.instruction;
    document.getElementById("code-area").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("next-button").style.display = "none";
}

function runCode() {
    const userCode = document.getElementById("code-area").value;
    const result = document.getElementById("result");
    const levelData = levels[currentLevelIndex];

    try {
        // Evaluate the user's code
        eval(userCode);

        // Compare user code function with the correct function
        if (userCode.trim() === levelData.correctCode.trim()) {
            result.innerText = "Correct! Well done.";
            document.getElementById("next-button").style.display = "block";
        } else {
            result.innerText = "Incorrect. Try again.";
        }
    } catch (error) {
        result.innerText = `Error: ${error.message}`;
    }
}

function nextLevel() {
    currentLevelIndex++;
    if (currentLevelIndex >= levels.length) {
        alert("Congratulations! You've completed all the levels.");
        currentLevelIndex = 0;
    }
    loadLevel();
}

window.onload = loadLevel;
