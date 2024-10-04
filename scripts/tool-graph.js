function initToolGraphs() {
    const DEGREE_TO_RADIANS = Math.PI / 180;
    const distance = 10;

    const toolGraphs = document.getElementsByTagName("tool-graph");
    for(let graph of toolGraphs) {
        if (graph.classList.contains("flow")) {

        } else {
            // get number of centre tool nodes
            const centreNodes = graph.getElementsByClassName("centre-node");

            // get number of tool nodes, excluding centre node(s)
            const endNodes = graph.getElementsByClassName("tool-node");
            console.log(endNodes);
    
            // for each tool, set the position, translating from center and giving appropriate angle (prioritize left and right and push up and down as needed)
            const angleSpread = Math.min(60 + endNodes.length/2 * 10, 160);
            var i = 0;
            const midIndex = Math.ceil(endNodes.length/2);
            const positions = [];
            for(let node of endNodes) {
                i++;
                var angle = 0;
                if(i <= midIndex) {
                    // place node on left
                    var relativeAngle = i * (angleSpread / (midIndex + 1)); // angle in the angle window
                    angle = 180 - angleSpread/2 + relativeAngle; // get global angle
                } else {
                    // place node on right
                    var relativeAngle = (i - midIndex) * (angleSpread / (endNodes.length - midIndex + 1)); // angle in the angle window
                    angle = 0 - angleSpread/2 + relativeAngle; // get global angle
                }
                console.log("angle: " + angle);
                const dy = Math.sin(angle * DEGREE_TO_RADIANS) * distance;
                const dx = Math.cos(angle * DEGREE_TO_RADIANS) * distance;
                console.log("translate3d(calc(-50% + " + dx + "rem), calc(-50% + " + dy + "rem), 0)");
                node.style.transform = "translate3d(calc(-50% + " + dx + "rem), calc(-50% + " + dy + "rem), 0)";
                positions.push([dx, dy])
                const toolTip = node.firstElementChild;
                console.log(toolTip.tagName);
                if(toolTip != null && toolTip.tagName == "TOOL-TIP") {
                    console.log("test");
                    toolTip.classList.add(dx > 0 ? "right" : "left");
                }
            }
    
            // add curved lines to connect (same prioritization so it looks like a spider)
            // points are centre node, end node and x * 0.5 (or 0.3), y * 0.75 of the end node for the bezier curve
            const svgURL = "http://www.w3.org/2000/svg";
            const graphBackCurves = document.createElementNS(svgURL, "svg");
            graphBackCurves.setAttribute("height", 100);
            graphBackCurves.setAttribute("width", 100);
            graphBackCurves.setAttribute("viewBox", "0 0 100 100");
            const defs = document.createElementNS(svgURL, "defs");
            {
                var linearGradient = document.createElementNS(svgURL, "linearGradient");
                linearGradient.setAttribute("id", "leftLinGrad");
                var stop = document.createElementNS(svgURL, "stop");
                stop.setAttribute("offset", 0);
                stop.setAttribute("stop-color", "#f7ff00");
                linearGradient.appendChild(stop);
                stop = document.createElementNS(svgURL, "stop");
                stop.setAttribute("offset", 1);
                stop.setAttribute("stop-color", "#db36a4");
                linearGradient.appendChild(stop);
                defs.appendChild(linearGradient);
                graphBackCurves.appendChild(defs);
            }
            {
                var linearGradient = document.createElementNS(svgURL, "linearGradient");
                linearGradient.setAttribute("id", "rightLinGrad");
                var stop = document.createElementNS(svgURL, "stop");
                stop.setAttribute("offset", 0);
                stop.setAttribute("stop-color", "#db36a4");
                linearGradient.appendChild(stop);
                stop = document.createElementNS(svgURL, "stop");
                stop.setAttribute("offset", 1);
                stop.setAttribute("stop-color", "#f7ff00");
                linearGradient.appendChild(stop);
                defs.appendChild(linearGradient);
                graphBackCurves.appendChild(defs);
            }
            positions.forEach(endPosition => {
                const curve = document.createElementNS(svgURL, "path");
                if(endPosition[1] != 0) {
                    curve.setAttribute("d", "M 50 50 q " + (endPosition[0] * 0.3) + " " + (endPosition[1] * 0.75) + " " + (endPosition[0]) + " " + (endPosition[1]));
                } else {
                     // when drawing a straight horizontal line, it bugs out and doesn't render, so this is a small fix so the line is at a slight angle
                    curve.setAttribute("d", "M 50 50 l " + (endPosition[0]) + " 1E-5");
                }
                // curve.setAttribute("stroke", "grey");
                curve.setAttribute("stroke", endPosition[0] > 0 ? "url(#leftLinGrad)" : "url(#rightLinGrad)");
                curve.setAttribute("fill", "transparent");
                curve.setAttribute("stroke-width", 0.15);
                curve.setAttribute("stroke-linecap", "round");
                graphBackCurves.appendChild(curve);
            })
            graphBackCurves.style.position = "absolute";
            graphBackCurves.style.zIndex = -1;
            graphBackCurves.style.width = "100rem";
            graphBackCurves.style.height = "100rem";
            graphBackCurves.style.left = "50%";
            graphBackCurves.style.top = "50%";
            graphBackCurves.style.translate = "-50% -50%";
            graph.appendChild(graphBackCurves);
        }
    }
}
addEventListener('DOMContentLoaded', initToolGraphs, false);