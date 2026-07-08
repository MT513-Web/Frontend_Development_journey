// ==========================================
// DAY 18: AJAX Response, jQuery Introduction & Events
// ==========================================

/*
SUMMARY:
- Handled AJAX states using readyState (4) and status (200) to safely read responseText.
- Explored jQuery library basics and integrated the basic $(selector).action() syntax.
- Wrapped execution blocks inside $(document).ready() to wait for full DOM loading.
- Implemented jQuery selectors (tags, IDs, classes) and mouse/form events like click, mouseenter, focus, and blur.
*/

// --- 1. Pure JS: Advanced AJAX Handling ---
// Waiting for the HTML DOM to load fully before running jQuery
$(document).ready(function() {

    // 1. Single click to hide paragraph
    $("p").click(function() {
        $(this).hide();
    });

    // 2. Double click alert on heading
    $("#main-title").dblclick(function() {
        alert("You double clicked the title!");
    });

    // 3. Hover effects on Box using mouseenter and mouseleave
    $(".box").mouseenter(function() {
        $(this).css("background-color", "green").text("Mouse is inside!");
    });
    
    $(".box").mouseleave(function() {
        $(this).css("background-color", "lightcoral").text("Bring mouse inside!");
    });

    // 4. Input field focus and blur styling
    $(".my-input").focus(function() {
        $(this).css("background-color", "cyan");
    });

    $(".my-input").blur(function() {
        $(this).css("background-color", "white");
    });

    // 5. Multiple event handlers using the .on() method
    $(".btn").on({
        click: function() {
            alert("Button clicked successfully!");
        },
        mouseenter: function() {
            $(this).css("background-color", "#0056b3");
        },
        mouseleave: function() {
            $(this).css("background-color", "#007bff");
        }
    });

});