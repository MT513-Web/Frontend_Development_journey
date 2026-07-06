// ==========================================
// DAY 16: JavaScript Best Practices, Common Mistakes & Performance
// ==========================================

// --- 1. BEST PRACTICES (Topic 89 & 90) ---

// Avoid Global Variables & Declare on Top
function calculateTotal() {
    // Declarations on top and proper initialization
    let price = 100;
    let discount = 10;
    let totalPrice = price - discount;
    
    return totalPrice;
}

// Strict Equality Comparison (=== vs ==)
let numValue = 10;
let strValue = "10";
// Good Practice: Always use === to force value and type comparison
console.log(numValue === strValue); // Returns false


// --- 2. COMMON MISTAKES (Topic 91 & 92) ---

// Proper Comparison in Conditionals (Avoid accidental assignment '=')
let score = 50;
if (score === 50) {
    console.log("Strict comparison works perfectly!");
}

// Correct Floating Point Operations
// Mistake: 0.1 + 0.2 equals 0.30000000000000004
// Solution: Multiply and divide to maintain exact precision
let safeFloat = (0.1 * 10 + 0.2 * 10) / 10; 
console.log(safeFloat); // Returns 0.3

// Safe Return Statement Layout
function getGreeting() {
    // Keeping return value on the same line to avoid automatic semicolon insertion (ASI)
    return "Welcome to Day 16!";
}


// --- 3. PERFORMANCE OPTIMIZATION (Topic 93) ---

// Reduce Activity in Loops
let dataArray = [1, 2, 3, 4, 5];
// Optimization: Cache the array length outside the loop statement
let arrayLength = dataArray.length; 
for (let i = 0; i < arrayLength; i++) {
    console.log("Processing item: " + dataArray[i]);
}

// Caching DOM Access (Concept Example)
// Instead of calling document.getElementById inside a loop or multiple times:
// let demoElement = document.getElementById("demo");
// demoElement.innerHTML = "Performance Optimized!";




















// ==========================================
// DAY 16: JS Best Practices & Performance
// ==========================================

/*
1. JavaScript Best Practices:
   - Minimize Global Variables: Keep variables local to functions to avoid overwriting conflicts.
   - Declarations on Top: Place all declarations at the top of scripts or functions for cleaner code.
   - Initialize Variables: Assign initial values to prevent variables from being 'undefined'.
   - Primitive Values Over Objects: Avoid using wrapper objects like 'new String()' or 'new Object()'.
   - Use === Operator: Always use strict equality to force both value and type comparison.

2. JavaScript Common Mistakes:
   - Accidental Assignment: Avoid using a single '=' instead of '==' or '===' inside 'if' statements.
   - Strict Switch Cases: Remember that switch statements use strict comparison (===), so data types must match.
   - Addition vs. Concatenation: Be careful with the '+' operator, as combining a number with a string leads to string concatenation.
   - Floating-Point Imprecision: JavaScript stores numbers as 64-bit floats, so operations like 0.1 + 0.2 require precision handling (multiply/divide).
   - Broken Return Statements: Never place a line break immediately after the 'return' keyword to prevent Automatic Semicolon Insertion (ASI) from breaking the code.

3. JavaScript Performance:
   - Reduce Activity in Loops: Optimize performance by caching array length outside the loop to avoid redundant recalculations.
   - Cache DOM Access: Access HTML DOM elements once and store them in local variables since DOM access is slow.
   - Reduce DOM Size: Keep the number of HTML elements small to speed up page loading and rendering.
   - Avoid Unnecessary Variables: Do not create unused variables that take up memory.
   - Delay JavaScript Loading: Put scripts at the bottom of the page body or use 'defer="true"' so the browser loads the layout first.
*/

// --- CODE EXAMPLES ---

// 1. Avoid Global Variables & Declarations on Top
function cleanCodeExample() {
    let price = 100;
    let discount = 5;
    let total = price - discount;
    return total;
}

// 2. Strict Equality Check
console.log(10 === "10"); // Returns false (Value is the same, but the type is different)

// 3. Loop Performance Optimization
let items = [10, 20, 30, 40];
let totalItems = items.length; // Cached the length outside the loop
for (let i = 0; i < totalItems; i++) {
    console.log(items[i]);
}

// 4. Safe Return
function getStatus() {
    return "Day 16 completed successfully!"; // Semicolon won't break the code due to accidental line breaks
}