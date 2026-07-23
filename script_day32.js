/*
 DAY 32: Bootstrap 3 Components - Buttons, Groups, Icons, Progress Bars & List Groups

SUMMARY:
- Implemented Page Header and contextual button hierarchy (btn-primary, btn-success, btn-danger).
- Formatted button groups, split dropdowns, and Glyphicons integration.
- Configured dynamic animated progress bars and stacked progress layouts.
- Applied responsive pagination and badged list groups with live event triggers.
*/

const bootstrapComponentsView = `
    <div class="container" style="margin-top: 20px;">
        <!-- Clean Professional Page Header -->
        <div class="page-header">
            <h1>Bootstrap UI Components & Interactive Modules</h1>
        </div>

        <!-- 1. Buttons & Button Groups Row -->
        <div class="row">
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading"><strong>Contextual Buttons & Sizes</strong></div>
                    <div class="panel-body">
                        <p>
                            <button type="button" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-user"></span> Profile (Large)</button>
                            <button type="button" class="btn btn-success"><span class="glyphicon glyphicon-ok"></span> Save</button>
                            <button type="button" class="btn btn-warning btn-sm">Warning</button>
                            <button type="button" class="btn btn-danger btn-xs">Delete</button>
                        </p>
                        <hr>
                        <h4>Button Group & Dropdown</h4>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info"><span class="glyphicon glyphicon-cog"></span> Settings</button>
                            <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a href="#" id="action-msg"><span class="glyphicon glyphicon-envelope"></span> Send Message</a></li>
                                <li><a href="#"><span class="glyphicon glyphicon-print"></span> Print Report</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. Badged List Groups & Pagination -->
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading"><strong>List Group with Badges</strong></div>
                    <div class="panel-body">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="badge" id="badge-inbox">14</span>
                                <span class="glyphicon glyphicon-inbox"></span> Inbox Messages
                            </li>
                            <li class="list-group-item list-group-item-success">
                                <span class="badge">3</span>
                                <span class="glyphicon glyphicon-check"></span> Completed Challenges
                            </li>
                        </ul>

                        <!-- Pagination Container -->
                        <nav class="text-center">
                            <ul class="pagination pagination-sm" style="margin: 0;">
                                <li class="disabled"><a href="#">&laquo;</a></li>
                                <li class="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">&raquo;</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <!-- 3. Progress Bars Row -->
        <div class="row" style="margin-top: 10px;">
            <div class="col-md-12">
                <div class="panel panel-info">
                    <div class="panel-heading"><strong>Animated & Stacked Progress Bars</strong></div>
                    <div class="panel-body">
                        <h5>Animated Progress Bar:</h5>
                        <div class="progress">
                            <div id="dynamic-progress-bar" class="progress-bar progress-bar-striped active" role="progressbar" style="width: 45%;">
                                45% Complete
                            </div>
                        </div>

                        <h5>Stacked Progress Bar:</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" style="width: 40%">40% Success</div>
                            <div class="progress-bar progress-bar-warning" style="width: 20%">20% Warning</div>
                            <div class="progress-bar progress-bar-danger" style="width: 15%">15% Error</div>
                        </div>

                        <button class="btn btn-primary" id="btn-boost-progress"><span class="glyphicon glyphicon-flash"></span> Boost Progress Bar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

$(document).ready(function() {
    // Mount UI Markup onto body tag
    $("body").html(bootstrapComponentsView);

    // Interactive Boost Progress Handler
    let currentProgress = 45;
    $("#btn-boost-progress").click(function() {
        if (currentProgress < 100) {
            currentProgress += 15;
            if (currentProgress > 100) currentProgress = 100;
            $("#dynamic-progress-bar").css("width", currentProgress + "%").text(currentProgress + "% Complete");
            
            // Increment inbox badge count dynamically
            let currentBadge = parseInt($("#badge-inbox").text());
            $("#badge-inbox").text(currentBadge + 1);
        }
    });

    $("#action-msg").click(function(e) {
        e.preventDefault();
        alert("Dropdown Action Triggered: Sending notification message!");
    });
});