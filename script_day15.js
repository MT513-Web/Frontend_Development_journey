/* 
================================================================
DAY 15 SUMMARY: BEST PRACTICES, PERFORMANCE & WINDOW OBJECT
================================================================
1. BEST PRACTICES: Implemented strict comparison (===) over loose (==).
2. FLOATS MATRIX: Solved the 0.1 + 0.2 precision glitch using scaling math.
3. SWITCH ENGINE: Proved that switch structures utilize strict matching.
4. PERFORMANCE: Optimized loops by caching DOM array reference size.
5. TIMERS WINDOW: Integrated asynchronous setInterval and clearInterval mechanics.
================================================================
*/

// Global variables reference for performance tracking
let intervalId = null;
let ticks = 0;

// Optimized DOM caching practice (Topic 93)
const displayPanel = document.getElementById("display-panel");
const timerPanel = document.getElementById("timer-panel");

document.getElementById("run-matrix").addEventListener("click", function() {
    let result = "";

    //  Strict vs Loose Comparison
    let looseCheck = (0 == "");   // true
    let strictCheck = (0 === ""); // false
    result += `Strict Comparison: 0=="" is ${looseCheck} | 0==="" is ${strictCheck}<br>`;

    //  Misunderstanding Floats & Precision Fix
    let glitchSum = 0.1 + 0.2;
    let accurateSum = (0.1 * 10 + 0.2 * 10) / 10;
    result += `Float Precision: 0.1+0.2 Gitch=${glitchSum} | Fixed=${accurateSum}<br>`;

    //  Switch Statement Strict Type Verification
    let switchMatch = "Failed";
    let targetNum = 10;
    switch(targetNum) {
        case "10": // Strict matching fails because type is String, not Number
            switchMatch = "Matched String";
            break;
        case 10:
            switchMatch = "Matched True Number";
            break;
    }
    result += `Switch Strict Match Test: ${switchMatch}<br>`;

    // Global Functions eval Evaluation
    let x = 10, y = 20;
    let evalOutput = eval("x * y"); // Evaluates string statement
    result += `Global eval() Computation: ${evalOutput}<br>`;

    // Performance Loop Size Optimization Caching
    let mockArray = [100, 200, 300, 400];
    let cachedLength = mockArray.length; // Cached variable state outside loop
    let loopSum = 0;
    for (let i = 0; i < cachedLength; i++) {
        loopSum += mockArray[i];
    }
    result += `Optimized Loop Execution Sum: ${loopSum}`;

    displayPanel.innerHTML = result;

    // Window Object Async Interval Timer Setup
    if (intervalId === null) {
        timerPanel.innerHTML = "Background Interval Engine: Initializing...";
        intervalId = window.setInterval(function() {
            ticks++;
            timerPanel.innerHTML = `Active Window Timer Cycles: ${ticks} Seconds`;
        }, 1000);
    }
});

// Timer Termination Handler
document.getElementById("stop-timer").addEventListener("click", function() {
    if (intervalId !== null) {
        window.clearInterval(intervalId); // Destroys background execution instance
        intervalId = null;
        ticks = 0;
        timerPanel.innerHTML = "Background Interval Engine: Destroyed Successfully";
    }
});