/*
 DAY 21: jQuery Siblings, Shorthand AJAX & Variable Conflict Tracing
 
SUMMARY:
- Navigated horizontal DOM structures using siblings, next, and nextUntil parameters.
- Evaluated shorthand global request hooks using load wrappers for targeted page fragments.
- Structured external endpoint transactions separating HTTP GET data checks from POST input saves.
- Maintained interface namespace controls using the noConflict release token.
- Examined root configurations and optional XML prolog tags for data structures.
*/

// 1. Injecting pure HTML & Inline CSS directly from this JavaScript file
const pageLayout = `
    <style>
        body { font-family: Arial; margin: 30px; background: #fafafa; }
        .sibling-container { border: 1px solid #ccc; padding: 10px; margin-bottom: 20px; }
        .box { padding: 5px; margin: 5px 0; background: #e0e0e0; }
        .active-target { background: lightgreen; }
        button { padding: 6px 12px; margin-right: 5px; cursor: pointer; }
        #log-panel { border: 1px solid #999; padding: 10px; background: #fff; margin-top: 15px; min-height: 40px; }
    </style>

    <h1>Day 21: Sibling Control, AJAX Methods & noConflict</h1>
    <hr>

    <h3>1. Sibling Traversal Area</h3>
    <div class="sibling-container">
        <div class="box">Item 1 (Sibling)</div>
        <div class="box active-target" id="center-item">Item 2 (Target Anchor)</div>
        <div class="box">Item 3 (Sibling)</div>
        <div class="box" id="stop-item">Item 4 (Sibling Stop)</div>
        <div class="box">Item 5 (Sibling)</div>
    </div>
    <button id="btn-next">Highlight Next Sibling</button>
    <button id="btn-siblings">Highlight All Siblings</button>

    <h3>2. Remote Content Action (AJAX)</h3>
    <button id="btn-load">Load External Content</button>
    <button id="btn-get">Trigger HTTP GET</button>
    <button id="btn-post">Trigger HTTP POST</button>
    <div id="log-panel">Async operations output logs here...</div>

    <h3>3. Variable Conflicts</h3>
    <button id="btn-conflict">Test noConflict Script</button>
`;

// Running code after the HTML DOM structure is fully loaded
$(document).ready(function() {
    
    // Inject the pageLayout template directly into the body tag
    $("body").html(pageLayout);

    // 2. Sibling Traversal Operations
    $("#btn-next").click(function() {
        // Find the immediate next element and apply background color
        $("#center-item").next().css("background-color", "lightblue");
    });

    $("#btn-siblings").click(function() {
        // Target all adjacent elements sharing the same parent level
        $("#center-item").siblings().css("border", "1px dashed red");
    });

    // 3. Shorthand AJAX Load Integration
    $("#btn-load").click(function() {
        // Requesting file chunk in background and checking request status
        $("#log-panel").load("sample-data.txt #target-node", function(responseTxt, statusTxt, xhr) {
            if (statusTxt != "success") {
                $("#log-panel").text("Simulation Note: Local file fetch requires server setup, status is: " + xhr.status);
            }
        });
    });

    // 4. HTTP GET Request implementation
    $("#btn-get").click(function() {
        // Fetching structural data from open placeholder test server
        $.get("https://jsonplaceholder.typicode.com/posts/1", function(data, status) {
            $("#log-panel").html("<strong>GET Status:</strong> " + status + " | <strong>Title:</strong> " + data.title);
        });
    });

    // 5. HTTP POST Request simulation
    $("#btn-post").click(function() {
        let submissionPayload = { name: "Ayesha", course: "Web Development" };
        
        // Sending local storage payload variables securely to backend server
        $.post("https://jsonplaceholder.typicode.com/posts", submissionPayload, function(data, status) {
            $("#log-panel").html("<strong>POST Status:</strong> " + status + " | <strong>Confirmed ID:</strong> " + data.id);
        });
    });

    // 6. Handling global scope library conflicts
    $("#btn-conflict").click(function() {
        // Release primary shortcut handle control to prevent script failure
        var nativeQuery = $.noConflict();
        nativeQuery("#log-panel").text("noConflict variable link hooked successfully!");
    });

});