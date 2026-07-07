// = = = = = = = = = = = = = = = = = = = = = =  
// DAY 17: Reserved Words, Timers, Forms & AJAX
// = = = = = = = = = = = = = = = = = = = = = = 

/*
SUMMARY:
- Learned that words like 'break', 'class', and 'await' are reserved in JS and can't be used for variable names.
- Practiced window timers (setTimeout for delays and setInterval for loops).
- Built a simple form validation check to catch empty inputs before submit.
- Explored AJAX basics using XMLHttpRequest to fetch data in the background without refreshing the page (GET vs POST).
*/

// --- 1. Timers (Timeout & Interval) ---
function runTimers() {
    // Run this once after 3 seconds
    let myTimeout = setTimeout(function() {
        console.log("3 seconds are up!");
    }, 3000);

    // Repeat this every 2 seconds
    let myInterval = setInterval(function() {
        console.log("Repeating every 2 seconds...");
    }, 2000);

    // Stop them if needed
    clearTimeout(myTimeout);
    clearInterval(myInterval);
}

// --- 2. Simple Form Validation ---
function checkForm() {
    let userEmail = ""; // simulating empty input field

    // Check if the user left it blank
    if (userEmail === "" || userEmail === null) {
        console.log("Error: Email cannot be blank!");
        return false; // blocks submission
    }
    return true;
}

// --- 3. Simple AJAX Request Setup ---
function loadData() {
    let request = new XMLHttpRequest();

    // Setup a basic GET request for a local file
    request.open("GET", "user-data.json", true);

    // Send it
    request.send();
}