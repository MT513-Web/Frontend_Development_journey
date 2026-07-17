/*
 DAY 27: Advanced Web APIs - Storage, Geolocation, and Drag & Drop

SUMMARY:
- Implemented state persistence workflows leveraging client-side localStorage engines.
- Configured native Geolocation API triggers mapping simulated coordinate pairs.
- Structured native HTML5 Drag and Drop transfer interfaces with preventDefault filters.
- Maintained decoupled UI injection blocks keeping carrier components lightweight.
*/

const systemView = `
    <style>
        body { font-family: Arial, sans-serif; margin: 30px; background: #fafafa; color: #333; }
        header { background: #673ab7; color: white; padding: 15px; border-radius: 4px; text-align: center; }
        main { display: flex; flex-direction: column; gap: 20px; margin-top: 20px; }
        .grid-box { display: flex; gap: 20px; }
        section { flex: 1; background: white; padding: 20px; border: 1px solid #ddd; border-radius: 4px; }
        .terminal { font-family: monospace; background: #272822; color: #f8f8f2; padding: 12px; border-radius: 4px; margin-top: 10px; min-height: 40px; }
        .drag-item { width: 100px; padding: 10px; background: #ff9800; color: white; text-align: center; font-weight: bold; cursor: move; border-radius: 4px; margin-bottom: 10px; }
        .drop-zone { width: 100%; height: 80px; border: 2px dashed #673ab7; background: #f3e5f5; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #673ab7; font-weight: bold; }
        button { padding: 8px 14px; cursor: pointer; border: 1px solid #673ab7; background: #f3e5f5; color: #673ab7; border-radius: 4px; font-weight: bold; margin-right: 5px; }
        .badge { background: #d1c4e9; color: #512da8; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: bold; }
    </style>

    <header>
        <h1>HTML5 Advanced APIs & Web Engine Sandbox</h1>
        <p>Testing persistence models, geolocation data-structures, and client-side background thread logic</p>
    </header>

    <main>
        <div class="grid-box">
            <!-- 1. Web LocalStorage Panel -->
            <section>
                <h3>1. Persistent LocalStorage Engine</h3>
                <p>Data stored inside client browser with no expiration limits:</p>
                <button id="btn-add-store">Increment Count</button>
                <button id="btn-clear-store">Clear Engine Data</button>
                <div class="terminal" id="storage-monitor">Current Token Value: Loading...</div>
            </section>

            <!-- 2. Geolocation API Core Tracker -->
            <section>
                <h3>2. Geolocation Positioning API</h3>
                <p>Retrieving client tracking coordinates metrics via <code>getCurrentPosition</code>:</p>
                <button id="btn-get-location">Locate Client Metrics</button>
                <div class="terminal" id="geo-monitor">Position Coordinates: Awaiting user clearance...</div>
            </section>
        </div>

        <!-- 3. Drag and Drop Architecture Layer -->
        <section>
            <h3>3. Native HTML5 Drag and Drop Protocol</h3>
            <p>Data transfer pipeline execution via tracking structures:</p>
            
            <!-- Draggable block utilizing the draggable property -->
            <div class="drag-item" id="drag-block" draggable="true">DRAG ME</div>
            
            <div class="drop-zone" id="target-zone">Drop target boundary wrapper...</div>
        </section>
    </main>
`;

$(document).ready(function() {
    // Mounting dynamic layouts onto DOM carrier node
    $("body").html(systemView);

    // --- 1. LocalStorage Logic ---
    let updateMonitor = function() {
        let currentCount = localStorage.getItem("sessionRunCount");
        if (!currentCount) {
            currentCount = 0;
        }
        $("#storage-monitor").html("<strong>Stored Value Token:</strong> " + currentCount + " <span class='badge'>Persistent state</span>");
    };

    updateMonitor(); // Initial view populate

    $("#btn-add-store").click(function() {
        let count = parseInt(localStorage.getItem("sessionRunCount")) || 0;
        localStorage.setItem("sessionRunCount", count + 1);
        updateMonitor();
    });

    $("#btn-clear-store").click(function() {
        localStorage.removeItem("sessionRunCount");
        updateMonitor();
    });

    // --- 2. Geolocation Tracking ---
    $("#btn-get-location").click(function() {
        if (navigator.geolocation) {
            $("#geo-monitor").text("Requesting hardware layer access context...");
            navigator.geolocation.getCurrentPosition(function(position) {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                $("#geo-monitor").html("<strong>Success:</strong> Latitude: " + lat + " | Longitude: " + lon);
            }, function(error) {
                $("#geo-monitor").html("<span style='color:#e53935;'>Error code triggered during validation: " + error.message + "</span>");
            });
        } else {
            $("#geo-monitor").text("Hardware coordinate extraction not supported on browser.");
        }
    });

    // --- 3. Drag and Drop Interaction Event Implementations ---
    const dragNode = document.getElementById("drag-block");
    const dropNode = document.getElementById("target-zone");

    if (dragNode && dropNode) {
        // Triggered when item begins dynamic transfer sequence
        dragNode.addEventListener("dragstart", function(ev) {
            ev.dataTransfer.setData("text/plain", ev.target.id);
            $(ev.target).css("opacity", "0.5");
        });

        dragNode.addEventListener("dragend", function(ev) {
            $(ev.target).css("opacity", "1");
        });

        // PreventDefault rule framework override to allow valid drops
        dropNode.addEventListener("dragover", function(ev) {
            ev.preventDefault();
        });

        // Appending the moving node reference safely inside layout boundaries
        dropNode.addEventListener("drop", function(ev) {
            ev.preventDefault();
            let elementId = ev.dataTransfer.getData("text/plain");
            let draggedElement = document.getElementById(elementId);
            if (draggedElement) {
                ev.target.appendChild(draggedElement);
                $(dropNode).html("").css("background", "#e8f5e9").append(draggedElement);
                console.log("DataTransfer Sync: Pipeline transaction verified successfully.");
            }
        });
    }
});