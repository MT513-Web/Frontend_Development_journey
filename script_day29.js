/*
 DAY 29: CSS3 Advanced Styling - Transforms, Transitions, Animations & Multi-Columns

SUMMARY:
- Implemented high-performance 2D translate, scale, and rotate transformations.
- Formatted smooth CSS3 transitions utilizing specific linear and ease duration metrics.
- Structured keyframes injection frameworks triggering dynamic infinite animation loops.
- Applied responsive column layouts managing column-count, gaps, and borders.
*/

const playgroundTemplate = `
    <style>
        body { font-family: Arial, sans-serif; margin: 30px; background: #fafafa; color: #333; }
        header { background: linear-gradient(135deg, #e91e63, #ff5722); color: white; padding: 15px; border-radius: 4px; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        main { display: flex; flex-direction: column; gap: 25px; margin-top: 25px; }
        .row-grid { display: flex; gap: 20px; }
        section { flex: 1; background: white; padding: 20px; border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        
        /* 1. Transform Box Base Setup */
        .box-container { height: 120px; display: flex; align-items: center; justify-content: center; background: #f5f5f5; border: 1px dashed #ccc; margin-top: 10px; }
        .transform-box { width: 80px; height: 80px; background: #e91e63; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; transition: transform 0.4s ease; border-radius: 4px; }
        
        /* 2. Transition Box Setup */
        .transition-box { width: 100px; height: 60px; background: #ff5722; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; border-radius: 4px; margin-top: 15px; transition: width 2s linear, background-color 2s ease; }
        .transition-box:hover { width: 100%; background-color: #9c27b0; }

        /* 3. Animation Framework Injector */
        .animation-box { width: 70px; height: 70px; background: #4caf50; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; border-radius: 4px; margin-top: 15px; position: relative; }
        .active-animation { animation-name: enginePulse; animation-duration: 4s; animation-iteration-count: infinite; animation-direction: alternate; }
        
        @keyframes enginePulse {
            0% { background-color: #4caf50; left: 0px; transform: scale(1); }
            50% { background-color: #ffeb3b; color: #333; transform: scale(1.15); }
            100% { background-color: #00bcd4; left: 120px; transform: scale(1) rotate(180deg); }
        }

        /* 4. Multi Column Layout Baseline */
        .news-columns { column-count: 3; column-gap: 30px; column-rule: 3px solid #ff5722; padding: 10px; background: #fffbf9; border: 1px solid #ffe0b2; margin-top: 12px; text-align: justify; }
        .news-columns h2 { column-span: all; text-align: center; color: #e91e63; margin-top: 0; }

        .control-panel { margin-top: 12px; display: flex; gap: 6px; }
        button { padding: 6px 12px; cursor: pointer; border: 1px solid #e91e63; background: #fce4ec; color: #c2185b; border-radius: 4px; font-weight: bold; font-size: 12px; }
    </style>

    <header>
        <h1>CSS3 Dynamic Motion & Layout Processing Engine</h1>
        <p>Testing hardware translation vectors, matrix rotation states, runtime keyframes, and multi-column document trees</p>
    </header>

    <main>
        <div class="row-grid">
            <!-- 1. CSS3 Transforms Control Section -->
            <section>
                <h3>1. 2D Transformation Vectors</h3>
                <p>Altering orientation states dynamically via style declarations:</p>
                <div class="box-container">
                    <div class="transform-box" id="target-2d-box">Box Node</div>
                </div>
                <div class="control-panel">
                    <button id="btn-rotate-2d">Rotate 35°</button>
                    <button id="btn-scale-2d">Scale 1.25x</button>
                    <button id="btn-reset-2d">Reset Axis</button>
                </div>
            </section>

            <!-- 2. CSS3 Transitions Layer -->
            <section>
                <h3>2. Property Transitions Curve</h3>
                <p>Hover cursor inside element boundaries to trigger linear scale interpolation filters:</p>
                <div class="transition-box">Hover Me</div>
            </section>
        </div>

        <div class="row-grid">
            <!-- 3. Keyframes Infinite Animation Sandbox -->
            <section>
                <h3>3. Runtime Keyframe Iterations</h3>
                <p>Simulating asynchronous multi-property background render loops:</p>
                <div class="box-container" style="justify-content: flex-start; padding-left:15px;">
                    <div class="animation-box" id="target-anim-box">Loop</div>
                </div>
                <div class="control-panel">
                    <button id="btn-start-anim">Toggle Infinite Loop</button>
                </div>
            </section>

            <!-- 4. Newspaper Multi Column Document Tree -->
            <section>
                <h3>4. Multi-Column Structure Layout</h3>
                <p>Distributing single paragraph streams cleanly across independent layout nodes:</p>
                <div class="news-columns">
                    <h2>Global Typography Header</h2>
                    Web application interfaces leverage multi-column formatting to deliver clean reading experiences on digital screens. This dynamic structural approach allows large text fragments to distribute evenly across predefined grids automatically. Developers can easily configure gaps, dividing rules, and exact column spans to keep document structures lightweight.
                </div>
            </section>
        </div>
    </main>
`;

$(document).ready(function() {
    // Inject the visual structure onto current carrier tree
    $("body").html(playgroundTemplate);

    // --- 1. Transform Matrix Operations ---
    $("#btn-rotate-2d").click(function() {
        $("#target-2d-box").css("transform", "rotate(35deg)");
    });

    $("#btn-scale-2d").click(function() {
        $("#target-2d-box").css("transform", "scale(1.25)");
    });

    $("#btn-reset-2d").click(function() {
        $("#target-2d-box").css("transform", "none");
    });

    // --- 3. Animation State Toggle Hooks ---
    $("#btn-start-anim").click(function() {
        $("#target-anim-box").toggleClass("active-animation");
        if ($("#target-anim-box").hasClass("active-animation")) {
            $(this).text("Kill Rendering Loop");
        } else {
            $(this).text("Toggle Infinite Loop");
        }
    });
});