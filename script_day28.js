/*
 DAY 28: CSS3 Advanced Modules - Gradients, Shadows, Borders, and Text Handling

SUMMARY:
- Applied CSS3 dynamic border-radius structural metrics handling multi-corner rendering.
- Configured programmatic layout parameters changing multi-color linear gradients smoothly.
- Developed live interfaces verifying text-overflow ellipsis and forced word wrapping behaviors.
- Maintained responsive flex components binding input click event loops to the DOM.
*/

const interfaceTemplate = `
    <style>
        body { font-family: Arial, sans-serif; margin: 30px; background: #fafafa; color: #333; }
        header { background: linear-gradient(to right, #673ab7, #9c27b0); color: white; padding: 15px; border-radius: 4px; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.15); }
        main { display: flex; flex-direction: column; gap: 20px; margin-top: 25px; }
        .flex-row { display: flex; gap: 20px; }
        section { flex: 1; background: white; padding: 20px; border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .preview-box { width: 100%; height: 110px; background: #e0e0e0; margin-top: 15px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; transition: all 0.3s ease; }
        .text-container { border: 1px solid #ff5722; padding: 10px; margin-top: 10px; background: #fff5f5; }
        .overflow-demo { width: 100%; white-space: nowrap; overflow: hidden; text-overflow: clip; border: 1px solid #333; padding: 5px; background: #fff; margin-bottom: 10px; }
        .wrap-demo { width: 150px; border: 1px solid #333; padding: 5px; background: #fff; }
        .control-panel { margin-top: 15px; display: flex; gap: 8px; }
        button { padding: 8px 14px; cursor: pointer; border: 1px solid #673ab7; background: #f3e5f5; color: #673ab7; border-radius: 4px; font-weight: bold; }
        .badge { background: #e1bee7; color: #4a148c; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: bold; }
    </style>

    <header>
        <h1>CSS3 Advanced Modules & Visual Processing Engine</h1>
        <p>Testing operational bounds of color gradients, text-shadow effects, and structural layout constraints</p>
    </header>

    <main>
        <div class="flex-row">
            <!-- 1. CSS3 Borders & Shadows Section -->
            <section>
                <h3>1. Border Radius & Custom Box Shadows</h3>
                <p>Dynamic structural evaluation altering corner boundary positions:</p>
                <div class="preview-box" id="border-shadow-box" style="border:3px solid #673ab7;">Interactive Target Block</div>
                <div class="control-panel">
                    <button id="btn-toggle-border">Apply Rounded Shadow</button>
                </div>
            </section>

            <!-- 2. CSS3 Gradients Mapping -->
            <section>
                <h3>2. Multi-Color Gradient Transitions</h3>
                <p>Rendering color stop distributions dynamically using programmatic definitions:</p>
                <div class="preview-box" id="gradient-box">Linear Gradient Field</div>
                <div class="control-panel">
                    <button id="btn-change-gradient">Shift Gradient Angle</button>
                </div>
            </section>
        </div>

        <!-- 3. CSS3 Text Effects Modules -->
        <section>
            <h3>3. Text Overflow Controls & Word Wrapping Rules</h3>
            <p>Managing string layouts when token lengths exceed element bounds:</p>
            
            <div class="text-container">
                <h4>Text Overflow Scenario:</h4>
                <div class="overflow-demo" id="overflow-target">This is a highly comprehensive long line of text demonstrating overflow container rendering mechanics.</div>
                <button id="btn-toggle-overflow">Switch to Ellipsis (...)</button>
                
                <h4 style="margin-top:15px;">Word Wrapping Scenario (Boundary 150px):</h4>
                <div class="wrap-demo" id="wrap-target">ThisParagraphContainsAnExtremelyLongSuperWordThatExceedsContainerWidths.</div>
                <button id="btn-toggle-wrap" style="margin-top:10px;">Execute Force Break Word</button>
            </div>
        </section>
    </main>
`;

$(document).ready(function() {
    // Inject the structured style and elements code cleanly onto current view
    $("body").html(interfaceTemplate);

    // --- 1. Borders & Box Shadows Interaction ---
    let stateBorder = false;
    $("#btn-toggle-border").click(function() {
        stateBorder = !stateBorder;
        if (stateBorder) {
            $("#border-shadow-box").css({
                "border-radius": "25px 0px 25px 0px",
                "box-shadow": "10px 10px 15px rgba(103, 58, 183, 0.4)",
                "color": "#673ab7"
            });
            $(this).text("Reset Box Bounds");
        } else {
            $("#border-shadow-box").css({
                "border-radius": "0px",
                "box-shadow": "none",
                "color": "#333"
            });
            $(this).text("Apply Rounded Shadow");
        }
    });

    // --- 2. CSS3 Linear Gradients Shifting ---
    let gradientState = 0;
    $("#btn-change-gradient").click(function() {
        gradientState = (gradientState + 1) % 3;
        if (gradientState === 1) {
            $("#gradient-box").css("background", "linear-gradient(45deg, #ff5722, #ffeb3b)");
        } else if (gradientState === 2) {
            $("#gradient-box").css("background", "linear-gradient(180deg, #00ebc7, #0073e6)");
        } else {
            $("#gradient-box").css("background", "#e0e0e0");
        }
    });

    // --- 3. Text Effects Logic ---
    let ellipsisState = false;
    $("#btn-toggle-overflow").click(function() {
        ellipsisState = !ellipsisState;
        if (ellipsisState) {
            $("#overflow-target").css("text-overflow", "ellipsis");
            $(this).text("Switch to Clip");
        } else {
            $("#overflow-target").css("text-overflow", "clip");
            $(this).text("Switch to Ellipsis (...)");
        }
    });

    let wrapState = false;
    $("#btn-toggle-wrap").click(function() {
        wrapState = !wrapState;
        if (wrapState) {
            $("#wrap-target").css("word-wrap", "break-word");
            $(this).text("Reset Word Space");
        } else {
            $("#wrap-target").css("word-wrap", "normal");
            $(this).text("Execute Force Break Word");
        }
    });
});