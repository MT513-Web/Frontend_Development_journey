/*

DAY 23: XML Attributes, Namespaces, Validation Systems & JSON String Parsers

SUMMARY:
- Analyzed structural metadata comparisons between XML attributes and child elements.
- Outlined node prefix operations to mitigate XML name conflict issues.
- Traced validation parameters comparing DTD entities with robust XML Schemas.
- Evaluated structural index targets using simulated XPath expressions.
- Processed strict string stream evaluations leveraging the native JSON.parse loop.
*/

const layoutUI = `
    <style>
        body { font-family: Arial; margin: 30px; background: #939a17a8; }
        .data-card { background: white; border: 1px solid #c27474; padding: 15px; border-radius: 4px; margin-bottom: 20px; }
        .display-view { background: #5d662d; color: #f8f8dd; padding: 12px; border-radius: 4px; font-family: monospace; min-height: 40px; margin-top: 10px; white-space: pre-wrap; }
        button { padding: 8px 14px; cursor: pointer; border: 1px solid #d5afaf; background: #78be3286; border-radius: 4px; margin-right: 5px; }
        .badge { background: #447da3; color: white; padding: 2px 6px; border-radius: 3px; font-size: 12px; }
    </style>

    <h1>Day 23: Comprehensive Document Architectures (XML & JSON)</h1>
    <hr>

    <div class="data-card">
        <h3>1. XML Namespace & Conflict Resolution Preview</h3>
         <button id="btn-namespace">Simulate Namespace Data</button>
        <div class="display-view" id="namespace-output">Click to load XML metadata block with prefixes...</div>
        </div>

    <div class="data-card">
        <h3>2. XPath Predicate Constraints Filter</h3>
        <p>Target Filter Rule: <code>bookstore/book[price &gt; 35.00]</code></p>
        <button id="btn-xpath">Run XPath Filter Trace</button>
        <div class="display-view" id="xpath-output">Click to evaluate data constraints...</div>
    </div>

    <div class="data-card">
        <h3>3. JSON Architecture & Parsing Loop</h3>
        <button id="btn-json">Parse Valid JSON Text Stream</button>
        <div class="display-view" id="json-output">Parsed structural details will render here...</div>
    </div>
`;

$(document).ready(function() {
    // Mount pure layout directly onto DOM tree bounds
    $("body").html(layoutUI);

    // 1. Simulating Namespaces and attributes handling conflict checks
    $("#btn-namespace").click(function() {
        let simulatedXml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Root node implementing custom prefixes to isolate element names conflicts -->
<bookstore xmlns:edu="https://vu.edu.pk/book-schema" xmlns:market="https://commerce.org/prices">
    <edu:book category="CHILDREN">
        <title>Web Architecture Handouts</title>
        <market:price currency="PKR">1500</market:price>
    </edu:book>
</bookstore>`;
        $("#namespace-output").text(simulatedXml);
    });

    // 2. Simulating XPath array filtering operations
    $("#btn-xpath").click(function() {
        let mockDataset = [
            { title: "Learning XML (Index 1)", price: 39.95 },
            { title: "Standard JSON Guide (Index 2)", price: 22.00 }
        ];

        // Programmatic filter emulating bookstore/book[price > 35.00] behavior
        let matchingNodes = mockDataset.filter(function(node) {
            return node.price > 35.00;
        });

        $("#xpath-output").html("<strong>XPath Match Found:</strong><br>Title: " + matchingNodes[0].title + "<br>Price: $" + matchingNodes[0].price);
    });

    // 3. Strict JSON evaluation following structural object properties data rules
    $("#btn-json").click(function() {
        // String literal complying with strict quote parameters
        let serverTextStream = '{"friends":[{"firstName":"Ayesha","status":"Active"},{"firstName":"Taiba","status":"Active"}]}';
        
        // Transform incoming raw data streams into active functional objects
        let parsedPayload = JSON.parse(serverTextStream);
        
        // Extract array index placements explicitly
        let studentOne = parsedPayload.friends[0].firstName;
        let studentTwo = parsedPayload.friends[1].firstName;

        $("#json-output").html("<strong>Execution Success:</strong><br>Friend Array Index [0]: " + studentOne + "<br>Friend Array Index [1]: " + studentTwo);
    });
});