/*

DAY 24: HTML5 Semantic Elements, Input Forms, and Migration Modeling

SUMMARY:
- Implemented core HTML5 structural templates using tags like header, nav, and article.
- Integrated modern form components testing number, color, range inputs and output elements.
- Simulated HTML4 to HTML5 migration behaviors transforming nested divs to semantic elements.
- Maintained lightweight container hooks for interactive DOM manipulation.
*/

const semanticLayout = `
    <style>
        body { font-family: Arial, sans-serif; margin: 30px; background: #fafafa; color: #333; }
        header { background: #007acc; color: white; padding: 15px; border-radius: 4px; text-align: center; }
        nav { background: #333; margin: 10px 0; padding: 10px; border-radius: 4px; }
        nav a { color: white; margin-right: 15px; text-decoration: none; font-weight: bold; }
        main { display: flex; gap: 20px; margin-top: 15px; }
        article { flex: 3; background: white; padding: 20px; border: 1px solid #ddd; border-radius: 4px; }
        aside { flex: 1; background: #eef2f5; padding: 15px; border: 1px solid #ccc; border-radius: 4px; }
        section { margin-top: 15px; background: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 4px; }
        footer { margin-top: 25px; padding: 10px; background: #222; color: #ccc; text-align: center; font-size: 12px; border-radius: 4px; }
        .interactive-form { margin-top: 10px; }
        label { display: block; margin: 8px 0 4px; font-weight: bold; }
        input { padding: 6px; width: 100%; max-width: 250px; border: 1px solid #ccc; border-radius: 4px; }
        input[type="range"] { padding: 0; }
        .badge { background: #e1f5fe; color: #0288d1; padding: 3px 8px; border-radius: 12px; font-size: 12px; display: inline-block; margin-top: 5px; }
    </style>

    <!-- HTML5 Semantic Layout Structure -->
    <header>
        <h1>HTML5 Semantics & Form Controls Dashboard</h1>
        <p>Demonstrating clean structural components migration and modern elements APIs</p>
    </header>

    <nav>
        <a href="#">Semantics</a>
        <a href="#">Interactive Elements</a>
        <a href="#">Migration</a>
    </nav>

    <main>
        <article>
            <h2>Modern Article Node</h2>
            <p>This section displays standalone and independent content. Excellent for blogs, articles, or news layouts!</p>
            
            <section>
                <h3>HTML5 Dynamic Slider and Calculation</h3>
                <div class="interactive-form">
                    <label for="price-slider">Change Range Price ($):</label>
                    <input type="range" id="price-slider" min="10" max="100" value="35">
                    <br><br>
                    <span class="badge" id="slider-output">Current Calculated Output: $35</span>
                </div>
            </section>
        </article>

        <aside>
            <h3>Sidebar Context (Aside)</h3>
            <p>Contains tangential information separate from the article stream.</p>
            <label for="color-picker">Dynamic Theme Color:</label>
            <input type="color" id="color-picker" value="#007acc">
        </aside>
    </main>

    <footer>
        <p>© 2026 Virtual University Web Application Challenge. Handout Elements Verified.</p>
    </footer>
`;

$(document).ready(function() {
    // Mount structured semantic markup elements to the DOM
    $("body").html(semanticLayout);

    // 1. Dynamic slider change mapping
    $("#price-slider").on("input", function() {
        let currentVal = $(this).val();
        $("#slider-output").text("Current Calculated Output: $" + currentVal);
    });

    // 2. Realtime style modifications using new input type color
    $("#color-picker").on("input", function() {
        let pickedColor = $(this).val();
        $("header").css("background-color", pickedColor);
    });
});