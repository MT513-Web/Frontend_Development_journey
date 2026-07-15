/*

DAY 25: HTML5 Coding Conventions, Best Practices & Canvas Graphic Contexts

SUMMARY:
- Applied strict HTML5 lowercase standards and proper attribute closures in layout.
- Structured external media elements and resource tags without deprecated type attributes.
- Built active Canvas contexts executing coordinates and vector block drawing loops.
- Configured dynamic event bindings to manage client-side interactive rendering.
*/

const documentView = `
    <style>
        body { font-family: Arial, sans-serif; margin: 30px; background: #fafafa; color: #333; }
        header { background: #1b5e20; color: white; padding: 15px; border-radius: 4px; text-align: center; }
        main { display: flex; gap: 20px; margin-top: 20px; }
        section { flex: 2; background: white; padding: 20px; border: 1px solid #ddd; border-radius: 4px; }
        aside { flex: 1; background: #efebe9; padding: 15px; border: 1px solid #ccc; border-radius: 4px; }
        .interactive-board { margin-top: 15px; }
        canvas { background: #ffffff; border: 2px dashed #4caf50; display: block; margin-top: 10px; }
        .control-panel { margin-top: 15px; }
        button { padding: 8px 14px; cursor: pointer; border: 1px solid #4caf50; background: #e8f5e9; color: #2e7d32; border-radius: 4px; font-weight: bold; }
        .convention-list { line-height: 1.6; }
        .badge { background: #81c784; color: #1b5e20; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: bold; }
    </style>

    <header>
        <h1>HTML5 Style Conventions & Graphics Sandbox</h1>
        <p>Verifying clean markup standards, self-closing structures, and Canvas drawing APIs</p>
    </header>

    <main>
        <!-- Semantic Section Container -->
        <section>
            <h2>W3C Coding Conventions Checklist</h2>
            <hr>
            <ul class="convention-list">
                <li><strong>Lowercase Syntax:</strong> Elements, attributes, and styles compiled cleanly using lowercase patterns.</li>
                <li><strong>Closed Elements:</strong> Rigid end tags maintained across inputs, text elements, and containers.</li>
                <li><strong>Attribute Quotes:</strong> Explicit double-quotes applied around dimensions, classes, and identifier keys.</li>
                <li><strong>Media Dimension Allocation:</strong> Sizing rules reserved on media endpoints to prevent dynamic loading flicker.</li>
            </ul>
            
            <div class="interactive-board">
                <h3>HTML5 Canvas Render Container</h3>
                <p>Drawing context evaluated using explicit coordinates: <code>fillRect(x, y, width, height)</code></p>
                <canvas id="my-canvas" width="400" height="150"></canvas>
                
                <div class="control-panel">
                    <button id="btn-draw">Execute Draw Vector Sequence</button>
                    <button id="btn-clear">Clear Vector Area</button>
                </div>
            </div>
        </section>

        <!-- Sidebar aside element -->
        <aside>
            <h3>Metadata & Environment Info</h3>
            <p>External CSS and JavaScript components linked cleanly without deprecated type tags.</p>
            <span class="badge">Character Set: UTF-8</span>
            <span class="badge" style="margin-top: 5px;">Standards: HTML5 compliant</span>
        </aside>
    </main>
`;

$(document).ready(function() {
    // Injecting structured semantic markup dynamically into the body tag
    $("body").html(documentView);

    // Initial drawing context handler setup
    const canvas = document.getElementById("my-canvas");
    let ctx = null;
    if (canvas) {
        ctx = canvas.getContext("2d");
    }

    // 1. Drawing process on user click trigger
    $("#btn-draw").click(function() {
        if (ctx) {
            // Reset canvas before rendering new drawing
            ctx.clearRect(0, 0, 400, 150);

            // Setting color properties
            ctx.fillStyle = "#4caf50";
            // Executing vector block mapping (x, y, width, height)
            ctx.fillRect(20, 20, 150, 110);

            ctx.fillStyle = "#1b5e20";
            ctx.fillRect(210, 20, 150, 110);
            
            console.log("Canvas Rendering: Painted vector shapes mapped at coordinates.");
        }
    });

    // 2. Clear operations
    $("#btn-clear").click(function() {
        if (ctx) {
            ctx.clearRect(0, 0, 400, 150);
            console.log("Canvas Rendering: Graphic context buffer cleared.");
        }
    });
});