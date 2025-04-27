const { Graph, parse, Sigma, EdgeCurveProgram } = SigmaJS;

const xmlString = gexf_string;

// Parse GEXF string:
const graph = parse(Graph, xmlString);

const weightThreshold = 0.11;
graph.forEachEdge((edge, attributes) => {
  if (attributes.weight < weightThreshold) {
	graph.dropEdge(edge);
  }
});

// Retrieve some useful DOM elements:
const container = document.getElementById("sigma-container");
const node_info = document.getElementById("node_info");
const combo = document.getElementById("communities");
//const zoomInBtn = document.getElementById("zoom-in");
//const zoomOutBtn = document.getElementById("zoom-out");
//const zoomResetBtn = document.getElementById("zoom-reset");
//const labelsThresholdRange = document.getElementById("labels-threshold");

// Instantiate sigma:
sigma = new Sigma(graph, container, {
minCameraRatio: 0.08,
maxCameraRatio: 3,
defaultEdgeType: "curve",
edgeProgramClasses: {
  curve: EdgeCurveProgram,
},
});


function logEvent(node) {
node_info.innerHTML = `<span>${JSON.stringify(graph.getNodeAttributes(node))}</span>`;
};

const state = { searchQuery: "", hoveredNode: undefined, hoveredNeighbors: undefined, suggestions: undefined, selectedNode: undefined, selectedCommunity: undefined};

function setHoveredNode(node) {
if (node) {
  state.hoveredNode = node;
  state.hoveredNeighbors = new Set(graph.neighbors(node));
}

if (!node) {
  state.hoveredNode = undefined;
  state.hoveredNeighbors = undefined;
}
// Refresh rendering
sigma.refresh({
  // We don't touch the graph data so we can skip its reindexation
  skipIndexation: true,
});
}

function setCommunity (value) {
	if (value == "undefined") {
		state.selectedCommunity = undefined;
	} else {
		const in_community = graph.filterNodes((node, attributes) => {
			return attributes.d2 == value;
		});
		state.selectedCommunity = new Set(in_community);
	};
	setHoveredNode(undefined);
	console.log(state.selectedCommunity);
};

// Bind graph interactions:
sigma.on("enterNode", ({ node }) => {
setHoveredNode(node);
});
sigma.on("leaveNode", () => {
setHoveredNode(undefined);
});
sigma.on("clickNode", ({node}) => {
logEvent(node);
});
combo.onchange = function () { setCommunity(combo.value); };

function rgbToRgba(rgb, alpha = 0.8) {
  return rgb.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
}

sigma.setSetting("nodeReducer", (node, data) => {
const res = { ...data };

if (state.selectedCommunity == undefined && state.hoveredNeighbors && !state.hoveredNeighbors.has(node) && state.hoveredNode !== node) {
  res.label = "";
  res.color = "rgba(100,100,100,0.45)";
}

if (state.selectedCommunity && !state.selectedCommunity.has(node)) {
  res.label = "";
  res.color = "rgba(100,100,100,0.45)";
}

if (state.selectedNode === node) {
  res.highlighted = true;
} else if (state.suggestions) {
  if (state.suggestions.has(node)) {
	res.forceLabel = true;
  } else {
	res.label = "";
	res.color = "rgba(100,100,100,0.45";
  }
}

return res;
});


sigma.setSetting("edgeReducer", (edge, data) => {
    const res = { ...data };
	  res.size = data.weight * 0.25;
	  const source_node = graph.source(edge);
	  res.color = rgbToRgba(graph.getNodeAttribute(source_node, "color"), 0.8);
    if (
	  state.selectedCommunity == undefined &&
      state.hoveredNode &&
      !graph.extremities(edge).every((n) => n === state.hoveredNode || graph.areNeighbors(n, state.hoveredNode))
    ) {
      res.hidden = true;
    }

    if (
      state.selectedCommunity &&
      (!state.selectedCommunity.has(graph.source(edge)) || !state.selectedCommunity.has(graph.target(edge)))
    ) {
      res.hidden = true;
    }

    if (
      state.suggestions &&
      (!state.suggestions.has(graph.source(edge)) || !state.suggestions.has(graph.target(edge)))
    ) {
      res.hidden = true;
    }

    return res;
  });


