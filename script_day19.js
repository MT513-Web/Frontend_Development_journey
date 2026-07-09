// ==========================================
// DAY 19: jQuery Animations & JS Math Objects
// ==========================================

/*
SUMMARY:
- Practiced jQuery effects including smooth fadeToggle and slideToggle functions.
- Built custom coordinate animations using the animate method with relative positions.
- Implemented jQuery method chaining to execute consecutive style and sliding changes.
- Generated dynamic integers using Math.random, Math.floor, and Math.ceil formulas.
*/

// Running code after the DOM structure is ready
$(document).ready(function() {

    // 1. Fading effect example
    $("#fade-btn").click(function() {
        $("#test-box").fadeToggle("slow");
    });

    // 2. Sliding effect example
    $("#slide-btn").click(function() {
        $("#test-box").slideToggle();
    });

    // 3. Custom animation to move and resize the box
    $("#move-btn").click(function() {
        // Element must have relative/absolute position in CSS to move left
        $("#test-box").animate({
            left: '100px',
            width: '200px',
            opacity: '0.7'
        }, "slow");
    });

    // 4. jQuery Method Chaining example
    $("#chain-btn").click(function() {
        // Running multiple methods back-to-back on a single element
        $("#test-box").css("background-color", "orange").slideUp(1000).slideDown(1000);
    });

    // 5. JavaScript Math functions execution
    $("#math-btn").click(function() {
        // Generating a random number between 1 and 10
        let randomFraction = Math.random();
        let scaledValue = randomFraction * 10;
        let finalRandomNumber = Math.floor(scaledValue) + 1;

        // Displaying output in the HTML element
        $("#math-output").text("Generated Number (1-10): " + finalRandomNumber);
        
        // Testing floor and ceil console traces
        console.log("Floor of 5.9 is:", Math.floor(5.9)); // returns 5
        console.log("Ceil of 5.1 is:", Math.ceil(5.1));   // returns 6
    });

});