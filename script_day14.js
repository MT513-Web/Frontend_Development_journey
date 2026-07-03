/* 
================================================================
DAY 14 SUMMARY: CORE JAVASCRIPT ENGINES
================================================================
1. DATA TYPES: Checked 5 primitive/value types (String, Number, Boolean, Object, Function) and 
   null/undefined empty states.
2. TYPE CONVERSION: Verified implicit math rules (5+null=5) and explicit conversions using unary + 
   and parsing filters.
3. REGEXP: Tested pattern matching using /i (case-insensitive) and /g modifiers with test() a
   nd exec() methods.
4. HOISTING: Traced how declarations move to top but values stay, resulting in 'undefined' variables 
   before initialization.
5. DEBUGGING & ERRORS: Implemented try-catch validation blocks with custom throw triggers and browser 
   debugger statements.
================================================================
*/

//  Hoisting Tracing (Will print undefined, not an error)
console.log("Hoisted Variable Trace:", hoistedVar);
var hoistedVar = "Engine Verified";

document.getElementById("test-btn").addEventListener("click", function() {
    let output = "";
    
    //  Constructor Testing
    let sampleArr = [1, 2, 3];
    output += "Array Constructor: " + sampleArr.constructor.toString().indexOf("Array") + "<br>";

    //  Automatic Type Conversion Tracing
    let trace1 = 5 + null; // 5
    let trace2 = "5" - 1;  // 4
    output += `Implicit Matrix: 5+null=${trace1} | '5'-1=${trace2}<br>`;

    //  RegExp Match
    let pattern = /front-end/i; // case-insensitive modifier
    let testStr = "Fundamentals of Front-End Development";
    output += "RegExp Pattern Test: " + pattern.test(testStr) + "<br>";

    //  Error Handling Execution Block
    try {
        let inputVal = "Not a Number";
        if (isNaN(inputVal)) {
            throw "Custom Validation Failure Exception"; // Custom error throw
        }
    } 
    catch(err) {
        output += "Caught Exception: " + err + "<br>";
    } 
    finally {
        output += "Finally Block Execution Guard: Active";
    }

    // Update screen view
    document.getElementById("display-area").innerHTML = output;
});