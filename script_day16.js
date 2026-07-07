// ======================================
// DAY 16: JS Best Practices & Mistakes
// ======================================

/*
SUMMARY:
- Learned why declaring variables on top prevents global scope conflicts.
- Practiced strict comparison (===) to avoid type confusion errors.
- Checked out how to handle decimal calculation bugs (like 0.1 + 0.2).
- Explored loop optimization by caching array length outside the loop statement.
*/

// --- 1. Clean Variables & Declarations ---
function calculateTotal() {
    let itemPrice = 120;
    let standardDiscount = 15;
    let finalAmount = itemPrice - standardDiscount;
    return finalAmount;
}

// --- 2. Strict Check (Value + Type) ---
console.log(5 === "5"); // Returns false because one is number and one is string

// --- 3. Fixing Loop Overhead ---
let userIds = [101, 102, 103, 104];
let totalUsers = userIds.length; // Saved length here so loop doesn't check it every time

for (let i = 0; i < totalUsers; i++) {
    console.log("User ID:", userIds[i]);
}

// --- 4. Safe Return Structure ---
function checkStatus() {
    return "Day 16 notes updated!"; // Keep return value on same line to avoid automatic semicolon bugs
}
