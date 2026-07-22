/*
 DAY 31: Bootstrap 3 Framework - Grid Tiers, Typography, Tables & Components

SUMMARY:
- Implemented Bootstrap 12-column grid structures using col-sm and col-md classes.
- Formatted contextual text and background color utility classes (success, info, warning, danger).
- Applied responsive tables, Bootstrap image shapes (img-circle, img-thumbnail), and Jumbotron hero banners.
- Managed dynamic event hooks verifying UI layout switches in real time.
*/

const bootstrapView = `
    <div class="container" style="margin-top: 20px;">
        <!-- Jumbotron Hero Header -->
        <div class="jumbotron text-center" style="background: #eef2f5; border-radius: 6px; padding: 30px;">
            <h1>Bootstrap 3 Framework Sandbox</h1>
            <p class="lead">Demonstrating mobile-first 12-column grids, contextual styles, and responsive UI components.</p>
            <p><a class="btn btn-primary btn-lg" id="btn-hero-action" href="#" role="button">Toggle Action Alert</a></p>
        </div>

        <!-- 1. Bootstrap Grid Layout Row -->
        <div class="row">
            <div class="col-sm-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">Col-sm-4 Component</div>
                    <div class="panel-body">
                        <p class="text-muted">Muted text line example.</p>
                        <p class="text-success"><strong>Success:</strong> Operation complete.</p>
                        <p class="text-danger"><strong>Danger:</strong> High priority error alert.</p>
                    </div>
                </div>
            </div>

            <div class="col-sm-8">
                <div class="panel panel-default">
                    <div class="panel-heading">Responsive Bootstrap Table (.table-striped .table-hover)</div>
                    <div class="panel-body table-responsive">
                        <table class="table table-striped table-hover table-bordered">
                            <thead>
                                <tr class="bg-info">
                                    <th>Tier Class</th>
                                    <th>Device Target</th>
                                    <th>Screen Bounds</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>.col-xs-*</code></td>
                                    <td>Phones</td>
                                    <td>&lt; 768px</td>
                                </tr>
                                <tr class="success">
                                    <td><code>.col-sm-*</code></td>
                                    <td>Tablets</td>
                                    <td>&ge; 768px</td>
                                </tr>
                                <tr class="warning">
                                    <td><code>.col-md-*</code></td>
                                    <td>Desktops</td>
                                    <td>&ge; 992px</td>
                                </tr>
                                <tr class="danger">
                                    <td><code>.col-lg-*</code></td>
                                    <td>Large Desktops</td>
                                    <td>&ge; 1200px</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- 2. Bootstrap Image Shapes & Helper Classes -->
        <div class="row" style="margin-top: 15px;">
            <div class="col-md-6">
                <div class="well">
                    <h4>Typography Helpers</h4>
                    <p>Highlight text using <mark>mark element</mark> tag.</p>
                    <p>Keyboard input styling: Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save changes.</p>
                    <blockquote>
                        <p>Bootstrap makes responsive web engineering simple and intuitive.</p>
                        <footer>Handout Reference - Lecture 168</footer>
                    </blockquote>
                </div>
            </div>

            <div class="col-md-6 text-center">
                <div class="well">
                    <h4>Bootstrap Styled Shapes</h4>
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="bg-primary" style="padding: 15px; border-radius: 4px; color: white;">
                                <code>.img-rounded</code> / Rounded Box
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <div class="bg-success" style="padding: 15px; border-radius: 50%; color: white; width: 100px; height: 100px; line-height: 70px; margin: 0 auto;">
                                Circle
                            </div>
                        </div>
                    </div>
                    <div id="dynamic-alert-box" style="margin-top: 15px; display: none;" class="alert alert-warning alert-dismissible" role="alert">
                        <button type="button" class="close" id="btn-close-alert"><span>&times;</span></button>
                        <strong>Alert Hook Triggered!</strong> Dynamic Bootstrap context successfully updated.
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

$(document).ready(function() {
    // Mount Bootstrap Layout cleanly onto the DOM
    $("body").html(bootstrapView);

    // Dynamic Bootstrap UI triggers
    $("#btn-hero-action").click(function(e) {
        e.preventDefault();
        $("#dynamic-alert-box").slideToggle();
    });

    $("#btn-close-alert").click(function() {
        $("#dynamic-alert-box").slideUp();
    });
});