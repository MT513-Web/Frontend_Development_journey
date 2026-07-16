/*
DAY 26: Canvas Vector Paths, SVG Element Renderers, and Media Event Handlers

SUMMARY:
- Generated Canvas drawing layers rendering straight path lines and hollow text components.
- Structured XML-based SVG nodes drawing scale-independent rounded rectangle borders.
- Configured programmatic interfaces tracking video media play status and duration states.
- Integrated dynamic DOM updates managing interactive client control binds.
*/

const playgroundView = `
    <style>
        body { font-family: Arial, sans-serif; margin: 30px; background: #fafafa; color: #333; }
        header { background: #0288d1; color: white; padding: 15px; border-radius: 4px; text-align: center; }
        main { display: flex; flex-direction: column; gap: 20px; margin-top: 20px; }
        .row-container { display: flex; gap: 20px; }
        section { flex: 1; background: white; padding: 20px; border: 1px solid #ddd; border-radius: 4px; }
        canvas { background: #ffffff; border: 1px solid #bbb; display: block; margin-top: 10px; }
        svg { background: #ffffff; border: 1px solid #bbb; display: block; margin-top: 10px; }
        .media-box { background: white; padding: 20px; border: 1px solid #ddd; border-radius: 4px; }
        .control-panel { margin-top: 15px; display: flex; gap: 10px; }
        button { padding: 8px 14px; cursor: pointer; border: 1px solid #0288d1; background: #e1f5fe; color: #0288d1; border-radius: 4px; font-weight: bold; }
        .badge { background: #b3e5fc; color: #01579b; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: bold; }
        #status-monitor { font-family: monospace; background: #272822; color: #f8f8f2; padding: 10px; border-radius: 4px; margin-top: 10px; }
    </style>

    <header>
        <h1>Day 26: Graphics (Canvas vs SVG) & Multimedia Sandbox</h1>
        <p>Analyzing vector calculations, scalable XML elements, and video API properties</p>
    </header>

    <main>
        <div class="row-container">
            <!-- 1. Canvas Section (JavaScript-driven graphics) -->
            <section>
                <h3>1. HTML5 Canvas Graphics</h3>
                <p>Drawing coordinates using <code>lineTo()</code> and <code>strokeText()</code>:</p>
                <canvas id="canvas-sandbox" width="350" height="150"></canvas>
                <div class="control-panel">
                    <button id="btn-draw-canvas">Draw Paths & Text</button>
                </div>
            </section>

            <!-- 2. SVG Section (DOM-driven XML graphics) -->
            <section>
                <h3>2. HTML5 SVG Graphics</h3>
                <p>Scaling a responsive, vector-based rounded rectangle element:</p>
                <svg id="svg-sandbox" width="350" height="150">
                    <!-- Standard XML circle shape element -->
                    <circle cx="60" cy="75" r="40" stroke="#0288d1" stroke-width="3" fill="#b3e5fc" />
                    <!-- Rounded rectangle element utilizing rx and ry values -->
                    <rect x="150" y="35" width="160" height="80" rx="15" ry="15" stroke="#01579b" stroke-width="4" fill="#e1f5fe" />
                </svg>
                <div class="control-panel">
                    <button id="btn-color-svg">Animate SVG Fill</button>
                </div>
            </section>
        </div>

        <!-- 3. Multimedia API Section -->
        <div class="media-box">
            <h3>3. Video Controller APIs</h3>
            <p>Evaluating standard play hooks and properties in real-time:</p>
            <video id="sandbox-video" width="400" height="200" controls style="background:#000; border-radius:4px; display:block;">
                <!-- Dummy online test video stream -->
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <div class="control-panel">
                <button id="btn-play">Play Video</button>
                <button id="btn-pause">Pause Video</button>
                <span class="badge">Autoplay: disabled</span>
            </div>
            
            <div id="status-monitor">Media Stream Status: Awaiting Action...</div>
        </div>
    </main>
`;

$(document).ready(function() {
    // Dynamically inject the complete layout string into body tag
    $("body").html(playgroundView);

    // 1. Canvas drawing sequence implementation
    $("#btn-draw-canvas").click(function() {
        const canvas = document.getElementById("canvas-sandbox");
        if (canvas) {
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, 350, 150);

            // Draw line vector pathway
            ctx.beginPath();
            ctx.strokeStyle = "#0288d1";
            ctx.lineWidth = 4;
            ctx.moveTo(10, 130);
            ctx.lineTo(340, 130);
            ctx.stroke();

            // Render hollow outline text
            ctx.font = "28px Arial";
            ctx.strokeStyle = "#01579b";
            ctx.lineWidth = 1;
            ctx.strokeText("Canvas Outline Text", 25, 65);
        }
    });

    // 2. SVG DOM manipulation action
    $("#btn-color-svg").click(function() {
        // SVG elements are XML-based, so we can access them directly using DOM selectors
        let currentFill = $("circle").attr("fill");
        if (currentFill === "#b3e5fc") {
            $("circle").attr("fill", "#ffb74d");
            $("circle").attr("stroke", "#e65100");
        } else {
            $("circle").attr("fill", "#b3e5fc");
            $("circle").attr("stroke", "#0288d1");
        }
    });

    // 3. Native Video DOM property trackers
    const videoObj = document.getElementById("sandbox-video");

    $("#btn-play").click(function() {
        if (videoObj) {
            videoObj.play(); // trigger play state
        }
    });

    $("#btn-pause").click(function() {
        if (videoObj) {
            videoObj.pause(); // trigger pause state
        }
    });

    // Binding standard media monitoring event updates
    if (videoObj) {
        $(videoObj).on("play", function() {
            $("#status-monitor").text("Media Stream Status: Playing... [Current Time: " + Math.round(videoObj.currentTime) + "s / " + Math.round(videoObj.duration) + "s]");
        });

        $(videoObj).on("pause", function() {
            $("#status-monitor").text("Media Stream Status: Paused. [Current Time: " + Math.round(videoObj.currentTime) + "s]");
        });

        $(videoObj).on("ended", function() {
            $("#status-monitor").text("Media Stream Status: Video Completed.");
        });
    }
});