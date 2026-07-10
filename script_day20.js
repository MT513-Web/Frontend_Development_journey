
/*  DAY 20: jQuery DOM Manipulation, CSS and Traversing

SUMMARY:
- Manipulated element tokens using text(), html(), and form input val() retrievals.
- Expanded structural nodes via append(), prepend(), and cleared contents using empty().
- Triggered dynamic component styles utilizing addClass, removeClass, and toggleClass hooks.
- Measured physical viewport spatial details through structural height and width metrics.
- Evaluated relational family trees mapping parent() and parents() hierarchical nodes.
*/

$(document).ready(function() {

    // Get and Set content using text(), html(), and val()
    $("#btn-text").click(function() {
        let currentInputValue = $("#user-input").val();
        $("#content-box").text("Text changed to: " + currentInputValue);
    });

    $("#btn-html").click(function() {
        $("#content-box").html("Converted into <b>Bold Content</b> via HTML method.");
    });

    // Inserting elements using append
    $("#btn-append").click(function() {
        $("#content-box").append(" <span style='color:green;'>[Appended Element]</span>");
    });

    // Cleaning target area elements
    $("#btn-empty").click(function() {
        $("#content-box").empty(); // Clears all text and children inside
    });

    // Working with CSS classes dynamically
    $("#btn-toggle").click(function() {
        $("#content-box").toggleClass("highlight");
    });

    // Inspecting element sizes and boundary details
    $("#btn-dim").click(function() {
        let elementWidth = $("#content-box").width();
        let internalWidth = $("#content-box").innerWidth(); // includes padding
        let externalWidth = $("#content-box").outerWidth(); // includes padding + border
        
        alert("Core Width: " + elementWidth + "px\nInner Width: " + internalWidth + "px\nOuter Width: " + externalWidth + "px");
    });

    // DOM Traversing: Navigating up the tree
    $("#child-span").click(function() {
        // Finding immediate parent node and highlighting it
        $(this).parent().css({"border": "3px dashed red", "background": "#ffe6e6"});
        
        // Tracing all parents higher up in the console logs
        console.log("All ancestor components:", $(this).parents());
    });

});