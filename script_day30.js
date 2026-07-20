/*
 DAY 30: Responsive Web Design (RWD) - Viewports, Grid Systems, and Media Queries

SUMMARY:
- Applied global box-sizing rules enforcing standardized border-box boundary calculations.
- Configured programmatic 12-column fluid responsive grid class distributions.
- Structured CSS3 @media query condition sets tracking real-time layout breakpoint shifts.
- Maintained lightweight dynamic view rendering using clear programmatic hooks.
*/

const responsiveLayout = `
    <style>
        /* 1. Universal Box-Sizing Fix */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body { font-family: Arial, sans-serif; background: #fafafa; padding: 20px; color: #333; }
        
        header { background: #009688; color: white; padding: 20px; text-align: center; border-radius: 4px; margin-bottom: 20px; }
        
        /* Clearfix Rule layout wrapper */
        .row::after { content: ""; clear: both; display: block; }
        
        /* 2. Grid System Base Definition */
        [class*="col-"] { float: left; padding: 15px; border: 1px solid #fff; text-align: center; font-weight: bold; color: white; }
        
        /* Mobile First Default: Full width columns */
        .col-1, .col-2, .col-3, .col-4, .col-6, .col-12 { width: 100%; background-color: #e91e63; margin-bottom: 10px; border-radius: 4px; }
        
        .main-content { background-color: #03a9f4 !important; min-height: 120px; display: flex; align-items: center; justify-content: center; }
        .sidebar-content { background-color: #9c27b0 !important; min-height: 120px; display: flex; align-items: center; justify-content: center; }
        
        .monitor-panel { background: #272822; color: #f8f8f2; font-family: monospace; padding: 15px; border-radius: 4px; margin-top: 20px; }
        .badge { background: #b2dfdb; color: #004d40; padding: 3px 8px; border-radius: 12px; font-size: 12px; display: inline-block; margin-bottom: 5px; }

        /* 3. CSS3 Media Queries for Tablets and Desktops */
        @media only screen and (min-width: 600px) {
            /* Tablet scaling rules (e.g. 50% width columns) */
            .col-m-6 { width: 50%; }
            .col-m-12 { width: 100%; }
            [class*="col-"] { background-color: #ff9800; }
        }
        
        @media only screen and (min-width: 768px) {
            /* Desktop structural scale: 12 Column Math percentage splits */
            .col-3 { width: 25%; }
            .col-9 { width: 75%; }
            .col-12 { width: 100%; }
            [class*="col-"] { background-color: #03a9f4; }
            .sidebar-content { background-color: #9c27b0 !important; }
        }
    </style>

    <header>
        <h1>Responsive Web Design & 12-Column Grid Engine</h1>
        <p>Testing viewport scales, clearfix bounds, fluid column percentages, and Media Query breakpoints</p>
    </header>

    <main>
        <!-- Standard Row Element Wrapper -->
        <div class="row">
            <div class="col-12">
                <span class="badge">Component 1</span>
                <div>Top Navigation Banner Block (col-12)</div>
            </div>
        </div>

        <div class="row">
            <!-- Sidebar: Takes 3 columns on desktop, adapts on mobile -->
            <div class="col-3 col-m-6 sidebar-content">
                <div>Sidebar Node (col-3)</div>
            </div>
            
            <!-- Main Feed Content: Takes 9 columns on desktop -->
            <div class="col-9 col-m-6 main-content">
                <div>Main Adaptive Grid Viewport Node (col-9)</div>
            </div>
        </div>

        <!-- Layout Client Telemetry Console -->
        <div class="monitor-panel">
            <h3>Viewport Live Breakpoint Tracker</h3>
            <hr style="border:0; border-top:1px solid #444; margin:10px 0;">
            <div id="screen-telemetry">Current Window Metrics: Initializing calculation layers...</div>
        </div>
    </main>
`;

$(document).ready(function() {
    // Mount the fluid grid structure safely inside the layout frame
    $("body").html(responsiveLayout);

    // Dynamic scale event tracking function
    function runMetricsTrace() {
        let currentWidth = $(window).width();
        let deviceTier = "Mobile Layout Viewport";
        
        if (currentWidth >= 768) {
            deviceTier = "Desktop Grid Mode Active [Trigger Target: min-width: 768px]";
        } else if (currentWidth >= 600) {
            deviceTier = "Tablet Grid Mode Active [Trigger Target: min-width: 600px]";
        }
        
        $("#screen-telemetry").html("<strong>Operational Metrics:</strong> Width: " + currentWidth + "px | <strong>Active Tier:</strong> " + deviceTier);
    }

    // Initialize layout status on mount
    runMetricsTrace();

    // Bind real-time window tracking resize telemetry
    $(window).on("resize", function() {
        runMetricsTrace();
    });
});