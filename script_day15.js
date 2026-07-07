// ==========================================
// DAY 15: JS Syntax, Scope & Base Concepts
// ==========================================

/*
SUMMARY:
- Practiced strict type verification (=== vs ==) to catch errors early.
- Fixed floating point math issues using basic multiplication/division techniques.
- Explored switch cases and strict matching parameters.
- Optimized loops by keeping array length variable outside the execution block.
- Tested global scope behaviors and window interval systems.
*/

// --- 1. Equality Testing ---
let numValue = 50;
let stringValue = "50";
console.log(numValue === stringValue); // false (strict type validation)

// --- 2. Floating Point Precision ---
let badMath = 0.1 + 0.2; 
let fixedMath = (0.1 * 10 + 0.2 * 10) / 10;
console.log("Fixed Precision:", fixedMath); // 0.3

// --- 3. Strict Switch Evaluation ---
let userType = 1;
switch (userType) {
    case "1":
        console.log("String match failed"); // won't execute because types differ
        break;
    case 1:
        console.log("Number type matched!");
        break;
}

// --- 4. Loop Length Optimization ---
let scoringList = [80, 90, 95, 100];
let totalScores = scoringList.length; // cached length out of loop
for (let i = 0; i < totalScores; i++) {
    console.log("Score:", scoringList[i]);
}

// --- 5. Basic Window Interval ---
let runCount = 0;
let systemTimer = setInterval(function() {
    runCount++;
    console.log("System pulse...", runCount);
    
    if (runCount >= 3) {
        clearInterval(systemTimer); // stop after 3 runs
    }
}, 1000);
