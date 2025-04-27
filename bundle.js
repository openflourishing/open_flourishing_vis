(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SigmaJS = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Graph = require("graphology");
const { parse } = require("graphology-gexf/browser");
const Sigma = require("sigma").default;
const EdgeCurveProgram = require("@sigma/edge-curve").default;

module.exports = {
  Graph,
  parse,
  Sigma,
  EdgeCurveProgram,
};
},{"@sigma/edge-curve":3,"graphology":15,"graphology-gexf/browser":6,"sigma":28}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rendering = require('sigma/rendering');
var utils = require('sigma/utils');

function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}

function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

function getCurvePoint(t, p0, p1, p2) {
  var x = Math.pow(1 - t, 2) * p0.x + 2 * (1 - t) * t * p1.x + Math.pow(t, 2) * p2.x;
  var y = Math.pow(1 - t, 2) * p0.y + 2 * (1 - t) * t * p1.y + Math.pow(t, 2) * p2.y;
  return {
    x: x,
    y: y
  };
}
function getCurveLength(p0, p1, p2) {
  var steps = 20;
  var length = 0;
  var lastPoint = p0;
  for (var i = 0; i < steps; i++) {
    var point = getCurvePoint((i + 1) / steps, p0, p1, p2);
    length += Math.sqrt(Math.pow(lastPoint.x - point.x, 2) + Math.pow(lastPoint.y - point.y, 2));
    lastPoint = point;
  }
  return length;
}
function createDrawCurvedEdgeLabel(_ref) {
  var curvatureAttribute = _ref.curvatureAttribute,
    defaultCurvature = _ref.defaultCurvature,
    _ref$keepLabelUpright = _ref.keepLabelUpright,
    keepLabelUpright = _ref$keepLabelUpright === void 0 ? true : _ref$keepLabelUpright;
  return function (context, edgeData, sourceData, targetData, settings) {
    var size = settings.edgeLabelSize,
      curvature = edgeData[curvatureAttribute] || defaultCurvature,
      font = settings.edgeLabelFont,
      weight = settings.edgeLabelWeight,
      color = settings.edgeLabelColor.attribute ? edgeData[settings.edgeLabelColor.attribute] || settings.edgeLabelColor.color || "#000" : settings.edgeLabelColor.color;
    var label = edgeData.label;
    if (!label) return;
    context.fillStyle = color;
    context.font = "".concat(weight, " ").concat(size, "px ").concat(font);

    // Computing positions without considering nodes sizes:
    var ltr = !keepLabelUpright || sourceData.x < targetData.x;
    var sourceX = ltr ? sourceData.x : targetData.x;
    var sourceY = ltr ? sourceData.y : targetData.y;
    var targetX = ltr ? targetData.x : sourceData.x;
    var targetY = ltr ? targetData.y : sourceData.y;
    var centerX = (sourceX + targetX) / 2;
    var centerY = (sourceY + targetY) / 2;
    var diffX = targetX - sourceX;
    var diffY = targetY - sourceY;
    var diff = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    // Anchor point:
    var orientation = ltr ? 1 : -1;
    var anchorX = centerX + diffY * curvature * orientation;
    var anchorY = centerY - diffX * curvature * orientation;

    // Adapt curve points to edge thickness:
    var offset = edgeData.size * 0.7 + 5;
    var sourceOffsetVector = {
      x: anchorY - sourceY,
      y: -(anchorX - sourceX)
    };
    var sourceOffsetVectorLength = Math.sqrt(Math.pow(sourceOffsetVector.x, 2) + Math.pow(sourceOffsetVector.y, 2));
    var targetOffsetVector = {
      x: targetY - anchorY,
      y: -(targetX - anchorX)
    };
    var targetOffsetVectorLength = Math.sqrt(Math.pow(targetOffsetVector.x, 2) + Math.pow(targetOffsetVector.y, 2));
    sourceX += offset * sourceOffsetVector.x / sourceOffsetVectorLength;
    sourceY += offset * sourceOffsetVector.y / sourceOffsetVectorLength;
    targetX += offset * targetOffsetVector.x / targetOffsetVectorLength;
    targetY += offset * targetOffsetVector.y / targetOffsetVectorLength;
    // For anchor, the vector is simpler, so it is inlined:
    anchorX += offset * diffY / diff;
    anchorY -= offset * diffX / diff;

    // Compute curve length:
    var anchorPoint = {
      x: anchorX,
      y: anchorY
    };
    var sourcePoint = {
      x: sourceX,
      y: sourceY
    };
    var targetPoint = {
      x: targetX,
      y: targetY
    };
    var curveLength = getCurveLength(sourcePoint, anchorPoint, targetPoint);
    if (curveLength < sourceData.size + targetData.size) return;

    // Handling ellipsis
    var textLength = context.measureText(label).width;
    var availableTextLength = curveLength - sourceData.size - targetData.size;
    if (textLength > availableTextLength) {
      var ellipsis = "…";
      label = label + ellipsis;
      textLength = context.measureText(label).width;
      while (textLength > availableTextLength && label.length > 1) {
        label = label.slice(0, -2) + ellipsis;
        textLength = context.measureText(label).width;
      }
      if (label.length < 4) return;
    }

    // Measure each character:
    var charactersLengthCache = {};
    for (var i = 0, length = label.length; i < length; i++) {
      var character = label[i];
      if (!charactersLengthCache[character]) {
        charactersLengthCache[character] = context.measureText(character).width * (1 + curvature * 0.35);
      }
    }

    // Draw each character:
    var t = 0.5 - textLength / curveLength / 2;
    for (var _i = 0, _length = label.length; _i < _length; _i++) {
      var _character = label[_i];
      var point = getCurvePoint(t, sourcePoint, anchorPoint, targetPoint);
      var tangentX = 2 * (1 - t) * (anchorX - sourceX) + 2 * t * (targetX - anchorX);
      var tangentY = 2 * (1 - t) * (anchorY - sourceY) + 2 * t * (targetY - anchorY);
      var angle = Math.atan2(tangentY, tangentX);
      context.save();
      context.translate(point.x, point.y);
      context.rotate(angle);

      // Dessiner le caractère
      context.fillText(_character, 0, 0);
      context.restore();
      t += charactersLengthCache[_character] / curveLength;
    }
  };
}

function getFragmentShader(_ref) {
  var arrowHead = _ref.arrowHead;
  var hasTargetArrowHead = (arrowHead === null || arrowHead === void 0 ? void 0 : arrowHead.extremity) === "target" || (arrowHead === null || arrowHead === void 0 ? void 0 : arrowHead.extremity) === "both";
  var hasSourceArrowHead = (arrowHead === null || arrowHead === void 0 ? void 0 : arrowHead.extremity) === "source" || (arrowHead === null || arrowHead === void 0 ? void 0 : arrowHead.extremity) === "both";

  // language=GLSL
  var SHADER = /*glsl*/"\nprecision highp float;\n\nvarying vec4 v_color;\nvarying float v_thickness;\nvarying float v_feather;\nvarying vec2 v_cpA;\nvarying vec2 v_cpB;\nvarying vec2 v_cpC;\n".concat(hasTargetArrowHead ? "\nvarying float v_targetSize;\nvarying vec2 v_targetPoint;" : "", "\n").concat(hasSourceArrowHead ? "\nvarying float v_sourceSize;\nvarying vec2 v_sourcePoint;" : "", "\n").concat(arrowHead ? "\nuniform float u_lengthToThicknessRatio;\nuniform float u_widenessToThicknessRatio;" : "", "\n\nfloat det(vec2 a, vec2 b) {\n  return a.x * b.y - b.x * a.y;\n}\n\nvec2 getDistanceVector(vec2 b0, vec2 b1, vec2 b2) {\n  float a = det(b0, b2), b = 2.0 * det(b1, b0), d = 2.0 * det(b2, b1);\n  float f = b * d - a * a;\n  vec2 d21 = b2 - b1, d10 = b1 - b0, d20 = b2 - b0;\n  vec2 gf = 2.0 * (b * d21 + d * d10 + a * d20);\n  gf = vec2(gf.y, -gf.x);\n  vec2 pp = -f * gf / dot(gf, gf);\n  vec2 d0p = b0 - pp;\n  float ap = det(d0p, d20), bp = 2.0 * det(d10, d0p);\n  float t = clamp((ap + bp) / (2.0 * a + b + d), 0.0, 1.0);\n  return mix(mix(b0, b1, t), mix(b1, b2, t), t);\n}\n\nfloat distToQuadraticBezierCurve(vec2 p, vec2 b0, vec2 b1, vec2 b2) {\n  return length(getDistanceVector(b0 - p, b1 - p, b2 - p));\n}\n\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float dist = distToQuadraticBezierCurve(gl_FragCoord.xy, v_cpA, v_cpB, v_cpC);\n  float thickness = v_thickness;\n").concat(hasTargetArrowHead ? "\n  float distToTarget = length(gl_FragCoord.xy - v_targetPoint);\n  float targetArrowLength = v_targetSize + thickness * u_lengthToThicknessRatio;\n  if (distToTarget < targetArrowLength) {\n    thickness = (distToTarget - v_targetSize) / (targetArrowLength - v_targetSize) * u_widenessToThicknessRatio * thickness;\n  }" : "", "\n").concat(hasSourceArrowHead ? "\n  float distToSource = length(gl_FragCoord.xy - v_sourcePoint);\n  float sourceArrowLength = v_sourceSize + thickness * u_lengthToThicknessRatio;\n  if (distToSource < sourceArrowLength) {\n    thickness = (distToSource - v_sourceSize) / (sourceArrowLength - v_sourceSize) * u_widenessToThicknessRatio * thickness;\n  }" : "", "\n\n  float halfThickness = thickness / 2.0;\n  if (dist < halfThickness) {\n    #ifdef PICKING_MODE\n    gl_FragColor = v_color;\n    #else\n    float t = smoothstep(\n      halfThickness - v_feather,\n      halfThickness,\n      dist\n    );\n\n    gl_FragColor = mix(v_color, transparent, t);\n    #endif\n  } else {\n    gl_FragColor = transparent;\n  }\n}\n");
  return SHADER;
}

function getVertexShader(_ref) {
  var arrowHead = _ref.arrowHead;
  var hasTargetArrowHead = (arrowHead === null || arrowHead === void 0 ? void 0 : arrowHead.extremity) === "target" || (arrowHead === null || arrowHead === void 0 ? void 0 : arrowHead.extremity) === "both";
  var hasSourceArrowHead = (arrowHead === null || arrowHead === void 0 ? void 0 : arrowHead.extremity) === "source" || (arrowHead === null || arrowHead === void 0 ? void 0 : arrowHead.extremity) === "both";

  // language=GLSL
  var SHADER = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute float a_direction;\nattribute float a_thickness;\nattribute vec2 a_source;\nattribute vec2 a_target;\nattribute float a_current;\nattribute float a_curvature;\n".concat(hasTargetArrowHead ? "attribute float a_targetSize;\n" : "", "\n").concat(hasSourceArrowHead ? "attribute float a_sourceSize;\n" : "", "\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform vec2 u_dimensions;\nuniform float u_minEdgeThickness;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying float v_thickness;\nvarying float v_feather;\nvarying vec2 v_cpA;\nvarying vec2 v_cpB;\nvarying vec2 v_cpC;\n").concat(hasTargetArrowHead ? "\nvarying float v_targetSize;\nvarying vec2 v_targetPoint;" : "", "\n").concat(hasSourceArrowHead ? "\nvarying float v_sourceSize;\nvarying vec2 v_sourcePoint;" : "", "\n").concat(arrowHead ? "\nuniform float u_widenessToThicknessRatio;" : "", "\n\nconst float bias = 255.0 / 254.0;\nconst float epsilon = 0.7;\n\nvec2 clipspaceToViewport(vec2 pos, vec2 dimensions) {\n  return vec2(\n    (pos.x + 1.0) * dimensions.x / 2.0,\n    (pos.y + 1.0) * dimensions.y / 2.0\n  );\n}\n\nvec2 viewportToClipspace(vec2 pos, vec2 dimensions) {\n  return vec2(\n    pos.x / dimensions.x * 2.0 - 1.0,\n    pos.y / dimensions.y * 2.0 - 1.0\n  );\n}\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  // Selecting the correct position\n  // Branchless \"position = a_source if a_current == 1.0 else a_target\"\n  vec2 position = a_source * max(0.0, a_current) + a_target * max(0.0, 1.0 - a_current);\n  position = (u_matrix * vec3(position, 1)).xy;\n\n  vec2 source = (u_matrix * vec3(a_source, 1)).xy;\n  vec2 target = (u_matrix * vec3(a_target, 1)).xy;\n\n  vec2 viewportPosition = clipspaceToViewport(position, u_dimensions);\n  vec2 viewportSource = clipspaceToViewport(source, u_dimensions);\n  vec2 viewportTarget = clipspaceToViewport(target, u_dimensions);\n\n  vec2 delta = viewportTarget.xy - viewportSource.xy;\n  float len = length(delta);\n  vec2 normal = vec2(-delta.y, delta.x) * a_direction;\n  vec2 unitNormal = normal / len;\n  float boundingBoxThickness = len * a_curvature;\n\n  float curveThickness = max(minThickness, a_thickness / u_sizeRatio);\n  v_thickness = curveThickness * u_pixelRatio;\n  v_feather = u_feather;\n\n  v_cpA = viewportSource;\n  v_cpB = 0.5 * (viewportSource + viewportTarget) + unitNormal * a_direction * boundingBoxThickness;\n  v_cpC = viewportTarget;\n\n  vec2 viewportOffsetPosition = (\n    viewportPosition +\n    unitNormal * (boundingBoxThickness / 2.0 + sign(boundingBoxThickness) * (").concat(arrowHead ? "curveThickness * u_widenessToThicknessRatio" : "curveThickness", " + epsilon)) *\n    max(0.0, a_direction) // NOTE: cutting the bounding box in half to avoid overdraw\n  );\n\n  position = viewportToClipspace(viewportOffsetPosition, u_dimensions);\n  gl_Position = vec4(position, 0, 1);\n    \n").concat(hasTargetArrowHead ? "\n  v_targetSize = a_targetSize * u_pixelRatio / u_sizeRatio;\n  v_targetPoint = viewportTarget;\n" : "", "\n").concat(hasSourceArrowHead ? "\n  v_sourceSize = a_sourceSize * u_pixelRatio / u_sizeRatio;\n  v_sourcePoint = viewportSource;\n" : "", "\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n");
  return SHADER;
}

var DEFAULT_EDGE_CURVATURE = 0.25;
var DEFAULT_EDGE_CURVE_PROGRAM_OPTIONS = {
  arrowHead: null,
  curvatureAttribute: "curvature",
  defaultCurvature: DEFAULT_EDGE_CURVATURE
};

/**
 * This function helps to identify parallel edges, to adjust their curvatures.
 */
var DEFAULT_INDEX_PARALLEL_EDGES_OPTIONS = {
  edgeIndexAttribute: "parallelIndex",
  edgeMinIndexAttribute: "parallelMinIndex",
  edgeMaxIndexAttribute: "parallelMaxIndex"
};
function indexParallelEdgesIndex(graph, options) {
  var opts = _objectSpread2(_objectSpread2({}, DEFAULT_INDEX_PARALLEL_EDGES_OPTIONS), options || {});
  var nodeIDsMapping = {};
  var edgeDirectedIDsMapping = {};
  var edgeUndirectedIDsMapping = {};

  // Normalize IDs:
  var incr = 0;
  graph.forEachNode(function (node) {
    nodeIDsMapping[node] = ++incr + "";
  });
  graph.forEachEdge(function (edge, _attrs, source, target) {
    var sourceId = nodeIDsMapping[source];
    var targetId = nodeIDsMapping[target];
    var directedId = [sourceId, targetId].join("-");
    edgeDirectedIDsMapping[edge] = directedId;
    edgeUndirectedIDsMapping[directedId] = [sourceId, targetId].sort().join("-");
  });

  // Index edge unique IDs, only based on their extremities:
  var directedIndex = {};
  var undirectedIndex = {};
  graph.forEachEdge(function (edge) {
    var directedId = edgeDirectedIDsMapping[edge];
    var undirectedId = edgeUndirectedIDsMapping[directedId];
    directedIndex[directedId] = directedIndex[directedId] || [];
    directedIndex[directedId].push(edge);
    undirectedIndex[undirectedId] = undirectedIndex[undirectedId] || [];
    undirectedIndex[undirectedId].push(edge);
  });

  // Store index attributes:
  for (var directedId in directedIndex) {
    var edges = directedIndex[directedId];
    var directedCount = edges.length;
    var undirectedCount = undirectedIndex[edgeUndirectedIDsMapping[directedId]].length;

    // If the edge is alone, in both side:
    if (directedCount === 1 && undirectedCount === 1) {
      var edge = edges[0];
      graph.setEdgeAttribute(edge, opts.edgeIndexAttribute, null);
      graph.setEdgeAttribute(edge, opts.edgeMaxIndexAttribute, null);
    }

    // If the edge is alone, but there is at least one edge in the opposite direction:
    else if (directedCount === 1) {
      var _edge = edges[0];
      graph.setEdgeAttribute(_edge, opts.edgeIndexAttribute, 1);
      graph.setEdgeAttribute(_edge, opts.edgeMaxIndexAttribute, 1);
    }

    // If the edge is not alone, and all edges are in the same direction:
    else if (directedCount === undirectedCount) {
      var max = (directedCount - 1) / 2;
      var min = -max;
      for (var i = 0; i < directedCount; i++) {
        var _edge2 = edges[i];
        var edgeIndex = -(directedCount - 1) / 2 + i;
        graph.setEdgeAttribute(_edge2, opts.edgeIndexAttribute, edgeIndex);
        graph.setEdgeAttribute(_edge2, opts.edgeMinIndexAttribute, min);
        graph.setEdgeAttribute(_edge2, opts.edgeMaxIndexAttribute, max);
      }
    }

    // If the edge is not alone, and there are edges in both directions:
    else {
      for (var _i = 0; _i < directedCount; _i++) {
        var _edge3 = edges[_i];
        graph.setEdgeAttribute(_edge3, opts.edgeIndexAttribute, _i + 1);
        graph.setEdgeAttribute(_edge3, opts.edgeMaxIndexAttribute, directedCount);
      }
    }
  }
}

var _WebGLRenderingContex = WebGLRenderingContext,
  UNSIGNED_BYTE = _WebGLRenderingContex.UNSIGNED_BYTE,
  FLOAT = _WebGLRenderingContex.FLOAT;
function createEdgeCurveProgram(inputOptions) {
  var options = _objectSpread2(_objectSpread2({}, DEFAULT_EDGE_CURVE_PROGRAM_OPTIONS), inputOptions || {});
  var _ref = options,
    arrowHead = _ref.arrowHead,
    curvatureAttribute = _ref.curvatureAttribute,
    drawLabel = _ref.drawLabel;
  var hasTargetArrowHead = (arrowHead === null || arrowHead === void 0 ? void 0 : arrowHead.extremity) === "target" || (arrowHead === null || arrowHead === void 0 ? void 0 : arrowHead.extremity) === "both";
  var hasSourceArrowHead = (arrowHead === null || arrowHead === void 0 ? void 0 : arrowHead.extremity) === "source" || (arrowHead === null || arrowHead === void 0 ? void 0 : arrowHead.extremity) === "both";
  var UNIFORMS = ["u_matrix", "u_sizeRatio", "u_dimensions", "u_pixelRatio", "u_feather", "u_minEdgeThickness"].concat(_toConsumableArray(arrowHead ? ["u_lengthToThicknessRatio", "u_widenessToThicknessRatio"] : []));
  return /*#__PURE__*/function (_EdgeProgram) {
    _inherits(EdgeCurveProgram, _EdgeProgram);
    function EdgeCurveProgram() {
      var _this;
      _classCallCheck(this, EdgeCurveProgram);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _callSuper(this, EdgeCurveProgram, [].concat(args));
      _defineProperty(_assertThisInitialized(_this), "drawLabel", drawLabel || createDrawCurvedEdgeLabel(options));
      return _this;
    }
    _createClass(EdgeCurveProgram, [{
      key: "getDefinition",
      value: function getDefinition() {
        return {
          VERTICES: 6,
          VERTEX_SHADER_SOURCE: getVertexShader(options),
          FRAGMENT_SHADER_SOURCE: getFragmentShader(options),
          METHOD: WebGLRenderingContext.TRIANGLES,
          UNIFORMS: UNIFORMS,
          ATTRIBUTES: [{
            name: "a_source",
            size: 2,
            type: FLOAT
          }, {
            name: "a_target",
            size: 2,
            type: FLOAT
          }].concat(_toConsumableArray(hasTargetArrowHead ? [{
            name: "a_targetSize",
            size: 1,
            type: FLOAT
          }] : []), _toConsumableArray(hasSourceArrowHead ? [{
            name: "a_sourceSize",
            size: 1,
            type: FLOAT
          }] : []), [{
            name: "a_thickness",
            size: 1,
            type: FLOAT
          }, {
            name: "a_curvature",
            size: 1,
            type: FLOAT
          }, {
            name: "a_color",
            size: 4,
            type: UNSIGNED_BYTE,
            normalized: true
          }, {
            name: "a_id",
            size: 4,
            type: UNSIGNED_BYTE,
            normalized: true
          }]),
          CONSTANT_ATTRIBUTES: [{
            name: "a_current",
            size: 1,
            type: FLOAT
          },
          // TODO: could optimize to bool
          {
            name: "a_direction",
            size: 1,
            type: FLOAT
          } // TODO: could optimize to byte
          ],
          CONSTANT_DATA: [[0, 1], [0, -1], [1, 1], [0, -1], [1, 1], [1, -1]]
        };
      }
    }, {
      key: "processVisibleItem",
      value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
        var _data;
        var thickness = data.size || 1;
        var x1 = sourceData.x;
        var y1 = sourceData.y;
        var x2 = targetData.x;
        var y2 = targetData.y;
        var color = utils.floatColor(data.color);
        var curvature = (_data = data[curvatureAttribute]) !== null && _data !== void 0 ? _data : DEFAULT_EDGE_CURVATURE;
        var array = this.array;

        // First point
        array[startIndex++] = x1;
        array[startIndex++] = y1;
        array[startIndex++] = x2;
        array[startIndex++] = y2;
        if (hasTargetArrowHead) array[startIndex++] = targetData.size;
        if (hasSourceArrowHead) array[startIndex++] = sourceData.size;
        array[startIndex++] = thickness;
        array[startIndex++] = curvature;
        array[startIndex++] = color;
        array[startIndex++] = edgeIndex;
      }
    }, {
      key: "setUniforms",
      value: function setUniforms(params, _ref2) {
        var gl = _ref2.gl,
          uniformLocations = _ref2.uniformLocations;
        var u_matrix = uniformLocations.u_matrix,
          u_pixelRatio = uniformLocations.u_pixelRatio,
          u_feather = uniformLocations.u_feather,
          u_sizeRatio = uniformLocations.u_sizeRatio,
          u_dimensions = uniformLocations.u_dimensions,
          u_minEdgeThickness = uniformLocations.u_minEdgeThickness;
        gl.uniformMatrix3fv(u_matrix, false, params.matrix);
        gl.uniform1f(u_pixelRatio, params.pixelRatio);
        gl.uniform1f(u_sizeRatio, params.sizeRatio);
        gl.uniform1f(u_feather, params.antiAliasingFeather);
        gl.uniform2f(u_dimensions, params.width * params.pixelRatio, params.height * params.pixelRatio);
        gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
        if (arrowHead) {
          var u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio,
            u_widenessToThicknessRatio = uniformLocations.u_widenessToThicknessRatio;
          gl.uniform1f(u_lengthToThicknessRatio, arrowHead.lengthToThicknessRatio);
          gl.uniform1f(u_widenessToThicknessRatio, arrowHead.widenessToThicknessRatio);
        }
      }
    }]);
    return EdgeCurveProgram;
  }(rendering.EdgeProgram);
}

var EdgeCurveProgram = createEdgeCurveProgram();
var EdgeCurvedArrowProgram = createEdgeCurveProgram({
  arrowHead: rendering.DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS
});
var EdgeCurvedDoubleArrowProgram = createEdgeCurveProgram({
  arrowHead: _objectSpread2(_objectSpread2({}, rendering.DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS), {}, {
    extremity: "both"
  })
});

exports.DEFAULT_EDGE_CURVATURE = DEFAULT_EDGE_CURVATURE;
exports.DEFAULT_EDGE_CURVE_PROGRAM_OPTIONS = DEFAULT_EDGE_CURVE_PROGRAM_OPTIONS;
exports.DEFAULT_INDEX_PARALLEL_EDGES_OPTIONS = DEFAULT_INDEX_PARALLEL_EDGES_OPTIONS;
exports.EdgeCurvedArrowProgram = EdgeCurvedArrowProgram;
exports.EdgeCurvedDoubleArrowProgram = EdgeCurvedDoubleArrowProgram;
exports.createDrawCurvedEdgeLabel = createDrawCurvedEdgeLabel;
exports.createEdgeCurveProgram = createEdgeCurveProgram;
exports["default"] = EdgeCurveProgram;
exports.indexParallelEdgesIndex = indexParallelEdgesIndex;

},{"sigma/rendering":31,"sigma/utils":38}],3:[function(require,module,exports){
(function (process){(function (){
'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./sigma-edge-curve.cjs.prod.js");
} else {
  module.exports = require("./sigma-edge-curve.cjs.dev.js");
}

}).call(this)}).call(this,require('_process'))
},{"./sigma-edge-curve.cjs.dev.js":2,"./sigma-edge-curve.cjs.prod.js":4,"_process":16}],4:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2,"sigma/rendering":31,"sigma/utils":38}],5:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

},{}],6:[function(require,module,exports){
/**
 * Graphology Browser GEXF Endpoint
 * =================================
 *
 * Endpoint gathering both parser & writer for the browser.
 */
exports.parse = require('./parser.js');
exports.write = require('../common/writer.js');

},{"../common/writer.js":10,"./parser.js":7}],7:[function(require,module,exports){
/**
 * Graphology Browser GEXF Parser
 * ===============================
 *
 * Browser version of the graphology GEXF parser.
 */
var createParserFunction = require('../common/parser.js');

module.exports = createParserFunction(DOMParser, Document);

},{"../common/parser.js":9}],8:[function(require,module,exports){
/**
 * Graphology Common GEXF Helpers
 * ===============================
 *
 * Miscellaneous helpers used by both instance of the code.
 */

var SPACE_PATTERN = /^\s$/;
var COMMA_SPLITTER = /\s*,\s*/;
var PIPE_SPLITTER = /\s*\|\s*/;

function isSpace(char) {
  return SPACE_PATTERN.test(char);
}

function parseListPieces(string) {
  var c, n, i, l;

  var inPiece = false;
  var escaping = false;
  var piece = undefined;
  var pieces = [];
  var quoting = '';

  for (i = 0, l = string.length; i < l; i++) {
    c = string[i];

    if (inPiece) {
      if (piece === undefined) {
        piece = '';
      }

      if (!quoting && c === ',') {
        i--;
        inPiece = false;
        continue;
      }

      if (!escaping && c === quoting) {
        inPiece = false;
        continue;
      }

      if (c === '\\') {
        if (i + 1 < l) {
          n = string[i + 1];

          if (n === 'r' || n === 't' || n === 'n' || n === '\\') {
            if (n === 'n') {
              piece += '\n';
            } else if (n === 't') {
              piece += '\t';
            } else if (n === 'r') {
              piece += '\r';
            } else {
              piece += '\\';
            }

            escaping = false;
            i++;
            continue;
          }
        }

        escaping = true;
      } else {
        piece += c;
        escaping = false;
      }
    } else {
      if (isSpace(c)) {
        continue;
      }

      if (c === ',') {
        if (piece !== undefined) {
          pieces.push(piece);
          piece = undefined;
        }

        continue;
      }

      if (c === '"' || c === "'") {
        quoting = c;
      } else {
        i--;
        quoting = '';
      }

      inPiece = true;
      escaping = false;
    }
  }

  // Flushing last piece
  if (piece !== undefined) {
    pieces.push(piece);
  }

  return pieces;
}

function parseScalarValue(type, string) {
  if (!type || type === 'string') {
    return string;
  }

  if (type === 'boolean') {
    return string === 'true';
  }

  // NOTE: long might cause issues at some point because
  // JavaScript does not handle 64bit integers.
  if (
    type === 'byte' ||
    type === 'short' ||
    type === 'integer' ||
    type === 'long' ||
    type === 'float' ||
    type === 'double'
  ) {
    return +string;
  }

  // NOTE: we fallback to raw string value
  return string;
}

function parseValue(type, string) {
  if (type.startsWith('list')) {
    var subtype = type.slice(4);
    var pieces;

    if (
      string.length >= 2 &&
      string[0] === '[' &&
      string[string.length - 1] === ']'
    ) {
      pieces = parseListPieces(string.slice(1, -1));
    } else if (string.includes('|')) {
      pieces = string.split(PIPE_SPLITTER);
    } else if (string.includes(',')) {
      pieces = string.split(COMMA_SPLITTER);
    } else {
      pieces = [string];
    }

    return pieces.map(function (piece) {
      return parseScalarValue(subtype, piece);
    });
  } else {
    return parseScalarValue(type, string);
  }
}

exports.parseListPieces = parseListPieces;
exports.parseScalarValue = parseScalarValue;
exports.parseValue = parseValue;

/**
 * Function deleting illegal characters from a potential tag name to avoid
 * generating invalid XML.
 *
 * @param  {string} type - Tag name.
 * @return {string}
 */
var SANITIZE_PATTERN = /["'<>&\s]/g;

exports.sanitizeTagName = function sanitizeTagName(tagName) {
  return tagName.replace(SANITIZE_PATTERN, '').trim();
};

},{}],9:[function(require,module,exports){
/* eslint no-self-compare: 0 */
/**
 * Graphology Browser GEXF Parser
 * ===============================
 *
 * Browser version of the graphology GEXF parser using DOMParser to function.
 */
var isGraphConstructor = require('graphology-utils/is-graph-constructor');
var mergeEdge = require('graphology-utils/add-edge').mergeEdge;
var helpers = require('../common/helpers.js');

var parseValue = helpers.parseValue;

/**
 * Function checking whether the given value is a NaN.
 *
 * @param  {any} value - Value to test.
 * @return {boolean}
 */
function isReallyNaN(value) {
  return value !== value;
}

/**
 * Function used to convert a viz:color attribute into a CSS rgba? or hex string.
 *
 * @param  {Node}   element - DOM element.
 * @return {string}
 */
function getVizColor(element) {
  var hex = element.getAttribute('hex');

  if (hex) {
    return hex;
  }

  var a = element.getAttribute('a');
  var r = element.getAttribute('r');
  var g = element.getAttribute('g');
  var b = element.getAttribute('b');

  return a
    ? 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
    : 'rgb(' + r + ',' + g + ',' + b + ')';
}

/**
 * Function returning the first matching tag of the `viz` namespace matching
 * the desired tag name.
 *
 * @param  {Node}   element - Target DOM element.
 * @param  {string} name    - Tag name.
 * @return {Node}
 */
function getFirstMatchingVizTag(element, name) {
  var vizElement = element.getElementsByTagName('viz:' + name)[0];

  if (!vizElement) vizElement = element.getElementsByTagNameNS('viz', name)[0];

  if (!vizElement) vizElement = element.getElementsByTagName(name)[0];

  return vizElement;
}

/**
 * Function used to collect meta information.
 *
 * @param  {Array<Node>} elements - Target DOM element.
 * @return {object}
 */
function collectMeta(elements) {
  var meta = {};
  var element;
  var value;

  for (var i = 0, l = elements.length; i < l; i++) {
    element = elements[i];

    if (element.nodeName === '#text') continue;

    value = element.textContent.trim();

    if (value) meta[element.tagName.toLowerCase()] = element.textContent;
  }

  return meta;
}

/**
 * Function used to extract the model from the right elements.
 *
 * @param  {Array<Node>} elements - Target DOM elements.
 * @return {array}                - The model & default attributes.
 */
function extractModel(elements) {
  var model = {};
  var defaults = {};
  var element;
  var defaultElement;
  var id;

  for (var i = 0, l = elements.length; i < l; i++) {
    element = elements[i];
    id = element.getAttribute('id') || element.getAttribute('for');

    model[id] = {
      id: id,
      type: element.getAttribute('type') || 'string',
      title: !isReallyNaN(+id) ? element.getAttribute('title') || id : id
    };

    // Default?
    defaultElement = element.getElementsByTagName('default')[0];

    if (defaultElement)
      defaults[model[id].title] = parseValue(
        model[id].type,
        defaultElement.textContent
      );
  }

  return [model, defaults];
}

/**
 * Function used to collect an element's attributes.
 *
 * @param  {object}  model    - Data model to use.
 * @param  {object}  defaults - Default values.
 * @param  {Node}    element  - Target DOM element.
 * @param  {boolean} allowUndeclaredAttributes - Whether to allow undeclared attributes.
 * @return {object}           - The collected attributes.
 */
function collectAttributes(
  model,
  defaults,
  element,
  allowUndeclaredAttributes
) {
  var data = {};
  var label = element.getAttribute('label');
  var weight = element.getAttribute('weight');
  var kind = element.getAttribute('kind');

  if (label) data.label = label;
  if (weight) data.weight = +weight;
  if (kind) data.kind = kind;

  var valueElements = element.getElementsByTagName('attvalue');
  var valueElement;
  var attr;
  var title;
  var value;
  var type;
  var id;

  for (var i = 0, l = valueElements.length; i < l; i++) {
    valueElement = valueElements[i];
    id = valueElement.getAttribute('id') || valueElement.getAttribute('for');
    value = valueElement.getAttribute('value');
    attr = model[id];

    if (!attr) {
      if (allowUndeclaredAttributes) {
        title = id;
        type = 'string';
      } else {
        throw new Error(
          'graphology-gexf/parser: Found undeclared attribute "' + id + '"'
        );
      }
    } else {
      title = attr.title;
      type = attr.type;
    }

    data[title] = parseValue(type, value);
  }

  // Applying default values
  var k;

  for (k in defaults) {
    if (!(k in data)) data[k] = defaults[k];
  }

  // TODO: shortcut here to avoid viz when namespace is not set

  // Attempting to find viz namespace tags

  //-- 1) Color
  var vizElement = getFirstMatchingVizTag(element, 'color');

  if (vizElement) data.color = getVizColor(vizElement);

  //-- 2) Size
  vizElement = getFirstMatchingVizTag(element, 'size');

  if (vizElement) data.size = +vizElement.getAttribute('value');

  //-- 3) Position
  var x, y, z;

  vizElement = getFirstMatchingVizTag(element, 'position');

  if (vizElement) {
    x = vizElement.getAttribute('x');
    y = vizElement.getAttribute('y');
    z = vizElement.getAttribute('z');

    if (x) data.x = +x;
    if (y) data.y = +y;
    if (z) data.z = +z;
  }

  //-- 4) Shape
  vizElement = getFirstMatchingVizTag(element, 'shape');

  if (vizElement) data.shape = vizElement.getAttribute('value');

  //-- 5) Thickness
  vizElement = getFirstMatchingVizTag(element, 'thickness');

  if (vizElement) data.thickness = +vizElement.getAttribute('value');

  return data;
}

/**
 * Factory taking implementations of `DOMParser` & `Document` returning
 * the parser function.
 */
module.exports = function createParserFunction(DOMParser, Document) {
  /**
   * Function taking either a string or a document and returning a
   * graphology instance.
   *
   * @param {function}        Graph  - A graphology constructor.
   * @param {string|Document} source - The source to parse.
   * @param {object}          options - Parsing options.
   */

  // TODO: option to map the data to the attributes for customization, nodeModel, edgeModel, nodeReducer, edgeReducer
  // TODO: option to disable the model mapping heuristic
  return function parse(Graph, source, options) {
    options = options || {};

    var addMissingNodes = options.addMissingNodes === true;
    var allowUndeclaredAttributes = options.allowUndeclaredAttributes === true;
    var respectInputGraphType = options.respectInputGraphType === true;
    var mergeResult;

    var xmlDoc = source;

    var element, result, type, attributes, id, s, t, i, l;

    if (!isGraphConstructor(Graph))
      throw new Error('graphology-gexf/parser: invalid Graph constructor.');

    // If source is a string, we are going to parse it
    if (typeof source === 'string')
      xmlDoc = new DOMParser().parseFromString(source, 'application/xml');

    if (!(xmlDoc instanceof Document))
      throw new Error(
        'graphology-gexf/parser: source should either be a XML document or a string.'
      );

    // Finding useful elements
    var GRAPH_ELEMENT = xmlDoc.getElementsByTagName('graph')[0];
    var META_ELEMENT = xmlDoc.getElementsByTagName('meta')[0];
    var META_ELEMENTS = (META_ELEMENT && META_ELEMENT.childNodes) || [];
    var NODE_ELEMENTS = xmlDoc.getElementsByTagName('node');
    var EDGE_ELEMENTS = xmlDoc.getElementsByTagName('edge');
    var MODEL_ELEMENTS = xmlDoc.getElementsByTagName('attributes');
    var NODE_MODEL_ELEMENTS = [];
    var EDGE_MODEL_ELEMENTS = [];

    for (i = 0, l = MODEL_ELEMENTS.length; i < l; i++) {
      element = MODEL_ELEMENTS[i];

      if (element.getAttribute('class') === 'node')
        NODE_MODEL_ELEMENTS = element.getElementsByTagName('attribute');
      else if (element.getAttribute('class') === 'edge')
        EDGE_MODEL_ELEMENTS = element.getElementsByTagName('attribute');
    }

    // Information
    var DEFAULT_EDGE_TYPE =
      GRAPH_ELEMENT.getAttribute('defaultedgetype') || 'undirected';

    if (DEFAULT_EDGE_TYPE === 'mutual') DEFAULT_EDGE_TYPE = 'undirected';

    // Computing models
    result = extractModel(NODE_MODEL_ELEMENTS);

    var NODE_MODEL = result[0];
    var NODE_DEFAULT_ATTRIBUTES = result[1];

    result = extractModel(EDGE_MODEL_ELEMENTS);

    var EDGE_MODEL = result[0];
    var EDGE_DEFAULT_ATTRIBUTES = result[1];

    // Polling the first edge to guess the type of the edges
    var graphType = EDGE_ELEMENTS[0]
      ? EDGE_ELEMENTS[0].getAttribute('type') || DEFAULT_EDGE_TYPE
      : 'mixed';

    // Instantiating our graph
    var graphOptions = respectInputGraphType ? {} : {type: graphType};

    var graph = new Graph(graphOptions);

    // Collecting meta
    var meta = collectMeta(META_ELEMENTS);
    var lastModifiedDate =
      META_ELEMENT && META_ELEMENT.getAttribute('lastmodifieddate');

    graph.replaceAttributes(meta);

    if (lastModifiedDate)
      graph.setAttribute('lastModifiedDate', lastModifiedDate);

    // Adding nodes
    for (i = 0, l = NODE_ELEMENTS.length; i < l; i++) {
      element = NODE_ELEMENTS[i];

      graph.addNode(
        element.getAttribute('id'),
        collectAttributes(
          NODE_MODEL,
          NODE_DEFAULT_ATTRIBUTES,
          element,
          allowUndeclaredAttributes
        )
      );
    }

    // Adding edges
    for (i = 0, l = EDGE_ELEMENTS.length; i < l; i++) {
      element = EDGE_ELEMENTS[i];

      id = element.getAttribute('id');
      type = element.getAttribute('type') || DEFAULT_EDGE_TYPE;
      s = element.getAttribute('source');
      t = element.getAttribute('target');
      attributes = collectAttributes(
        EDGE_MODEL,
        EDGE_DEFAULT_ATTRIBUTES,
        element,
        allowUndeclaredAttributes
      );

      // If we encountered an edge with a different type, we upgrade the graph
      if (type !== graph.type && graph.type !== 'mixed') {
        if (respectInputGraphType)
          throw new Error(
            "graphology-gexf/parser: one of the file's edges does not respect the input graph type: " +
              graph.type +
              '.'
          );

        graph = graph.copy({type: 'mixed'});
      }

      // If we encountered twice the same edge, we upgrade the graph
      if (
        !graph.multi &&
        ((type === 'directed' && graph.hasDirectedEdge(s, t)) ||
          graph.hasUndirectedEdge(s, t))
      ) {
        if (respectInputGraphType)
          throw new Error(
            'graphology-gexf/parser: the file contains parallel edges that the input graph type does not allow.'
          );

        graph = graph.copy({multi: true});
      }

      mergeResult = mergeEdge(
        graph,
        type !== 'directed',
        id || null,
        s,
        t,
        attributes
      );

      if (!addMissingNodes && (mergeResult[2] || mergeResult[3])) {
        throw new Error(
          'graphology-gexf/parser: one of your gexf file edges points to an inexisting node. Set the parser `addMissingNodes` option to `true` if you do not care.'
        );
      }
    }

    return graph;
  };
};

},{"../common/helpers.js":8,"graphology-utils/add-edge":11,"graphology-utils/is-graph-constructor":13}],10:[function(require,module,exports){
/* eslint no-self-compare: 0 */
/**
 * Graphology Common GEXF Writer
 * ==============================
 *
 * GEXF writer working for both node.js & the browser.
 */
var isGraph = require('graphology-utils/is-graph');
var inferType = require('graphology-utils/infer-type');
var XMLWriter = require('xml-writer');
var sanitizeTagName = require('./helpers.js').sanitizeTagName;

/**
 * Constants.
 */
var VIZ_RESERVED_NAMES = new Set([
  'color',
  'size',
  'x',
  'y',
  'z',
  'shape',
  'thickness'
]);

var RGBA_TEST = /^\s*rgba?\s*\(/i;
var RGBA_MATCH =
  /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)\s*(?:,\s*([.0-9]*))?\)\s*$/;

/**
 * Function used to transform a CSS color into a RGBA object.
 *
 * @param  {string} value - Target value.
 * @return {object}
 */
function CSSColorToRGBA(value) {
  if (!value || typeof value !== 'string') return {};

  if (value[0] === '#') {
    value = value.slice(1);

    return value.length === 3
      ? {
          r: parseInt(value[0] + value[0], 16),
          g: parseInt(value[1] + value[1], 16),
          b: parseInt(value[2] + value[2], 16)
        }
      : {
          r: parseInt(value[0] + value[1], 16),
          g: parseInt(value[2] + value[3], 16),
          b: parseInt(value[4] + value[5], 16)
        };
  } else if (RGBA_TEST.test(value)) {
    var result = {};

    value = value.match(RGBA_MATCH);
    result.r = +value[1];
    result.g = +value[2];
    result.b = +value[3];

    if (value[4]) result.a = +value[4];

    return result;
  }

  return {};
}

/**
 * Function used to map an element's attributes to a standardized map of
 * GEXF expected properties (label, viz, attributes).
 *
 * @param  {string} type       - The element's type.
 * @param  {string} key        - The element's key.
 * @param  {object} attributes - The element's attributes.
 * @return {object}
 */
function DEFAULT_ELEMENT_FORMATTER(type, key, attributes) {
  var output = {},
    name;

  for (name in attributes) {
    if (name === 'label') {
      output.label = attributes.label;
    } else if (type === 'edge' && name === 'weight') {
      output.weight = attributes.weight;
    } else if (type === 'edge' && name === 'kind') {
      output.kind = attributes.kind;
    } else if (VIZ_RESERVED_NAMES.has(name)) {
      output.viz = output.viz || {};
      output.viz[name] = attributes[name];
    } else {
      output.attributes = output.attributes || {};
      output.attributes[name] = attributes[name];
    }
  }

  return output;
}

var DEFAULT_NODE_FORMATTER = DEFAULT_ELEMENT_FORMATTER.bind(null, 'node');
var DEFAULT_EDGE_FORMATTER = DEFAULT_ELEMENT_FORMATTER.bind(null, 'edge');

/**
 * Function used to check whether the given integer is 32 bits or not.
 *
 * @param  {number} number - Target number.
 * @return {boolean}
 */
function is32BitInteger(number) {
  return number <= 0x7fffffff && number >= -0x7fffffff;
}

/**
 * Function used to check whether the given value is "empty".
 *
 * @param  {any} value - Target value.
 * @return {boolean}
 */
function isEmptyValue(value) {
  return (
    typeof value === 'undefined' ||
    value === null ||
    value === '' ||
    value !== value
  );
}

var TYPE_PRIORITIES = {
  liststring: 0,
  listdouble: 1,
  listlong: 2,
  listinteger: 3,
  listboolean: 4,
  string: 5,
  double: 6,
  long: 7,
  integer: 8,
  boolean: 9,
  empty: 10
};

/**
 * Function used to detect a JavaScript's value type in the GEXF model.
 *
 * @param  {any}    value - Target value.
 * @return {string}
 */
function inferScalarValueType(value) {
  if (isEmptyValue(value)) return 'empty';

  if (typeof value === 'boolean') return 'boolean';

  if (typeof value === 'object') return 'string';

  // Numbers
  if (typeof value === 'number') {
    // Integer
    if (value === (value | 0)) {
      // Long (JavaScript integer can go up to 53 bit)?
      return is32BitInteger(value) ? 'integer' : 'long';
    }

    // JavaScript numbers are 64 bit float, hence the double
    return 'double';
  }

  return 'string';
}

function inferListValueType(values) {
  var type = 'empty';
  var priority = TYPE_PRIORITIES[type];
  var value, t, p;

  for (var i = 0, l = values.length; i < l; i++) {
    value = values[i];
    t = inferScalarValueType(value);
    p = TYPE_PRIORITIES[t];

    if (p < priority) {
      type = t;
      priority = p;
    }
  }

  return type;
}

function inferValueType(value) {
  // NOTE: at some point we might need a frame-independent test for this...
  // NOTE: it would be nice not to have to reallocate the Set as an Array
  // but good enough for the time being.
  if (value instanceof Set) {
    value = Array.from(value);
  }

  if (Array.isArray(value)) {
    var type = inferListValueType(value);

    if (type === 'empty') return 'empty';

    return 'list' + type;
  }

  return inferScalarValueType(value);
}

var TO_SANITIZE_PATTERN = /[\r\t\n]/g;

var SINGLE_QUOTE = "'";
var DOUBLE_QUOTE = '"';

function serializeValue(type, value) {
  if (type !== 'string' || TO_SANITIZE_PATTERN.test(value)) {
    return JSON.stringify(value);
  }

  if (!value.includes(SINGLE_QUOTE)) {
    if (!value.includes(DOUBLE_QUOTE)) {
      return value;
    }
    return SINGLE_QUOTE + value + SINGLE_QUOTE;
  }

  return JSON.stringify(value);
}

/**
 * Function used to cast the given value into the given type.
 *
 * @param  {string} type  - Target type.
 * @param  {any}    value - Value to cast.
 * @return {string}
 */
function cast(version, type, value) {
  if (type.startsWith('list')) {
    if (value instanceof Set) value = Array.from(value);
    var arrayValue = Array.isArray(value) ? value : [value];

    var subtype = type.slice(4);
    if (version === '1.3') {
      return (
        '[' +
        arrayValue
          .map(function (v) {
            return serializeValue(subtype, v);
          })
          .join(', ') +
        ']'
      );
    } else {
      return arrayValue.join('|');
    }
  }

  return '' + value;
}

/**
 * Function used to collect data from a graph's nodes.
 *
 * @param  {Graph}    graph   - Target graph.
 * @param  {function} format  - Function formatting the nodes attributes.
 * @return {array}
 */
function collectNodeData(graph, format) {
  var nodes = new Array(graph.order);
  var i = 0;

  graph.forEachNode(function (node, attr) {
    var data = format(node, attr);
    data.key = node;
    nodes[i++] = data;
  });

  return nodes;
}

/**
 * Function used to collect data from a graph's edges.
 *
 * @param  {Graph}    graph   - Target graph.
 * @param  {function} reducer - Function reducing the edges attributes.
 * @return {array}
 */
function collectEdgeData(graph, reducer) {
  var edges = new Array(graph.size);
  var i = 0;

  graph.forEachEdge(function (
    edge,
    attr,
    source,
    target,
    _sa,
    _ta,
    undirected
  ) {
    var data = reducer(edge, attr);
    data.key = edge;
    data.source = source;
    data.target = target;
    data.undirected = undirected;
    edges[i++] = data;
  });

  return edges;
}

/**
 * Function used to infer the model of the graph's nodes or edges.
 *
 * @param  {array} elements - The graph's relevant elements.
 * @return {array}
 */

// TODO: on large graph, we could also sample or let the user indicate the types
function inferModel(elements) {
  var model = {};
  var attributes;
  var type, currentType;
  var k;

  // Testing every attributes
  for (var i = 0, l = elements.length; i < l; i++) {
    attributes = elements[i].attributes;

    if (!attributes) continue;

    for (k in attributes) {
      type = inferValueType(attributes[k]);

      if (type === 'empty') continue;

      currentType = model[k];

      if (!currentType) model[k] = type;
      else {
        if (
          type !== currentType &&
          TYPE_PRIORITIES[type] < TYPE_PRIORITIES[currentType]
        ) {
          model[k] = type;
        }
      }
    }
  }

  // TODO: check default values
  return model;
}

/**
 * Function used to write a model.
 *
 * @param {XMLWriter} writer     - The writer to use.
 * @param {object}    model      - Model to write.
 * @param {string}    modelClass - Class of the model.
 */
function writeModel(writer, model, modelClass) {
  var name;

  if (!Object.keys(model).length) return;

  writer.startElement('attributes');
  writer.writeAttribute('class', modelClass);

  for (name in model) {
    writer.startElement('attribute');
    writer.writeAttribute('id', name);
    writer.writeAttribute('title', name);
    writer.writeAttribute('type', model[name]);
    writer.endElement();
  }

  writer.endElement();
}

function writeElements(version, writer, type, model, elements) {
  var emptyModel = !Object.keys(model).length;
  var element;
  var name;
  var color;
  var value;
  var edgeType;
  var attributes;
  var weight;
  var viz;
  var k;
  var i;
  var l;

  writer.startElement(type + 's');

  for (i = 0, l = elements.length; i < l; i++) {
    element = elements[i];
    attributes = element.attributes;
    viz = element.viz;

    writer.startElement(type);
    writer.writeAttribute('id', element.key);

    if (type === 'edge') {
      edgeType = element.undirected ? 'undirected' : 'directed';

      if (edgeType !== writer.defaultEdgeType)
        writer.writeAttribute('type', edgeType);

      writer.writeAttribute('source', element.source);
      writer.writeAttribute('target', element.target);

      weight = element.weight;

      if (
        (typeof weight === 'number' && !isNaN(weight)) ||
        typeof weight === 'string'
      )
        writer.writeAttribute('weight', element.weight);

      if (element.kind) {
        writer.writeAttribute('kind', element.kind);
      }
    }

    if (element.label) writer.writeAttribute('label', element.label);

    if (!emptyModel && attributes) {
      writer.startElement('attvalues');

      for (name in model) {
        if (name in attributes) {
          value = attributes[name];

          if (isEmptyValue(value)) continue;

          writer.startElement('attvalue');
          writer.writeAttribute('for', name);
          writer.writeAttribute('value', cast(version, model[name], value));
          writer.endElement();
        }
      }

      writer.endElement();
    }

    if (viz) {
      //-- 1) Color
      if (viz.color) {
        writer.startElementNS('viz', 'color');

        if (version === '1.3' && viz.color.startsWith('#')) {
          writer.writeAttribute('hex', viz.color);
        } else {
          color = CSSColorToRGBA(viz.color);

          for (k in color) writer.writeAttribute(k, color[k]);
        }
        writer.endElement();
      }

      //-- 2) Size
      if (viz.size !== undefined) {
        writer.startElementNS('viz', 'size');
        writer.writeAttribute('value', viz.size);
        writer.endElement();
      }

      //-- 3) Position
      if (viz.x !== undefined || viz.y !== undefined || viz.z !== undefined) {
        writer.startElementNS('viz', 'position');

        if (viz.x !== undefined) writer.writeAttribute('x', viz.x);

        if (viz.y !== undefined) writer.writeAttribute('y', viz.y);

        if (viz.z !== undefined) writer.writeAttribute('z', viz.z);

        writer.endElement();
      }

      //-- 4) Shape
      if (viz.shape) {
        writer.startElementNS('viz', 'shape');
        writer.writeAttribute('value', viz.shape);
        writer.endElement();
      }

      //-- 5) Thickness
      if (viz.thickness !== undefined) {
        writer.startElementNS('viz', 'thickness');
        writer.writeAttribute('value', viz.thickness);
        writer.endElement();
      }
    }

    writer.endElement();
  }

  writer.endElement();
}

/**
 * Defaults.
 */
var DEFAULTS = {
  encoding: 'UTF-8',
  pretty: true,
  version: '1.2',
  pedantic: false,
  formatNode: DEFAULT_NODE_FORMATTER,
  formatEdge: DEFAULT_EDGE_FORMATTER
};

/**
 * Function taking a graphology instance & outputting a gexf string.
 *
 * @param  {Graph}  graph        - Target graphology instance.
 * @param  {object} options      - Options:
 * @param  {string}   [encoding]   - Character encoding.
 * @param  {boolean}  [pretty]     - Whether to pretty print output.
 * @param  {string}   [version]    - Gexf version to emit.
 * @param  {boolean}  [pedantic]   - Pedantic output?
 * @param  {function} [formatNode] - Function formatting nodes' output.
 * @param  {function} [formatEdge] - Function formatting edges' output.
 * @return {string}              - GEXF string.
 */
module.exports = function write(graph, options) {
  if (!isGraph(graph))
    throw new Error('graphology-gexf/writer: invalid graphology instance.');

  options = options || {};

  var indent = options.pretty === false ? false : '  ';
  var pedantic = options.pedantic === true;

  var formatNode = options.formatNode || DEFAULTS.formatNode;
  var formatEdge = options.formatEdge || DEFAULTS.formatEdge;

  var writer = new XMLWriter(indent);

  writer.startDocument('1.0', options.encoding || DEFAULTS.encoding);

  // Starting gexf
  var version = options.version || DEFAULTS.version;

  if (version !== '1.2' && version !== '1.3') {
    throw new Error(
      'graphology-gexf/writer: invalid gexf version "' +
        version +
        '". Expecting 1.2 or 1.3.'
    );
  }

  writer.startElement('gexf');
  writer.writeAttribute('version', version);

  if (version === '1.2') {
    writer.writeAttribute('xmlns', 'http://www.gexf.net/1.2draft');
    writer.writeAttribute('xmlns:viz', 'http:///www.gexf.net/1.1draft/viz');
  } else if (version === '1.3') {
    writer.writeAttribute('xmlns', 'http://gexf.net/1.3');
    writer.writeAttribute('xmlns:viz', 'http://gexf.net/1.3/viz');
    writer.writeAttribute(
      'xmlns:xsi',
      'http://www.w3.org/2001/XMLSchema-instance'
    );
    writer.writeAttribute(
      'xsi:schemaLocation',
      'http://gexf.net/1.3 http://gexf.net/1.3/gexf.xsd'
    );
  }

  // Processing meta
  writer.startElement('meta');
  var graphAttributes = graph.getAttributes();

  if (graphAttributes.lastModifiedDate)
    writer.writeAttribute('lastmodifieddate', graphAttributes.lastModifiedDate);

  var metaTagName;
  var graphAttribute;

  for (var k in graphAttributes) {
    if (k === 'lastModifiedDate') continue;

    if (pedantic && k !== 'creator' && k !== 'description' && k !== 'keywords')
      continue;

    metaTagName = sanitizeTagName(k);

    if (!metaTagName) continue;

    graphAttribute = graphAttributes[k];

    // NOTE: if the graph attribute is not a scalar, we do not bother writing
    // it as metadata in the gexf output. This means the writer/parser is not
    // idempotent, but we cannot do better because the gexf format does not
    // allow it, since it was not meant to handle complex values as graph
    // metadata anyway.
    if (
      typeof graphAttribute === 'string' ||
      typeof graphAttribute === 'number' ||
      typeof graphAttribute === 'boolean'
    ) {
      writer.writeElement(metaTagName, '' + graphAttribute);
    }
  }

  writer.endElement();
  writer.startElement('graph');

  var type = inferType(graph);

  writer.defaultEdgeType = type === 'mixed' ? 'directed' : type;

  writer.writeAttribute('defaultedgetype', writer.defaultEdgeType);

  // Processing model
  var nodes = collectNodeData(graph, formatNode);
  var edges = collectEdgeData(graph, formatEdge);

  var nodeModel = inferModel(nodes);

  writeModel(writer, nodeModel, 'node');

  var edgeModel = inferModel(edges);

  writeModel(writer, edgeModel, 'edge');

  // Processing nodes
  writeElements(version, writer, 'node', nodeModel, nodes);

  // Processing edges
  writeElements(version, writer, 'edge', edgeModel, edges);

  return writer.toString();
};

},{"./helpers.js":8,"graphology-utils/infer-type":12,"graphology-utils/is-graph":14,"xml-writer":40}],11:[function(require,module,exports){
/**
 * Graphology Edge Adders
 * =======================
 *
 * Generic edge addition functions that can be used to avoid nasty repetitive
 * conditions.
 */
exports.addEdge = function addEdge(
  graph,
  undirected,
  key,
  source,
  target,
  attributes
) {
  if (undirected) {
    if (key === null || key === undefined)
      return graph.addUndirectedEdge(source, target, attributes);
    else return graph.addUndirectedEdgeWithKey(key, source, target, attributes);
  } else {
    if (key === null || key === undefined)
      return graph.addDirectedEdge(source, target, attributes);
    else return graph.addDirectedEdgeWithKey(key, source, target, attributes);
  }
};

exports.copyEdge = function copyEdge(
  graph,
  undirected,
  key,
  source,
  target,
  attributes
) {
  attributes = Object.assign({}, attributes);

  if (undirected) {
    if (key === null || key === undefined)
      return graph.addUndirectedEdge(source, target, attributes);
    else return graph.addUndirectedEdgeWithKey(key, source, target, attributes);
  } else {
    if (key === null || key === undefined)
      return graph.addDirectedEdge(source, target, attributes);
    else return graph.addDirectedEdgeWithKey(key, source, target, attributes);
  }
};

exports.mergeEdge = function mergeEdge(
  graph,
  undirected,
  key,
  source,
  target,
  attributes
) {
  if (undirected) {
    if (key === null || key === undefined)
      return graph.mergeUndirectedEdge(source, target, attributes);
    else
      return graph.mergeUndirectedEdgeWithKey(key, source, target, attributes);
  } else {
    if (key === null || key === undefined)
      return graph.mergeDirectedEdge(source, target, attributes);
    else return graph.mergeDirectedEdgeWithKey(key, source, target, attributes);
  }
};

exports.updateEdge = function updateEdge(
  graph,
  undirected,
  key,
  source,
  target,
  updater
) {
  if (undirected) {
    if (key === null || key === undefined)
      return graph.updateUndirectedEdge(source, target, updater);
    else return graph.updateUndirectedEdgeWithKey(key, source, target, updater);
  } else {
    if (key === null || key === undefined)
      return graph.updateDirectedEdge(source, target, updater);
    else return graph.updateDirectedEdgeWithKey(key, source, target, updater);
  }
};

},{}],12:[function(require,module,exports){
/**
 * Graphology inferType
 * =====================
 *
 * Useful function used to "guess" the real type of the given Graph using
 * introspection.
 */
var isGraph = require('./is-graph.js');

/**
 * Returning the inferred type of the given graph.
 *
 * @param  {Graph}   graph - Target graph.
 * @return {boolean}
 */
module.exports = function inferType(graph) {
  if (!isGraph(graph))
    throw new Error(
      'graphology-utils/infer-type: expecting a valid graphology instance.'
    );

  var declaredType = graph.type;

  if (declaredType !== 'mixed') return declaredType;

  if (
    (graph.directedSize === 0 && graph.undirectedSize === 0) ||
    (graph.directedSize > 0 && graph.undirectedSize > 0)
  )
    return 'mixed';

  if (graph.directedSize > 0) return 'directed';

  return 'undirected';
};

},{"./is-graph.js":14}],13:[function(require,module,exports){
/**
 * Graphology isGraphConstructor
 * ==============================
 *
 * Very simple function aiming at ensuring the given variable is a
 * graphology constructor.
 */

/**
 * Checking the value is a graphology constructor.
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */
module.exports = function isGraphConstructor(value) {
  return (
    value !== null &&
    typeof value === 'function' &&
    typeof value.prototype === 'object' &&
    typeof value.prototype.addUndirectedEdgeWithKey === 'function' &&
    typeof value.prototype.dropNode === 'function'
  );
};

},{}],14:[function(require,module,exports){
/**
 * Graphology isGraph
 * ===================
 *
 * Very simple function aiming at ensuring the given variable is a
 * graphology instance.
 */

/**
 * Checking the value is a graphology instance.
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */
module.exports = function isGraph(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    typeof value.addUndirectedEdgeWithKey === 'function' &&
    typeof value.dropNode === 'function' &&
    typeof value.multi === 'boolean'
  );
};

},{}],15:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).graphology=e()}(this,(function(){"use strict";function t(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function e(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)}function i(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(i=function(){return!!t})()}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t){var e="function"==typeof Map?new Map:void 0;return c=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return function(t,e,n){if(i())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var a=new(t.bind.apply(t,r));return n&&o(a,n.prototype),a}(t,arguments,n(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)},c(t)}var u=function(){for(var t=arguments[0],e=1,n=arguments.length;e<n;e++)if(arguments[e])for(var r in arguments[e])t[r]=arguments[e][r];return t};function d(t,e,n,r){var i=t._nodes.get(e),o=null;return i?o="mixed"===r?i.out&&i.out[n]||i.undirected&&i.undirected[n]:"directed"===r?i.out&&i.out[n]:i.undirected&&i.undirected[n]:o}function s(t){return"object"===a(t)&&null!==t}function h(t){var e;for(e in t)return!1;return!0}function p(t,e,n){Object.defineProperty(t,e,{enumerable:!1,configurable:!1,writable:!0,value:n})}function f(t,e,n){var r={enumerable:!0,configurable:!0};"function"==typeof n?r.get=n:(r.value=n,r.writable=!1),Object.defineProperty(t,e,r)}function l(t){return!!s(t)&&!(t.attributes&&!Array.isArray(t.attributes))}function g(){var t=arguments,n=null,r=-1;return e(e({},Symbol.iterator,(function(){return this})),"next",(function(){for(var e=null;;){if(null===n){if(++r>=t.length)return{done:!0};n=t[r][Symbol.iterator]()}if(!(e=n.next()).done)break;n=null}return e}))}function y(){return e(e({},Symbol.iterator,(function(){return this})),"next",(function(){return{done:!0}}))}"function"==typeof Object.assign&&(u=Object.assign);var w,v={exports:{}},b="object"==typeof Reflect?Reflect:null,m=b&&"function"==typeof b.apply?b.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};w=b&&"function"==typeof b.ownKeys?b.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var k=Number.isNaN||function(t){return t!=t};function _(){_.init.call(this)}v.exports=_,v.exports.once=function(t,e){return new Promise((function(n,r){function i(n){t.removeListener(e,o),r(n)}function o(){"function"==typeof t.removeListener&&t.removeListener("error",i),n([].slice.call(arguments))}j(t,e,o,{once:!0}),"error"!==e&&function(t,e,n){"function"==typeof t.on&&j(t,"error",e,n)}(t,i,{once:!0})}))},_.EventEmitter=_,_.prototype._events=void 0,_.prototype._eventsCount=0,_.prototype._maxListeners=void 0;var G=10;function x(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function E(t){return void 0===t._maxListeners?_.defaultMaxListeners:t._maxListeners}function A(t,e,n,r){var i,o,a,c;if(x(n),void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),a=o[e]),void 0===a)a=o[e]=n,++t._eventsCount;else if("function"==typeof a?a=o[e]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=E(t))>0&&a.length>i&&!a.warned){a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=a.length,c=u,console&&console.warn&&console.warn(c)}return t}function L(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function S(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=L.bind(r);return i.listener=n,r.wrapFn=i,i}function D(t,e,n){var r=t._events;if(void 0===r)return[];var i=r[e];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(i):N(i,i.length)}function U(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function N(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function j(t,e,n,r){if("function"==typeof t.on)r.once?t.once(e,n):t.on(e,n);else{if("function"!=typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t);t.addEventListener(e,(function i(o){r.once&&t.removeEventListener(e,i),n(o)}))}}Object.defineProperty(_,"defaultMaxListeners",{enumerable:!0,get:function(){return G},set:function(t){if("number"!=typeof t||t<0||k(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");G=t}}),_.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},_.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||k(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},_.prototype.getMaxListeners=function(){return E(this)},_.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r="error"===t,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var c=i[t];if(void 0===c)return!1;if("function"==typeof c)m(c,this,e);else{var u=c.length,d=N(c,u);for(n=0;n<u;++n)m(d[n],this,e)}return!0},_.prototype.addListener=function(t,e){return A(this,t,e,!1)},_.prototype.on=_.prototype.addListener,_.prototype.prependListener=function(t,e){return A(this,t,e,!0)},_.prototype.once=function(t,e){return x(e),this.on(t,S(this,t,e)),this},_.prototype.prependOnceListener=function(t,e){return x(e),this.prependListener(t,S(this,t,e)),this},_.prototype.removeListener=function(t,e){var n,r,i,o,a;if(x(e),void 0===(r=this._events))return this;if(void 0===(n=r[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,i),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,a||e)}return this},_.prototype.off=_.prototype.removeListener,_.prototype.removeAllListeners=function(t){var e,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},_.prototype.listeners=function(t){return D(this,t,!0)},_.prototype.rawListeners=function(t){return D(this,t,!1)},_.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):U.call(t,e)},_.prototype.listenerCount=U,_.prototype.eventNames=function(){return this._eventsCount>0?w(this._events):[]};var O=function(t){function e(e){var n;return(n=t.call(this)||this).name="GraphError",n.message=e,n}return r(e,t),e}(c(Error)),C=function(e){function n(r){var i;return(i=e.call(this,r)||this).name="InvalidArgumentsGraphError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(t(i),n.prototype.constructor),i}return r(n,e),n}(O),M=function(e){function n(r){var i;return(i=e.call(this,r)||this).name="NotFoundGraphError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(t(i),n.prototype.constructor),i}return r(n,e),n}(O),z=function(e){function n(r){var i;return(i=e.call(this,r)||this).name="UsageGraphError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(t(i),n.prototype.constructor),i}return r(n,e),n}(O);function W(t,e){this.key=t,this.attributes=e,this.clear()}function P(t,e){this.key=t,this.attributes=e,this.clear()}function K(t,e){this.key=t,this.attributes=e,this.clear()}function T(t,e,n,r,i){this.key=e,this.attributes=i,this.undirected=t,this.source=n,this.target=r}W.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}},P.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}},K.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}},T.prototype.attach=function(){var t="out",e="in";this.undirected&&(t=e="undirected");var n=this.source.key,r=this.target.key;this.source[t][r]=this,this.undirected&&n===r||(this.target[e][n]=this)},T.prototype.attachMulti=function(){var t="out",e="in",n=this.source.key,r=this.target.key;this.undirected&&(t=e="undirected");var i=this.source[t],o=i[r];if(void 0===o)return i[r]=this,void(this.undirected&&n===r||(this.target[e][n]=this));o.previous=this,this.next=o,i[r]=this,this.target[e][n]=this},T.prototype.detach=function(){var t=this.source.key,e=this.target.key,n="out",r="in";this.undirected&&(n=r="undirected"),delete this.source[n][e],delete this.target[r][t]},T.prototype.detachMulti=function(){var t=this.source.key,e=this.target.key,n="out",r="in";this.undirected&&(n=r="undirected"),void 0===this.previous?void 0===this.next?(delete this.source[n][e],delete this.target[r][t]):(this.next.previous=void 0,this.source[n][e]=this.next,this.target[r][t]=this.next):(this.previous.next=this.next,void 0!==this.next&&(this.next.previous=this.previous))};var I=0,R=1,F=3;function B(t,e,n,r,i,o,a){var c,u,d,s;if(r=""+r,n===I){if(!(c=t._nodes.get(r)))throw new M("Graph.".concat(e,': could not find the "').concat(r,'" node in the graph.'));d=i,s=o}else if(n===F){if(i=""+i,!(u=t._edges.get(i)))throw new M("Graph.".concat(e,': could not find the "').concat(i,'" edge in the graph.'));var h=u.source.key,p=u.target.key;if(r===h)c=u.target;else{if(r!==p)throw new M("Graph.".concat(e,': the "').concat(r,'" node is not attached to the "').concat(i,'" edge (').concat(h,", ").concat(p,")."));c=u.source}d=o,s=a}else{if(!(u=t._edges.get(r)))throw new M("Graph.".concat(e,': could not find the "').concat(r,'" edge in the graph.'));c=n===R?u.source:u.target,d=i,s=o}return[c,d,s]}var Y=[{name:function(t){return"get".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o=B(this,e,n,t,r,i),a=o[0],c=o[1];return a.attributes[c]}}},{name:function(t){return"get".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r){return B(this,e,n,t,r)[0].attributes}}},{name:function(t){return"has".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o=B(this,e,n,t,r,i),a=o[0],c=o[1];return a.attributes.hasOwnProperty(c)}}},{name:function(t){return"set".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i,o){var a=B(this,e,n,t,r,i,o),c=a[0],u=a[1],d=a[2];return c.attributes[u]=d,this.emit("nodeAttributesUpdated",{key:c.key,type:"set",attributes:c.attributes,name:u}),this}}},{name:function(t){return"update".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i,o){var a=B(this,e,n,t,r,i,o),c=a[0],u=a[1],d=a[2];if("function"!=typeof d)throw new C("Graph.".concat(e,": updater should be a function."));var s=c.attributes,h=d(s[u]);return s[u]=h,this.emit("nodeAttributesUpdated",{key:c.key,type:"set",attributes:c.attributes,name:u}),this}}},{name:function(t){return"remove".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o=B(this,e,n,t,r,i),a=o[0],c=o[1];return delete a.attributes[c],this.emit("nodeAttributesUpdated",{key:a.key,type:"remove",attributes:a.attributes,name:c}),this}}},{name:function(t){return"replace".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o=B(this,e,n,t,r,i),a=o[0],c=o[1];if(!s(c))throw new C("Graph.".concat(e,": provided attributes are not a plain object."));return a.attributes=c,this.emit("nodeAttributesUpdated",{key:a.key,type:"replace",attributes:a.attributes}),this}}},{name:function(t){return"merge".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o=B(this,e,n,t,r,i),a=o[0],c=o[1];if(!s(c))throw new C("Graph.".concat(e,": provided attributes are not a plain object."));return u(a.attributes,c),this.emit("nodeAttributesUpdated",{key:a.key,type:"merge",attributes:a.attributes,data:c}),this}}},{name:function(t){return"update".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o=B(this,e,n,t,r,i),a=o[0],c=o[1];if("function"!=typeof c)throw new C("Graph.".concat(e,": provided updater is not a function."));return a.attributes=c(a.attributes),this.emit("nodeAttributesUpdated",{key:a.key,type:"update",attributes:a.attributes}),this}}}];var J=[{name:function(t){return"get".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r){var i;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new z("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>2){if(this.multi)throw new z("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var o=""+t,a=""+r;if(r=arguments[2],!(i=d(this,o,a,n)))throw new M("Graph.".concat(e,': could not find an edge for the given path ("').concat(o,'" - "').concat(a,'").'))}else{if("mixed"!==n)throw new z("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(i=this._edges.get(t)))throw new M("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}return i.attributes[r]}}},{name:function(t){return"get".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t){var r;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new z("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>1){if(this.multi)throw new z("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var i=""+t,o=""+arguments[1];if(!(r=d(this,i,o,n)))throw new M("Graph.".concat(e,': could not find an edge for the given path ("').concat(i,'" - "').concat(o,'").'))}else{if("mixed"!==n)throw new z("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(r=this._edges.get(t)))throw new M("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}return r.attributes}}},{name:function(t){return"has".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r){var i;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new z("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>2){if(this.multi)throw new z("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var o=""+t,a=""+r;if(r=arguments[2],!(i=d(this,o,a,n)))throw new M("Graph.".concat(e,': could not find an edge for the given path ("').concat(o,'" - "').concat(a,'").'))}else{if("mixed"!==n)throw new z("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(i=this._edges.get(t)))throw new M("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}return i.attributes.hasOwnProperty(r)}}},{name:function(t){return"set".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new z("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>3){if(this.multi)throw new z("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var a=""+t,c=""+r;if(r=arguments[2],i=arguments[3],!(o=d(this,a,c,n)))throw new M("Graph.".concat(e,': could not find an edge for the given path ("').concat(a,'" - "').concat(c,'").'))}else{if("mixed"!==n)throw new z("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(o=this._edges.get(t)))throw new M("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}return o.attributes[r]=i,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}},{name:function(t){return"update".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new z("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>3){if(this.multi)throw new z("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var a=""+t,c=""+r;if(r=arguments[2],i=arguments[3],!(o=d(this,a,c,n)))throw new M("Graph.".concat(e,': could not find an edge for the given path ("').concat(a,'" - "').concat(c,'").'))}else{if("mixed"!==n)throw new z("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(o=this._edges.get(t)))throw new M("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}if("function"!=typeof i)throw new C("Graph.".concat(e,": updater should be a function."));return o.attributes[r]=i(o.attributes[r]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}},{name:function(t){return"remove".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r){var i;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new z("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>2){if(this.multi)throw new z("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var o=""+t,a=""+r;if(r=arguments[2],!(i=d(this,o,a,n)))throw new M("Graph.".concat(e,': could not find an edge for the given path ("').concat(o,'" - "').concat(a,'").'))}else{if("mixed"!==n)throw new z("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(i=this._edges.get(t)))throw new M("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}return delete i.attributes[r],this.emit("edgeAttributesUpdated",{key:i.key,type:"remove",attributes:i.attributes,name:r}),this}}},{name:function(t){return"replace".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r){var i;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new z("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>2){if(this.multi)throw new z("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var o=""+t,a=""+r;if(r=arguments[2],!(i=d(this,o,a,n)))throw new M("Graph.".concat(e,': could not find an edge for the given path ("').concat(o,'" - "').concat(a,'").'))}else{if("mixed"!==n)throw new z("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(i=this._edges.get(t)))throw new M("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}if(!s(r))throw new C("Graph.".concat(e,": provided attributes are not a plain object."));return i.attributes=r,this.emit("edgeAttributesUpdated",{key:i.key,type:"replace",attributes:i.attributes}),this}}},{name:function(t){return"merge".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r){var i;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new z("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>2){if(this.multi)throw new z("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var o=""+t,a=""+r;if(r=arguments[2],!(i=d(this,o,a,n)))throw new M("Graph.".concat(e,': could not find an edge for the given path ("').concat(o,'" - "').concat(a,'").'))}else{if("mixed"!==n)throw new z("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(i=this._edges.get(t)))throw new M("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}if(!s(r))throw new C("Graph.".concat(e,": provided attributes are not a plain object."));return u(i.attributes,r),this.emit("edgeAttributesUpdated",{key:i.key,type:"merge",attributes:i.attributes,data:r}),this}}},{name:function(t){return"update".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r){var i;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new z("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>2){if(this.multi)throw new z("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var o=""+t,a=""+r;if(r=arguments[2],!(i=d(this,o,a,n)))throw new M("Graph.".concat(e,': could not find an edge for the given path ("').concat(o,'" - "').concat(a,'").'))}else{if("mixed"!==n)throw new z("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(i=this._edges.get(t)))throw new M("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}if("function"!=typeof r)throw new C("Graph.".concat(e,": provided updater is not a function."));return i.attributes=r(i.attributes),this.emit("edgeAttributesUpdated",{key:i.key,type:"update",attributes:i.attributes}),this}}}];var q=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function H(t,e,n,r){var i=!1;for(var o in e)if(o!==r){var a=e[o];if(i=n(a.key,a.attributes,a.source.key,a.target.key,a.source.attributes,a.target.attributes,a.undirected),t&&i)return a.key}}function Q(t,e,n,r){var i,o,a,c=!1;for(var u in e)if(u!==r){i=e[u];do{if(o=i.source,a=i.target,c=n(i.key,i.attributes,o.key,a.key,o.attributes,a.attributes,i.undirected),t&&c)return i.key;i=i.next}while(void 0!==i)}}function V(t,n){var r,i=Object.keys(t),o=i.length,a=0;return e(e({},Symbol.iterator,(function(){return this})),"next",(function(){do{if(r)r=r.next;else{if(a>=o)return{done:!0};var e=i[a++];if(e===n){r=void 0;continue}r=t[e]}}while(!r);return{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}}}))}function X(t,e,n,r){var i=e[n];if(i){var o=i.source,a=i.target;return r(i.key,i.attributes,o.key,a.key,o.attributes,a.attributes,i.undirected)&&t?i.key:void 0}}function Z(t,e,n,r){var i=e[n];if(i){var o=!1;do{if(o=r(i.key,i.attributes,i.source.key,i.target.key,i.source.attributes,i.target.attributes,i.undirected),t&&o)return i.key;i=i.next}while(void 0!==i)}}function $(t,n){var r=t[n];if(void 0!==r.next)return e(e({},Symbol.iterator,(function(){return this})),"next",(function(){if(!r)return{done:!0};var t={edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected};return r=r.next,{done:!1,value:t}}));var i=!1;return e(e({},Symbol.iterator,(function(){return this})),"next",(function(){return!0===i?{done:!0}:(i=!0,{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}})}))}function tt(t,e,n,r){if(0!==e.size)for(var i,o,a="mixed"!==n&&n!==e.type,c="undirected"===n,u=!1,d=e._edges.values();!0!==(i=d.next()).done;)if(o=i.value,!a||o.undirected===c){var s=o,h=s.key,p=s.attributes,f=s.source,l=s.target;if(u=r(h,p,f.key,l.key,f.attributes,l.attributes,o.undirected),t&&u)return h}}function et(t,e,n,r,i,o){var a,c=e?Q:H;if("undirected"!==n){if("out"!==r&&(a=c(t,i.in,o),t&&a))return a;if("in"!==r&&(a=c(t,i.out,o,r?void 0:i.key),t&&a))return a}if("directed"!==n&&(a=c(t,i.undirected,o),t&&a))return a}function nt(t,e,n,r,i,o,a){var c,u=n?Z:X;if("undirected"!==e){if(void 0!==i.in&&"out"!==r&&(c=u(t,i.in,o,a),t&&c))return c;if(void 0!==i.out&&"in"!==r&&(r||i.key!==o)&&(c=u(t,i.out,o,a),t&&c))return c}if("directed"!==e&&void 0!==i.undirected&&(c=u(t,i.undirected,o,a),t&&c))return c}function rt(t,e){var n=e.name,r=e.type,i=e.direction;t.prototype[n]=function(t,e){if("mixed"!==r&&"mixed"!==this.type&&r!==this.type)return[];if(!arguments.length)return function(t,e){if(0===t.size)return[];if("mixed"===e||e===t.type)return Array.from(t._edges.keys());for(var n,r,i="undirected"===e?t.undirectedSize:t.directedSize,o=new Array(i),a="undirected"===e,c=t._edges.values(),u=0;!0!==(n=c.next()).done;)(r=n.value).undirected===a&&(o[u++]=r.key);return o}(this,r);if(1===arguments.length){t=""+t;var o=this._nodes.get(t);if(void 0===o)throw new M("Graph.".concat(n,': could not find the "').concat(t,'" node in the graph.'));return function(t,e,n,r){var i=[];return et(!1,t,e,n,r,(function(t){i.push(t)})),i}(this.multi,"mixed"===r?this.type:r,i,o)}if(2===arguments.length){t=""+t,e=""+e;var a=this._nodes.get(t);if(!a)throw new M("Graph.".concat(n,':  could not find the "').concat(t,'" source node in the graph.'));if(!this._nodes.has(e))throw new M("Graph.".concat(n,':  could not find the "').concat(e,'" target node in the graph.'));return function(t,e,n,r,i){var o=[];return nt(!1,t,e,n,r,i,(function(t){o.push(t)})),o}(r,this.multi,i,a,e)}throw new C("Graph.".concat(n,": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length,")."))}}function it(t,n){var r=n.name,i=n.type,o=n.direction,a=r.slice(0,-1)+"Entries";t.prototype[a]=function(t,n){if("mixed"!==i&&"mixed"!==this.type&&i!==this.type)return y();if(!arguments.length)return function(t,n){if(0===t.size)return y();var r="mixed"!==n&&n!==t.type,i="undirected"===n,o=t._edges.values();return e(e({},Symbol.iterator,(function(){return this})),"next",(function(){for(var t,e;;){if((t=o.next()).done)return t;if(e=t.value,!r||e.undirected===i)break}return{value:{edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected},done:!1}}))}(this,i);if(1===arguments.length){t=""+t;var r=this._nodes.get(t);if(!r)throw new M("Graph.".concat(a,': could not find the "').concat(t,'" node in the graph.'));return function(t,e,n){var r=y();return"undirected"!==t&&("out"!==e&&void 0!==n.in&&(r=g(r,V(n.in))),"in"!==e&&void 0!==n.out&&(r=g(r,V(n.out,e?void 0:n.key)))),"directed"!==t&&void 0!==n.undirected&&(r=g(r,V(n.undirected))),r}(i,o,r)}if(2===arguments.length){t=""+t,n=""+n;var c=this._nodes.get(t);if(!c)throw new M("Graph.".concat(a,':  could not find the "').concat(t,'" source node in the graph.'));if(!this._nodes.has(n))throw new M("Graph.".concat(a,':  could not find the "').concat(n,'" target node in the graph.'));return function(t,e,n,r){var i=y();return"undirected"!==t&&(void 0!==n.in&&"out"!==e&&r in n.in&&(i=g(i,$(n.in,r))),void 0!==n.out&&"in"!==e&&r in n.out&&(e||n.key!==r)&&(i=g(i,$(n.out,r)))),"directed"!==t&&void 0!==n.undirected&&r in n.undirected&&(i=g(i,$(n.undirected,r))),i}(i,o,c,n)}throw new C("Graph.".concat(a,": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length,")."))}}var ot=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function at(){this.A=null,this.B=null}function ct(t,e,n,r,i){for(var o in r){var a=r[o],c=a.source,u=a.target,d=c===n?u:c;if(!e||!e.has(d.key)){var s=i(d.key,d.attributes);if(t&&s)return d.key}}}function ut(t,e,n,r,i){if("mixed"!==e){if("undirected"===e)return ct(t,null,r,r.undirected,i);if("string"==typeof n)return ct(t,null,r,r[n],i)}var o,a=new at;if("undirected"!==e){if("out"!==n){if(o=ct(t,null,r,r.in,i),t&&o)return o;a.wrap(r.in)}if("in"!==n){if(o=ct(t,a,r,r.out,i),t&&o)return o;a.wrap(r.out)}}if("directed"!==e&&(o=ct(t,a,r,r.undirected,i),t&&o))return o}function dt(t,n,r){var i=Object.keys(r),o=i.length,a=0;return e(e({},Symbol.iterator,(function(){return this})),"next",(function(){var e=null;do{if(a>=o)return t&&t.wrap(r),{done:!0};var c=r[i[a++]],u=c.source,d=c.target;e=u===n?d:u,t&&t.has(e.key)&&(e=null)}while(null===e);return{done:!1,value:{neighbor:e.key,attributes:e.attributes}}}))}function st(t,e){var n=e.name,r=e.type,i=e.direction;t.prototype[n]=function(t){if("mixed"!==r&&"mixed"!==this.type&&r!==this.type)return[];t=""+t;var e=this._nodes.get(t);if(void 0===e)throw new M("Graph.".concat(n,': could not find the "').concat(t,'" node in the graph.'));return function(t,e,n){if("mixed"!==t){if("undirected"===t)return Object.keys(n.undirected);if("string"==typeof e)return Object.keys(n[e])}var r=[];return ut(!1,t,e,n,(function(t){r.push(t)})),r}("mixed"===r?this.type:r,i,e)}}function ht(t,e){var n=e.name,r=e.type,i=e.direction,o=n.slice(0,-1)+"Entries";t.prototype[o]=function(t){if("mixed"!==r&&"mixed"!==this.type&&r!==this.type)return y();t=""+t;var e=this._nodes.get(t);if(void 0===e)throw new M("Graph.".concat(o,': could not find the "').concat(t,'" node in the graph.'));return function(t,e,n){if("mixed"!==t){if("undirected"===t)return dt(null,n,n.undirected);if("string"==typeof e)return dt(null,n,n[e])}var r=y(),i=new at;return"undirected"!==t&&("out"!==e&&(r=g(r,dt(i,n,n.in))),"in"!==e&&(r=g(r,dt(i,n,n.out)))),"directed"!==t&&(r=g(r,dt(i,n,n.undirected))),r}("mixed"===r?this.type:r,i,e)}}function pt(t,e,n,r,i){for(var o,a,c,u,d,s,h,p=r._nodes.values(),f=r.type;!0!==(o=p.next()).done;){var l=!1;if(a=o.value,"undirected"!==f)for(c in u=a.out){d=u[c];do{if(s=d.target,l=!0,h=i(a.key,s.key,a.attributes,s.attributes,d.key,d.attributes,d.undirected),t&&h)return d;d=d.next}while(d)}if("directed"!==f)for(c in u=a.undirected)if(!(e&&a.key>c)){d=u[c];do{if((s=d.target).key!==c&&(s=d.source),l=!0,h=i(a.key,s.key,a.attributes,s.attributes,d.key,d.attributes,d.undirected),t&&h)return d;d=d.next}while(d)}if(n&&!l&&(h=i(a.key,null,a.attributes,null,null,null,null),t&&h))return null}}function ft(t){if(!s(t))throw new C('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in t))throw new C("Graph.import: serialized node is missing its key.");if("attributes"in t&&(!s(t.attributes)||null===t.attributes))throw new C("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function lt(t){if(!s(t))throw new C('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in t))throw new C("Graph.import: serialized edge is missing its source.");if(!("target"in t))throw new C("Graph.import: serialized edge is missing its target.");if("attributes"in t&&(!s(t.attributes)||null===t.attributes))throw new C("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in t&&"boolean"!=typeof t.undirected)throw new C("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}at.prototype.wrap=function(t){null===this.A?this.A=t:null===this.B&&(this.B=t)},at.prototype.has=function(t){return null!==this.A&&t in this.A||null!==this.B&&t in this.B};var gt,yt=(gt=255&Math.floor(256*Math.random()),function(){return gt++}),wt=new Set(["directed","undirected","mixed"]),vt=new Set(["domain","_events","_eventsCount","_maxListeners"]),bt={allowSelfLoops:!0,multi:!1,type:"mixed"};function mt(t,e,n){var r=new t.NodeDataClass(e,n);return t._nodes.set(e,r),t.emit("nodeAdded",{key:e,attributes:n}),r}function kt(t,e,n,r,i,o,a,c){if(!r&&"undirected"===t.type)throw new z("Graph.".concat(e,": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));if(r&&"directed"===t.type)throw new z("Graph.".concat(e,": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));if(c&&!s(c))throw new C("Graph.".concat(e,': invalid attributes. Expecting an object but got "').concat(c,'"'));if(o=""+o,a=""+a,c=c||{},!t.allowSelfLoops&&o===a)throw new z("Graph.".concat(e,': source & target are the same ("').concat(o,"\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));var u=t._nodes.get(o),d=t._nodes.get(a);if(!u)throw new M("Graph.".concat(e,': source node "').concat(o,'" not found.'));if(!d)throw new M("Graph.".concat(e,': target node "').concat(a,'" not found.'));var h={key:null,undirected:r,source:o,target:a,attributes:c};if(n)i=t._edgeKeyGenerator();else if(i=""+i,t._edges.has(i))throw new z("Graph.".concat(e,': the "').concat(i,'" edge already exists in the graph.'));if(!t.multi&&(r?void 0!==u.undirected[a]:void 0!==u.out[a]))throw new z("Graph.".concat(e,': an edge linking "').concat(o,'" to "').concat(a,"\" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option."));var p=new T(r,i,u,d,c);t._edges.set(i,p);var f=o===a;return r?(u.undirectedDegree++,d.undirectedDegree++,f&&(u.undirectedLoops++,t._undirectedSelfLoopCount++)):(u.outDegree++,d.inDegree++,f&&(u.directedLoops++,t._directedSelfLoopCount++)),t.multi?p.attachMulti():p.attach(),r?t._undirectedSize++:t._directedSize++,h.key=i,t.emit("edgeAdded",h),i}function _t(t,e,n,r,i,o,a,c,d){if(!r&&"undirected"===t.type)throw new z("Graph.".concat(e,": you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead."));if(r&&"directed"===t.type)throw new z("Graph.".concat(e,": you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead."));if(c)if(d){if("function"!=typeof c)throw new C("Graph.".concat(e,': invalid updater function. Expecting a function but got "').concat(c,'"'))}else if(!s(c))throw new C("Graph.".concat(e,': invalid attributes. Expecting an object but got "').concat(c,'"'));var h;if(o=""+o,a=""+a,d&&(h=c,c=void 0),!t.allowSelfLoops&&o===a)throw new z("Graph.".concat(e,': source & target are the same ("').concat(o,"\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));var p,f,l=t._nodes.get(o),g=t._nodes.get(a);if(!n&&(p=t._edges.get(i))){if(!(p.source.key===o&&p.target.key===a||r&&p.source.key===a&&p.target.key===o))throw new z("Graph.".concat(e,': inconsistency detected when attempting to merge the "').concat(i,'" edge with "').concat(o,'" source & "').concat(a,'" target vs. ("').concat(p.source.key,'", "').concat(p.target.key,'").'));f=p}if(f||t.multi||!l||(f=r?l.undirected[a]:l.out[a]),f){var y=[f.key,!1,!1,!1];if(d?!h:!c)return y;if(d){var w=f.attributes;f.attributes=h(w),t.emit("edgeAttributesUpdated",{type:"replace",key:f.key,attributes:f.attributes})}else u(f.attributes,c),t.emit("edgeAttributesUpdated",{type:"merge",key:f.key,attributes:f.attributes,data:c});return y}c=c||{},d&&h&&(c=h(c));var v={key:null,undirected:r,source:o,target:a,attributes:c};if(n)i=t._edgeKeyGenerator();else if(i=""+i,t._edges.has(i))throw new z("Graph.".concat(e,': the "').concat(i,'" edge already exists in the graph.'));var b=!1,m=!1;l||(l=mt(t,o,{}),b=!0,o===a&&(g=l,m=!0)),g||(g=mt(t,a,{}),m=!0),p=new T(r,i,l,g,c),t._edges.set(i,p);var k=o===a;return r?(l.undirectedDegree++,g.undirectedDegree++,k&&(l.undirectedLoops++,t._undirectedSelfLoopCount++)):(l.outDegree++,g.inDegree++,k&&(l.directedLoops++,t._directedSelfLoopCount++)),t.multi?p.attachMulti():p.attach(),r?t._undirectedSize++:t._directedSize++,v.key=i,t.emit("edgeAdded",v),[i,!0,b,m]}function Gt(t,e){t._edges.delete(e.key);var n=e.source,r=e.target,i=e.attributes,o=e.undirected,a=n===r;o?(n.undirectedDegree--,r.undirectedDegree--,a&&(n.undirectedLoops--,t._undirectedSelfLoopCount--)):(n.outDegree--,r.inDegree--,a&&(n.directedLoops--,t._directedSelfLoopCount--)),t.multi?e.detachMulti():e.detach(),o?t._undirectedSize--:t._directedSize--,t.emit("edgeDropped",{key:e.key,attributes:i,source:n.key,target:r.key,undirected:o})}var xt=function(n){function i(e){var r;if(r=n.call(this)||this,"boolean"!=typeof(e=u({},bt,e)).multi)throw new C("Graph.constructor: invalid 'multi' option. Expecting a boolean but got \"".concat(e.multi,'".'));if(!wt.has(e.type))throw new C('Graph.constructor: invalid \'type\' option. Should be one of "mixed", "directed" or "undirected" but got "'.concat(e.type,'".'));if("boolean"!=typeof e.allowSelfLoops)throw new C("Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got \"".concat(e.allowSelfLoops,'".'));var i="mixed"===e.type?W:"directed"===e.type?P:K;p(t(r),"NodeDataClass",i);var o="geid_"+yt()+"_",a=0;return p(t(r),"_attributes",{}),p(t(r),"_nodes",new Map),p(t(r),"_edges",new Map),p(t(r),"_directedSize",0),p(t(r),"_undirectedSize",0),p(t(r),"_directedSelfLoopCount",0),p(t(r),"_undirectedSelfLoopCount",0),p(t(r),"_edgeKeyGenerator",(function(){var t;do{t=o+a++}while(r._edges.has(t));return t})),p(t(r),"_options",e),vt.forEach((function(e){return p(t(r),e,r[e])})),f(t(r),"order",(function(){return r._nodes.size})),f(t(r),"size",(function(){return r._edges.size})),f(t(r),"directedSize",(function(){return r._directedSize})),f(t(r),"undirectedSize",(function(){return r._undirectedSize})),f(t(r),"selfLoopCount",(function(){return r._directedSelfLoopCount+r._undirectedSelfLoopCount})),f(t(r),"directedSelfLoopCount",(function(){return r._directedSelfLoopCount})),f(t(r),"undirectedSelfLoopCount",(function(){return r._undirectedSelfLoopCount})),f(t(r),"multi",r._options.multi),f(t(r),"type",r._options.type),f(t(r),"allowSelfLoops",r._options.allowSelfLoops),f(t(r),"implementation",(function(){return"graphology"})),r}r(i,n);var o=i.prototype;return o._resetInstanceCounters=function(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0},o.hasNode=function(t){return this._nodes.has(""+t)},o.hasDirectedEdge=function(t,e){if("undirected"===this.type)return!1;if(1===arguments.length){var n=""+t,r=this._edges.get(n);return!!r&&!r.undirected}if(2===arguments.length){t=""+t,e=""+e;var i=this._nodes.get(t);return!!i&&i.out.hasOwnProperty(e)}throw new C("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length,", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."))},o.hasUndirectedEdge=function(t,e){if("directed"===this.type)return!1;if(1===arguments.length){var n=""+t,r=this._edges.get(n);return!!r&&r.undirected}if(2===arguments.length){t=""+t,e=""+e;var i=this._nodes.get(t);return!!i&&i.undirected.hasOwnProperty(e)}throw new C("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length,", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."))},o.hasEdge=function(t,e){if(1===arguments.length){var n=""+t;return this._edges.has(n)}if(2===arguments.length){t=""+t,e=""+e;var r=this._nodes.get(t);return!!r&&(void 0!==r.out&&r.out.hasOwnProperty(e)||void 0!==r.undirected&&r.undirected.hasOwnProperty(e))}throw new C("Graph.hasEdge: invalid arity (".concat(arguments.length,", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."))},o.directedEdge=function(t,e){if("undirected"!==this.type){if(t=""+t,e=""+e,this.multi)throw new z("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");var n=this._nodes.get(t);if(!n)throw new M('Graph.directedEdge: could not find the "'.concat(t,'" source node in the graph.'));if(!this._nodes.has(e))throw new M('Graph.directedEdge: could not find the "'.concat(e,'" target node in the graph.'));var r=n.out&&n.out[e]||void 0;return r?r.key:void 0}},o.undirectedEdge=function(t,e){if("directed"!==this.type){if(t=""+t,e=""+e,this.multi)throw new z("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");var n=this._nodes.get(t);if(!n)throw new M('Graph.undirectedEdge: could not find the "'.concat(t,'" source node in the graph.'));if(!this._nodes.has(e))throw new M('Graph.undirectedEdge: could not find the "'.concat(e,'" target node in the graph.'));var r=n.undirected&&n.undirected[e]||void 0;return r?r.key:void 0}},o.edge=function(t,e){if(this.multi)throw new z("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new M('Graph.edge: could not find the "'.concat(t,'" source node in the graph.'));if(!this._nodes.has(e))throw new M('Graph.edge: could not find the "'.concat(e,'" target node in the graph.'));var r=n.out&&n.out[e]||n.undirected&&n.undirected[e]||void 0;if(r)return r.key},o.areDirectedNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new M('Graph.areDirectedNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"undirected"!==this.type&&(e in n.in||e in n.out)},o.areOutNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new M('Graph.areOutNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"undirected"!==this.type&&e in n.out},o.areInNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new M('Graph.areInNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"undirected"!==this.type&&e in n.in},o.areUndirectedNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new M('Graph.areUndirectedNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"directed"!==this.type&&e in n.undirected},o.areNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new M('Graph.areNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"undirected"!==this.type&&(e in n.in||e in n.out)||"directed"!==this.type&&e in n.undirected},o.areInboundNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new M('Graph.areInboundNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"undirected"!==this.type&&e in n.in||"directed"!==this.type&&e in n.undirected},o.areOutboundNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new M('Graph.areOutboundNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"undirected"!==this.type&&e in n.out||"directed"!==this.type&&e in n.undirected},o.inDegree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.inDegree: could not find the "'.concat(t,'" node in the graph.'));return"undirected"===this.type?0:e.inDegree},o.outDegree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.outDegree: could not find the "'.concat(t,'" node in the graph.'));return"undirected"===this.type?0:e.outDegree},o.directedDegree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.directedDegree: could not find the "'.concat(t,'" node in the graph.'));return"undirected"===this.type?0:e.inDegree+e.outDegree},o.undirectedDegree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.undirectedDegree: could not find the "'.concat(t,'" node in the graph.'));return"directed"===this.type?0:e.undirectedDegree},o.inboundDegree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.inboundDegree: could not find the "'.concat(t,'" node in the graph.'));var n=0;return"directed"!==this.type&&(n+=e.undirectedDegree),"undirected"!==this.type&&(n+=e.inDegree),n},o.outboundDegree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.outboundDegree: could not find the "'.concat(t,'" node in the graph.'));var n=0;return"directed"!==this.type&&(n+=e.undirectedDegree),"undirected"!==this.type&&(n+=e.outDegree),n},o.degree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.degree: could not find the "'.concat(t,'" node in the graph.'));var n=0;return"directed"!==this.type&&(n+=e.undirectedDegree),"undirected"!==this.type&&(n+=e.inDegree+e.outDegree),n},o.inDegreeWithoutSelfLoops=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.inDegreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));return"undirected"===this.type?0:e.inDegree-e.directedLoops},o.outDegreeWithoutSelfLoops=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.outDegreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));return"undirected"===this.type?0:e.outDegree-e.directedLoops},o.directedDegreeWithoutSelfLoops=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.directedDegreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));return"undirected"===this.type?0:e.inDegree+e.outDegree-2*e.directedLoops},o.undirectedDegreeWithoutSelfLoops=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.undirectedDegreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));return"directed"===this.type?0:e.undirectedDegree-2*e.undirectedLoops},o.inboundDegreeWithoutSelfLoops=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.inboundDegreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));var n=0,r=0;return"directed"!==this.type&&(n+=e.undirectedDegree,r+=2*e.undirectedLoops),"undirected"!==this.type&&(n+=e.inDegree,r+=e.directedLoops),n-r},o.outboundDegreeWithoutSelfLoops=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.outboundDegreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));var n=0,r=0;return"directed"!==this.type&&(n+=e.undirectedDegree,r+=2*e.undirectedLoops),"undirected"!==this.type&&(n+=e.outDegree,r+=e.directedLoops),n-r},o.degreeWithoutSelfLoops=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new M('Graph.degreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));var n=0,r=0;return"directed"!==this.type&&(n+=e.undirectedDegree,r+=2*e.undirectedLoops),"undirected"!==this.type&&(n+=e.inDegree+e.outDegree,r+=2*e.directedLoops),n-r},o.source=function(t){t=""+t;var e=this._edges.get(t);if(!e)throw new M('Graph.source: could not find the "'.concat(t,'" edge in the graph.'));return e.source.key},o.target=function(t){t=""+t;var e=this._edges.get(t);if(!e)throw new M('Graph.target: could not find the "'.concat(t,'" edge in the graph.'));return e.target.key},o.extremities=function(t){t=""+t;var e=this._edges.get(t);if(!e)throw new M('Graph.extremities: could not find the "'.concat(t,'" edge in the graph.'));return[e.source.key,e.target.key]},o.opposite=function(t,e){t=""+t,e=""+e;var n=this._edges.get(e);if(!n)throw new M('Graph.opposite: could not find the "'.concat(e,'" edge in the graph.'));var r=n.source.key,i=n.target.key;if(t===r)return i;if(t===i)return r;throw new M('Graph.opposite: the "'.concat(t,'" node is not attached to the "').concat(e,'" edge (').concat(r,", ").concat(i,")."))},o.hasExtremity=function(t,e){t=""+t,e=""+e;var n=this._edges.get(t);if(!n)throw new M('Graph.hasExtremity: could not find the "'.concat(t,'" edge in the graph.'));return n.source.key===e||n.target.key===e},o.isUndirected=function(t){t=""+t;var e=this._edges.get(t);if(!e)throw new M('Graph.isUndirected: could not find the "'.concat(t,'" edge in the graph.'));return e.undirected},o.isDirected=function(t){t=""+t;var e=this._edges.get(t);if(!e)throw new M('Graph.isDirected: could not find the "'.concat(t,'" edge in the graph.'));return!e.undirected},o.isSelfLoop=function(t){t=""+t;var e=this._edges.get(t);if(!e)throw new M('Graph.isSelfLoop: could not find the "'.concat(t,'" edge in the graph.'));return e.source===e.target},o.addNode=function(t,e){var n=function(t,e,n){if(n&&!s(n))throw new C('Graph.addNode: invalid attributes. Expecting an object but got "'.concat(n,'"'));if(e=""+e,n=n||{},t._nodes.has(e))throw new z('Graph.addNode: the "'.concat(e,'" node already exist in the graph.'));var r=new t.NodeDataClass(e,n);return t._nodes.set(e,r),t.emit("nodeAdded",{key:e,attributes:n}),r}(this,t,e);return n.key},o.mergeNode=function(t,e){if(e&&!s(e))throw new C('Graph.mergeNode: invalid attributes. Expecting an object but got "'.concat(e,'"'));t=""+t,e=e||{};var n=this._nodes.get(t);return n?(e&&(u(n.attributes,e),this.emit("nodeAttributesUpdated",{type:"merge",key:t,attributes:n.attributes,data:e})),[t,!1]):(n=new this.NodeDataClass(t,e),this._nodes.set(t,n),this.emit("nodeAdded",{key:t,attributes:e}),[t,!0])},o.updateNode=function(t,e){if(e&&"function"!=typeof e)throw new C('Graph.updateNode: invalid updater function. Expecting a function but got "'.concat(e,'"'));t=""+t;var n=this._nodes.get(t);if(n){if(e){var r=n.attributes;n.attributes=e(r),this.emit("nodeAttributesUpdated",{type:"replace",key:t,attributes:n.attributes})}return[t,!1]}var i=e?e({}):{};return n=new this.NodeDataClass(t,i),this._nodes.set(t,n),this.emit("nodeAdded",{key:t,attributes:i}),[t,!0]},o.dropNode=function(t){t=""+t;var e,n=this._nodes.get(t);if(!n)throw new M('Graph.dropNode: could not find the "'.concat(t,'" node in the graph.'));if("undirected"!==this.type){for(var r in n.out){e=n.out[r];do{Gt(this,e),e=e.next}while(e)}for(var i in n.in){e=n.in[i];do{Gt(this,e),e=e.next}while(e)}}if("directed"!==this.type)for(var o in n.undirected){e=n.undirected[o];do{Gt(this,e),e=e.next}while(e)}this._nodes.delete(t),this.emit("nodeDropped",{key:t,attributes:n.attributes})},o.dropEdge=function(t){var e;if(arguments.length>1){var n=""+arguments[0],r=""+arguments[1];if(!(e=d(this,n,r,this.type)))throw new M('Graph.dropEdge: could not find the "'.concat(n,'" -> "').concat(r,'" edge in the graph.'))}else if(t=""+t,!(e=this._edges.get(t)))throw new M('Graph.dropEdge: could not find the "'.concat(t,'" edge in the graph.'));return Gt(this,e),this},o.dropDirectedEdge=function(t,e){if(arguments.length<2)throw new z("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new z("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");var n=d(this,t=""+t,e=""+e,"directed");if(!n)throw new M('Graph.dropDirectedEdge: could not find a "'.concat(t,'" -> "').concat(e,'" edge in the graph.'));return Gt(this,n),this},o.dropUndirectedEdge=function(t,e){if(arguments.length<2)throw new z("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new z("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");var n=d(this,t,e,"undirected");if(!n)throw new M('Graph.dropUndirectedEdge: could not find a "'.concat(t,'" -> "').concat(e,'" edge in the graph.'));return Gt(this,n),this},o.clear=function(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")},o.clearEdges=function(){for(var t,e=this._nodes.values();!0!==(t=e.next()).done;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")},o.getAttribute=function(t){return this._attributes[t]},o.getAttributes=function(){return this._attributes},o.hasAttribute=function(t){return this._attributes.hasOwnProperty(t)},o.setAttribute=function(t,e){return this._attributes[t]=e,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this},o.updateAttribute=function(t,e){if("function"!=typeof e)throw new C("Graph.updateAttribute: updater should be a function.");var n=this._attributes[t];return this._attributes[t]=e(n),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this},o.removeAttribute=function(t){return delete this._attributes[t],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:t}),this},o.replaceAttributes=function(t){if(!s(t))throw new C("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=t,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this},o.mergeAttributes=function(t){if(!s(t))throw new C("Graph.mergeAttributes: provided attributes are not a plain object.");return u(this._attributes,t),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:t}),this},o.updateAttributes=function(t){if("function"!=typeof t)throw new C("Graph.updateAttributes: provided updater is not a function.");return this._attributes=t(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this},o.updateEachNodeAttributes=function(t,e){if("function"!=typeof t)throw new C("Graph.updateEachNodeAttributes: expecting an updater function.");if(e&&!l(e))throw new C("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");for(var n,r,i=this._nodes.values();!0!==(n=i.next()).done;)(r=n.value).attributes=t(r.key,r.attributes);this.emit("eachNodeAttributesUpdated",{hints:e||null})},o.updateEachEdgeAttributes=function(t,e){if("function"!=typeof t)throw new C("Graph.updateEachEdgeAttributes: expecting an updater function.");if(e&&!l(e))throw new C("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");for(var n,r,i,o,a=this._edges.values();!0!==(n=a.next()).done;)i=(r=n.value).source,o=r.target,r.attributes=t(r.key,r.attributes,i.key,o.key,i.attributes,o.attributes,r.undirected);this.emit("eachEdgeAttributesUpdated",{hints:e||null})},o.forEachAdjacencyEntry=function(t){if("function"!=typeof t)throw new C("Graph.forEachAdjacencyEntry: expecting a callback.");pt(!1,!1,!1,this,t)},o.forEachAdjacencyEntryWithOrphans=function(t){if("function"!=typeof t)throw new C("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");pt(!1,!1,!0,this,t)},o.forEachAssymetricAdjacencyEntry=function(t){if("function"!=typeof t)throw new C("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");pt(!1,!0,!1,this,t)},o.forEachAssymetricAdjacencyEntryWithOrphans=function(t){if("function"!=typeof t)throw new C("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");pt(!1,!0,!0,this,t)},o.nodes=function(){return Array.from(this._nodes.keys())},o.forEachNode=function(t){if("function"!=typeof t)throw new C("Graph.forEachNode: expecting a callback.");for(var e,n,r=this._nodes.values();!0!==(e=r.next()).done;)t((n=e.value).key,n.attributes)},o.findNode=function(t){if("function"!=typeof t)throw new C("Graph.findNode: expecting a callback.");for(var e,n,r=this._nodes.values();!0!==(e=r.next()).done;)if(t((n=e.value).key,n.attributes))return n.key},o.mapNodes=function(t){if("function"!=typeof t)throw new C("Graph.mapNode: expecting a callback.");for(var e,n,r=this._nodes.values(),i=new Array(this.order),o=0;!0!==(e=r.next()).done;)n=e.value,i[o++]=t(n.key,n.attributes);return i},o.someNode=function(t){if("function"!=typeof t)throw new C("Graph.someNode: expecting a callback.");for(var e,n,r=this._nodes.values();!0!==(e=r.next()).done;)if(t((n=e.value).key,n.attributes))return!0;return!1},o.everyNode=function(t){if("function"!=typeof t)throw new C("Graph.everyNode: expecting a callback.");for(var e,n,r=this._nodes.values();!0!==(e=r.next()).done;)if(!t((n=e.value).key,n.attributes))return!1;return!0},o.filterNodes=function(t){if("function"!=typeof t)throw new C("Graph.filterNodes: expecting a callback.");for(var e,n,r=this._nodes.values(),i=[];!0!==(e=r.next()).done;)t((n=e.value).key,n.attributes)&&i.push(n.key);return i},o.reduceNodes=function(t,e){if("function"!=typeof t)throw new C("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new C("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");for(var n,r,i=e,o=this._nodes.values();!0!==(n=o.next()).done;)i=t(i,(r=n.value).key,r.attributes);return i},o.nodeEntries=function(){var t=this._nodes.values();return e(e({},Symbol.iterator,(function(){return this})),"next",(function(){var e=t.next();if(e.done)return e;var n=e.value;return{value:{node:n.key,attributes:n.attributes},done:!1}}))},o.export=function(){var t=this,e=new Array(this._nodes.size),n=0;this._nodes.forEach((function(t,r){e[n++]=function(t,e){var n={key:t};return h(e.attributes)||(n.attributes=u({},e.attributes)),n}(r,t)}));var r=new Array(this._edges.size);return n=0,this._edges.forEach((function(e,i){r[n++]=function(t,e,n){var r={key:e,source:n.source.key,target:n.target.key};return h(n.attributes)||(r.attributes=u({},n.attributes)),"mixed"===t&&n.undirected&&(r.undirected=!0),r}(t.type,i,e)})),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:e,edges:r}},o.import=function(t){var e,n,r,o,a,c=this,u=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t instanceof i)return t.forEachNode((function(t,e){u?c.mergeNode(t,e):c.addNode(t,e)})),t.forEachEdge((function(t,e,n,r,i,o,a){u?a?c.mergeUndirectedEdgeWithKey(t,n,r,e):c.mergeDirectedEdgeWithKey(t,n,r,e):a?c.addUndirectedEdgeWithKey(t,n,r,e):c.addDirectedEdgeWithKey(t,n,r,e)})),this;if(!s(t))throw new C("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(t.attributes){if(!s(t.attributes))throw new C("Graph.import: invalid attributes. Expecting a plain object.");u?this.mergeAttributes(t.attributes):this.replaceAttributes(t.attributes)}if(t.nodes){if(r=t.nodes,!Array.isArray(r))throw new C("Graph.import: invalid nodes. Expecting an array.");for(e=0,n=r.length;e<n;e++){ft(o=r[e]);var d=o,h=d.key,p=d.attributes;u?this.mergeNode(h,p):this.addNode(h,p)}}if(t.edges){var f=!1;if("undirected"===this.type&&(f=!0),r=t.edges,!Array.isArray(r))throw new C("Graph.import: invalid edges. Expecting an array.");for(e=0,n=r.length;e<n;e++){lt(a=r[e]);var l=a,g=l.source,y=l.target,w=l.attributes,v=l.undirected,b=void 0===v?f:v;"key"in a?(u?b?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:b?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey).call(this,a.key,g,y,w):(u?b?this.mergeUndirectedEdge:this.mergeDirectedEdge:b?this.addUndirectedEdge:this.addDirectedEdge).call(this,g,y,w)}}return this},o.nullCopy=function(t){var e=new i(u({},this._options,t));return e.replaceAttributes(u({},this.getAttributes())),e},o.emptyCopy=function(t){var e=this.nullCopy(t);return this._nodes.forEach((function(t,n){var r=u({},t.attributes);t=new e.NodeDataClass(n,r),e._nodes.set(n,t)})),e},o.copy=function(t){if("string"==typeof(t=t||{}).type&&t.type!==this.type&&"mixed"!==t.type)throw new z('Graph.copy: cannot create an incompatible copy from "'.concat(this.type,'" type to "').concat(t.type,'" because this would mean losing information about the current graph.'));if("boolean"==typeof t.multi&&t.multi!==this.multi&&!0!==t.multi)throw new z("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if("boolean"==typeof t.allowSelfLoops&&t.allowSelfLoops!==this.allowSelfLoops&&!0!==t.allowSelfLoops)throw new z("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");for(var e,n,r=this.emptyCopy(t),i=this._edges.values();!0!==(e=i.next()).done;)kt(r,"copy",!1,(n=e.value).undirected,n.key,n.source.key,n.target.key,u({},n.attributes));return r},o.toJSON=function(){return this.export()},o.toString=function(){return"[object Graph]"},o.inspect=function(){var t=this,e={};this._nodes.forEach((function(t,n){e[n]=t.attributes}));var n={},r={};this._edges.forEach((function(e,i){var o,a=e.undirected?"--":"->",c="",u=e.source.key,d=e.target.key;e.undirected&&u>d&&(o=u,u=d,d=o);var s="(".concat(u,")").concat(a,"(").concat(d,")");i.startsWith("geid_")?t.multi&&(void 0===r[s]?r[s]=0:r[s]++,c+="".concat(r[s],". ")):c+="[".concat(i,"]: "),n[c+=s]=e.attributes}));var i={};for(var o in this)this.hasOwnProperty(o)&&!vt.has(o)&&"function"!=typeof this[o]&&"symbol"!==a(o)&&(i[o]=this[o]);return i.attributes=this._attributes,i.nodes=e,i.edges=n,p(i,"constructor",this.constructor),i},i}(v.exports.EventEmitter);"undefined"!=typeof Symbol&&(xt.prototype[Symbol.for("nodejs.util.inspect.custom")]=xt.prototype.inspect),[{name:function(t){return"".concat(t,"Edge")},generateKey:!0},{name:function(t){return"".concat(t,"DirectedEdge")},generateKey:!0,type:"directed"},{name:function(t){return"".concat(t,"UndirectedEdge")},generateKey:!0,type:"undirected"},{name:function(t){return"".concat(t,"EdgeWithKey")}},{name:function(t){return"".concat(t,"DirectedEdgeWithKey")},type:"directed"},{name:function(t){return"".concat(t,"UndirectedEdgeWithKey")},type:"undirected"}].forEach((function(t){["add","merge","update"].forEach((function(e){var n=t.name(e),r="add"===e?kt:_t;t.generateKey?xt.prototype[n]=function(i,o,a){return r(this,n,!0,"undirected"===(t.type||this.type),null,i,o,a,"update"===e)}:xt.prototype[n]=function(i,o,a,c){return r(this,n,!1,"undirected"===(t.type||this.type),i,o,a,c,"update"===e)}}))})),function(t){Y.forEach((function(e){var n=e.name,r=e.attacher;r(t,n("Node"),I),r(t,n("Source"),R),r(t,n("Target"),2),r(t,n("Opposite"),F)}))}(xt),function(t){J.forEach((function(e){var n=e.name,r=e.attacher;r(t,n("Edge"),"mixed"),r(t,n("DirectedEdge"),"directed"),r(t,n("UndirectedEdge"),"undirected")}))}(xt),function(t){q.forEach((function(e){rt(t,e),function(t,e){var n=e.name,r=e.type,i=e.direction,o="forEach"+n[0].toUpperCase()+n.slice(1,-1);t.prototype[o]=function(t,e,n){if("mixed"===r||"mixed"===this.type||r===this.type){if(1===arguments.length)return tt(!1,this,r,n=t);if(2===arguments.length){t=""+t,n=e;var a=this._nodes.get(t);if(void 0===a)throw new M("Graph.".concat(o,': could not find the "').concat(t,'" node in the graph.'));return et(!1,this.multi,"mixed"===r?this.type:r,i,a,n)}if(3===arguments.length){t=""+t,e=""+e;var c=this._nodes.get(t);if(!c)throw new M("Graph.".concat(o,':  could not find the "').concat(t,'" source node in the graph.'));if(!this._nodes.has(e))throw new M("Graph.".concat(o,':  could not find the "').concat(e,'" target node in the graph.'));return nt(!1,r,this.multi,i,c,e,n)}throw new C("Graph.".concat(o,": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length,")."))}};var a="map"+n[0].toUpperCase()+n.slice(1);t.prototype[a]=function(){var t,e=Array.prototype.slice.call(arguments),n=e.pop();if(0===e.length){var i=0;"directed"!==r&&(i+=this.undirectedSize),"undirected"!==r&&(i+=this.directedSize),t=new Array(i);var a=0;e.push((function(e,r,i,o,c,u,d){t[a++]=n(e,r,i,o,c,u,d)}))}else t=[],e.push((function(e,r,i,o,a,c,u){t.push(n(e,r,i,o,a,c,u))}));return this[o].apply(this,e),t};var c="filter"+n[0].toUpperCase()+n.slice(1);t.prototype[c]=function(){var t=Array.prototype.slice.call(arguments),e=t.pop(),n=[];return t.push((function(t,r,i,o,a,c,u){e(t,r,i,o,a,c,u)&&n.push(t)})),this[o].apply(this,t),n};var u="reduce"+n[0].toUpperCase()+n.slice(1);t.prototype[u]=function(){var t,e,n=Array.prototype.slice.call(arguments);if(n.length<2||n.length>4)throw new C("Graph.".concat(u,": invalid number of arguments (expecting 2, 3 or 4 and got ").concat(n.length,")."));if("function"==typeof n[n.length-1]&&"function"!=typeof n[n.length-2])throw new C("Graph.".concat(u,": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));2===n.length?(t=n[0],e=n[1],n=[]):3===n.length?(t=n[1],e=n[2],n=[n[0]]):4===n.length&&(t=n[2],e=n[3],n=[n[0],n[1]]);var r=e;return n.push((function(e,n,i,o,a,c,u){r=t(r,e,n,i,o,a,c,u)})),this[o].apply(this,n),r}}(t,e),function(t,e){var n=e.name,r=e.type,i=e.direction,o="find"+n[0].toUpperCase()+n.slice(1,-1);t.prototype[o]=function(t,e,n){if("mixed"!==r&&"mixed"!==this.type&&r!==this.type)return!1;if(1===arguments.length)return tt(!0,this,r,n=t);if(2===arguments.length){t=""+t,n=e;var a=this._nodes.get(t);if(void 0===a)throw new M("Graph.".concat(o,': could not find the "').concat(t,'" node in the graph.'));return et(!0,this.multi,"mixed"===r?this.type:r,i,a,n)}if(3===arguments.length){t=""+t,e=""+e;var c=this._nodes.get(t);if(!c)throw new M("Graph.".concat(o,':  could not find the "').concat(t,'" source node in the graph.'));if(!this._nodes.has(e))throw new M("Graph.".concat(o,':  could not find the "').concat(e,'" target node in the graph.'));return nt(!0,r,this.multi,i,c,e,n)}throw new C("Graph.".concat(o,": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length,")."))};var a="some"+n[0].toUpperCase()+n.slice(1,-1);t.prototype[a]=function(){var t=Array.prototype.slice.call(arguments),e=t.pop();return t.push((function(t,n,r,i,o,a,c){return e(t,n,r,i,o,a,c)})),!!this[o].apply(this,t)};var c="every"+n[0].toUpperCase()+n.slice(1,-1);t.prototype[c]=function(){var t=Array.prototype.slice.call(arguments),e=t.pop();return t.push((function(t,n,r,i,o,a,c){return!e(t,n,r,i,o,a,c)})),!this[o].apply(this,t)}}(t,e),it(t,e)}))}(xt),function(t){ot.forEach((function(e){st(t,e),function(t,e){var n=e.name,r=e.type,i=e.direction,o="forEach"+n[0].toUpperCase()+n.slice(1,-1);t.prototype[o]=function(t,e){if("mixed"===r||"mixed"===this.type||r===this.type){t=""+t;var n=this._nodes.get(t);if(void 0===n)throw new M("Graph.".concat(o,': could not find the "').concat(t,'" node in the graph.'));ut(!1,"mixed"===r?this.type:r,i,n,e)}};var a="map"+n[0].toUpperCase()+n.slice(1);t.prototype[a]=function(t,e){var n=[];return this[o](t,(function(t,r){n.push(e(t,r))})),n};var c="filter"+n[0].toUpperCase()+n.slice(1);t.prototype[c]=function(t,e){var n=[];return this[o](t,(function(t,r){e(t,r)&&n.push(t)})),n};var u="reduce"+n[0].toUpperCase()+n.slice(1);t.prototype[u]=function(t,e,n){if(arguments.length<3)throw new C("Graph.".concat(u,": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));var r=n;return this[o](t,(function(t,n){r=e(r,t,n)})),r}}(t,e),function(t,e){var n=e.name,r=e.type,i=e.direction,o=n[0].toUpperCase()+n.slice(1,-1),a="find"+o;t.prototype[a]=function(t,e){if("mixed"===r||"mixed"===this.type||r===this.type){t=""+t;var n=this._nodes.get(t);if(void 0===n)throw new M("Graph.".concat(a,': could not find the "').concat(t,'" node in the graph.'));return ut(!0,"mixed"===r?this.type:r,i,n,e)}};var c="some"+o;t.prototype[c]=function(t,e){return!!this[a](t,e)};var u="every"+o;t.prototype[u]=function(t,e){return!this[a](t,(function(t,n){return!e(t,n)}))}}(t,e),ht(t,e)}))}(xt);var Et=function(t){function e(e){var n=u({type:"directed"},e);if("multi"in n&&!1!==n.multi)throw new C("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if("directed"!==n.type)throw new C('DirectedGraph.from: inconsistent "'+n.type+'" type in given options!');return t.call(this,n)||this}return r(e,t),e}(xt),At=function(t){function e(e){var n=u({type:"undirected"},e);if("multi"in n&&!1!==n.multi)throw new C("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if("undirected"!==n.type)throw new C('UndirectedGraph.from: inconsistent "'+n.type+'" type in given options!');return t.call(this,n)||this}return r(e,t),e}(xt),Lt=function(t){function e(e){var n=u({multi:!0},e);if("multi"in n&&!0!==n.multi)throw new C("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");return t.call(this,n)||this}return r(e,t),e}(xt),St=function(t){function e(e){var n=u({type:"directed",multi:!0},e);if("multi"in n&&!0!==n.multi)throw new C("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if("directed"!==n.type)throw new C('MultiDirectedGraph.from: inconsistent "'+n.type+'" type in given options!');return t.call(this,n)||this}return r(e,t),e}(xt),Dt=function(t){function e(e){var n=u({type:"undirected",multi:!0},e);if("multi"in n&&!0!==n.multi)throw new C("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if("undirected"!==n.type)throw new C('MultiUndirectedGraph.from: inconsistent "'+n.type+'" type in given options!');return t.call(this,n)||this}return r(e,t),e}(xt);function Ut(t){t.from=function(e,n){var r=u({},e.options,n),i=new t(r);return i.import(e),i}}return Ut(xt),Ut(Et),Ut(At),Ut(Lt),Ut(St),Ut(Dt),xt.Graph=xt,xt.DirectedGraph=Et,xt.UndirectedGraph=At,xt.MultiGraph=Lt,xt.MultiDirectedGraph=St,xt.MultiUndirectedGraph=Dt,xt.InvalidArgumentsGraphError=C,xt.NotFoundGraphError=M,xt.UsageGraphError=z,xt}));


},{}],16:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],17:[function(require,module,exports){
'use strict';

function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

var HTML_COLORS = {
  black: "#000000",
  silver: "#C0C0C0",
  gray: "#808080",
  grey: "#808080",
  white: "#FFFFFF",
  maroon: "#800000",
  red: "#FF0000",
  purple: "#800080",
  fuchsia: "#FF00FF",
  green: "#008000",
  lime: "#00FF00",
  olive: "#808000",
  yellow: "#FFFF00",
  navy: "#000080",
  blue: "#0000FF",
  teal: "#008080",
  aqua: "#00FFFF",
  darkblue: "#00008B",
  mediumblue: "#0000CD",
  darkgreen: "#006400",
  darkcyan: "#008B8B",
  deepskyblue: "#00BFFF",
  darkturquoise: "#00CED1",
  mediumspringgreen: "#00FA9A",
  springgreen: "#00FF7F",
  cyan: "#00FFFF",
  midnightblue: "#191970",
  dodgerblue: "#1E90FF",
  lightseagreen: "#20B2AA",
  forestgreen: "#228B22",
  seagreen: "#2E8B57",
  darkslategray: "#2F4F4F",
  darkslategrey: "#2F4F4F",
  limegreen: "#32CD32",
  mediumseagreen: "#3CB371",
  turquoise: "#40E0D0",
  royalblue: "#4169E1",
  steelblue: "#4682B4",
  darkslateblue: "#483D8B",
  mediumturquoise: "#48D1CC",
  indigo: "#4B0082",
  darkolivegreen: "#556B2F",
  cadetblue: "#5F9EA0",
  cornflowerblue: "#6495ED",
  rebeccapurple: "#663399",
  mediumaquamarine: "#66CDAA",
  dimgray: "#696969",
  dimgrey: "#696969",
  slateblue: "#6A5ACD",
  olivedrab: "#6B8E23",
  slategray: "#708090",
  slategrey: "#708090",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  mediumslateblue: "#7B68EE",
  lawngreen: "#7CFC00",
  chartreuse: "#7FFF00",
  aquamarine: "#7FFFD4",
  skyblue: "#87CEEB",
  lightskyblue: "#87CEFA",
  blueviolet: "#8A2BE2",
  darkred: "#8B0000",
  darkmagenta: "#8B008B",
  saddlebrown: "#8B4513",
  darkseagreen: "#8FBC8F",
  lightgreen: "#90EE90",
  mediumpurple: "#9370DB",
  darkviolet: "#9400D3",
  palegreen: "#98FB98",
  darkorchid: "#9932CC",
  yellowgreen: "#9ACD32",
  sienna: "#A0522D",
  brown: "#A52A2A",
  darkgray: "#A9A9A9",
  darkgrey: "#A9A9A9",
  lightblue: "#ADD8E6",
  greenyellow: "#ADFF2F",
  paleturquoise: "#AFEEEE",
  lightsteelblue: "#B0C4DE",
  powderblue: "#B0E0E6",
  firebrick: "#B22222",
  darkgoldenrod: "#B8860B",
  mediumorchid: "#BA55D3",
  rosybrown: "#BC8F8F",
  darkkhaki: "#BDB76B",
  mediumvioletred: "#C71585",
  indianred: "#CD5C5C",
  peru: "#CD853F",
  chocolate: "#D2691E",
  tan: "#D2B48C",
  lightgray: "#D3D3D3",
  lightgrey: "#D3D3D3",
  thistle: "#D8BFD8",
  orchid: "#DA70D6",
  goldenrod: "#DAA520",
  palevioletred: "#DB7093",
  crimson: "#DC143C",
  gainsboro: "#DCDCDC",
  plum: "#DDA0DD",
  burlywood: "#DEB887",
  lightcyan: "#E0FFFF",
  lavender: "#E6E6FA",
  darksalmon: "#E9967A",
  violet: "#EE82EE",
  palegoldenrod: "#EEE8AA",
  lightcoral: "#F08080",
  khaki: "#F0E68C",
  aliceblue: "#F0F8FF",
  honeydew: "#F0FFF0",
  azure: "#F0FFFF",
  sandybrown: "#F4A460",
  wheat: "#F5DEB3",
  beige: "#F5F5DC",
  whitesmoke: "#F5F5F5",
  mintcream: "#F5FFFA",
  ghostwhite: "#F8F8FF",
  salmon: "#FA8072",
  antiquewhite: "#FAEBD7",
  linen: "#FAF0E6",
  lightgoldenrodyellow: "#FAFAD2",
  oldlace: "#FDF5E6",
  magenta: "#FF00FF",
  deeppink: "#FF1493",
  orangered: "#FF4500",
  tomato: "#FF6347",
  hotpink: "#FF69B4",
  coral: "#FF7F50",
  darkorange: "#FF8C00",
  lightsalmon: "#FFA07A",
  orange: "#FFA500",
  lightpink: "#FFB6C1",
  pink: "#FFC0CB",
  gold: "#FFD700",
  peachpuff: "#FFDAB9",
  navajowhite: "#FFDEAD",
  moccasin: "#FFE4B5",
  bisque: "#FFE4C4",
  mistyrose: "#FFE4E1",
  blanchedalmond: "#FFEBCD",
  papayawhip: "#FFEFD5",
  lavenderblush: "#FFF0F5",
  seashell: "#FFF5EE",
  cornsilk: "#FFF8DC",
  lemonchiffon: "#FFFACD",
  floralwhite: "#FFFAF0",
  snow: "#FFFAFA",
  lightyellow: "#FFFFE0",
  ivory: "#FFFFF0"
};

/**
 * Function extracting the color at the given pixel.
 */
function extractPixel(gl, x, y, array) {
  var data = array || new Uint8Array(4);
  gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
  return data;
}

/**
 * Memoized function returning a float-encoded color from various string
 * formats describing colors.
 */
var INT8 = new Int8Array(4);
var INT32 = new Int32Array(INT8.buffer, 0, 1);
var FLOAT32 = new Float32Array(INT8.buffer, 0, 1);
var RGBA_TEST_REGEX = /^\s*rgba?\s*\(/;
var RGBA_EXTRACT_REGEX = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
function parseColor(val) {
  var r = 0; // byte
  var g = 0; // byte
  var b = 0; // byte
  var a = 1; // float

  // Handling hexadecimal notation
  if (val[0] === "#") {
    if (val.length === 4) {
      r = parseInt(val.charAt(1) + val.charAt(1), 16);
      g = parseInt(val.charAt(2) + val.charAt(2), 16);
      b = parseInt(val.charAt(3) + val.charAt(3), 16);
    } else {
      r = parseInt(val.charAt(1) + val.charAt(2), 16);
      g = parseInt(val.charAt(3) + val.charAt(4), 16);
      b = parseInt(val.charAt(5) + val.charAt(6), 16);
    }
    if (val.length === 9) {
      a = parseInt(val.charAt(7) + val.charAt(8), 16) / 255;
    }
  }

  // Handling rgb notation
  else if (RGBA_TEST_REGEX.test(val)) {
    var match = val.match(RGBA_EXTRACT_REGEX);
    if (match) {
      r = +match[1];
      g = +match[2];
      b = +match[3];
      if (match[4]) a = +match[4];
    }
  }
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}
var FLOAT_COLOR_CACHE = {};
for (var htmlColor in HTML_COLORS) {
  FLOAT_COLOR_CACHE[htmlColor] = floatColor(HTML_COLORS[htmlColor]);
  // Replicating cache for hex values for free
  FLOAT_COLOR_CACHE[HTML_COLORS[htmlColor]] = FLOAT_COLOR_CACHE[htmlColor];
}
function rgbaToFloat(r, g, b, a, masking) {
  INT32[0] = a << 24 | b << 16 | g << 8 | r;
  if (masking) INT32[0] = INT32[0] & 0xfeffffff;
  return FLOAT32[0];
}
function floatColor(val) {
  // The html color names are case-insensitive
  val = val.toLowerCase();

  // If the color is already computed, we yield it
  if (typeof FLOAT_COLOR_CACHE[val] !== "undefined") return FLOAT_COLOR_CACHE[val];
  var parsed = parseColor(val);
  var r = parsed.r,
    g = parsed.g,
    b = parsed.b;
  var a = parsed.a;
  a = a * 255 | 0;
  var color = rgbaToFloat(r, g, b, a, true);
  FLOAT_COLOR_CACHE[val] = color;
  return color;
}
function colorToArray(val, masking) {
  FLOAT32[0] = floatColor(val);
  var intValue = INT32[0];
  if (masking) {
    intValue = intValue | 0x01000000;
  }
  var r = intValue & 0xff;
  var g = intValue >> 8 & 0xff;
  var b = intValue >> 16 & 0xff;
  var a = intValue >> 24 & 0xff;
  return [r, g, b, a];
}
var FLOAT_INDEX_CACHE = {};
function indexToColor(index) {
  // If the index is already computed, we yield it
  if (typeof FLOAT_INDEX_CACHE[index] !== "undefined") return FLOAT_INDEX_CACHE[index];

  // To address issue #1397, one strategy is to keep encoding 4 bytes colors,
  // but with alpha hard-set to 1.0 (or 255):
  var r = (index & 0x00ff0000) >>> 16;
  var g = (index & 0x0000ff00) >>> 8;
  var b = index & 0x000000ff;
  var a = 0x000000ff;

  // The original 4 bytes color encoding was the following:
  // const r = (index & 0xff000000) >>> 24;
  // const g = (index & 0x00ff0000) >>> 16;
  // const b = (index & 0x0000ff00) >>> 8;
  // const a = index & 0x000000ff;

  var color = rgbaToFloat(r, g, b, a, true);
  FLOAT_INDEX_CACHE[index] = color;
  return color;
}
function colorToIndex(r, g, b, _a) {
  // As for the function indexToColor, because of #1397 and the "alpha is always
  // 1.0" strategy, we need to fix this function as well:
  return b + (g << 8) + (r << 16);

  // The original 4 bytes color decoding is the following:
  // return a + (b << 8) + (g << 16) + (r << 24);
}
function getPixelColor(gl, frameBuffer, x, y, pixelRatio, downSizingRatio) {
  var bufferX = Math.floor(x / downSizingRatio * pixelRatio);
  var bufferY = Math.floor(gl.drawingBufferHeight / downSizingRatio - y / downSizingRatio * pixelRatio);
  var pixel = new Uint8Array(4);
  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
  gl.readPixels(bufferX, bufferY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
  var _pixel = _slicedToArray(pixel, 4),
    r = _pixel[0],
    g = _pixel[1],
    b = _pixel[2],
    a = _pixel[3];
  return [r, g, b, a];
}

exports.HTML_COLORS = HTML_COLORS;
exports._arrayLikeToArray = _arrayLikeToArray;
exports._slicedToArray = _slicedToArray;
exports._unsupportedIterableToArray = _unsupportedIterableToArray;
exports.colorToArray = colorToArray;
exports.colorToIndex = colorToIndex;
exports.extractPixel = extractPixel;
exports.floatColor = floatColor;
exports.getPixelColor = getPixelColor;
exports.indexToColor = indexToColor;
exports.parseColor = parseColor;
exports.rgbaToFloat = rgbaToFloat;

},{}],18:[function(require,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"dup":17}],19:[function(require,module,exports){
'use strict';

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/**
 * Extends the target array with the given values.
 */
function extend(array, values) {
  var l2 = values.size;
  if (l2 === 0) return;
  var l1 = array.length;
  array.length += l2;
  var i = 0;
  values.forEach(function (value) {
    array[l1 + i] = value;
    i++;
  });
}

/**
 * Checks whether the given value is a plain object.
 */
function isPlainObject(value) {
  return _typeof(value) === "object" && value !== null && value.constructor === Object;
}

/**
 * Helper to use `Object.assign` with more than two objects.
 */
function assign(target) {
  target = target || {};
  for (var i = 0, l = arguments.length <= 1 ? 0 : arguments.length - 1; i < l; i++) {
    var o = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
    if (!o) continue;
    Object.assign(target, o);
  }
  return target;
}

/**
 * Very simple recursive `Object.assign` like function.
 */
function assignDeep(target) {
  target = target || {};
  for (var i = 0, l = arguments.length <= 1 ? 0 : arguments.length - 1; i < l; i++) {
    var o = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
    if (!o) continue;
    for (var k in o) {
      if (isPlainObject(o[k])) {
        target[k] = assignDeep(target[k], o[k]);
      } else {
        target[k] = o[k];
      }
    }
  }
  return target;
}

exports._typeof = _typeof;
exports.assign = assign;
exports.assignDeep = assignDeep;
exports.extend = extend;
exports.isPlainObject = isPlainObject;

},{}],20:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"dup":19}],21:[function(require,module,exports){
'use strict';

var inherits = require('./inherits-6434e089.cjs.prod.js');
var colors = require('./colors-ee2e2828.cjs.prod.js');

function _defineProperty(e, r, t) {
  return (r = inherits._toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = inherits._getPrototypeOf(t)););
  return t;
}

function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}

function _superPropGet(t, o, e, r) {
  var p = _get(inherits._getPrototypeOf(1 & r ? t.prototype : t), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}

function getAttributeItemsCount(attr) {
  return attr.normalized ? 1 : attr.size;
}
function getAttributesItemsCount(attrs) {
  var res = 0;
  attrs.forEach(function (attr) {
    return res += getAttributeItemsCount(attr);
  });
  return res;
}
function loadShader(type, gl, source) {
  var glType = type === "VERTEX" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;

  // Creating the shader
  var shader = gl.createShader(glType);
  if (shader === null) {
    throw new Error("loadShader: error while creating the shader");
  }

  // Loading source
  gl.shaderSource(shader, source);

  // Compiling the shader
  gl.compileShader(shader);

  // Retrieving compilation status
  var successfullyCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  // Throwing if something went awry
  if (!successfullyCompiled) {
    var infoLog = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("loadShader: error while compiling the shader:\n".concat(infoLog, "\n").concat(source));
  }
  return shader;
}
function loadVertexShader(gl, source) {
  return loadShader("VERTEX", gl, source);
}
function loadFragmentShader(gl, source) {
  return loadShader("FRAGMENT", gl, source);
}

/**
 * Function used to load a program.
 */
function loadProgram(gl, shaders) {
  var program = gl.createProgram();
  if (program === null) {
    throw new Error("loadProgram: error while creating the program.");
  }
  var i, l;

  // Attaching the shaders
  for (i = 0, l = shaders.length; i < l; i++) gl.attachShader(program, shaders[i]);
  gl.linkProgram(program);

  // Checking status
  var successfullyLinked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!successfullyLinked) {
    gl.deleteProgram(program);
    throw new Error("loadProgram: error while linking the program.");
  }
  return program;
}
function killProgram(_ref) {
  var gl = _ref.gl,
    buffer = _ref.buffer,
    program = _ref.program,
    vertexShader = _ref.vertexShader,
    fragmentShader = _ref.fragmentShader;
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  gl.deleteProgram(program);
  gl.deleteBuffer(buffer);
}

/**
 * Function use to print a float for inserting in a GLSL program.
 */
function numberToGLSLFloat(n) {
  return n % 1 === 0 ? n.toFixed(1) : n.toString();
}

var PICKING_PREFIX = "#define PICKING_MODE\n";
var SIZE_FACTOR_PER_ATTRIBUTE_TYPE = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, WebGL2RenderingContext.BOOL, 1), WebGL2RenderingContext.BYTE, 1), WebGL2RenderingContext.UNSIGNED_BYTE, 1), WebGL2RenderingContext.SHORT, 2), WebGL2RenderingContext.UNSIGNED_SHORT, 2), WebGL2RenderingContext.INT, 4), WebGL2RenderingContext.UNSIGNED_INT, 4), WebGL2RenderingContext.FLOAT, 4);
var AbstractProgram = /*#__PURE__*/inherits._createClass(function AbstractProgram(_gl, _pickGl, _renderer) {
  inherits._classCallCheck(this, AbstractProgram);
});
var Program = /*#__PURE__*/function () {
  function Program(gl, pickingBuffer, renderer) {
    inherits._classCallCheck(this, Program);
    // GLenum
    _defineProperty(this, "array", new Float32Array());
    _defineProperty(this, "constantArray", new Float32Array());
    _defineProperty(this, "capacity", 0);
    _defineProperty(this, "verticesCount", 0);
    // Reading and caching program definition
    var def = this.getDefinition();
    this.VERTICES = def.VERTICES;
    this.VERTEX_SHADER_SOURCE = def.VERTEX_SHADER_SOURCE;
    this.FRAGMENT_SHADER_SOURCE = def.FRAGMENT_SHADER_SOURCE;
    this.UNIFORMS = def.UNIFORMS;
    this.ATTRIBUTES = def.ATTRIBUTES;
    this.METHOD = def.METHOD;
    this.CONSTANT_ATTRIBUTES = "CONSTANT_ATTRIBUTES" in def ? def.CONSTANT_ATTRIBUTES : [];
    this.CONSTANT_DATA = "CONSTANT_DATA" in def ? def.CONSTANT_DATA : [];
    this.isInstanced = "CONSTANT_ATTRIBUTES" in def;

    // Computing stride
    this.ATTRIBUTES_ITEMS_COUNT = getAttributesItemsCount(this.ATTRIBUTES);
    this.STRIDE = this.VERTICES * this.ATTRIBUTES_ITEMS_COUNT;

    // Members
    this.renderer = renderer;
    this.normalProgram = this.getProgramInfo("normal", gl, def.VERTEX_SHADER_SOURCE, def.FRAGMENT_SHADER_SOURCE, null);
    this.pickProgram = pickingBuffer ? this.getProgramInfo("pick", gl, PICKING_PREFIX + def.VERTEX_SHADER_SOURCE, PICKING_PREFIX + def.FRAGMENT_SHADER_SOURCE, pickingBuffer) : null;

    // For instanced programs:
    if (this.isInstanced) {
      var constantAttributesItemsCount = getAttributesItemsCount(this.CONSTANT_ATTRIBUTES);
      if (this.CONSTANT_DATA.length !== this.VERTICES) throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES, " items, received ").concat(this.CONSTANT_DATA.length, " instead)"));
      this.constantArray = new Float32Array(this.CONSTANT_DATA.length * constantAttributesItemsCount);
      for (var i = 0; i < this.CONSTANT_DATA.length; i++) {
        var vector = this.CONSTANT_DATA[i];
        if (vector.length !== constantAttributesItemsCount) throw new Error("Program: error while getting constant data (one vector has ".concat(vector.length, " items instead of ").concat(constantAttributesItemsCount, ")"));
        for (var j = 0; j < vector.length; j++) this.constantArray[i * constantAttributesItemsCount + j] = vector[j];
      }
      this.STRIDE = this.ATTRIBUTES_ITEMS_COUNT;
    }
  }
  return inherits._createClass(Program, [{
    key: "kill",
    value: function kill() {
      killProgram(this.normalProgram);
      if (this.pickProgram) {
        killProgram(this.pickProgram);
        this.pickProgram = null;
      }
    }
  }, {
    key: "getProgramInfo",
    value: function getProgramInfo(name, gl, vertexShaderSource, fragmentShaderSource, frameBuffer) {
      var def = this.getDefinition();

      // WebGL buffers
      var buffer = gl.createBuffer();
      if (buffer === null) throw new Error("Program: error while creating the WebGL buffer.");

      // Shaders and program
      var vertexShader = loadVertexShader(gl, vertexShaderSource);
      var fragmentShader = loadFragmentShader(gl, fragmentShaderSource);
      var program = loadProgram(gl, [vertexShader, fragmentShader]);

      // Initializing locations
      var uniformLocations = {};
      def.UNIFORMS.forEach(function (uniformName) {
        var location = gl.getUniformLocation(program, uniformName);
        if (location) uniformLocations[uniformName] = location;
      });
      var attributeLocations = {};
      def.ATTRIBUTES.forEach(function (attr) {
        attributeLocations[attr.name] = gl.getAttribLocation(program, attr.name);
      });

      // For instanced programs:
      var constantBuffer;
      if ("CONSTANT_ATTRIBUTES" in def) {
        def.CONSTANT_ATTRIBUTES.forEach(function (attr) {
          attributeLocations[attr.name] = gl.getAttribLocation(program, attr.name);
        });
        constantBuffer = gl.createBuffer();
        if (constantBuffer === null) throw new Error("Program: error while creating the WebGL constant buffer.");
      }
      return {
        name: name,
        program: program,
        gl: gl,
        frameBuffer: frameBuffer,
        buffer: buffer,
        constantBuffer: constantBuffer || {},
        uniformLocations: uniformLocations,
        attributeLocations: attributeLocations,
        isPicking: name === "pick",
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
      };
    }
  }, {
    key: "bindProgram",
    value: function bindProgram(program) {
      var _this = this;
      var offset = 0;
      var gl = program.gl,
        buffer = program.buffer;
      if (!this.isInstanced) {
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        offset = 0;
        this.ATTRIBUTES.forEach(function (attr) {
          return offset += _this.bindAttribute(attr, program, offset);
        });
        gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
      } else {
        // Handle constant data (things that remain unchanged for all items):
        gl.bindBuffer(gl.ARRAY_BUFFER, program.constantBuffer);
        offset = 0;
        this.CONSTANT_ATTRIBUTES.forEach(function (attr) {
          return offset += _this.bindAttribute(attr, program, offset, false);
        });
        gl.bufferData(gl.ARRAY_BUFFER, this.constantArray, gl.STATIC_DRAW);

        // Handle "instance specific" data (things that vary for each item):
        gl.bindBuffer(gl.ARRAY_BUFFER, program.buffer);
        offset = 0;
        this.ATTRIBUTES.forEach(function (attr) {
          return offset += _this.bindAttribute(attr, program, offset, true);
        });
        gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
  }, {
    key: "unbindProgram",
    value: function unbindProgram(program) {
      var _this2 = this;
      if (!this.isInstanced) {
        this.ATTRIBUTES.forEach(function (attr) {
          return _this2.unbindAttribute(attr, program);
        });
      } else {
        this.CONSTANT_ATTRIBUTES.forEach(function (attr) {
          return _this2.unbindAttribute(attr, program, false);
        });
        this.ATTRIBUTES.forEach(function (attr) {
          return _this2.unbindAttribute(attr, program, true);
        });
      }
    }
  }, {
    key: "bindAttribute",
    value: function bindAttribute(attr, program, offset, setDivisor) {
      var sizeFactor = SIZE_FACTOR_PER_ATTRIBUTE_TYPE[attr.type];
      if (typeof sizeFactor !== "number") throw new Error("Program.bind: yet unsupported attribute type \"".concat(attr.type, "\""));
      var location = program.attributeLocations[attr.name];
      var gl = program.gl;
      if (location !== -1) {
        gl.enableVertexAttribArray(location);
        var stride = !this.isInstanced ? this.ATTRIBUTES_ITEMS_COUNT * Float32Array.BYTES_PER_ELEMENT : (setDivisor ? this.ATTRIBUTES_ITEMS_COUNT : getAttributesItemsCount(this.CONSTANT_ATTRIBUTES)) * Float32Array.BYTES_PER_ELEMENT;
        gl.vertexAttribPointer(location, attr.size, attr.type, attr.normalized || false, stride, offset);
        if (this.isInstanced && setDivisor) {
          if (gl instanceof WebGL2RenderingContext) {
            gl.vertexAttribDivisor(location, 1);
          } else {
            var ext = gl.getExtension("ANGLE_instanced_arrays");
            if (ext) ext.vertexAttribDivisorANGLE(location, 1);
          }
        }
      }
      return attr.size * sizeFactor;
    }
  }, {
    key: "unbindAttribute",
    value: function unbindAttribute(attr, program, unsetDivisor) {
      var location = program.attributeLocations[attr.name];
      var gl = program.gl;
      if (location !== -1) {
        gl.disableVertexAttribArray(location);
        if (this.isInstanced && unsetDivisor) {
          if (gl instanceof WebGL2RenderingContext) {
            gl.vertexAttribDivisor(location, 0);
          } else {
            var ext = gl.getExtension("ANGLE_instanced_arrays");
            if (ext) ext.vertexAttribDivisorANGLE(location, 0);
          }
        }
      }
    }
  }, {
    key: "reallocate",
    value: function reallocate(capacity) {
      // If desired capacity has not changed we do nothing
      // NOTE: it's possible here to implement more subtle reallocation schemes
      // when the number of rendered items increase or decrease
      if (capacity === this.capacity) return;
      this.capacity = capacity;
      this.verticesCount = this.VERTICES * capacity;
      this.array = new Float32Array(!this.isInstanced ? this.verticesCount * this.ATTRIBUTES_ITEMS_COUNT : this.capacity * this.ATTRIBUTES_ITEMS_COUNT);
    }
  }, {
    key: "hasNothingToRender",
    value: function hasNothingToRender() {
      return this.verticesCount === 0;
    }
  }, {
    key: "renderProgram",
    value: function renderProgram(params, programInfo) {
      var gl = programInfo.gl,
        program = programInfo.program;

      // With the current fix for #1397, the alpha blending is enabled for the
      // picking layer:
      gl.enable(gl.BLEND);

      // Original code:
      // if (!isPicking) gl.enable(gl.BLEND);
      // else gl.disable(gl.BLEND);

      gl.useProgram(program);
      this.setUniforms(params, programInfo);
      this.drawWebGL(this.METHOD, programInfo);
    }
  }, {
    key: "render",
    value: function render(params) {
      if (this.hasNothingToRender()) return;
      if (this.pickProgram) {
        this.pickProgram.gl.viewport(0, 0, params.width * params.pixelRatio / params.downSizingRatio, params.height * params.pixelRatio / params.downSizingRatio);
        this.bindProgram(this.pickProgram);
        this.renderProgram(_objectSpread2(_objectSpread2({}, params), {}, {
          pixelRatio: params.pixelRatio / params.downSizingRatio
        }), this.pickProgram);
        this.unbindProgram(this.pickProgram);
      }
      this.normalProgram.gl.viewport(0, 0, params.width * params.pixelRatio, params.height * params.pixelRatio);
      this.bindProgram(this.normalProgram);
      this.renderProgram(params, this.normalProgram);
      this.unbindProgram(this.normalProgram);
    }
  }, {
    key: "drawWebGL",
    value: function drawWebGL(method, _ref) {
      var gl = _ref.gl,
        frameBuffer = _ref.frameBuffer;
      gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
      if (!this.isInstanced) {
        gl.drawArrays(method, 0, this.verticesCount);
      } else {
        if (gl instanceof WebGL2RenderingContext) {
          gl.drawArraysInstanced(method, 0, this.VERTICES, this.capacity);
        } else {
          var ext = gl.getExtension("ANGLE_instanced_arrays");
          if (ext) ext.drawArraysInstancedANGLE(method, 0, this.VERTICES, this.capacity);
        }
      }
    }
  }]);
}();

var AbstractNodeProgram = /*#__PURE__*/function (_AbstractProgram) {
  function AbstractNodeProgram() {
    inherits._classCallCheck(this, AbstractNodeProgram);
    return inherits._callSuper(this, AbstractNodeProgram, arguments);
  }
  inherits._inherits(AbstractNodeProgram, _AbstractProgram);
  return inherits._createClass(AbstractNodeProgram);
}(AbstractProgram);
var NodeProgram = /*#__PURE__*/function (_ref) {
  function NodeProgram() {
    inherits._classCallCheck(this, NodeProgram);
    return inherits._callSuper(this, NodeProgram, arguments);
  }
  inherits._inherits(NodeProgram, _ref);
  return inherits._createClass(NodeProgram, [{
    key: "kill",
    value: function kill() {
      _superPropGet(NodeProgram, "kill", this, 3)([]);
    }
  }, {
    key: "process",
    value: function process(nodeIndex, offset, data) {
      var i = offset * this.STRIDE;
      // NOTE: dealing with hidden items automatically
      if (data.hidden) {
        for (var l = i + this.STRIDE; i < l; i++) {
          this.array[i] = 0;
        }
        return;
      }
      return this.processVisibleItem(colors.indexToColor(nodeIndex), i, data);
    }
  }]);
}(Program);
/**
 * Helper function combining two or more programs into a single compound one.
 * Note that this is more a quick & easy way to combine program than a really
 * performant option. More performant programs can be written entirely.
 *
 * @param  {array}    programClasses - Program classes to combine.
 * @param  {function} drawLabel - An optional node "draw label" function.
 * @param  {function} drawHover - An optional node "draw hover" function.
 * @return {function}
 */
function createNodeCompoundProgram(programClasses, drawLabel, drawHover) {
  return /*#__PURE__*/function () {
    function NodeCompoundProgram(gl, pickingBuffer, renderer) {
      inherits._classCallCheck(this, NodeCompoundProgram);
      _defineProperty(this, "drawLabel", drawLabel);
      _defineProperty(this, "drawHover", drawHover);
      this.programs = programClasses.map(function (Program) {
        return new Program(gl, pickingBuffer, renderer);
      });
    }
    return inherits._createClass(NodeCompoundProgram, [{
      key: "reallocate",
      value: function reallocate(capacity) {
        this.programs.forEach(function (program) {
          return program.reallocate(capacity);
        });
      }
    }, {
      key: "process",
      value: function process(nodeIndex, offset, data) {
        this.programs.forEach(function (program) {
          return program.process(nodeIndex, offset, data);
        });
      }
    }, {
      key: "render",
      value: function render(params) {
        this.programs.forEach(function (program) {
          return program.render(params);
        });
      }
    }, {
      key: "kill",
      value: function kill() {
        this.programs.forEach(function (program) {
          return program.kill();
        });
      }
    }]);
  }();
}

var AbstractEdgeProgram = /*#__PURE__*/function (_AbstractProgram) {
  function AbstractEdgeProgram() {
    inherits._classCallCheck(this, AbstractEdgeProgram);
    return inherits._callSuper(this, AbstractEdgeProgram, arguments);
  }
  inherits._inherits(AbstractEdgeProgram, _AbstractProgram);
  return inherits._createClass(AbstractEdgeProgram);
}(AbstractProgram);
var EdgeProgram = /*#__PURE__*/function (_ref) {
  function EdgeProgram() {
    var _this;
    inherits._classCallCheck(this, EdgeProgram);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = inherits._callSuper(this, EdgeProgram, [].concat(args));
    _defineProperty(_this, "drawLabel", undefined);
    return _this;
  }
  inherits._inherits(EdgeProgram, _ref);
  return inherits._createClass(EdgeProgram, [{
    key: "kill",
    value: function kill() {
      _superPropGet(EdgeProgram, "kill", this, 3)([]);
    }
  }, {
    key: "process",
    value: function process(edgeIndex, offset, sourceData, targetData, data) {
      var i = offset * this.STRIDE;
      // NOTE: dealing with hidden items automatically
      if (data.hidden || sourceData.hidden || targetData.hidden) {
        for (var l = i + this.STRIDE; i < l; i++) {
          this.array[i] = 0;
        }
        return;
      }
      return this.processVisibleItem(colors.indexToColor(edgeIndex), i, sourceData, targetData, data);
    }
  }]);
}(Program);
/**
 * Helper function combining two or more programs into a single compound one.
 * Note that this is more a quick & easy way to combine program than a really
 * performant option. More performant programs can be written entirely.
 *
 * @param  {array}    programClasses - Program classes to combine.
 * @param  {function} drawLabel - An optional edge "draw label" function.
 * @return {function}
 */
function createEdgeCompoundProgram(programClasses, drawLabel) {
  return /*#__PURE__*/function () {
    function EdgeCompoundProgram(gl, pickingBuffer, renderer) {
      inherits._classCallCheck(this, EdgeCompoundProgram);
      _defineProperty(this, "drawLabel", drawLabel);
      this.programs = programClasses.map(function (Program) {
        return new Program(gl, pickingBuffer, renderer);
      });
    }
    return inherits._createClass(EdgeCompoundProgram, [{
      key: "reallocate",
      value: function reallocate(capacity) {
        this.programs.forEach(function (program) {
          return program.reallocate(capacity);
        });
      }
    }, {
      key: "process",
      value: function process(edgeIndex, offset, sourceData, targetData, data) {
        this.programs.forEach(function (program) {
          return program.process(edgeIndex, offset, sourceData, targetData, data);
        });
      }
    }, {
      key: "render",
      value: function render(params) {
        this.programs.forEach(function (program) {
          return program.render(params);
        });
      }
    }, {
      key: "kill",
      value: function kill() {
        this.programs.forEach(function (program) {
          return program.kill();
        });
      }
    }]);
  }();
}

function drawStraightEdgeLabel(context, edgeData, sourceData, targetData, settings) {
  var size = settings.edgeLabelSize,
    font = settings.edgeLabelFont,
    weight = settings.edgeLabelWeight,
    color = settings.edgeLabelColor.attribute ? edgeData[settings.edgeLabelColor.attribute] || settings.edgeLabelColor.color || "#000" : settings.edgeLabelColor.color;
  var label = edgeData.label;
  if (!label) return;
  context.fillStyle = color;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);

  // Computing positions without considering nodes sizes:
  var sSize = sourceData.size;
  var tSize = targetData.size;
  var sx = sourceData.x;
  var sy = sourceData.y;
  var tx = targetData.x;
  var ty = targetData.y;
  var cx = (sx + tx) / 2;
  var cy = (sy + ty) / 2;
  var dx = tx - sx;
  var dy = ty - sy;
  var d = Math.sqrt(dx * dx + dy * dy);
  if (d < sSize + tSize) return;

  // Adding nodes sizes:
  sx += dx * sSize / d;
  sy += dy * sSize / d;
  tx -= dx * tSize / d;
  ty -= dy * tSize / d;
  cx = (sx + tx) / 2;
  cy = (sy + ty) / 2;
  dx = tx - sx;
  dy = ty - sy;
  d = Math.sqrt(dx * dx + dy * dy);

  // Handling ellipsis
  var textLength = context.measureText(label).width;
  if (textLength > d) {
    var ellipsis = "…";
    label = label + ellipsis;
    textLength = context.measureText(label).width;
    while (textLength > d && label.length > 1) {
      label = label.slice(0, -2) + ellipsis;
      textLength = context.measureText(label).width;
    }
    if (label.length < 4) return;
  }
  var angle;
  if (dx > 0) {
    if (dy > 0) angle = Math.acos(dx / d);else angle = Math.asin(dy / d);
  } else {
    if (dy > 0) angle = Math.acos(dx / d) + Math.PI;else angle = Math.asin(dx / d) + Math.PI / 2;
  }
  context.save();
  context.translate(cx, cy);
  context.rotate(angle);
  context.fillText(label, -textLength / 2, edgeData.size / 2 + size);
  context.restore();
}

function drawDiscNodeLabel(context, data, settings) {
  if (!data.label) return;
  var size = settings.labelSize,
    font = settings.labelFont,
    weight = settings.labelWeight,
    color = settings.labelColor.attribute ? data[settings.labelColor.attribute] || settings.labelColor.color || "#000" : settings.labelColor.color;
  context.fillStyle = color;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
  context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
}

/**
 * Draw an hovered node.
 * - if there is no label => display a shadow on the node
 * - if the label box is bigger than node size => display a label box that contains the node with a shadow
 * - else node with shadow and the label box
 */
function drawDiscNodeHover(context, data, settings) {
  var size = settings.labelSize,
    font = settings.labelFont,
    weight = settings.labelWeight;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);

  // Then we draw the label background
  context.fillStyle = "#FFF";
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 8;
  context.shadowColor = "#000";
  var PADDING = 2;
  if (typeof data.label === "string") {
    var textWidth = context.measureText(data.label).width,
      boxWidth = Math.round(textWidth + 5),
      boxHeight = Math.round(size + 2 * PADDING),
      radius = Math.max(data.size, size / 2) + PADDING;
    var angleRadian = Math.asin(boxHeight / 2 / radius);
    var xDeltaCoord = Math.sqrt(Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2)));
    context.beginPath();
    context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
    context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
    context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
    context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
    context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
    context.closePath();
    context.fill();
  } else {
    context.beginPath();
    context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  }
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;

  // And finally we draw the label
  drawDiscNodeLabel(context, data, settings);
}

// language=GLSL
var SHADER_SOURCE$6 = /*glsl*/"\nprecision highp float;\n\nvarying vec4 v_color;\nvarying vec2 v_diffVector;\nvarying float v_radius;\n\nuniform float u_correctionRatio;\n\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float border = u_correctionRatio * 2.0;\n  float dist = length(v_diffVector) - v_radius + border;\n\n  // No antialiasing for picking mode:\n  #ifdef PICKING_MODE\n  if (dist > border)\n    gl_FragColor = transparent;\n  else\n    gl_FragColor = v_color;\n\n  #else\n  float t = 0.0;\n  if (dist > border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / border;\n\n  gl_FragColor = mix(v_color, transparent, t);\n  #endif\n}\n";
var FRAGMENT_SHADER_SOURCE$2 = SHADER_SOURCE$6;

// language=GLSL
var SHADER_SOURCE$5 = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_position;\nattribute float a_size;\nattribute float a_angle;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_diffVector;\nvarying float v_radius;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;\n  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));\n  vec2 position = a_position + diffVector;\n  gl_Position = vec4(\n    (u_matrix * vec3(position, 1)).xy,\n    0,\n    1\n  );\n\n  v_diffVector = diffVector;\n  v_radius = size / 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$3 = SHADER_SOURCE$5;

var _WebGLRenderingContex$3 = WebGLRenderingContext,
  UNSIGNED_BYTE$3 = _WebGLRenderingContex$3.UNSIGNED_BYTE,
  FLOAT$3 = _WebGLRenderingContex$3.FLOAT;
var UNIFORMS$3 = ["u_sizeRatio", "u_correctionRatio", "u_matrix"];
var NodeCircleProgram = /*#__PURE__*/function (_NodeProgram) {
  function NodeCircleProgram() {
    inherits._classCallCheck(this, NodeCircleProgram);
    return inherits._callSuper(this, NodeCircleProgram, arguments);
  }
  inherits._inherits(NodeCircleProgram, _NodeProgram);
  return inherits._createClass(NodeCircleProgram, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 3,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$3,
        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$2,
        METHOD: WebGLRenderingContext.TRIANGLES,
        UNIFORMS: UNIFORMS$3,
        ATTRIBUTES: [{
          name: "a_position",
          size: 2,
          type: FLOAT$3
        }, {
          name: "a_size",
          size: 1,
          type: FLOAT$3
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE$3,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE$3,
          normalized: true
        }],
        CONSTANT_ATTRIBUTES: [{
          name: "a_angle",
          size: 1,
          type: FLOAT$3
        }],
        CONSTANT_DATA: [[NodeCircleProgram.ANGLE_1], [NodeCircleProgram.ANGLE_2], [NodeCircleProgram.ANGLE_3]]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(nodeIndex, startIndex, data) {
      var array = this.array;
      var color = colors.floatColor(data.color);
      array[startIndex++] = data.x;
      array[startIndex++] = data.y;
      array[startIndex++] = data.size;
      array[startIndex++] = color;
      array[startIndex++] = nodeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(params, _ref) {
      var gl = _ref.gl,
        uniformLocations = _ref.uniformLocations;
      var u_sizeRatio = uniformLocations.u_sizeRatio,
        u_correctionRatio = uniformLocations.u_correctionRatio,
        u_matrix = uniformLocations.u_matrix;
      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
    }
  }]);
}(NodeProgram);
_defineProperty(NodeCircleProgram, "ANGLE_1", 0);
_defineProperty(NodeCircleProgram, "ANGLE_2", 2 * Math.PI / 3);
_defineProperty(NodeCircleProgram, "ANGLE_3", 4 * Math.PI / 3);

// language=GLSL
var SHADER_SOURCE$4 = /*glsl*/"\nprecision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
var FRAGMENT_SHADER_SOURCE$1 = SHADER_SOURCE$4;

// language=GLSL
var SHADER_SOURCE$3 = /*glsl*/"\nattribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_radius;\nattribute vec3 a_barycentric;\n\n#ifdef PICKING_MODE\nattribute vec4 a_id;\n#else\nattribute vec4 a_color;\n#endif\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_lengthToThicknessRatio;\nuniform float u_widenessToThicknessRatio;\n\nvarying vec4 v_color;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl and\n  // edge.clamped.vert.glsl. Please read it to get better comments on what's\n  // happening:\n  float pixelsThickness = max(normalLength / u_sizeRatio, minThickness);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float webGLNodeRadius = a_radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n  float webGLArrowHeadThickness = webGLThickness * u_widenessToThicknessRatio;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * (webGLNodeRadius * unitNormal.y)\n    + db * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y + webGLArrowHeadThickness * unitNormal.x)\n    + dc * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y - webGLArrowHeadThickness * unitNormal.x),\n\n      da * (-webGLNodeRadius * unitNormal.x)\n    + db * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x + webGLArrowHeadThickness * unitNormal.y)\n    + dc * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x - webGLArrowHeadThickness * unitNormal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$2 = SHADER_SOURCE$3;

var _WebGLRenderingContex$2 = WebGLRenderingContext,
  UNSIGNED_BYTE$2 = _WebGLRenderingContex$2.UNSIGNED_BYTE,
  FLOAT$2 = _WebGLRenderingContex$2.FLOAT;
var UNIFORMS$2 = ["u_matrix", "u_sizeRatio", "u_correctionRatio", "u_minEdgeThickness", "u_lengthToThicknessRatio", "u_widenessToThicknessRatio"];
var DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS = {
  extremity: "target",
  lengthToThicknessRatio: 2.5,
  widenessToThicknessRatio: 2
};
function createEdgeArrowHeadProgram(inputOptions) {
  var options = _objectSpread2(_objectSpread2({}, DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS), inputOptions || {});
  return /*#__PURE__*/function (_EdgeProgram) {
    function EdgeArrowHeadProgram() {
      inherits._classCallCheck(this, EdgeArrowHeadProgram);
      return inherits._callSuper(this, EdgeArrowHeadProgram, arguments);
    }
    inherits._inherits(EdgeArrowHeadProgram, _EdgeProgram);
    return inherits._createClass(EdgeArrowHeadProgram, [{
      key: "getDefinition",
      value: function getDefinition() {
        return {
          VERTICES: 3,
          VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$2,
          FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$1,
          METHOD: WebGLRenderingContext.TRIANGLES,
          UNIFORMS: UNIFORMS$2,
          ATTRIBUTES: [{
            name: "a_position",
            size: 2,
            type: FLOAT$2
          }, {
            name: "a_normal",
            size: 2,
            type: FLOAT$2
          }, {
            name: "a_radius",
            size: 1,
            type: FLOAT$2
          }, {
            name: "a_color",
            size: 4,
            type: UNSIGNED_BYTE$2,
            normalized: true
          }, {
            name: "a_id",
            size: 4,
            type: UNSIGNED_BYTE$2,
            normalized: true
          }],
          CONSTANT_ATTRIBUTES: [{
            name: "a_barycentric",
            size: 3,
            type: FLOAT$2
          }],
          CONSTANT_DATA: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
        };
      }
    }, {
      key: "processVisibleItem",
      value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
        if (options.extremity === "source") {
          var _ref = [targetData, sourceData];
          sourceData = _ref[0];
          targetData = _ref[1];
        }
        var thickness = data.size || 1;
        var radius = targetData.size || 1;
        var x1 = sourceData.x;
        var y1 = sourceData.y;
        var x2 = targetData.x;
        var y2 = targetData.y;
        var color = colors.floatColor(data.color);

        // Computing normals
        var dx = x2 - x1;
        var dy = y2 - y1;
        var len = dx * dx + dy * dy;
        var n1 = 0;
        var n2 = 0;
        if (len) {
          len = 1 / Math.sqrt(len);
          n1 = -dy * len * thickness;
          n2 = dx * len * thickness;
        }
        var array = this.array;
        array[startIndex++] = x2;
        array[startIndex++] = y2;
        array[startIndex++] = -n1;
        array[startIndex++] = -n2;
        array[startIndex++] = radius;
        array[startIndex++] = color;
        array[startIndex++] = edgeIndex;
      }
    }, {
      key: "setUniforms",
      value: function setUniforms(params, _ref2) {
        var gl = _ref2.gl,
          uniformLocations = _ref2.uniformLocations;
        var u_matrix = uniformLocations.u_matrix,
          u_sizeRatio = uniformLocations.u_sizeRatio,
          u_correctionRatio = uniformLocations.u_correctionRatio,
          u_minEdgeThickness = uniformLocations.u_minEdgeThickness,
          u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio,
          u_widenessToThicknessRatio = uniformLocations.u_widenessToThicknessRatio;
        gl.uniformMatrix3fv(u_matrix, false, params.matrix);
        gl.uniform1f(u_sizeRatio, params.sizeRatio);
        gl.uniform1f(u_correctionRatio, params.correctionRatio);
        gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
        gl.uniform1f(u_lengthToThicknessRatio, options.lengthToThicknessRatio);
        gl.uniform1f(u_widenessToThicknessRatio, options.widenessToThicknessRatio);
      }
    }]);
  }(EdgeProgram);
}
var EdgeArrowHeadProgram = createEdgeArrowHeadProgram();
var EdgeArrowHeadProgram$1 = EdgeArrowHeadProgram;

// language=GLSL
var SHADER_SOURCE$2 = /*glsl*/"\nprecision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  // We only handle antialiasing for normal mode:\n  #ifdef PICKING_MODE\n  gl_FragColor = v_color;\n  #else\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - v_feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, transparent, t);\n  #endif\n}\n";
var FRAGMENT_SHADER_SOURCE = SHADER_SOURCE$2;

// language=GLSL
var SHADER_SOURCE$1 = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\nattribute float a_radius;\nattribute float a_radiusCoef;\n\nuniform mat3 u_matrix;\nuniform float u_zoomRatio;\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_lengthToThicknessRatio;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  float radius = a_radius * a_radiusCoef;\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here, we move the point to leave space for the arrow head:\n  float direction = sign(radius);\n  float webGLNodeRadius = direction * radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n\n  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (webGLNodeRadius + webGLArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + compensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$1 = SHADER_SOURCE$1;

var _WebGLRenderingContex$1 = WebGLRenderingContext,
  UNSIGNED_BYTE$1 = _WebGLRenderingContex$1.UNSIGNED_BYTE,
  FLOAT$1 = _WebGLRenderingContex$1.FLOAT;
var UNIFORMS$1 = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness", "u_lengthToThicknessRatio"];
var DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS = {
  lengthToThicknessRatio: DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS.lengthToThicknessRatio
};
function createEdgeClampedProgram(inputOptions) {
  var options = _objectSpread2(_objectSpread2({}, DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS), inputOptions || {});
  return /*#__PURE__*/function (_EdgeProgram) {
    function EdgeClampedProgram() {
      inherits._classCallCheck(this, EdgeClampedProgram);
      return inherits._callSuper(this, EdgeClampedProgram, arguments);
    }
    inherits._inherits(EdgeClampedProgram, _EdgeProgram);
    return inherits._createClass(EdgeClampedProgram, [{
      key: "getDefinition",
      value: function getDefinition() {
        return {
          VERTICES: 6,
          VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$1,
          FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE,
          METHOD: WebGLRenderingContext.TRIANGLES,
          UNIFORMS: UNIFORMS$1,
          ATTRIBUTES: [{
            name: "a_positionStart",
            size: 2,
            type: FLOAT$1
          }, {
            name: "a_positionEnd",
            size: 2,
            type: FLOAT$1
          }, {
            name: "a_normal",
            size: 2,
            type: FLOAT$1
          }, {
            name: "a_color",
            size: 4,
            type: UNSIGNED_BYTE$1,
            normalized: true
          }, {
            name: "a_id",
            size: 4,
            type: UNSIGNED_BYTE$1,
            normalized: true
          }, {
            name: "a_radius",
            size: 1,
            type: FLOAT$1
          }],
          CONSTANT_ATTRIBUTES: [
          // If 0, then position will be a_positionStart
          // If 1, then position will be a_positionEnd
          {
            name: "a_positionCoef",
            size: 1,
            type: FLOAT$1
          }, {
            name: "a_normalCoef",
            size: 1,
            type: FLOAT$1
          }, {
            name: "a_radiusCoef",
            size: 1,
            type: FLOAT$1
          }],
          CONSTANT_DATA: [[0, 1, 0], [0, -1, 0], [1, 1, 1], [1, 1, 1], [0, -1, 0], [1, -1, -1]]
        };
      }
    }, {
      key: "processVisibleItem",
      value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
        var thickness = data.size || 1;
        var x1 = sourceData.x;
        var y1 = sourceData.y;
        var x2 = targetData.x;
        var y2 = targetData.y;
        var color = colors.floatColor(data.color);

        // Computing normals
        var dx = x2 - x1;
        var dy = y2 - y1;
        var radius = targetData.size || 1;
        var len = dx * dx + dy * dy;
        var n1 = 0;
        var n2 = 0;
        if (len) {
          len = 1 / Math.sqrt(len);
          n1 = -dy * len * thickness;
          n2 = dx * len * thickness;
        }
        var array = this.array;
        array[startIndex++] = x1;
        array[startIndex++] = y1;
        array[startIndex++] = x2;
        array[startIndex++] = y2;
        array[startIndex++] = n1;
        array[startIndex++] = n2;
        array[startIndex++] = color;
        array[startIndex++] = edgeIndex;
        array[startIndex++] = radius;
      }
    }, {
      key: "setUniforms",
      value: function setUniforms(params, _ref) {
        var gl = _ref.gl,
          uniformLocations = _ref.uniformLocations;
        var u_matrix = uniformLocations.u_matrix,
          u_zoomRatio = uniformLocations.u_zoomRatio,
          u_feather = uniformLocations.u_feather,
          u_pixelRatio = uniformLocations.u_pixelRatio,
          u_correctionRatio = uniformLocations.u_correctionRatio,
          u_sizeRatio = uniformLocations.u_sizeRatio,
          u_minEdgeThickness = uniformLocations.u_minEdgeThickness,
          u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio;
        gl.uniformMatrix3fv(u_matrix, false, params.matrix);
        gl.uniform1f(u_zoomRatio, params.zoomRatio);
        gl.uniform1f(u_sizeRatio, params.sizeRatio);
        gl.uniform1f(u_correctionRatio, params.correctionRatio);
        gl.uniform1f(u_pixelRatio, params.pixelRatio);
        gl.uniform1f(u_feather, params.antiAliasingFeather);
        gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
        gl.uniform1f(u_lengthToThicknessRatio, options.lengthToThicknessRatio);
      }
    }]);
  }(EdgeProgram);
}
var EdgeClampedProgram = createEdgeClampedProgram();
var EdgeClampedProgram$1 = EdgeClampedProgram;

function createEdgeArrowProgram(inputOptions) {
  return createEdgeCompoundProgram([createEdgeClampedProgram(inputOptions), createEdgeArrowHeadProgram(inputOptions)]);
}
var EdgeArrowProgram = createEdgeArrowProgram();
var EdgeArrowProgram$1 = EdgeArrowProgram;

// language=GLSL
var SHADER_SOURCE = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_zoomRatio;\nuniform float u_pixelRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // We require edges to be at least \"minThickness\" pixels thick *on screen*\n  // (so we need to compensate the size ratio):\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n\n  // Then, we need to retrieve the normalized thickness of the edge in the WebGL\n  // referential (in a ([0, 1], [0, 1]) space), using our \"magic\" correction\n  // ratio:\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness, 1)).xy, 0, 1);\n\n  // For the fragment shader though, we need a thickness that takes the \"magic\"\n  // correction ratio into account (as in webGLThickness), but so that the\n  // antialiasing effect does not depend on the zoom level. So here's yet\n  // another thickness version:\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE = SHADER_SOURCE;

var _WebGLRenderingContex = WebGLRenderingContext,
  UNSIGNED_BYTE = _WebGLRenderingContex.UNSIGNED_BYTE,
  FLOAT = _WebGLRenderingContex.FLOAT;
var UNIFORMS = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness"];
var EdgeRectangleProgram = /*#__PURE__*/function (_EdgeProgram) {
  function EdgeRectangleProgram() {
    inherits._classCallCheck(this, EdgeRectangleProgram);
    return inherits._callSuper(this, EdgeRectangleProgram, arguments);
  }
  inherits._inherits(EdgeRectangleProgram, _EdgeProgram);
  return inherits._createClass(EdgeRectangleProgram, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 6,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE,
        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE,
        METHOD: WebGLRenderingContext.TRIANGLES,
        UNIFORMS: UNIFORMS,
        ATTRIBUTES: [{
          name: "a_positionStart",
          size: 2,
          type: FLOAT
        }, {
          name: "a_positionEnd",
          size: 2,
          type: FLOAT
        }, {
          name: "a_normal",
          size: 2,
          type: FLOAT
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE,
          normalized: true
        }],
        CONSTANT_ATTRIBUTES: [
        // If 0, then position will be a_positionStart
        // If 2, then position will be a_positionEnd
        {
          name: "a_positionCoef",
          size: 1,
          type: FLOAT
        }, {
          name: "a_normalCoef",
          size: 1,
          type: FLOAT
        }],
        CONSTANT_DATA: [[0, 1], [0, -1], [1, 1], [1, 1], [0, -1], [1, -1]]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
      var thickness = data.size || 1;
      var x1 = sourceData.x;
      var y1 = sourceData.y;
      var x2 = targetData.x;
      var y2 = targetData.y;
      var color = colors.floatColor(data.color);

      // Computing normals
      var dx = x2 - x1;
      var dy = y2 - y1;
      var len = dx * dx + dy * dy;
      var n1 = 0;
      var n2 = 0;
      if (len) {
        len = 1 / Math.sqrt(len);
        n1 = -dy * len * thickness;
        n2 = dx * len * thickness;
      }
      var array = this.array;
      array[startIndex++] = x1;
      array[startIndex++] = y1;
      array[startIndex++] = x2;
      array[startIndex++] = y2;
      array[startIndex++] = n1;
      array[startIndex++] = n2;
      array[startIndex++] = color;
      array[startIndex++] = edgeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(params, _ref) {
      var gl = _ref.gl,
        uniformLocations = _ref.uniformLocations;
      var u_matrix = uniformLocations.u_matrix,
        u_zoomRatio = uniformLocations.u_zoomRatio,
        u_feather = uniformLocations.u_feather,
        u_pixelRatio = uniformLocations.u_pixelRatio,
        u_correctionRatio = uniformLocations.u_correctionRatio,
        u_sizeRatio = uniformLocations.u_sizeRatio,
        u_minEdgeThickness = uniformLocations.u_minEdgeThickness;
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
      gl.uniform1f(u_zoomRatio, params.zoomRatio);
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      gl.uniform1f(u_pixelRatio, params.pixelRatio);
      gl.uniform1f(u_feather, params.antiAliasingFeather);
      gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
    }
  }]);
}(EdgeProgram);

exports.AbstractEdgeProgram = AbstractEdgeProgram;
exports.AbstractNodeProgram = AbstractNodeProgram;
exports.AbstractProgram = AbstractProgram;
exports.DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS = DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS;
exports.DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS = DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS;
exports.EdgeArrowHeadProgram = EdgeArrowHeadProgram$1;
exports.EdgeArrowProgram = EdgeArrowProgram$1;
exports.EdgeClampedProgram = EdgeClampedProgram$1;
exports.EdgeProgram = EdgeProgram;
exports.EdgeRectangleProgram = EdgeRectangleProgram;
exports.FRAGMENT_SHADER_SOURCE = FRAGMENT_SHADER_SOURCE;
exports.NodeCircleProgram = NodeCircleProgram;
exports.NodeProgram = NodeProgram;
exports.Program = Program;
exports._defineProperty = _defineProperty;
exports._objectSpread2 = _objectSpread2;
exports.createEdgeArrowHeadProgram = createEdgeArrowHeadProgram;
exports.createEdgeArrowProgram = createEdgeArrowProgram;
exports.createEdgeClampedProgram = createEdgeClampedProgram;
exports.createEdgeCompoundProgram = createEdgeCompoundProgram;
exports.createNodeCompoundProgram = createNodeCompoundProgram;
exports.drawDiscNodeHover = drawDiscNodeHover;
exports.drawDiscNodeLabel = drawDiscNodeLabel;
exports.drawStraightEdgeLabel = drawStraightEdgeLabel;
exports.getAttributeItemsCount = getAttributeItemsCount;
exports.getAttributesItemsCount = getAttributesItemsCount;
exports.killProgram = killProgram;
exports.loadFragmentShader = loadFragmentShader;
exports.loadProgram = loadProgram;
exports.loadVertexShader = loadVertexShader;
exports.numberToGLSLFloat = numberToGLSLFloat;

},{"./colors-ee2e2828.cjs.prod.js":17,"./inherits-6434e089.cjs.prod.js":24}],22:[function(require,module,exports){
'use strict';

var inherits = require('./inherits-04acba6b.cjs.dev.js');
var colors = require('./colors-fe6de9d2.cjs.dev.js');

function _defineProperty(e, r, t) {
  return (r = inherits._toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = inherits._getPrototypeOf(t)););
  return t;
}

function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}

function _superPropGet(t, o, e, r) {
  var p = _get(inherits._getPrototypeOf(1 & r ? t.prototype : t), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}

function getAttributeItemsCount(attr) {
  return attr.normalized ? 1 : attr.size;
}
function getAttributesItemsCount(attrs) {
  var res = 0;
  attrs.forEach(function (attr) {
    return res += getAttributeItemsCount(attr);
  });
  return res;
}
function loadShader(type, gl, source) {
  var glType = type === "VERTEX" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;

  // Creating the shader
  var shader = gl.createShader(glType);
  if (shader === null) {
    throw new Error("loadShader: error while creating the shader");
  }

  // Loading source
  gl.shaderSource(shader, source);

  // Compiling the shader
  gl.compileShader(shader);

  // Retrieving compilation status
  var successfullyCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  // Throwing if something went awry
  if (!successfullyCompiled) {
    var infoLog = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("loadShader: error while compiling the shader:\n".concat(infoLog, "\n").concat(source));
  }
  return shader;
}
function loadVertexShader(gl, source) {
  return loadShader("VERTEX", gl, source);
}
function loadFragmentShader(gl, source) {
  return loadShader("FRAGMENT", gl, source);
}

/**
 * Function used to load a program.
 */
function loadProgram(gl, shaders) {
  var program = gl.createProgram();
  if (program === null) {
    throw new Error("loadProgram: error while creating the program.");
  }
  var i, l;

  // Attaching the shaders
  for (i = 0, l = shaders.length; i < l; i++) gl.attachShader(program, shaders[i]);
  gl.linkProgram(program);

  // Checking status
  var successfullyLinked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!successfullyLinked) {
    gl.deleteProgram(program);
    throw new Error("loadProgram: error while linking the program.");
  }
  return program;
}
function killProgram(_ref) {
  var gl = _ref.gl,
    buffer = _ref.buffer,
    program = _ref.program,
    vertexShader = _ref.vertexShader,
    fragmentShader = _ref.fragmentShader;
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  gl.deleteProgram(program);
  gl.deleteBuffer(buffer);
}

/**
 * Function use to print a float for inserting in a GLSL program.
 */
function numberToGLSLFloat(n) {
  return n % 1 === 0 ? n.toFixed(1) : n.toString();
}

var PICKING_PREFIX = "#define PICKING_MODE\n";
var SIZE_FACTOR_PER_ATTRIBUTE_TYPE = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, WebGL2RenderingContext.BOOL, 1), WebGL2RenderingContext.BYTE, 1), WebGL2RenderingContext.UNSIGNED_BYTE, 1), WebGL2RenderingContext.SHORT, 2), WebGL2RenderingContext.UNSIGNED_SHORT, 2), WebGL2RenderingContext.INT, 4), WebGL2RenderingContext.UNSIGNED_INT, 4), WebGL2RenderingContext.FLOAT, 4);
var AbstractProgram = /*#__PURE__*/inherits._createClass(function AbstractProgram(_gl, _pickGl, _renderer) {
  inherits._classCallCheck(this, AbstractProgram);
});
var Program = /*#__PURE__*/function () {
  function Program(gl, pickingBuffer, renderer) {
    inherits._classCallCheck(this, Program);
    // GLenum
    _defineProperty(this, "array", new Float32Array());
    _defineProperty(this, "constantArray", new Float32Array());
    _defineProperty(this, "capacity", 0);
    _defineProperty(this, "verticesCount", 0);
    // Reading and caching program definition
    var def = this.getDefinition();
    this.VERTICES = def.VERTICES;
    this.VERTEX_SHADER_SOURCE = def.VERTEX_SHADER_SOURCE;
    this.FRAGMENT_SHADER_SOURCE = def.FRAGMENT_SHADER_SOURCE;
    this.UNIFORMS = def.UNIFORMS;
    this.ATTRIBUTES = def.ATTRIBUTES;
    this.METHOD = def.METHOD;
    this.CONSTANT_ATTRIBUTES = "CONSTANT_ATTRIBUTES" in def ? def.CONSTANT_ATTRIBUTES : [];
    this.CONSTANT_DATA = "CONSTANT_DATA" in def ? def.CONSTANT_DATA : [];
    this.isInstanced = "CONSTANT_ATTRIBUTES" in def;

    // Computing stride
    this.ATTRIBUTES_ITEMS_COUNT = getAttributesItemsCount(this.ATTRIBUTES);
    this.STRIDE = this.VERTICES * this.ATTRIBUTES_ITEMS_COUNT;

    // Members
    this.renderer = renderer;
    this.normalProgram = this.getProgramInfo("normal", gl, def.VERTEX_SHADER_SOURCE, def.FRAGMENT_SHADER_SOURCE, null);
    this.pickProgram = pickingBuffer ? this.getProgramInfo("pick", gl, PICKING_PREFIX + def.VERTEX_SHADER_SOURCE, PICKING_PREFIX + def.FRAGMENT_SHADER_SOURCE, pickingBuffer) : null;

    // For instanced programs:
    if (this.isInstanced) {
      var constantAttributesItemsCount = getAttributesItemsCount(this.CONSTANT_ATTRIBUTES);
      if (this.CONSTANT_DATA.length !== this.VERTICES) throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES, " items, received ").concat(this.CONSTANT_DATA.length, " instead)"));
      this.constantArray = new Float32Array(this.CONSTANT_DATA.length * constantAttributesItemsCount);
      for (var i = 0; i < this.CONSTANT_DATA.length; i++) {
        var vector = this.CONSTANT_DATA[i];
        if (vector.length !== constantAttributesItemsCount) throw new Error("Program: error while getting constant data (one vector has ".concat(vector.length, " items instead of ").concat(constantAttributesItemsCount, ")"));
        for (var j = 0; j < vector.length; j++) this.constantArray[i * constantAttributesItemsCount + j] = vector[j];
      }
      this.STRIDE = this.ATTRIBUTES_ITEMS_COUNT;
    }
  }
  return inherits._createClass(Program, [{
    key: "kill",
    value: function kill() {
      killProgram(this.normalProgram);
      if (this.pickProgram) {
        killProgram(this.pickProgram);
        this.pickProgram = null;
      }
    }
  }, {
    key: "getProgramInfo",
    value: function getProgramInfo(name, gl, vertexShaderSource, fragmentShaderSource, frameBuffer) {
      var def = this.getDefinition();

      // WebGL buffers
      var buffer = gl.createBuffer();
      if (buffer === null) throw new Error("Program: error while creating the WebGL buffer.");

      // Shaders and program
      var vertexShader = loadVertexShader(gl, vertexShaderSource);
      var fragmentShader = loadFragmentShader(gl, fragmentShaderSource);
      var program = loadProgram(gl, [vertexShader, fragmentShader]);

      // Initializing locations
      var uniformLocations = {};
      def.UNIFORMS.forEach(function (uniformName) {
        var location = gl.getUniformLocation(program, uniformName);
        if (location) uniformLocations[uniformName] = location;
      });
      var attributeLocations = {};
      def.ATTRIBUTES.forEach(function (attr) {
        attributeLocations[attr.name] = gl.getAttribLocation(program, attr.name);
      });

      // For instanced programs:
      var constantBuffer;
      if ("CONSTANT_ATTRIBUTES" in def) {
        def.CONSTANT_ATTRIBUTES.forEach(function (attr) {
          attributeLocations[attr.name] = gl.getAttribLocation(program, attr.name);
        });
        constantBuffer = gl.createBuffer();
        if (constantBuffer === null) throw new Error("Program: error while creating the WebGL constant buffer.");
      }
      return {
        name: name,
        program: program,
        gl: gl,
        frameBuffer: frameBuffer,
        buffer: buffer,
        constantBuffer: constantBuffer || {},
        uniformLocations: uniformLocations,
        attributeLocations: attributeLocations,
        isPicking: name === "pick",
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
      };
    }
  }, {
    key: "bindProgram",
    value: function bindProgram(program) {
      var _this = this;
      var offset = 0;
      var gl = program.gl,
        buffer = program.buffer;
      if (!this.isInstanced) {
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        offset = 0;
        this.ATTRIBUTES.forEach(function (attr) {
          return offset += _this.bindAttribute(attr, program, offset);
        });
        gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
      } else {
        // Handle constant data (things that remain unchanged for all items):
        gl.bindBuffer(gl.ARRAY_BUFFER, program.constantBuffer);
        offset = 0;
        this.CONSTANT_ATTRIBUTES.forEach(function (attr) {
          return offset += _this.bindAttribute(attr, program, offset, false);
        });
        gl.bufferData(gl.ARRAY_BUFFER, this.constantArray, gl.STATIC_DRAW);

        // Handle "instance specific" data (things that vary for each item):
        gl.bindBuffer(gl.ARRAY_BUFFER, program.buffer);
        offset = 0;
        this.ATTRIBUTES.forEach(function (attr) {
          return offset += _this.bindAttribute(attr, program, offset, true);
        });
        gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
  }, {
    key: "unbindProgram",
    value: function unbindProgram(program) {
      var _this2 = this;
      if (!this.isInstanced) {
        this.ATTRIBUTES.forEach(function (attr) {
          return _this2.unbindAttribute(attr, program);
        });
      } else {
        this.CONSTANT_ATTRIBUTES.forEach(function (attr) {
          return _this2.unbindAttribute(attr, program, false);
        });
        this.ATTRIBUTES.forEach(function (attr) {
          return _this2.unbindAttribute(attr, program, true);
        });
      }
    }
  }, {
    key: "bindAttribute",
    value: function bindAttribute(attr, program, offset, setDivisor) {
      var sizeFactor = SIZE_FACTOR_PER_ATTRIBUTE_TYPE[attr.type];
      if (typeof sizeFactor !== "number") throw new Error("Program.bind: yet unsupported attribute type \"".concat(attr.type, "\""));
      var location = program.attributeLocations[attr.name];
      var gl = program.gl;
      if (location !== -1) {
        gl.enableVertexAttribArray(location);
        var stride = !this.isInstanced ? this.ATTRIBUTES_ITEMS_COUNT * Float32Array.BYTES_PER_ELEMENT : (setDivisor ? this.ATTRIBUTES_ITEMS_COUNT : getAttributesItemsCount(this.CONSTANT_ATTRIBUTES)) * Float32Array.BYTES_PER_ELEMENT;
        gl.vertexAttribPointer(location, attr.size, attr.type, attr.normalized || false, stride, offset);
        if (this.isInstanced && setDivisor) {
          if (gl instanceof WebGL2RenderingContext) {
            gl.vertexAttribDivisor(location, 1);
          } else {
            var ext = gl.getExtension("ANGLE_instanced_arrays");
            if (ext) ext.vertexAttribDivisorANGLE(location, 1);
          }
        }
      }
      return attr.size * sizeFactor;
    }
  }, {
    key: "unbindAttribute",
    value: function unbindAttribute(attr, program, unsetDivisor) {
      var location = program.attributeLocations[attr.name];
      var gl = program.gl;
      if (location !== -1) {
        gl.disableVertexAttribArray(location);
        if (this.isInstanced && unsetDivisor) {
          if (gl instanceof WebGL2RenderingContext) {
            gl.vertexAttribDivisor(location, 0);
          } else {
            var ext = gl.getExtension("ANGLE_instanced_arrays");
            if (ext) ext.vertexAttribDivisorANGLE(location, 0);
          }
        }
      }
    }
  }, {
    key: "reallocate",
    value: function reallocate(capacity) {
      // If desired capacity has not changed we do nothing
      // NOTE: it's possible here to implement more subtle reallocation schemes
      // when the number of rendered items increase or decrease
      if (capacity === this.capacity) return;
      this.capacity = capacity;
      this.verticesCount = this.VERTICES * capacity;
      this.array = new Float32Array(!this.isInstanced ? this.verticesCount * this.ATTRIBUTES_ITEMS_COUNT : this.capacity * this.ATTRIBUTES_ITEMS_COUNT);
    }
  }, {
    key: "hasNothingToRender",
    value: function hasNothingToRender() {
      return this.verticesCount === 0;
    }
  }, {
    key: "renderProgram",
    value: function renderProgram(params, programInfo) {
      var gl = programInfo.gl,
        program = programInfo.program;

      // With the current fix for #1397, the alpha blending is enabled for the
      // picking layer:
      gl.enable(gl.BLEND);

      // Original code:
      // if (!isPicking) gl.enable(gl.BLEND);
      // else gl.disable(gl.BLEND);

      gl.useProgram(program);
      this.setUniforms(params, programInfo);
      this.drawWebGL(this.METHOD, programInfo);
    }
  }, {
    key: "render",
    value: function render(params) {
      if (this.hasNothingToRender()) return;
      if (this.pickProgram) {
        this.pickProgram.gl.viewport(0, 0, params.width * params.pixelRatio / params.downSizingRatio, params.height * params.pixelRatio / params.downSizingRatio);
        this.bindProgram(this.pickProgram);
        this.renderProgram(_objectSpread2(_objectSpread2({}, params), {}, {
          pixelRatio: params.pixelRatio / params.downSizingRatio
        }), this.pickProgram);
        this.unbindProgram(this.pickProgram);
      }
      this.normalProgram.gl.viewport(0, 0, params.width * params.pixelRatio, params.height * params.pixelRatio);
      this.bindProgram(this.normalProgram);
      this.renderProgram(params, this.normalProgram);
      this.unbindProgram(this.normalProgram);
    }
  }, {
    key: "drawWebGL",
    value: function drawWebGL(method, _ref) {
      var gl = _ref.gl,
        frameBuffer = _ref.frameBuffer;
      gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
      if (!this.isInstanced) {
        gl.drawArrays(method, 0, this.verticesCount);
      } else {
        if (gl instanceof WebGL2RenderingContext) {
          gl.drawArraysInstanced(method, 0, this.VERTICES, this.capacity);
        } else {
          var ext = gl.getExtension("ANGLE_instanced_arrays");
          if (ext) ext.drawArraysInstancedANGLE(method, 0, this.VERTICES, this.capacity);
        }
      }
    }
  }]);
}();

var AbstractNodeProgram = /*#__PURE__*/function (_AbstractProgram) {
  function AbstractNodeProgram() {
    inherits._classCallCheck(this, AbstractNodeProgram);
    return inherits._callSuper(this, AbstractNodeProgram, arguments);
  }
  inherits._inherits(AbstractNodeProgram, _AbstractProgram);
  return inherits._createClass(AbstractNodeProgram);
}(AbstractProgram);
var NodeProgram = /*#__PURE__*/function (_ref) {
  function NodeProgram() {
    inherits._classCallCheck(this, NodeProgram);
    return inherits._callSuper(this, NodeProgram, arguments);
  }
  inherits._inherits(NodeProgram, _ref);
  return inherits._createClass(NodeProgram, [{
    key: "kill",
    value: function kill() {
      _superPropGet(NodeProgram, "kill", this, 3)([]);
    }
  }, {
    key: "process",
    value: function process(nodeIndex, offset, data) {
      var i = offset * this.STRIDE;
      // NOTE: dealing with hidden items automatically
      if (data.hidden) {
        for (var l = i + this.STRIDE; i < l; i++) {
          this.array[i] = 0;
        }
        return;
      }
      return this.processVisibleItem(colors.indexToColor(nodeIndex), i, data);
    }
  }]);
}(Program);
/**
 * Helper function combining two or more programs into a single compound one.
 * Note that this is more a quick & easy way to combine program than a really
 * performant option. More performant programs can be written entirely.
 *
 * @param  {array}    programClasses - Program classes to combine.
 * @param  {function} drawLabel - An optional node "draw label" function.
 * @param  {function} drawHover - An optional node "draw hover" function.
 * @return {function}
 */
function createNodeCompoundProgram(programClasses, drawLabel, drawHover) {
  return /*#__PURE__*/function () {
    function NodeCompoundProgram(gl, pickingBuffer, renderer) {
      inherits._classCallCheck(this, NodeCompoundProgram);
      _defineProperty(this, "drawLabel", drawLabel);
      _defineProperty(this, "drawHover", drawHover);
      this.programs = programClasses.map(function (Program) {
        return new Program(gl, pickingBuffer, renderer);
      });
    }
    return inherits._createClass(NodeCompoundProgram, [{
      key: "reallocate",
      value: function reallocate(capacity) {
        this.programs.forEach(function (program) {
          return program.reallocate(capacity);
        });
      }
    }, {
      key: "process",
      value: function process(nodeIndex, offset, data) {
        this.programs.forEach(function (program) {
          return program.process(nodeIndex, offset, data);
        });
      }
    }, {
      key: "render",
      value: function render(params) {
        this.programs.forEach(function (program) {
          return program.render(params);
        });
      }
    }, {
      key: "kill",
      value: function kill() {
        this.programs.forEach(function (program) {
          return program.kill();
        });
      }
    }]);
  }();
}

var AbstractEdgeProgram = /*#__PURE__*/function (_AbstractProgram) {
  function AbstractEdgeProgram() {
    inherits._classCallCheck(this, AbstractEdgeProgram);
    return inherits._callSuper(this, AbstractEdgeProgram, arguments);
  }
  inherits._inherits(AbstractEdgeProgram, _AbstractProgram);
  return inherits._createClass(AbstractEdgeProgram);
}(AbstractProgram);
var EdgeProgram = /*#__PURE__*/function (_ref) {
  function EdgeProgram() {
    var _this;
    inherits._classCallCheck(this, EdgeProgram);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = inherits._callSuper(this, EdgeProgram, [].concat(args));
    _defineProperty(_this, "drawLabel", undefined);
    return _this;
  }
  inherits._inherits(EdgeProgram, _ref);
  return inherits._createClass(EdgeProgram, [{
    key: "kill",
    value: function kill() {
      _superPropGet(EdgeProgram, "kill", this, 3)([]);
    }
  }, {
    key: "process",
    value: function process(edgeIndex, offset, sourceData, targetData, data) {
      var i = offset * this.STRIDE;
      // NOTE: dealing with hidden items automatically
      if (data.hidden || sourceData.hidden || targetData.hidden) {
        for (var l = i + this.STRIDE; i < l; i++) {
          this.array[i] = 0;
        }
        return;
      }
      return this.processVisibleItem(colors.indexToColor(edgeIndex), i, sourceData, targetData, data);
    }
  }]);
}(Program);
/**
 * Helper function combining two or more programs into a single compound one.
 * Note that this is more a quick & easy way to combine program than a really
 * performant option. More performant programs can be written entirely.
 *
 * @param  {array}    programClasses - Program classes to combine.
 * @param  {function} drawLabel - An optional edge "draw label" function.
 * @return {function}
 */
function createEdgeCompoundProgram(programClasses, drawLabel) {
  return /*#__PURE__*/function () {
    function EdgeCompoundProgram(gl, pickingBuffer, renderer) {
      inherits._classCallCheck(this, EdgeCompoundProgram);
      _defineProperty(this, "drawLabel", drawLabel);
      this.programs = programClasses.map(function (Program) {
        return new Program(gl, pickingBuffer, renderer);
      });
    }
    return inherits._createClass(EdgeCompoundProgram, [{
      key: "reallocate",
      value: function reallocate(capacity) {
        this.programs.forEach(function (program) {
          return program.reallocate(capacity);
        });
      }
    }, {
      key: "process",
      value: function process(edgeIndex, offset, sourceData, targetData, data) {
        this.programs.forEach(function (program) {
          return program.process(edgeIndex, offset, sourceData, targetData, data);
        });
      }
    }, {
      key: "render",
      value: function render(params) {
        this.programs.forEach(function (program) {
          return program.render(params);
        });
      }
    }, {
      key: "kill",
      value: function kill() {
        this.programs.forEach(function (program) {
          return program.kill();
        });
      }
    }]);
  }();
}

function drawStraightEdgeLabel(context, edgeData, sourceData, targetData, settings) {
  var size = settings.edgeLabelSize,
    font = settings.edgeLabelFont,
    weight = settings.edgeLabelWeight,
    color = settings.edgeLabelColor.attribute ? edgeData[settings.edgeLabelColor.attribute] || settings.edgeLabelColor.color || "#000" : settings.edgeLabelColor.color;
  var label = edgeData.label;
  if (!label) return;
  context.fillStyle = color;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);

  // Computing positions without considering nodes sizes:
  var sSize = sourceData.size;
  var tSize = targetData.size;
  var sx = sourceData.x;
  var sy = sourceData.y;
  var tx = targetData.x;
  var ty = targetData.y;
  var cx = (sx + tx) / 2;
  var cy = (sy + ty) / 2;
  var dx = tx - sx;
  var dy = ty - sy;
  var d = Math.sqrt(dx * dx + dy * dy);
  if (d < sSize + tSize) return;

  // Adding nodes sizes:
  sx += dx * sSize / d;
  sy += dy * sSize / d;
  tx -= dx * tSize / d;
  ty -= dy * tSize / d;
  cx = (sx + tx) / 2;
  cy = (sy + ty) / 2;
  dx = tx - sx;
  dy = ty - sy;
  d = Math.sqrt(dx * dx + dy * dy);

  // Handling ellipsis
  var textLength = context.measureText(label).width;
  if (textLength > d) {
    var ellipsis = "…";
    label = label + ellipsis;
    textLength = context.measureText(label).width;
    while (textLength > d && label.length > 1) {
      label = label.slice(0, -2) + ellipsis;
      textLength = context.measureText(label).width;
    }
    if (label.length < 4) return;
  }
  var angle;
  if (dx > 0) {
    if (dy > 0) angle = Math.acos(dx / d);else angle = Math.asin(dy / d);
  } else {
    if (dy > 0) angle = Math.acos(dx / d) + Math.PI;else angle = Math.asin(dx / d) + Math.PI / 2;
  }
  context.save();
  context.translate(cx, cy);
  context.rotate(angle);
  context.fillText(label, -textLength / 2, edgeData.size / 2 + size);
  context.restore();
}

function drawDiscNodeLabel(context, data, settings) {
  if (!data.label) return;
  var size = settings.labelSize,
    font = settings.labelFont,
    weight = settings.labelWeight,
    color = settings.labelColor.attribute ? data[settings.labelColor.attribute] || settings.labelColor.color || "#000" : settings.labelColor.color;
  context.fillStyle = color;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
  context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
}

/**
 * Draw an hovered node.
 * - if there is no label => display a shadow on the node
 * - if the label box is bigger than node size => display a label box that contains the node with a shadow
 * - else node with shadow and the label box
 */
function drawDiscNodeHover(context, data, settings) {
  var size = settings.labelSize,
    font = settings.labelFont,
    weight = settings.labelWeight;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);

  // Then we draw the label background
  context.fillStyle = "#FFF";
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 8;
  context.shadowColor = "#000";
  var PADDING = 2;
  if (typeof data.label === "string") {
    var textWidth = context.measureText(data.label).width,
      boxWidth = Math.round(textWidth + 5),
      boxHeight = Math.round(size + 2 * PADDING),
      radius = Math.max(data.size, size / 2) + PADDING;
    var angleRadian = Math.asin(boxHeight / 2 / radius);
    var xDeltaCoord = Math.sqrt(Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2)));
    context.beginPath();
    context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
    context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
    context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
    context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
    context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
    context.closePath();
    context.fill();
  } else {
    context.beginPath();
    context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  }
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;

  // And finally we draw the label
  drawDiscNodeLabel(context, data, settings);
}

// language=GLSL
var SHADER_SOURCE$6 = /*glsl*/"\nprecision highp float;\n\nvarying vec4 v_color;\nvarying vec2 v_diffVector;\nvarying float v_radius;\n\nuniform float u_correctionRatio;\n\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float border = u_correctionRatio * 2.0;\n  float dist = length(v_diffVector) - v_radius + border;\n\n  // No antialiasing for picking mode:\n  #ifdef PICKING_MODE\n  if (dist > border)\n    gl_FragColor = transparent;\n  else\n    gl_FragColor = v_color;\n\n  #else\n  float t = 0.0;\n  if (dist > border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / border;\n\n  gl_FragColor = mix(v_color, transparent, t);\n  #endif\n}\n";
var FRAGMENT_SHADER_SOURCE$2 = SHADER_SOURCE$6;

// language=GLSL
var SHADER_SOURCE$5 = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_position;\nattribute float a_size;\nattribute float a_angle;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_diffVector;\nvarying float v_radius;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;\n  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));\n  vec2 position = a_position + diffVector;\n  gl_Position = vec4(\n    (u_matrix * vec3(position, 1)).xy,\n    0,\n    1\n  );\n\n  v_diffVector = diffVector;\n  v_radius = size / 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$3 = SHADER_SOURCE$5;

var _WebGLRenderingContex$3 = WebGLRenderingContext,
  UNSIGNED_BYTE$3 = _WebGLRenderingContex$3.UNSIGNED_BYTE,
  FLOAT$3 = _WebGLRenderingContex$3.FLOAT;
var UNIFORMS$3 = ["u_sizeRatio", "u_correctionRatio", "u_matrix"];
var NodeCircleProgram = /*#__PURE__*/function (_NodeProgram) {
  function NodeCircleProgram() {
    inherits._classCallCheck(this, NodeCircleProgram);
    return inherits._callSuper(this, NodeCircleProgram, arguments);
  }
  inherits._inherits(NodeCircleProgram, _NodeProgram);
  return inherits._createClass(NodeCircleProgram, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 3,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$3,
        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$2,
        METHOD: WebGLRenderingContext.TRIANGLES,
        UNIFORMS: UNIFORMS$3,
        ATTRIBUTES: [{
          name: "a_position",
          size: 2,
          type: FLOAT$3
        }, {
          name: "a_size",
          size: 1,
          type: FLOAT$3
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE$3,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE$3,
          normalized: true
        }],
        CONSTANT_ATTRIBUTES: [{
          name: "a_angle",
          size: 1,
          type: FLOAT$3
        }],
        CONSTANT_DATA: [[NodeCircleProgram.ANGLE_1], [NodeCircleProgram.ANGLE_2], [NodeCircleProgram.ANGLE_3]]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(nodeIndex, startIndex, data) {
      var array = this.array;
      var color = colors.floatColor(data.color);
      array[startIndex++] = data.x;
      array[startIndex++] = data.y;
      array[startIndex++] = data.size;
      array[startIndex++] = color;
      array[startIndex++] = nodeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(params, _ref) {
      var gl = _ref.gl,
        uniformLocations = _ref.uniformLocations;
      var u_sizeRatio = uniformLocations.u_sizeRatio,
        u_correctionRatio = uniformLocations.u_correctionRatio,
        u_matrix = uniformLocations.u_matrix;
      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
    }
  }]);
}(NodeProgram);
_defineProperty(NodeCircleProgram, "ANGLE_1", 0);
_defineProperty(NodeCircleProgram, "ANGLE_2", 2 * Math.PI / 3);
_defineProperty(NodeCircleProgram, "ANGLE_3", 4 * Math.PI / 3);

// language=GLSL
var SHADER_SOURCE$4 = /*glsl*/"\nprecision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
var FRAGMENT_SHADER_SOURCE$1 = SHADER_SOURCE$4;

// language=GLSL
var SHADER_SOURCE$3 = /*glsl*/"\nattribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_radius;\nattribute vec3 a_barycentric;\n\n#ifdef PICKING_MODE\nattribute vec4 a_id;\n#else\nattribute vec4 a_color;\n#endif\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_lengthToThicknessRatio;\nuniform float u_widenessToThicknessRatio;\n\nvarying vec4 v_color;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl and\n  // edge.clamped.vert.glsl. Please read it to get better comments on what's\n  // happening:\n  float pixelsThickness = max(normalLength / u_sizeRatio, minThickness);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float webGLNodeRadius = a_radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n  float webGLArrowHeadThickness = webGLThickness * u_widenessToThicknessRatio;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * (webGLNodeRadius * unitNormal.y)\n    + db * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y + webGLArrowHeadThickness * unitNormal.x)\n    + dc * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y - webGLArrowHeadThickness * unitNormal.x),\n\n      da * (-webGLNodeRadius * unitNormal.x)\n    + db * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x + webGLArrowHeadThickness * unitNormal.y)\n    + dc * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x - webGLArrowHeadThickness * unitNormal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$2 = SHADER_SOURCE$3;

var _WebGLRenderingContex$2 = WebGLRenderingContext,
  UNSIGNED_BYTE$2 = _WebGLRenderingContex$2.UNSIGNED_BYTE,
  FLOAT$2 = _WebGLRenderingContex$2.FLOAT;
var UNIFORMS$2 = ["u_matrix", "u_sizeRatio", "u_correctionRatio", "u_minEdgeThickness", "u_lengthToThicknessRatio", "u_widenessToThicknessRatio"];
var DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS = {
  extremity: "target",
  lengthToThicknessRatio: 2.5,
  widenessToThicknessRatio: 2
};
function createEdgeArrowHeadProgram(inputOptions) {
  var options = _objectSpread2(_objectSpread2({}, DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS), inputOptions || {});
  return /*#__PURE__*/function (_EdgeProgram) {
    function EdgeArrowHeadProgram() {
      inherits._classCallCheck(this, EdgeArrowHeadProgram);
      return inherits._callSuper(this, EdgeArrowHeadProgram, arguments);
    }
    inherits._inherits(EdgeArrowHeadProgram, _EdgeProgram);
    return inherits._createClass(EdgeArrowHeadProgram, [{
      key: "getDefinition",
      value: function getDefinition() {
        return {
          VERTICES: 3,
          VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$2,
          FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$1,
          METHOD: WebGLRenderingContext.TRIANGLES,
          UNIFORMS: UNIFORMS$2,
          ATTRIBUTES: [{
            name: "a_position",
            size: 2,
            type: FLOAT$2
          }, {
            name: "a_normal",
            size: 2,
            type: FLOAT$2
          }, {
            name: "a_radius",
            size: 1,
            type: FLOAT$2
          }, {
            name: "a_color",
            size: 4,
            type: UNSIGNED_BYTE$2,
            normalized: true
          }, {
            name: "a_id",
            size: 4,
            type: UNSIGNED_BYTE$2,
            normalized: true
          }],
          CONSTANT_ATTRIBUTES: [{
            name: "a_barycentric",
            size: 3,
            type: FLOAT$2
          }],
          CONSTANT_DATA: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
        };
      }
    }, {
      key: "processVisibleItem",
      value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
        if (options.extremity === "source") {
          var _ref = [targetData, sourceData];
          sourceData = _ref[0];
          targetData = _ref[1];
        }
        var thickness = data.size || 1;
        var radius = targetData.size || 1;
        var x1 = sourceData.x;
        var y1 = sourceData.y;
        var x2 = targetData.x;
        var y2 = targetData.y;
        var color = colors.floatColor(data.color);

        // Computing normals
        var dx = x2 - x1;
        var dy = y2 - y1;
        var len = dx * dx + dy * dy;
        var n1 = 0;
        var n2 = 0;
        if (len) {
          len = 1 / Math.sqrt(len);
          n1 = -dy * len * thickness;
          n2 = dx * len * thickness;
        }
        var array = this.array;
        array[startIndex++] = x2;
        array[startIndex++] = y2;
        array[startIndex++] = -n1;
        array[startIndex++] = -n2;
        array[startIndex++] = radius;
        array[startIndex++] = color;
        array[startIndex++] = edgeIndex;
      }
    }, {
      key: "setUniforms",
      value: function setUniforms(params, _ref2) {
        var gl = _ref2.gl,
          uniformLocations = _ref2.uniformLocations;
        var u_matrix = uniformLocations.u_matrix,
          u_sizeRatio = uniformLocations.u_sizeRatio,
          u_correctionRatio = uniformLocations.u_correctionRatio,
          u_minEdgeThickness = uniformLocations.u_minEdgeThickness,
          u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio,
          u_widenessToThicknessRatio = uniformLocations.u_widenessToThicknessRatio;
        gl.uniformMatrix3fv(u_matrix, false, params.matrix);
        gl.uniform1f(u_sizeRatio, params.sizeRatio);
        gl.uniform1f(u_correctionRatio, params.correctionRatio);
        gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
        gl.uniform1f(u_lengthToThicknessRatio, options.lengthToThicknessRatio);
        gl.uniform1f(u_widenessToThicknessRatio, options.widenessToThicknessRatio);
      }
    }]);
  }(EdgeProgram);
}
var EdgeArrowHeadProgram = createEdgeArrowHeadProgram();
var EdgeArrowHeadProgram$1 = EdgeArrowHeadProgram;

// language=GLSL
var SHADER_SOURCE$2 = /*glsl*/"\nprecision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  // We only handle antialiasing for normal mode:\n  #ifdef PICKING_MODE\n  gl_FragColor = v_color;\n  #else\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - v_feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, transparent, t);\n  #endif\n}\n";
var FRAGMENT_SHADER_SOURCE = SHADER_SOURCE$2;

// language=GLSL
var SHADER_SOURCE$1 = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\nattribute float a_radius;\nattribute float a_radiusCoef;\n\nuniform mat3 u_matrix;\nuniform float u_zoomRatio;\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_lengthToThicknessRatio;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  float radius = a_radius * a_radiusCoef;\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here, we move the point to leave space for the arrow head:\n  float direction = sign(radius);\n  float webGLNodeRadius = direction * radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n\n  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (webGLNodeRadius + webGLArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + compensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$1 = SHADER_SOURCE$1;

var _WebGLRenderingContex$1 = WebGLRenderingContext,
  UNSIGNED_BYTE$1 = _WebGLRenderingContex$1.UNSIGNED_BYTE,
  FLOAT$1 = _WebGLRenderingContex$1.FLOAT;
var UNIFORMS$1 = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness", "u_lengthToThicknessRatio"];
var DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS = {
  lengthToThicknessRatio: DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS.lengthToThicknessRatio
};
function createEdgeClampedProgram(inputOptions) {
  var options = _objectSpread2(_objectSpread2({}, DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS), inputOptions || {});
  return /*#__PURE__*/function (_EdgeProgram) {
    function EdgeClampedProgram() {
      inherits._classCallCheck(this, EdgeClampedProgram);
      return inherits._callSuper(this, EdgeClampedProgram, arguments);
    }
    inherits._inherits(EdgeClampedProgram, _EdgeProgram);
    return inherits._createClass(EdgeClampedProgram, [{
      key: "getDefinition",
      value: function getDefinition() {
        return {
          VERTICES: 6,
          VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$1,
          FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE,
          METHOD: WebGLRenderingContext.TRIANGLES,
          UNIFORMS: UNIFORMS$1,
          ATTRIBUTES: [{
            name: "a_positionStart",
            size: 2,
            type: FLOAT$1
          }, {
            name: "a_positionEnd",
            size: 2,
            type: FLOAT$1
          }, {
            name: "a_normal",
            size: 2,
            type: FLOAT$1
          }, {
            name: "a_color",
            size: 4,
            type: UNSIGNED_BYTE$1,
            normalized: true
          }, {
            name: "a_id",
            size: 4,
            type: UNSIGNED_BYTE$1,
            normalized: true
          }, {
            name: "a_radius",
            size: 1,
            type: FLOAT$1
          }],
          CONSTANT_ATTRIBUTES: [
          // If 0, then position will be a_positionStart
          // If 1, then position will be a_positionEnd
          {
            name: "a_positionCoef",
            size: 1,
            type: FLOAT$1
          }, {
            name: "a_normalCoef",
            size: 1,
            type: FLOAT$1
          }, {
            name: "a_radiusCoef",
            size: 1,
            type: FLOAT$1
          }],
          CONSTANT_DATA: [[0, 1, 0], [0, -1, 0], [1, 1, 1], [1, 1, 1], [0, -1, 0], [1, -1, -1]]
        };
      }
    }, {
      key: "processVisibleItem",
      value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
        var thickness = data.size || 1;
        var x1 = sourceData.x;
        var y1 = sourceData.y;
        var x2 = targetData.x;
        var y2 = targetData.y;
        var color = colors.floatColor(data.color);

        // Computing normals
        var dx = x2 - x1;
        var dy = y2 - y1;
        var radius = targetData.size || 1;
        var len = dx * dx + dy * dy;
        var n1 = 0;
        var n2 = 0;
        if (len) {
          len = 1 / Math.sqrt(len);
          n1 = -dy * len * thickness;
          n2 = dx * len * thickness;
        }
        var array = this.array;
        array[startIndex++] = x1;
        array[startIndex++] = y1;
        array[startIndex++] = x2;
        array[startIndex++] = y2;
        array[startIndex++] = n1;
        array[startIndex++] = n2;
        array[startIndex++] = color;
        array[startIndex++] = edgeIndex;
        array[startIndex++] = radius;
      }
    }, {
      key: "setUniforms",
      value: function setUniforms(params, _ref) {
        var gl = _ref.gl,
          uniformLocations = _ref.uniformLocations;
        var u_matrix = uniformLocations.u_matrix,
          u_zoomRatio = uniformLocations.u_zoomRatio,
          u_feather = uniformLocations.u_feather,
          u_pixelRatio = uniformLocations.u_pixelRatio,
          u_correctionRatio = uniformLocations.u_correctionRatio,
          u_sizeRatio = uniformLocations.u_sizeRatio,
          u_minEdgeThickness = uniformLocations.u_minEdgeThickness,
          u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio;
        gl.uniformMatrix3fv(u_matrix, false, params.matrix);
        gl.uniform1f(u_zoomRatio, params.zoomRatio);
        gl.uniform1f(u_sizeRatio, params.sizeRatio);
        gl.uniform1f(u_correctionRatio, params.correctionRatio);
        gl.uniform1f(u_pixelRatio, params.pixelRatio);
        gl.uniform1f(u_feather, params.antiAliasingFeather);
        gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
        gl.uniform1f(u_lengthToThicknessRatio, options.lengthToThicknessRatio);
      }
    }]);
  }(EdgeProgram);
}
var EdgeClampedProgram = createEdgeClampedProgram();
var EdgeClampedProgram$1 = EdgeClampedProgram;

function createEdgeArrowProgram(inputOptions) {
  return createEdgeCompoundProgram([createEdgeClampedProgram(inputOptions), createEdgeArrowHeadProgram(inputOptions)]);
}
var EdgeArrowProgram = createEdgeArrowProgram();
var EdgeArrowProgram$1 = EdgeArrowProgram;

// language=GLSL
var SHADER_SOURCE = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_zoomRatio;\nuniform float u_pixelRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // We require edges to be at least \"minThickness\" pixels thick *on screen*\n  // (so we need to compensate the size ratio):\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n\n  // Then, we need to retrieve the normalized thickness of the edge in the WebGL\n  // referential (in a ([0, 1], [0, 1]) space), using our \"magic\" correction\n  // ratio:\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness, 1)).xy, 0, 1);\n\n  // For the fragment shader though, we need a thickness that takes the \"magic\"\n  // correction ratio into account (as in webGLThickness), but so that the\n  // antialiasing effect does not depend on the zoom level. So here's yet\n  // another thickness version:\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE = SHADER_SOURCE;

var _WebGLRenderingContex = WebGLRenderingContext,
  UNSIGNED_BYTE = _WebGLRenderingContex.UNSIGNED_BYTE,
  FLOAT = _WebGLRenderingContex.FLOAT;
var UNIFORMS = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness"];
var EdgeRectangleProgram = /*#__PURE__*/function (_EdgeProgram) {
  function EdgeRectangleProgram() {
    inherits._classCallCheck(this, EdgeRectangleProgram);
    return inherits._callSuper(this, EdgeRectangleProgram, arguments);
  }
  inherits._inherits(EdgeRectangleProgram, _EdgeProgram);
  return inherits._createClass(EdgeRectangleProgram, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 6,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE,
        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE,
        METHOD: WebGLRenderingContext.TRIANGLES,
        UNIFORMS: UNIFORMS,
        ATTRIBUTES: [{
          name: "a_positionStart",
          size: 2,
          type: FLOAT
        }, {
          name: "a_positionEnd",
          size: 2,
          type: FLOAT
        }, {
          name: "a_normal",
          size: 2,
          type: FLOAT
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE,
          normalized: true
        }],
        CONSTANT_ATTRIBUTES: [
        // If 0, then position will be a_positionStart
        // If 2, then position will be a_positionEnd
        {
          name: "a_positionCoef",
          size: 1,
          type: FLOAT
        }, {
          name: "a_normalCoef",
          size: 1,
          type: FLOAT
        }],
        CONSTANT_DATA: [[0, 1], [0, -1], [1, 1], [1, 1], [0, -1], [1, -1]]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
      var thickness = data.size || 1;
      var x1 = sourceData.x;
      var y1 = sourceData.y;
      var x2 = targetData.x;
      var y2 = targetData.y;
      var color = colors.floatColor(data.color);

      // Computing normals
      var dx = x2 - x1;
      var dy = y2 - y1;
      var len = dx * dx + dy * dy;
      var n1 = 0;
      var n2 = 0;
      if (len) {
        len = 1 / Math.sqrt(len);
        n1 = -dy * len * thickness;
        n2 = dx * len * thickness;
      }
      var array = this.array;
      array[startIndex++] = x1;
      array[startIndex++] = y1;
      array[startIndex++] = x2;
      array[startIndex++] = y2;
      array[startIndex++] = n1;
      array[startIndex++] = n2;
      array[startIndex++] = color;
      array[startIndex++] = edgeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(params, _ref) {
      var gl = _ref.gl,
        uniformLocations = _ref.uniformLocations;
      var u_matrix = uniformLocations.u_matrix,
        u_zoomRatio = uniformLocations.u_zoomRatio,
        u_feather = uniformLocations.u_feather,
        u_pixelRatio = uniformLocations.u_pixelRatio,
        u_correctionRatio = uniformLocations.u_correctionRatio,
        u_sizeRatio = uniformLocations.u_sizeRatio,
        u_minEdgeThickness = uniformLocations.u_minEdgeThickness;
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
      gl.uniform1f(u_zoomRatio, params.zoomRatio);
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      gl.uniform1f(u_pixelRatio, params.pixelRatio);
      gl.uniform1f(u_feather, params.antiAliasingFeather);
      gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
    }
  }]);
}(EdgeProgram);

exports.AbstractEdgeProgram = AbstractEdgeProgram;
exports.AbstractNodeProgram = AbstractNodeProgram;
exports.AbstractProgram = AbstractProgram;
exports.DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS = DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS;
exports.DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS = DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS;
exports.EdgeArrowHeadProgram = EdgeArrowHeadProgram$1;
exports.EdgeArrowProgram = EdgeArrowProgram$1;
exports.EdgeClampedProgram = EdgeClampedProgram$1;
exports.EdgeProgram = EdgeProgram;
exports.EdgeRectangleProgram = EdgeRectangleProgram;
exports.FRAGMENT_SHADER_SOURCE = FRAGMENT_SHADER_SOURCE;
exports.NodeCircleProgram = NodeCircleProgram;
exports.NodeProgram = NodeProgram;
exports.Program = Program;
exports._defineProperty = _defineProperty;
exports._objectSpread2 = _objectSpread2;
exports.createEdgeArrowHeadProgram = createEdgeArrowHeadProgram;
exports.createEdgeArrowProgram = createEdgeArrowProgram;
exports.createEdgeClampedProgram = createEdgeClampedProgram;
exports.createEdgeCompoundProgram = createEdgeCompoundProgram;
exports.createNodeCompoundProgram = createNodeCompoundProgram;
exports.drawDiscNodeHover = drawDiscNodeHover;
exports.drawDiscNodeLabel = drawDiscNodeLabel;
exports.drawStraightEdgeLabel = drawStraightEdgeLabel;
exports.getAttributeItemsCount = getAttributeItemsCount;
exports.getAttributesItemsCount = getAttributesItemsCount;
exports.killProgram = killProgram;
exports.loadFragmentShader = loadFragmentShader;
exports.loadProgram = loadProgram;
exports.loadVertexShader = loadVertexShader;
exports.numberToGLSLFloat = numberToGLSLFloat;

},{"./colors-fe6de9d2.cjs.dev.js":18,"./inherits-04acba6b.cjs.dev.js":23}],23:[function(require,module,exports){
'use strict';

function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}

function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}

exports._callSuper = _callSuper;
exports._classCallCheck = _classCallCheck;
exports._createClass = _createClass;
exports._getPrototypeOf = _getPrototypeOf;
exports._inherits = _inherits;
exports._toPropertyKey = _toPropertyKey;

},{}],24:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"dup":23}],25:[function(require,module,exports){
'use strict';

var isGraph = require('graphology-utils/is-graph');
var colors = require('./colors-fe6de9d2.cjs.dev.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isGraph__default = /*#__PURE__*/_interopDefault(isGraph);

var linear = function linear(k) {
  return k;
};
var quadraticIn = function quadraticIn(k) {
  return k * k;
};
var quadraticOut = function quadraticOut(k) {
  return k * (2 - k);
};
var quadraticInOut = function quadraticInOut(k) {
  if ((k *= 2) < 1) return 0.5 * k * k;
  return -0.5 * (--k * (k - 2) - 1);
};
var cubicIn = function cubicIn(k) {
  return k * k * k;
};
var cubicOut = function cubicOut(k) {
  return --k * k * k + 1;
};
var cubicInOut = function cubicInOut(k) {
  if ((k *= 2) < 1) return 0.5 * k * k * k;
  return 0.5 * ((k -= 2) * k * k + 2);
};
var easings = {
  linear: linear,
  quadraticIn: quadraticIn,
  quadraticOut: quadraticOut,
  quadraticInOut: quadraticInOut,
  cubicIn: cubicIn,
  cubicOut: cubicOut,
  cubicInOut: cubicInOut
};

/**
 * Defaults.
 */

var ANIMATE_DEFAULTS = {
  easing: "quadraticInOut",
  duration: 150
};

/**
 * Function used to animate the nodes.
 */
function animateNodes(graph, targets, opts, callback) {
  var options = Object.assign({}, ANIMATE_DEFAULTS, opts);
  var easing = typeof options.easing === "function" ? options.easing : easings[options.easing];
  var start = Date.now();
  var startPositions = {};
  for (var node in targets) {
    var attrs = targets[node];
    startPositions[node] = {};
    for (var _k in attrs) startPositions[node][_k] = graph.getNodeAttribute(node, _k);
  }
  var frame = null;
  var _step = function step() {
    frame = null;
    var p = (Date.now() - start) / options.duration;
    if (p >= 1) {
      // Animation is done
      for (var _node in targets) {
        var _attrs = targets[_node];

        // We use given values to avoid precision issues and for convenience
        for (var _k2 in _attrs) graph.setNodeAttribute(_node, _k2, _attrs[_k2]);
      }
      if (typeof callback === "function") callback();
      return;
    }
    p = easing(p);
    for (var _node2 in targets) {
      var _attrs2 = targets[_node2];
      var s = startPositions[_node2];
      for (var _k3 in _attrs2) graph.setNodeAttribute(_node2, _k3, _attrs2[_k3] * p + s[_k3] * (1 - p));
    }
    frame = requestAnimationFrame(_step);
  };
  _step();
  return function () {
    if (frame) cancelAnimationFrame(frame);
  };
}

function identity() {
  return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
}

// TODO: optimize
function scale(m, x, y) {
  m[0] = x;
  m[4] = typeof y === "number" ? y : x;
  return m;
}
function rotate(m, r) {
  var s = Math.sin(r),
    c = Math.cos(r);
  m[0] = c;
  m[1] = s;
  m[3] = -s;
  m[4] = c;
  return m;
}
function translate(m, x, y) {
  m[6] = x;
  m[7] = y;
  return m;
}
function multiply(a, b) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  var a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  var a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  var b00 = b[0],
    b01 = b[1],
    b02 = b[2];
  var b10 = b[3],
    b11 = b[4],
    b12 = b[5];
  var b20 = b[6],
    b21 = b[7],
    b22 = b[8];
  a[0] = b00 * a00 + b01 * a10 + b02 * a20;
  a[1] = b00 * a01 + b01 * a11 + b02 * a21;
  a[2] = b00 * a02 + b01 * a12 + b02 * a22;
  a[3] = b10 * a00 + b11 * a10 + b12 * a20;
  a[4] = b10 * a01 + b11 * a11 + b12 * a21;
  a[5] = b10 * a02 + b11 * a12 + b12 * a22;
  a[6] = b20 * a00 + b21 * a10 + b22 * a20;
  a[7] = b20 * a01 + b21 * a11 + b22 * a21;
  a[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return a;
}
function multiplyVec2(a, b) {
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var a00 = a[0];
  var a01 = a[1];
  var a10 = a[3];
  var a11 = a[4];
  var a20 = a[6];
  var a21 = a[7];
  var b0 = b.x;
  var b1 = b.y;
  return {
    x: b0 * a00 + b1 * a10 + a20 * z,
    y: b0 * a01 + b1 * a11 + a21 * z
  };
}

/**
 * In sigma, the graph is normalized into a [0, 1], [0, 1] square, before being given to the various renderers. This
 * helps to deal with quadtree in particular.
 * But at some point, we need to rescale it so that it takes the best place in the screen, i.e. we always want to see two
 * nodes "touching" opposite sides of the graph, with the camera being at its default state.
 *
 * This function determines this ratio.
 */
function getCorrectionRatio(viewportDimensions, graphDimensions) {
  var viewportRatio = viewportDimensions.height / viewportDimensions.width;
  var graphRatio = graphDimensions.height / graphDimensions.width;

  // If the stage and the graphs are in different directions (such as the graph being wider that tall while the stage
  // is taller than wide), we can stop here to have indeed nodes touching opposite sides:
  if (viewportRatio < 1 && graphRatio > 1 || viewportRatio > 1 && graphRatio < 1) {
    return 1;
  }

  // Else, we need to fit the graph inside the stage:
  // 1. If the graph is "squarer" (i.e. with a ratio closer to 1), we need to make the largest sides touch;
  // 2. If the stage is "squarer", we need to make the smallest sides touch.
  return Math.min(Math.max(graphRatio, 1 / graphRatio), Math.max(1 / viewportRatio, viewportRatio));
}

/**
 * Function returning a matrix from the current state of the camera.
 */
function matrixFromCamera(state, viewportDimensions, graphDimensions, padding, inverse) {
  // TODO: it's possible to optimize this drastically!
  var angle = state.angle,
    ratio = state.ratio,
    x = state.x,
    y = state.y;
  var width = viewportDimensions.width,
    height = viewportDimensions.height;
  var matrix = identity();
  var smallestDimension = Math.min(width, height) - 2 * padding;
  var correctionRatio = getCorrectionRatio(viewportDimensions, graphDimensions);
  if (!inverse) {
    multiply(matrix, scale(identity(), 2 * (smallestDimension / width) * correctionRatio, 2 * (smallestDimension / height) * correctionRatio));
    multiply(matrix, rotate(identity(), -angle));
    multiply(matrix, scale(identity(), 1 / ratio));
    multiply(matrix, translate(identity(), -x, -y));
  } else {
    multiply(matrix, translate(identity(), x, y));
    multiply(matrix, scale(identity(), ratio));
    multiply(matrix, rotate(identity(), angle));
    multiply(matrix, scale(identity(), width / smallestDimension / 2 / correctionRatio, height / smallestDimension / 2 / correctionRatio));
  }
  return matrix;
}

/**
 * All these transformations we apply on the matrix to get it rescale the graph
 * as we want make it very hard to get pixel-perfect distances in WebGL. This
 * function returns a factor that properly cancels the matrix effect on lengths.
 *
 * [jacomyal]
 * To be fully honest, I can't really explain happens here... I notice that the
 * following ratio works (i.e. it correctly compensates the matrix impact on all
 * camera states I could try):
 * > `R = size(V) / size(M * V) / W`
 * as long as `M * V` is in the direction of W (ie. parallel to (Ox)). It works
 * as well with H and a vector that transforms into something parallel to (Oy).
 *
 * Also, note that we use `angle` and not `-angle` (that would seem logical,
 * since we want to anticipate the rotation), because the image is vertically
 * swapped in WebGL.
 */
function getMatrixImpact(matrix, cameraState, viewportDimensions) {
  var _multiplyVec = multiplyVec2(matrix, {
      x: Math.cos(cameraState.angle),
      y: Math.sin(cameraState.angle)
    }, 0),
    x = _multiplyVec.x,
    y = _multiplyVec.y;
  return 1 / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / viewportDimensions.width;
}

/**
 * Function returning the graph's node extent in x & y.
 */
function graphExtent(graph) {
  if (!graph.order) return {
    x: [0, 1],
    y: [0, 1]
  };
  var xMin = Infinity;
  var xMax = -Infinity;
  var yMin = Infinity;
  var yMax = -Infinity;
  graph.forEachNode(function (_, attr) {
    var x = attr.x,
      y = attr.y;
    if (x < xMin) xMin = x;
    if (x > xMax) xMax = x;
    if (y < yMin) yMin = y;
    if (y > yMax) yMax = y;
  });
  return {
    x: [xMin, xMax],
    y: [yMin, yMax]
  };
}

/**
 * Check if the graph variable is a valid graph, and if sigma can render it.
 */
function validateGraph(graph) {
  // check if it's a valid graphology instance
  if (!isGraph__default["default"](graph)) throw new Error("Sigma: invalid graph instance.");

  // check if nodes have x/y attributes
  graph.forEachNode(function (key, attributes) {
    if (!Number.isFinite(attributes.x) || !Number.isFinite(attributes.y)) {
      throw new Error("Sigma: Coordinates of node ".concat(key, " are invalid. A node must have a numeric 'x' and 'y' attribute."));
    }
  });
}

/**
 * Function used to create DOM elements easily.
 */
function createElement(tag, style, attributes) {
  var element = document.createElement(tag);
  if (style) {
    for (var k in style) {
      element.style[k] = style[k];
    }
  }
  if (attributes) {
    for (var _k in attributes) {
      element.setAttribute(_k, attributes[_k]);
    }
  }
  return element;
}

/**
 * Function returning the browser's pixel ratio.
 */
function getPixelRatio() {
  if (typeof window.devicePixelRatio !== "undefined") return window.devicePixelRatio;
  return 1;
}

/**
 * Function ordering the given elements in reverse z-order so they drawn
 * the correct way.
 */
function zIndexOrdering(_extent, getter, elements) {
  // If k is > n, we'll use a standard sort
  return elements.sort(function (a, b) {
    var zA = getter(a) || 0,
      zB = getter(b) || 0;
    if (zA < zB) return -1;
    if (zA > zB) return 1;
    return 0;
  });

  // TODO: counting sort optimization
}

/**
 * Factory returning a function normalizing the given node's position & size.
 */

function createNormalizationFunction(extent) {
  var _extent$x = colors._slicedToArray(extent.x, 2),
    minX = _extent$x[0],
    maxX = _extent$x[1],
    _extent$y = colors._slicedToArray(extent.y, 2),
    minY = _extent$y[0],
    maxY = _extent$y[1];
  var ratio = Math.max(maxX - minX, maxY - minY),
    dX = (maxX + minX) / 2,
    dY = (maxY + minY) / 2;
  if (ratio === 0 || Math.abs(ratio) === Infinity || isNaN(ratio)) ratio = 1;
  if (isNaN(dX)) dX = 0;
  if (isNaN(dY)) dY = 0;
  var fn = function fn(data) {
    return {
      x: 0.5 + (data.x - dX) / ratio,
      y: 0.5 + (data.y - dY) / ratio
    };
  };

  // TODO: possibility to apply this in batch over array of indices
  fn.applyTo = function (data) {
    data.x = 0.5 + (data.x - dX) / ratio;
    data.y = 0.5 + (data.y - dY) / ratio;
  };
  fn.inverse = function (data) {
    return {
      x: dX + ratio * (data.x - 0.5),
      y: dY + ratio * (data.y - 0.5)
    };
  };
  fn.ratio = ratio;
  return fn;
}

exports.ANIMATE_DEFAULTS = ANIMATE_DEFAULTS;
exports.animateNodes = animateNodes;
exports.createElement = createElement;
exports.createNormalizationFunction = createNormalizationFunction;
exports.cubicIn = cubicIn;
exports.cubicInOut = cubicInOut;
exports.cubicOut = cubicOut;
exports.easings = easings;
exports.getCorrectionRatio = getCorrectionRatio;
exports.getMatrixImpact = getMatrixImpact;
exports.getPixelRatio = getPixelRatio;
exports.graphExtent = graphExtent;
exports.identity = identity;
exports.linear = linear;
exports.matrixFromCamera = matrixFromCamera;
exports.multiply = multiply;
exports.multiplyVec2 = multiplyVec2;
exports.quadraticIn = quadraticIn;
exports.quadraticInOut = quadraticInOut;
exports.quadraticOut = quadraticOut;
exports.rotate = rotate;
exports.scale = scale;
exports.translate = translate;
exports.validateGraph = validateGraph;
exports.zIndexOrdering = zIndexOrdering;

},{"./colors-fe6de9d2.cjs.dev.js":18,"graphology-utils/is-graph":14}],26:[function(require,module,exports){
'use strict';

var isGraph = require('graphology-utils/is-graph');
var colors = require('./colors-ee2e2828.cjs.prod.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isGraph__default = /*#__PURE__*/_interopDefault(isGraph);

var linear = function linear(k) {
  return k;
};
var quadraticIn = function quadraticIn(k) {
  return k * k;
};
var quadraticOut = function quadraticOut(k) {
  return k * (2 - k);
};
var quadraticInOut = function quadraticInOut(k) {
  if ((k *= 2) < 1) return 0.5 * k * k;
  return -0.5 * (--k * (k - 2) - 1);
};
var cubicIn = function cubicIn(k) {
  return k * k * k;
};
var cubicOut = function cubicOut(k) {
  return --k * k * k + 1;
};
var cubicInOut = function cubicInOut(k) {
  if ((k *= 2) < 1) return 0.5 * k * k * k;
  return 0.5 * ((k -= 2) * k * k + 2);
};
var easings = {
  linear: linear,
  quadraticIn: quadraticIn,
  quadraticOut: quadraticOut,
  quadraticInOut: quadraticInOut,
  cubicIn: cubicIn,
  cubicOut: cubicOut,
  cubicInOut: cubicInOut
};

/**
 * Defaults.
 */

var ANIMATE_DEFAULTS = {
  easing: "quadraticInOut",
  duration: 150
};

/**
 * Function used to animate the nodes.
 */
function animateNodes(graph, targets, opts, callback) {
  var options = Object.assign({}, ANIMATE_DEFAULTS, opts);
  var easing = typeof options.easing === "function" ? options.easing : easings[options.easing];
  var start = Date.now();
  var startPositions = {};
  for (var node in targets) {
    var attrs = targets[node];
    startPositions[node] = {};
    for (var _k in attrs) startPositions[node][_k] = graph.getNodeAttribute(node, _k);
  }
  var frame = null;
  var _step = function step() {
    frame = null;
    var p = (Date.now() - start) / options.duration;
    if (p >= 1) {
      // Animation is done
      for (var _node in targets) {
        var _attrs = targets[_node];

        // We use given values to avoid precision issues and for convenience
        for (var _k2 in _attrs) graph.setNodeAttribute(_node, _k2, _attrs[_k2]);
      }
      if (typeof callback === "function") callback();
      return;
    }
    p = easing(p);
    for (var _node2 in targets) {
      var _attrs2 = targets[_node2];
      var s = startPositions[_node2];
      for (var _k3 in _attrs2) graph.setNodeAttribute(_node2, _k3, _attrs2[_k3] * p + s[_k3] * (1 - p));
    }
    frame = requestAnimationFrame(_step);
  };
  _step();
  return function () {
    if (frame) cancelAnimationFrame(frame);
  };
}

function identity() {
  return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
}

// TODO: optimize
function scale(m, x, y) {
  m[0] = x;
  m[4] = typeof y === "number" ? y : x;
  return m;
}
function rotate(m, r) {
  var s = Math.sin(r),
    c = Math.cos(r);
  m[0] = c;
  m[1] = s;
  m[3] = -s;
  m[4] = c;
  return m;
}
function translate(m, x, y) {
  m[6] = x;
  m[7] = y;
  return m;
}
function multiply(a, b) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  var a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  var a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  var b00 = b[0],
    b01 = b[1],
    b02 = b[2];
  var b10 = b[3],
    b11 = b[4],
    b12 = b[5];
  var b20 = b[6],
    b21 = b[7],
    b22 = b[8];
  a[0] = b00 * a00 + b01 * a10 + b02 * a20;
  a[1] = b00 * a01 + b01 * a11 + b02 * a21;
  a[2] = b00 * a02 + b01 * a12 + b02 * a22;
  a[3] = b10 * a00 + b11 * a10 + b12 * a20;
  a[4] = b10 * a01 + b11 * a11 + b12 * a21;
  a[5] = b10 * a02 + b11 * a12 + b12 * a22;
  a[6] = b20 * a00 + b21 * a10 + b22 * a20;
  a[7] = b20 * a01 + b21 * a11 + b22 * a21;
  a[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return a;
}
function multiplyVec2(a, b) {
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var a00 = a[0];
  var a01 = a[1];
  var a10 = a[3];
  var a11 = a[4];
  var a20 = a[6];
  var a21 = a[7];
  var b0 = b.x;
  var b1 = b.y;
  return {
    x: b0 * a00 + b1 * a10 + a20 * z,
    y: b0 * a01 + b1 * a11 + a21 * z
  };
}

/**
 * In sigma, the graph is normalized into a [0, 1], [0, 1] square, before being given to the various renderers. This
 * helps to deal with quadtree in particular.
 * But at some point, we need to rescale it so that it takes the best place in the screen, i.e. we always want to see two
 * nodes "touching" opposite sides of the graph, with the camera being at its default state.
 *
 * This function determines this ratio.
 */
function getCorrectionRatio(viewportDimensions, graphDimensions) {
  var viewportRatio = viewportDimensions.height / viewportDimensions.width;
  var graphRatio = graphDimensions.height / graphDimensions.width;

  // If the stage and the graphs are in different directions (such as the graph being wider that tall while the stage
  // is taller than wide), we can stop here to have indeed nodes touching opposite sides:
  if (viewportRatio < 1 && graphRatio > 1 || viewportRatio > 1 && graphRatio < 1) {
    return 1;
  }

  // Else, we need to fit the graph inside the stage:
  // 1. If the graph is "squarer" (i.e. with a ratio closer to 1), we need to make the largest sides touch;
  // 2. If the stage is "squarer", we need to make the smallest sides touch.
  return Math.min(Math.max(graphRatio, 1 / graphRatio), Math.max(1 / viewportRatio, viewportRatio));
}

/**
 * Function returning a matrix from the current state of the camera.
 */
function matrixFromCamera(state, viewportDimensions, graphDimensions, padding, inverse) {
  // TODO: it's possible to optimize this drastically!
  var angle = state.angle,
    ratio = state.ratio,
    x = state.x,
    y = state.y;
  var width = viewportDimensions.width,
    height = viewportDimensions.height;
  var matrix = identity();
  var smallestDimension = Math.min(width, height) - 2 * padding;
  var correctionRatio = getCorrectionRatio(viewportDimensions, graphDimensions);
  if (!inverse) {
    multiply(matrix, scale(identity(), 2 * (smallestDimension / width) * correctionRatio, 2 * (smallestDimension / height) * correctionRatio));
    multiply(matrix, rotate(identity(), -angle));
    multiply(matrix, scale(identity(), 1 / ratio));
    multiply(matrix, translate(identity(), -x, -y));
  } else {
    multiply(matrix, translate(identity(), x, y));
    multiply(matrix, scale(identity(), ratio));
    multiply(matrix, rotate(identity(), angle));
    multiply(matrix, scale(identity(), width / smallestDimension / 2 / correctionRatio, height / smallestDimension / 2 / correctionRatio));
  }
  return matrix;
}

/**
 * All these transformations we apply on the matrix to get it rescale the graph
 * as we want make it very hard to get pixel-perfect distances in WebGL. This
 * function returns a factor that properly cancels the matrix effect on lengths.
 *
 * [jacomyal]
 * To be fully honest, I can't really explain happens here... I notice that the
 * following ratio works (i.e. it correctly compensates the matrix impact on all
 * camera states I could try):
 * > `R = size(V) / size(M * V) / W`
 * as long as `M * V` is in the direction of W (ie. parallel to (Ox)). It works
 * as well with H and a vector that transforms into something parallel to (Oy).
 *
 * Also, note that we use `angle` and not `-angle` (that would seem logical,
 * since we want to anticipate the rotation), because the image is vertically
 * swapped in WebGL.
 */
function getMatrixImpact(matrix, cameraState, viewportDimensions) {
  var _multiplyVec = multiplyVec2(matrix, {
      x: Math.cos(cameraState.angle),
      y: Math.sin(cameraState.angle)
    }, 0),
    x = _multiplyVec.x,
    y = _multiplyVec.y;
  return 1 / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / viewportDimensions.width;
}

/**
 * Function returning the graph's node extent in x & y.
 */
function graphExtent(graph) {
  if (!graph.order) return {
    x: [0, 1],
    y: [0, 1]
  };
  var xMin = Infinity;
  var xMax = -Infinity;
  var yMin = Infinity;
  var yMax = -Infinity;
  graph.forEachNode(function (_, attr) {
    var x = attr.x,
      y = attr.y;
    if (x < xMin) xMin = x;
    if (x > xMax) xMax = x;
    if (y < yMin) yMin = y;
    if (y > yMax) yMax = y;
  });
  return {
    x: [xMin, xMax],
    y: [yMin, yMax]
  };
}

/**
 * Check if the graph variable is a valid graph, and if sigma can render it.
 */
function validateGraph(graph) {
  // check if it's a valid graphology instance
  if (!isGraph__default["default"](graph)) throw new Error("Sigma: invalid graph instance.");

  // check if nodes have x/y attributes
  graph.forEachNode(function (key, attributes) {
    if (!Number.isFinite(attributes.x) || !Number.isFinite(attributes.y)) {
      throw new Error("Sigma: Coordinates of node ".concat(key, " are invalid. A node must have a numeric 'x' and 'y' attribute."));
    }
  });
}

/**
 * Function used to create DOM elements easily.
 */
function createElement(tag, style, attributes) {
  var element = document.createElement(tag);
  if (style) {
    for (var k in style) {
      element.style[k] = style[k];
    }
  }
  if (attributes) {
    for (var _k in attributes) {
      element.setAttribute(_k, attributes[_k]);
    }
  }
  return element;
}

/**
 * Function returning the browser's pixel ratio.
 */
function getPixelRatio() {
  if (typeof window.devicePixelRatio !== "undefined") return window.devicePixelRatio;
  return 1;
}

/**
 * Function ordering the given elements in reverse z-order so they drawn
 * the correct way.
 */
function zIndexOrdering(_extent, getter, elements) {
  // If k is > n, we'll use a standard sort
  return elements.sort(function (a, b) {
    var zA = getter(a) || 0,
      zB = getter(b) || 0;
    if (zA < zB) return -1;
    if (zA > zB) return 1;
    return 0;
  });

  // TODO: counting sort optimization
}

/**
 * Factory returning a function normalizing the given node's position & size.
 */

function createNormalizationFunction(extent) {
  var _extent$x = colors._slicedToArray(extent.x, 2),
    minX = _extent$x[0],
    maxX = _extent$x[1],
    _extent$y = colors._slicedToArray(extent.y, 2),
    minY = _extent$y[0],
    maxY = _extent$y[1];
  var ratio = Math.max(maxX - minX, maxY - minY),
    dX = (maxX + minX) / 2,
    dY = (maxY + minY) / 2;
  if (ratio === 0 || Math.abs(ratio) === Infinity || isNaN(ratio)) ratio = 1;
  if (isNaN(dX)) dX = 0;
  if (isNaN(dY)) dY = 0;
  var fn = function fn(data) {
    return {
      x: 0.5 + (data.x - dX) / ratio,
      y: 0.5 + (data.y - dY) / ratio
    };
  };

  // TODO: possibility to apply this in batch over array of indices
  fn.applyTo = function (data) {
    data.x = 0.5 + (data.x - dX) / ratio;
    data.y = 0.5 + (data.y - dY) / ratio;
  };
  fn.inverse = function (data) {
    return {
      x: dX + ratio * (data.x - 0.5),
      y: dY + ratio * (data.y - 0.5)
    };
  };
  fn.ratio = ratio;
  return fn;
}

exports.ANIMATE_DEFAULTS = ANIMATE_DEFAULTS;
exports.animateNodes = animateNodes;
exports.createElement = createElement;
exports.createNormalizationFunction = createNormalizationFunction;
exports.cubicIn = cubicIn;
exports.cubicInOut = cubicInOut;
exports.cubicOut = cubicOut;
exports.easings = easings;
exports.getCorrectionRatio = getCorrectionRatio;
exports.getMatrixImpact = getMatrixImpact;
exports.getPixelRatio = getPixelRatio;
exports.graphExtent = graphExtent;
exports.identity = identity;
exports.linear = linear;
exports.matrixFromCamera = matrixFromCamera;
exports.multiply = multiply;
exports.multiplyVec2 = multiplyVec2;
exports.quadraticIn = quadraticIn;
exports.quadraticInOut = quadraticInOut;
exports.quadraticOut = quadraticOut;
exports.rotate = rotate;
exports.scale = scale;
exports.translate = translate;
exports.validateGraph = validateGraph;
exports.zIndexOrdering = zIndexOrdering;

},{"./colors-ee2e2828.cjs.prod.js":17,"graphology-utils/is-graph":14}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./index-88310d0d.cjs.dev.js');
var inherits = require('./inherits-04acba6b.cjs.dev.js');
var types_dist_sigmaTypes = require('../types/dist/sigma-types.cjs.dev.js');
var normalization = require('./normalization-02a974d4.cjs.dev.js');
var settings_dist_sigmaSettings = require('../settings/dist/sigma-settings.cjs.dev.js');
var colors = require('./colors-fe6de9d2.cjs.dev.js');
var data = require('./data-24ae515b.cjs.dev.js');
require('events');
require('graphology-utils/is-graph');

/**
 * Defaults.
 */
var DEFAULT_ZOOMING_RATIO = 1.5;

/**
 * Event types.
 */
/**
 * Camera class
 */
var Camera = /*#__PURE__*/function (_TypedEventEmitter) {
  function Camera() {
    var _this;
    inherits._classCallCheck(this, Camera);
    _this = inherits._callSuper(this, Camera);

    // State
    index._defineProperty(_this, "x", 0.5);
    index._defineProperty(_this, "y", 0.5);
    index._defineProperty(_this, "angle", 0);
    index._defineProperty(_this, "ratio", 1);
    index._defineProperty(_this, "minRatio", null);
    index._defineProperty(_this, "maxRatio", null);
    index._defineProperty(_this, "enabledZooming", true);
    index._defineProperty(_this, "enabledPanning", true);
    index._defineProperty(_this, "enabledRotation", true);
    index._defineProperty(_this, "clean", null);
    index._defineProperty(_this, "nextFrame", null);
    index._defineProperty(_this, "previousState", null);
    index._defineProperty(_this, "enabled", true);
    _this.previousState = _this.getState();
    return _this;
  }

  /**
   * Static method used to create a Camera object with a given state.
   */
  inherits._inherits(Camera, _TypedEventEmitter);
  return inherits._createClass(Camera, [{
    key: "enable",
    value:
    /**
     * Method used to enable the camera.
     */
    function enable() {
      this.enabled = true;
      return this;
    }

    /**
     * Method used to disable the camera.
     */
  }, {
    key: "disable",
    value: function disable() {
      this.enabled = false;
      return this;
    }

    /**
     * Method used to retrieve the camera's current state.
     */
  }, {
    key: "getState",
    value: function getState() {
      return {
        x: this.x,
        y: this.y,
        angle: this.angle,
        ratio: this.ratio
      };
    }

    /**
     * Method used to check whether the camera has the given state.
     */
  }, {
    key: "hasState",
    value: function hasState(state) {
      return this.x === state.x && this.y === state.y && this.ratio === state.ratio && this.angle === state.angle;
    }

    /**
     * Method used to retrieve the camera's previous state.
     */
  }, {
    key: "getPreviousState",
    value: function getPreviousState() {
      var state = this.previousState;
      if (!state) return null;
      return {
        x: state.x,
        y: state.y,
        angle: state.angle,
        ratio: state.ratio
      };
    }

    /**
     * Method used to check minRatio and maxRatio values.
     */
  }, {
    key: "getBoundedRatio",
    value: function getBoundedRatio(ratio) {
      var r = ratio;
      if (typeof this.minRatio === "number") r = Math.max(r, this.minRatio);
      if (typeof this.maxRatio === "number") r = Math.min(r, this.maxRatio);
      return r;
    }

    /**
     * Method used to check various things to return a legit state candidate.
     */
  }, {
    key: "validateState",
    value: function validateState(state) {
      var validatedState = {};
      if (this.enabledPanning && typeof state.x === "number") validatedState.x = state.x;
      if (this.enabledPanning && typeof state.y === "number") validatedState.y = state.y;
      if (this.enabledZooming && typeof state.ratio === "number") validatedState.ratio = this.getBoundedRatio(state.ratio);
      if (this.enabledRotation && typeof state.angle === "number") validatedState.angle = state.angle;
      return this.clean ? this.clean(index._objectSpread2(index._objectSpread2({}, this.getState()), validatedState)) : validatedState;
    }

    /**
     * Method used to check whether the camera is currently being animated.
     */
  }, {
    key: "isAnimated",
    value: function isAnimated() {
      return !!this.nextFrame;
    }

    /**
     * Method used to set the camera's state.
     */
  }, {
    key: "setState",
    value: function setState(state) {
      if (!this.enabled) return this;

      // Keeping track of last state
      this.previousState = this.getState();
      var validState = this.validateState(state);
      if (typeof validState.x === "number") this.x = validState.x;
      if (typeof validState.y === "number") this.y = validState.y;
      if (typeof validState.ratio === "number") this.ratio = validState.ratio;
      if (typeof validState.angle === "number") this.angle = validState.angle;

      // Emitting
      if (!this.hasState(this.previousState)) this.emit("updated", this.getState());
      return this;
    }

    /**
     * Method used to update the camera's state using a function.
     */
  }, {
    key: "updateState",
    value: function updateState(updater) {
      this.setState(updater(this.getState()));
      return this;
    }

    /**
     * Method used to animate the camera.
     */
  }, {
    key: "animate",
    value: function animate(state) {
      var _this2 = this;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      if (!callback) return new Promise(function (resolve) {
        return _this2.animate(state, opts, resolve);
      });
      if (!this.enabled) return;
      var options = index._objectSpread2(index._objectSpread2({}, normalization.ANIMATE_DEFAULTS), opts);
      var validState = this.validateState(state);
      var easing = typeof options.easing === "function" ? options.easing : normalization.easings[options.easing];

      // State
      var start = Date.now(),
        initialState = this.getState();

      // Function performing the animation
      var _fn = function fn() {
        var t = (Date.now() - start) / options.duration;

        // The animation is over:
        if (t >= 1) {
          _this2.nextFrame = null;
          _this2.setState(validState);
          if (_this2.animationCallback) {
            _this2.animationCallback.call(null);
            _this2.animationCallback = undefined;
          }
          return;
        }
        var coefficient = easing(t);
        var newState = {};
        if (typeof validState.x === "number") newState.x = initialState.x + (validState.x - initialState.x) * coefficient;
        if (typeof validState.y === "number") newState.y = initialState.y + (validState.y - initialState.y) * coefficient;
        if (_this2.enabledRotation && typeof validState.angle === "number") newState.angle = initialState.angle + (validState.angle - initialState.angle) * coefficient;
        if (typeof validState.ratio === "number") newState.ratio = initialState.ratio + (validState.ratio - initialState.ratio) * coefficient;
        _this2.setState(newState);
        _this2.nextFrame = requestAnimationFrame(_fn);
      };
      if (this.nextFrame) {
        cancelAnimationFrame(this.nextFrame);
        if (this.animationCallback) this.animationCallback.call(null);
        this.nextFrame = requestAnimationFrame(_fn);
      } else {
        _fn();
      }
      this.animationCallback = callback;
    }

    /**
     * Method used to zoom the camera.
     */
  }, {
    key: "animatedZoom",
    value: function animatedZoom(factorOrOptions) {
      if (!factorOrOptions) return this.animate({
        ratio: this.ratio / DEFAULT_ZOOMING_RATIO
      });
      if (typeof factorOrOptions === "number") return this.animate({
        ratio: this.ratio / factorOrOptions
      });
      return this.animate({
        ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
      }, factorOrOptions);
    }

    /**
     * Method used to unzoom the camera.
     */
  }, {
    key: "animatedUnzoom",
    value: function animatedUnzoom(factorOrOptions) {
      if (!factorOrOptions) return this.animate({
        ratio: this.ratio * DEFAULT_ZOOMING_RATIO
      });
      if (typeof factorOrOptions === "number") return this.animate({
        ratio: this.ratio * factorOrOptions
      });
      return this.animate({
        ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
      }, factorOrOptions);
    }

    /**
     * Method used to reset the camera.
     */
  }, {
    key: "animatedReset",
    value: function animatedReset(options) {
      return this.animate({
        x: 0.5,
        y: 0.5,
        ratio: 1,
        angle: 0
      }, options);
    }

    /**
     * Returns a new Camera instance, with the same state as the current camera.
     */
  }, {
    key: "copy",
    value: function copy() {
      return Camera.from(this.getState());
    }
  }], [{
    key: "from",
    value: function from(state) {
      var camera = new Camera();
      return camera.setState(state);
    }
  }]);
}(types_dist_sigmaTypes.TypedEventEmitter);

/**
 * Captor utils functions
 * ======================
 */

/**
 * Extract the local X and Y coordinates from a mouse event or touch object. If
 * a DOM element is given, it uses this element's offset to compute the position
 * (this allows using events that are not bound to the container itself and
 * still have a proper position).
 *
 * @param  {event}       e - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {number}      The local Y value of the mouse.
 */
function getPosition(e, dom) {
  var bbox = dom.getBoundingClientRect();
  return {
    x: e.clientX - bbox.left,
    y: e.clientY - bbox.top
  };
}

/**
 * Convert mouse coords to sigma coords.
 *
 * @param  {event}       e   - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getMouseCoords(e, dom) {
  var res = index._objectSpread2(index._objectSpread2({}, getPosition(e, dom)), {}, {
    sigmaDefaultPrevented: false,
    preventSigmaDefault: function preventSigmaDefault() {
      res.sigmaDefaultPrevented = true;
    },
    original: e
  });
  return res;
}

/**
 * Takes a touch coords or a mouse coords, and always returns a clean mouse coords object.
 */
function cleanMouseCoords(e) {
  var res = "x" in e ? e : index._objectSpread2(index._objectSpread2({}, e.touches[0] || e.previousTouches[0]), {}, {
    original: e.original,
    sigmaDefaultPrevented: e.sigmaDefaultPrevented,
    preventSigmaDefault: function preventSigmaDefault() {
      e.sigmaDefaultPrevented = true;
      res.sigmaDefaultPrevented = true;
    }
  });
  return res;
}

/**
 * Convert mouse wheel event coords to sigma coords.
 *
 * @param  {event}       e   - A wheel mouse event.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getWheelCoords(e, dom) {
  return index._objectSpread2(index._objectSpread2({}, getMouseCoords(e, dom)), {}, {
    delta: getWheelDelta(e)
  });
}
var MAX_TOUCHES = 2;
function getTouchesArray(touches) {
  var arr = [];
  for (var i = 0, l = Math.min(touches.length, MAX_TOUCHES); i < l; i++) arr.push(touches[i]);
  return arr;
}

/**
 * Convert touch coords to sigma coords.
 *
 * @param  {event}       e               - A touch event.
 * @param  {Touch[]}     previousTouches - An array of the previously stored touches.
 * @param  {HTMLElement} dom             - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getTouchCoords(e, previousTouches, dom) {
  var res = {
    touches: getTouchesArray(e.touches).map(function (touch) {
      return getPosition(touch, dom);
    }),
    previousTouches: previousTouches.map(function (touch) {
      return getPosition(touch, dom);
    }),
    sigmaDefaultPrevented: false,
    preventSigmaDefault: function preventSigmaDefault() {
      res.sigmaDefaultPrevented = true;
    },
    original: e
  };
  return res;
}

/**
 * Extract the wheel delta from a mouse event or touch object.
 *
 * @param  {event}  e - A mouse event or touch object.
 * @return {number}     The wheel delta of the mouse.
 */
function getWheelDelta(e) {
  // TODO: check those ratios again to ensure a clean Chrome/Firefox compat
  if (typeof e.deltaY !== "undefined") return e.deltaY * -3 / 360;
  if (typeof e.detail !== "undefined") return e.detail / -9;
  throw new Error("Captor: could not extract delta from event.");
}

/**
 * Abstract class representing a captor like the user's mouse or touch controls.
 */
var Captor = /*#__PURE__*/function (_TypedEventEmitter) {
  function Captor(container, renderer) {
    var _this;
    inherits._classCallCheck(this, Captor);
    _this = inherits._callSuper(this, Captor);
    // Properties
    _this.container = container;
    _this.renderer = renderer;
    return _this;
  }
  inherits._inherits(Captor, _TypedEventEmitter);
  return inherits._createClass(Captor);
}(types_dist_sigmaTypes.TypedEventEmitter);

var MOUSE_SETTINGS_KEYS = ["doubleClickTimeout", "doubleClickZoomingDuration", "doubleClickZoomingRatio", "dragTimeout", "draggedEventsTolerance", "inertiaDuration", "inertiaRatio", "zoomDuration", "zoomingRatio"];
var DEFAULT_MOUSE_SETTINGS = MOUSE_SETTINGS_KEYS.reduce(function (iter, key) {
  return index._objectSpread2(index._objectSpread2({}, iter), {}, index._defineProperty({}, key, settings_dist_sigmaSettings.DEFAULT_SETTINGS[key]));
}, {});

/**
 * Event types.
 */
/**
 * Mouse captor class.
 *
 * @constructor
 */
var MouseCaptor = /*#__PURE__*/function (_Captor) {
  function MouseCaptor(container, renderer) {
    var _this;
    inherits._classCallCheck(this, MouseCaptor);
    _this = inherits._callSuper(this, MouseCaptor, [container, renderer]);

    // Binding methods
    // State
    index._defineProperty(_this, "enabled", true);
    index._defineProperty(_this, "draggedEvents", 0);
    index._defineProperty(_this, "downStartTime", null);
    index._defineProperty(_this, "lastMouseX", null);
    index._defineProperty(_this, "lastMouseY", null);
    index._defineProperty(_this, "isMouseDown", false);
    index._defineProperty(_this, "isMoving", false);
    index._defineProperty(_this, "movingTimeout", null);
    index._defineProperty(_this, "startCameraState", null);
    index._defineProperty(_this, "clicks", 0);
    index._defineProperty(_this, "doubleClickTimeout", null);
    index._defineProperty(_this, "currentWheelDirection", 0);
    index._defineProperty(_this, "settings", DEFAULT_MOUSE_SETTINGS);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleRightClick = _this.handleRightClick.bind(_this);
    _this.handleDown = _this.handleDown.bind(_this);
    _this.handleUp = _this.handleUp.bind(_this);
    _this.handleMove = _this.handleMove.bind(_this);
    _this.handleWheel = _this.handleWheel.bind(_this);
    _this.handleLeave = _this.handleLeave.bind(_this);
    _this.handleEnter = _this.handleEnter.bind(_this);

    // Binding events
    container.addEventListener("click", _this.handleClick, {
      capture: false
    });
    container.addEventListener("contextmenu", _this.handleRightClick, {
      capture: false
    });
    container.addEventListener("mousedown", _this.handleDown, {
      capture: false
    });
    container.addEventListener("wheel", _this.handleWheel, {
      capture: false
    });
    container.addEventListener("mouseleave", _this.handleLeave, {
      capture: false
    });
    container.addEventListener("mouseenter", _this.handleEnter, {
      capture: false
    });
    document.addEventListener("mousemove", _this.handleMove, {
      capture: false
    });
    document.addEventListener("mouseup", _this.handleUp, {
      capture: false
    });
    return _this;
  }
  inherits._inherits(MouseCaptor, _Captor);
  return inherits._createClass(MouseCaptor, [{
    key: "kill",
    value: function kill() {
      var container = this.container;
      container.removeEventListener("click", this.handleClick);
      container.removeEventListener("contextmenu", this.handleRightClick);
      container.removeEventListener("mousedown", this.handleDown);
      container.removeEventListener("wheel", this.handleWheel);
      container.removeEventListener("mouseleave", this.handleLeave);
      container.removeEventListener("mouseenter", this.handleEnter);
      document.removeEventListener("mousemove", this.handleMove);
      document.removeEventListener("mouseup", this.handleUp);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this2 = this;
      if (!this.enabled) return;
      this.clicks++;
      if (this.clicks === 2) {
        this.clicks = 0;
        if (typeof this.doubleClickTimeout === "number") {
          clearTimeout(this.doubleClickTimeout);
          this.doubleClickTimeout = null;
        }
        return this.handleDoubleClick(e);
      }
      setTimeout(function () {
        _this2.clicks = 0;
        _this2.doubleClickTimeout = null;
      }, this.settings.doubleClickTimeout);

      // NOTE: this is here to prevent click events on drag
      if (this.draggedEvents < this.settings.draggedEventsTolerance) this.emit("click", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleRightClick",
    value: function handleRightClick(e) {
      if (!this.enabled) return;
      this.emit("rightClick", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleDoubleClick",
    value: function handleDoubleClick(e) {
      if (!this.enabled) return;
      e.preventDefault();
      e.stopPropagation();
      var mouseCoords = getMouseCoords(e, this.container);
      this.emit("doubleClick", mouseCoords);
      if (mouseCoords.sigmaDefaultPrevented) return;

      // default behavior
      var camera = this.renderer.getCamera();
      var newRatio = camera.getBoundedRatio(camera.getState().ratio / this.settings.doubleClickZoomingRatio);
      camera.animate(this.renderer.getViewportZoomedState(getPosition(e, this.container), newRatio), {
        easing: "quadraticInOut",
        duration: this.settings.doubleClickZoomingDuration
      });
    }
  }, {
    key: "handleDown",
    value: function handleDown(e) {
      if (!this.enabled) return;

      // We only start dragging on left button
      if (e.button === 0) {
        this.startCameraState = this.renderer.getCamera().getState();
        var _getPosition = getPosition(e, this.container),
          x = _getPosition.x,
          y = _getPosition.y;
        this.lastMouseX = x;
        this.lastMouseY = y;
        this.draggedEvents = 0;
        this.downStartTime = Date.now();
        this.isMouseDown = true;
      }
      this.emit("mousedown", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleUp",
    value: function handleUp(e) {
      var _this3 = this;
      if (!this.enabled || !this.isMouseDown) return;
      var camera = this.renderer.getCamera();
      this.isMouseDown = false;
      if (typeof this.movingTimeout === "number") {
        clearTimeout(this.movingTimeout);
        this.movingTimeout = null;
      }
      var _getPosition2 = getPosition(e, this.container),
        x = _getPosition2.x,
        y = _getPosition2.y;
      var cameraState = camera.getState(),
        previousCameraState = camera.getPreviousState() || {
          x: 0,
          y: 0
        };
      if (this.isMoving) {
        camera.animate({
          x: cameraState.x + this.settings.inertiaRatio * (cameraState.x - previousCameraState.x),
          y: cameraState.y + this.settings.inertiaRatio * (cameraState.y - previousCameraState.y)
        }, {
          duration: this.settings.inertiaDuration,
          easing: "quadraticOut"
        });
      } else if (this.lastMouseX !== x || this.lastMouseY !== y) {
        camera.setState({
          x: cameraState.x,
          y: cameraState.y
        });
      }
      this.isMoving = false;
      setTimeout(function () {
        var shouldRefresh = _this3.draggedEvents > 0;
        _this3.draggedEvents = 0;

        // NOTE: this refresh is here to make sure `hideEdgesOnMove` can work
        // when someone releases camera pan drag after having stopped moving.
        // See commit: https://github.com/jacomyal/sigma.js/commit/cfd9197f70319109db6b675dd7c82be493ca95a2
        // See also issue: https://github.com/jacomyal/sigma.js/issues/1290
        // It could be possible to render instead of scheduling a refresh but for
        // now it seems good enough.
        if (shouldRefresh && _this3.renderer.getSetting("hideEdgesOnMove")) _this3.renderer.refresh();
      }, 0);
      this.emit("mouseup", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleMove",
    value: function handleMove(e) {
      var _this4 = this;
      if (!this.enabled) return;
      var mouseCoords = getMouseCoords(e, this.container);

      // Always trigger a "mousemovebody" event, so that it is possible to develop
      // a drag-and-drop effect that works even when the mouse is out of the
      // container:
      this.emit("mousemovebody", mouseCoords);

      // Only trigger the "mousemove" event when the mouse is actually hovering
      // the container, to avoid weirdly hovering nodes and/or edges when the
      // mouse is not hover the container:
      if (e.target === this.container || e.composedPath()[0] === this.container) {
        this.emit("mousemove", mouseCoords);
      }
      if (mouseCoords.sigmaDefaultPrevented) return;

      // Handle the case when "isMouseDown" all the time, to allow dragging the
      // stage while the mouse is not hover the container:
      if (this.isMouseDown) {
        this.isMoving = true;
        this.draggedEvents++;
        if (typeof this.movingTimeout === "number") {
          clearTimeout(this.movingTimeout);
        }
        this.movingTimeout = window.setTimeout(function () {
          _this4.movingTimeout = null;
          _this4.isMoving = false;
        }, this.settings.dragTimeout);
        var camera = this.renderer.getCamera();
        var _getPosition3 = getPosition(e, this.container),
          eX = _getPosition3.x,
          eY = _getPosition3.y;
        var lastMouse = this.renderer.viewportToFramedGraph({
          x: this.lastMouseX,
          y: this.lastMouseY
        });
        var mouse = this.renderer.viewportToFramedGraph({
          x: eX,
          y: eY
        });
        var offsetX = lastMouse.x - mouse.x,
          offsetY = lastMouse.y - mouse.y;
        var cameraState = camera.getState();
        var x = cameraState.x + offsetX,
          y = cameraState.y + offsetY;
        camera.setState({
          x: x,
          y: y
        });
        this.lastMouseX = eX;
        this.lastMouseY = eY;
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(e) {
      this.emit("mouseleave", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleEnter",
    value: function handleEnter(e) {
      this.emit("mouseenter", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(e) {
      var _this5 = this;
      var camera = this.renderer.getCamera();
      if (!this.enabled || !camera.enabledZooming) return;
      var delta = getWheelDelta(e);
      if (!delta) return;
      var wheelCoords = getWheelCoords(e, this.container);
      this.emit("wheel", wheelCoords);
      if (wheelCoords.sigmaDefaultPrevented) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // Default behavior
      var currentRatio = camera.getState().ratio;
      var ratioDiff = delta > 0 ? 1 / this.settings.zoomingRatio : this.settings.zoomingRatio;
      var newRatio = camera.getBoundedRatio(currentRatio * ratioDiff);
      var wheelDirection = delta > 0 ? 1 : -1;
      var now = Date.now();

      // Exit early without preventing default behavior when ratio doesn't change:
      if (currentRatio === newRatio) return;
      e.preventDefault();
      e.stopPropagation();

      // Cancel events that are too close each other and in the same direction:
      if (this.currentWheelDirection === wheelDirection && this.lastWheelTriggerTime && now - this.lastWheelTriggerTime < this.settings.zoomDuration / 5) {
        return;
      }
      camera.animate(this.renderer.getViewportZoomedState(getPosition(e, this.container), newRatio), {
        easing: "quadraticOut",
        duration: this.settings.zoomDuration
      }, function () {
        _this5.currentWheelDirection = 0;
      });
      this.currentWheelDirection = wheelDirection;
      this.lastWheelTriggerTime = now;
    }
  }, {
    key: "setSettings",
    value: function setSettings(settings) {
      this.settings = settings;
    }
  }]);
}(Captor);

var TOUCH_SETTINGS_KEYS = ["dragTimeout", "inertiaDuration", "inertiaRatio", "doubleClickTimeout", "doubleClickZoomingRatio", "doubleClickZoomingDuration", "tapMoveTolerance"];
var DEFAULT_TOUCH_SETTINGS = TOUCH_SETTINGS_KEYS.reduce(function (iter, key) {
  return index._objectSpread2(index._objectSpread2({}, iter), {}, index._defineProperty({}, key, settings_dist_sigmaSettings.DEFAULT_SETTINGS[key]));
}, {});

/**
 * Event types.
 */
/**
 * Touch captor class.
 *
 * @constructor
 */
var TouchCaptor = /*#__PURE__*/function (_Captor) {
  function TouchCaptor(container, renderer) {
    var _this;
    inherits._classCallCheck(this, TouchCaptor);
    _this = inherits._callSuper(this, TouchCaptor, [container, renderer]);

    // Binding methods:
    index._defineProperty(_this, "enabled", true);
    index._defineProperty(_this, "isMoving", false);
    index._defineProperty(_this, "hasMoved", false);
    index._defineProperty(_this, "touchMode", 0);
    index._defineProperty(_this, "startTouchesPositions", []);
    index._defineProperty(_this, "lastTouches", []);
    index._defineProperty(_this, "lastTap", null);
    index._defineProperty(_this, "settings", DEFAULT_TOUCH_SETTINGS);
    _this.handleStart = _this.handleStart.bind(_this);
    _this.handleLeave = _this.handleLeave.bind(_this);
    _this.handleMove = _this.handleMove.bind(_this);

    // Binding events
    container.addEventListener("touchstart", _this.handleStart, {
      capture: false
    });
    container.addEventListener("touchcancel", _this.handleLeave, {
      capture: false
    });
    document.addEventListener("touchend", _this.handleLeave, {
      capture: false,
      passive: false
    });
    document.addEventListener("touchmove", _this.handleMove, {
      capture: false,
      passive: false
    });
    return _this;
  }
  inherits._inherits(TouchCaptor, _Captor);
  return inherits._createClass(TouchCaptor, [{
    key: "kill",
    value: function kill() {
      var container = this.container;
      container.removeEventListener("touchstart", this.handleStart);
      container.removeEventListener("touchcancel", this.handleLeave);
      document.removeEventListener("touchend", this.handleLeave);
      document.removeEventListener("touchmove", this.handleMove);
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight
      };
    }
  }, {
    key: "handleStart",
    value: function handleStart(e) {
      var _this2 = this;
      if (!this.enabled) return;
      e.preventDefault();
      var touches = getTouchesArray(e.touches);
      this.touchMode = touches.length;
      this.startCameraState = this.renderer.getCamera().getState();
      this.startTouchesPositions = touches.map(function (touch) {
        return getPosition(touch, _this2.container);
      });

      // When there are two touches down, let's record distance and angle as well:
      if (this.touchMode === 2) {
        var _this$startTouchesPos = colors._slicedToArray(this.startTouchesPositions, 2),
          _this$startTouchesPos2 = _this$startTouchesPos[0],
          x0 = _this$startTouchesPos2.x,
          y0 = _this$startTouchesPos2.y,
          _this$startTouchesPos3 = _this$startTouchesPos[1],
          x1 = _this$startTouchesPos3.x,
          y1 = _this$startTouchesPos3.y;
        this.startTouchesAngle = Math.atan2(y1 - y0, x1 - x0);
        this.startTouchesDistance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
      }
      this.emit("touchdown", getTouchCoords(e, this.lastTouches, this.container));
      this.lastTouches = touches;
      this.lastTouchesPositions = this.startTouchesPositions;
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(e) {
      if (!this.enabled || !this.startTouchesPositions.length) return;
      if (e.cancelable) e.preventDefault();
      if (this.movingTimeout) {
        this.isMoving = false;
        clearTimeout(this.movingTimeout);
      }
      switch (this.touchMode) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        case 2:
          if (e.touches.length === 1) {
            this.handleStart(e);
            e.preventDefault();
            break;
          }
        /* falls through */
        case 1:
          if (this.isMoving) {
            var camera = this.renderer.getCamera();
            var cameraState = camera.getState(),
              previousCameraState = camera.getPreviousState() || {
                x: 0,
                y: 0
              };
            camera.animate({
              x: cameraState.x + this.settings.inertiaRatio * (cameraState.x - previousCameraState.x),
              y: cameraState.y + this.settings.inertiaRatio * (cameraState.y - previousCameraState.y)
            }, {
              duration: this.settings.inertiaDuration,
              easing: "quadraticOut"
            });
          }
          this.hasMoved = false;
          this.isMoving = false;
          this.touchMode = 0;
          break;
      }
      this.emit("touchup", getTouchCoords(e, this.lastTouches, this.container));

      // When the last touch ends and there hasn't been too much movement, trigger a "tap" or "doubletap" event:
      if (!e.touches.length) {
        var position = getPosition(this.lastTouches[0], this.container);
        var downPosition = this.startTouchesPositions[0];
        var dSquare = Math.pow(position.x - downPosition.x, 2) + Math.pow(position.y - downPosition.y, 2);
        if (!e.touches.length && dSquare < Math.pow(this.settings.tapMoveTolerance, 2)) {
          // Only trigger "doubletap" when the last tap is recent enough:
          if (this.lastTap && Date.now() - this.lastTap.time < this.settings.doubleClickTimeout) {
            var touchCoords = getTouchCoords(e, this.lastTouches, this.container);
            this.emit("doubletap", touchCoords);
            this.lastTap = null;
            if (!touchCoords.sigmaDefaultPrevented) {
              var _camera = this.renderer.getCamera();
              var newRatio = _camera.getBoundedRatio(_camera.getState().ratio / this.settings.doubleClickZoomingRatio);
              _camera.animate(this.renderer.getViewportZoomedState(position, newRatio), {
                easing: "quadraticInOut",
                duration: this.settings.doubleClickZoomingDuration
              });
            }
          }
          // Else, trigger a normal "tap" event:
          else {
            var _touchCoords = getTouchCoords(e, this.lastTouches, this.container);
            this.emit("tap", _touchCoords);
            this.lastTap = {
              time: Date.now(),
              position: _touchCoords.touches[0] || _touchCoords.previousTouches[0]
            };
          }
        }
      }
      this.lastTouches = getTouchesArray(e.touches);
      this.startTouchesPositions = [];
    }
  }, {
    key: "handleMove",
    value: function handleMove(e) {
      var _this3 = this;
      if (!this.enabled || !this.startTouchesPositions.length) return;
      e.preventDefault();
      var touches = getTouchesArray(e.touches);
      var touchesPositions = touches.map(function (touch) {
        return getPosition(touch, _this3.container);
      });
      var lastTouches = this.lastTouches;
      this.lastTouches = touches;
      this.lastTouchesPositions = touchesPositions;
      var touchCoords = getTouchCoords(e, lastTouches, this.container);
      this.emit("touchmove", touchCoords);
      if (touchCoords.sigmaDefaultPrevented) return;

      // If a move was initiated at some point, and we get back to start point,
      // we should still consider that we did move (which also happens after a
      // multiple touch when only one touch remains in which case handleStart
      // is recalled within handleLeave).
      // Now, some mobile browsers report zero-distance moves so we also check that
      // one of the touches did actually move from the origin position.
      this.hasMoved || (this.hasMoved = touchesPositions.some(function (position, idx) {
        var startPosition = _this3.startTouchesPositions[idx];
        return startPosition && (position.x !== startPosition.x || position.y !== startPosition.y);
      }));

      // If there was no move, do not trigger touch moves behavior
      if (!this.hasMoved) {
        return;
      }
      this.isMoving = true;
      if (this.movingTimeout) clearTimeout(this.movingTimeout);
      this.movingTimeout = window.setTimeout(function () {
        _this3.isMoving = false;
      }, this.settings.dragTimeout);
      var camera = this.renderer.getCamera();
      var startCameraState = this.startCameraState;
      var padding = this.renderer.getSetting("stagePadding");
      switch (this.touchMode) {
        case 1:
          {
            var _this$renderer$viewpo = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]),
              xStart = _this$renderer$viewpo.x,
              yStart = _this$renderer$viewpo.y;
            var _this$renderer$viewpo2 = this.renderer.viewportToFramedGraph(touchesPositions[0]),
              x = _this$renderer$viewpo2.x,
              y = _this$renderer$viewpo2.y;
            camera.setState({
              x: startCameraState.x + xStart - x,
              y: startCameraState.y + yStart - y
            });
            break;
          }
        case 2:
          {
            /**
             * Here is the thinking here:
             *
             * 1. We can find the new angle and ratio, by comparing the vector from "touch one" to "touch two" at the start
             *    of the d'n'd and now
             *
             * 2. We can use `Camera#viewportToGraph` inside formula to retrieve the new camera position, using the graph
             *    position of a touch at the beginning of the d'n'd (using `startCamera.viewportToGraph`) and the viewport
             *    position of this same touch now
             */
            var newCameraState = {
              x: 0.5,
              y: 0.5,
              angle: 0,
              ratio: 1
            };
            var _touchesPositions$ = touchesPositions[0],
              x0 = _touchesPositions$.x,
              y0 = _touchesPositions$.y;
            var _touchesPositions$2 = touchesPositions[1],
              x1 = _touchesPositions$2.x,
              y1 = _touchesPositions$2.y;
            var angleDiff = Math.atan2(y1 - y0, x1 - x0) - this.startTouchesAngle;
            var ratioDiff = Math.hypot(y1 - y0, x1 - x0) / this.startTouchesDistance;

            // 1.
            var newRatio = camera.getBoundedRatio(startCameraState.ratio / ratioDiff);
            newCameraState.ratio = newRatio;
            newCameraState.angle = startCameraState.angle + angleDiff;

            // 2.
            var dimensions = this.getDimensions();
            var touchGraphPosition = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], {
              cameraState: startCameraState
            });
            var smallestDimension = Math.min(dimensions.width, dimensions.height) - 2 * padding;
            var dx = smallestDimension / dimensions.width;
            var dy = smallestDimension / dimensions.height;
            var ratio = newRatio / smallestDimension;

            // Align with center of the graph:
            var _x = x0 - smallestDimension / 2 / dx;
            var _y = y0 - smallestDimension / 2 / dy;

            // Rotate:
            var _ref = [_x * Math.cos(-newCameraState.angle) - _y * Math.sin(-newCameraState.angle), _y * Math.cos(-newCameraState.angle) + _x * Math.sin(-newCameraState.angle)];
            _x = _ref[0];
            _y = _ref[1];
            newCameraState.x = touchGraphPosition.x - _x * ratio;
            newCameraState.y = touchGraphPosition.y + _y * ratio;
            camera.setState(newCameraState);
            break;
          }
      }
    }
  }, {
    key: "setSettings",
    value: function setSettings(settings) {
      this.settings = settings;
    }
  }]);
}(Captor);

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return colors._arrayLikeToArray(r);
}

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || colors._unsupportedIterableToArray(r) || _nonIterableSpread();
}

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

/**
 * Sigma.js Labels Heuristics
 * ===========================
 *
 * Miscellaneous heuristics related to label display.
 * @module
 */
/**
 * Class representing a single candidate for the label grid selection.
 *
 * It also describes a deterministic way to compare two candidates to assess
 * which one is better.
 */
var LabelCandidate = /*#__PURE__*/function () {
  function LabelCandidate(key, size) {
    inherits._classCallCheck(this, LabelCandidate);
    this.key = key;
    this.size = size;
  }
  return inherits._createClass(LabelCandidate, null, [{
    key: "compare",
    value: function compare(first, second) {
      // First we compare by size
      if (first.size > second.size) return -1;
      if (first.size < second.size) return 1;

      // Then since no two nodes can have the same key, we use it to
      // deterministically tie-break by key
      if (first.key > second.key) return 1;

      // NOTE: this comparator cannot return 0
      return -1;
    }
  }]);
}();
/**
 * Class representing a 2D spatial grid divided into constant-size cells.
 */
var LabelGrid = /*#__PURE__*/function () {
  function LabelGrid() {
    inherits._classCallCheck(this, LabelGrid);
    index._defineProperty(this, "width", 0);
    index._defineProperty(this, "height", 0);
    index._defineProperty(this, "cellSize", 0);
    index._defineProperty(this, "columns", 0);
    index._defineProperty(this, "rows", 0);
    index._defineProperty(this, "cells", {});
  }
  return inherits._createClass(LabelGrid, [{
    key: "resizeAndClear",
    value: function resizeAndClear(dimensions, cellSize) {
      this.width = dimensions.width;
      this.height = dimensions.height;
      this.cellSize = cellSize;
      this.columns = Math.ceil(dimensions.width / cellSize);
      this.rows = Math.ceil(dimensions.height / cellSize);
      this.cells = {};
    }
  }, {
    key: "getIndex",
    value: function getIndex(pos) {
      var xIndex = Math.floor(pos.x / this.cellSize);
      var yIndex = Math.floor(pos.y / this.cellSize);
      return yIndex * this.columns + xIndex;
    }
  }, {
    key: "add",
    value: function add(key, size, pos) {
      var candidate = new LabelCandidate(key, size);
      var index = this.getIndex(pos);
      var cell = this.cells[index];
      if (!cell) {
        cell = [];
        this.cells[index] = cell;
      }
      cell.push(candidate);
    }
  }, {
    key: "organize",
    value: function organize() {
      for (var k in this.cells) {
        var cell = this.cells[k];
        cell.sort(LabelCandidate.compare);
      }
    }
  }, {
    key: "getLabelsToDisplay",
    value: function getLabelsToDisplay(ratio, density) {
      // TODO: work on visible nodes to optimize? ^ -> threshold outside so that memoization works?
      // TODO: adjust threshold lower, but increase cells a bit?
      // TODO: hunt for geom issue in disguise
      // TODO: memoize while ratio does not move. method to force recompute
      var cellArea = this.cellSize * this.cellSize;
      var scaledCellArea = cellArea / ratio / ratio;
      var scaledDensity = scaledCellArea * density / cellArea;
      var labelsToDisplayPerCell = Math.ceil(scaledDensity);
      var labels = [];
      for (var k in this.cells) {
        var cell = this.cells[k];
        for (var i = 0; i < Math.min(labelsToDisplayPerCell, cell.length); i++) {
          labels.push(cell[i].key);
        }
      }
      return labels;
    }
  }]);
}();

/**
 * Label heuristic selecting edge labels to display, based on displayed node
 * labels
 *
 * @param  {object} params                 - Parameters:
 * @param  {Set}      displayedNodeLabels  - Currently displayed node labels.
 * @param  {Set}      highlightedNodes     - Highlighted nodes.
 * @param  {Graph}    graph                - The rendered graph.
 * @param  {string}   hoveredNode          - Hovered node (optional)
 * @return {Array}                         - The selected labels.
 */
function edgeLabelsToDisplayFromNodes(params) {
  var graph = params.graph,
    hoveredNode = params.hoveredNode,
    highlightedNodes = params.highlightedNodes,
    displayedNodeLabels = params.displayedNodeLabels;
  var worthyEdges = [];

  // TODO: the code below can be optimized using #.forEach and batching the code per adj

  // We should display an edge's label if:
  //   - Any of its extremities is highlighted or hovered
  //   - Both of its extremities has its label shown
  graph.forEachEdge(function (edge, _, source, target) {
    if (source === hoveredNode || target === hoveredNode || highlightedNodes.has(source) || highlightedNodes.has(target) || displayedNodeLabels.has(source) && displayedNodeLabels.has(target)) {
      worthyEdges.push(edge);
    }
  });
  return worthyEdges;
}

/**
 * Constants.
 */
var X_LABEL_MARGIN = 150;
var Y_LABEL_MARGIN = 50;
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Important functions.
 */
function applyNodeDefaults(settings, key, data) {
  if (!hasOwnProperty.call(data, "x") || !hasOwnProperty.call(data, "y")) throw new Error("Sigma: could not find a valid position (x, y) for node \"".concat(key, "\". All your nodes must have a number \"x\" and \"y\". Maybe your forgot to apply a layout or your \"nodeReducer\" is not returning the correct data?"));
  if (!data.color) data.color = settings.defaultNodeColor;
  if (!data.label && data.label !== "") data.label = null;
  if (data.label !== undefined && data.label !== null) data.label = "" + data.label;else data.label = null;
  if (!data.size) data.size = 2;
  if (!hasOwnProperty.call(data, "hidden")) data.hidden = false;
  if (!hasOwnProperty.call(data, "highlighted")) data.highlighted = false;
  if (!hasOwnProperty.call(data, "forceLabel")) data.forceLabel = false;
  if (!data.type || data.type === "") data.type = settings.defaultNodeType;
  if (!data.zIndex) data.zIndex = 0;
  return data;
}
function applyEdgeDefaults(settings, _key, data) {
  if (!data.color) data.color = settings.defaultEdgeColor;
  if (!data.label) data.label = "";
  if (!data.size) data.size = 0.5;
  if (!hasOwnProperty.call(data, "hidden")) data.hidden = false;
  if (!hasOwnProperty.call(data, "forceLabel")) data.forceLabel = false;
  if (!data.type || data.type === "") data.type = settings.defaultEdgeType;
  if (!data.zIndex) data.zIndex = 0;
  return data;
}

/**
 * Main class.
 *
 * @constructor
 * @param {Graph}       graph     - Graph to render.
 * @param {HTMLElement} container - DOM container in which to render.
 * @param {object}      settings  - Optional settings.
 */
var Sigma$1 = /*#__PURE__*/function (_TypedEventEmitter) {
  function Sigma(graph, container) {
    var _this;
    var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    inherits._classCallCheck(this, Sigma);
    _this = inherits._callSuper(this, Sigma);

    // Resolving settings
    index._defineProperty(_this, "elements", {});
    index._defineProperty(_this, "canvasContexts", {});
    index._defineProperty(_this, "webGLContexts", {});
    index._defineProperty(_this, "pickingLayers", new Set());
    index._defineProperty(_this, "textures", {});
    index._defineProperty(_this, "frameBuffers", {});
    index._defineProperty(_this, "activeListeners", {});
    index._defineProperty(_this, "labelGrid", new LabelGrid());
    index._defineProperty(_this, "nodeDataCache", {});
    index._defineProperty(_this, "edgeDataCache", {});
    // Indices to keep track of the index of the item inside programs
    index._defineProperty(_this, "nodeProgramIndex", {});
    index._defineProperty(_this, "edgeProgramIndex", {});
    index._defineProperty(_this, "nodesWithForcedLabels", new Set());
    index._defineProperty(_this, "edgesWithForcedLabels", new Set());
    index._defineProperty(_this, "nodeExtent", {
      x: [0, 1],
      y: [0, 1]
    });
    index._defineProperty(_this, "nodeZExtent", [Infinity, -Infinity]);
    index._defineProperty(_this, "edgeZExtent", [Infinity, -Infinity]);
    index._defineProperty(_this, "matrix", normalization.identity());
    index._defineProperty(_this, "invMatrix", normalization.identity());
    index._defineProperty(_this, "correctionRatio", 1);
    index._defineProperty(_this, "customBBox", null);
    index._defineProperty(_this, "normalizationFunction", normalization.createNormalizationFunction({
      x: [0, 1],
      y: [0, 1]
    }));
    // Cache:
    index._defineProperty(_this, "graphToViewportRatio", 1);
    index._defineProperty(_this, "itemIDsIndex", {});
    index._defineProperty(_this, "nodeIndices", {});
    index._defineProperty(_this, "edgeIndices", {});
    // Starting dimensions and pixel ratio
    index._defineProperty(_this, "width", 0);
    index._defineProperty(_this, "height", 0);
    index._defineProperty(_this, "pixelRatio", normalization.getPixelRatio());
    index._defineProperty(_this, "pickingDownSizingRatio", 2 * _this.pixelRatio);
    // Graph State
    index._defineProperty(_this, "displayedNodeLabels", new Set());
    index._defineProperty(_this, "displayedEdgeLabels", new Set());
    index._defineProperty(_this, "highlightedNodes", new Set());
    index._defineProperty(_this, "hoveredNode", null);
    index._defineProperty(_this, "hoveredEdge", null);
    // Internal states
    index._defineProperty(_this, "renderFrame", null);
    index._defineProperty(_this, "renderHighlightedNodesFrame", null);
    index._defineProperty(_this, "needToProcess", false);
    index._defineProperty(_this, "checkEdgesEventsFrame", null);
    // Programs
    index._defineProperty(_this, "nodePrograms", {});
    index._defineProperty(_this, "nodeHoverPrograms", {});
    index._defineProperty(_this, "edgePrograms", {});
    _this.settings = settings_dist_sigmaSettings.resolveSettings(settings);

    // Validating
    settings_dist_sigmaSettings.validateSettings(_this.settings);
    normalization.validateGraph(graph);
    if (!(container instanceof HTMLElement)) throw new Error("Sigma: container should be an html element.");

    // Properties
    _this.graph = graph;
    _this.container = container;

    // Initializing contexts
    _this.createWebGLContext("edges", {
      picking: settings.enableEdgeEvents
    });
    _this.createCanvasContext("edgeLabels");
    _this.createWebGLContext("nodes", {
      picking: true
    });
    _this.createCanvasContext("labels");
    _this.createCanvasContext("hovers");
    _this.createWebGLContext("hoverNodes");
    _this.createCanvasContext("mouse", {
      style: {
        touchAction: "none",
        userSelect: "none"
      }
    });

    // Initial resize
    _this.resize();

    // Loading programs
    for (var type in _this.settings.nodeProgramClasses) {
      _this.registerNodeProgram(type, _this.settings.nodeProgramClasses[type], _this.settings.nodeHoverProgramClasses[type]);
    }
    for (var _type in _this.settings.edgeProgramClasses) {
      _this.registerEdgeProgram(_type, _this.settings.edgeProgramClasses[_type]);
    }

    // Initializing the camera
    _this.camera = new Camera();

    // Binding camera events
    _this.bindCameraHandlers();

    // Initializing captors
    _this.mouseCaptor = new MouseCaptor(_this.elements.mouse, _this);
    _this.mouseCaptor.setSettings(_this.settings);
    _this.touchCaptor = new TouchCaptor(_this.elements.mouse, _this);
    _this.touchCaptor.setSettings(_this.settings);

    // Binding event handlers
    _this.bindEventHandlers();

    // Binding graph handlers
    _this.bindGraphHandlers();

    // Trigger eventual settings-related things
    _this.handleSettingsUpdate();

    // Processing data for the first time & render
    _this.refresh();
    return _this;
  }

  /**---------------------------------------------------------------------------
   * Internal methods.
   **---------------------------------------------------------------------------
   */

  /**
   * Internal function used to register a node program
   *
   * @param  {string}           key              - The program's key, matching the related nodes "type" values.
   * @param  {NodeProgramType}  NodeProgramClass - A nodes program class.
   * @param  {NodeProgramType?} NodeHoverProgram - A nodes program class to render hovered nodes (optional).
   * @return {Sigma}
   */
  inherits._inherits(Sigma, _TypedEventEmitter);
  return inherits._createClass(Sigma, [{
    key: "registerNodeProgram",
    value: function registerNodeProgram(key, NodeProgramClass, NodeHoverProgram) {
      if (this.nodePrograms[key]) this.nodePrograms[key].kill();
      if (this.nodeHoverPrograms[key]) this.nodeHoverPrograms[key].kill();
      this.nodePrograms[key] = new NodeProgramClass(this.webGLContexts.nodes, this.frameBuffers.nodes, this);
      this.nodeHoverPrograms[key] = new (NodeHoverProgram || NodeProgramClass)(this.webGLContexts.hoverNodes, null, this);
      return this;
    }

    /**
     * Internal function used to register an edge program
     *
     * @param  {string}          key              - The program's key, matching the related edges "type" values.
     * @param  {EdgeProgramType} EdgeProgramClass - An edges program class.
     * @return {Sigma}
     */
  }, {
    key: "registerEdgeProgram",
    value: function registerEdgeProgram(key, EdgeProgramClass) {
      if (this.edgePrograms[key]) this.edgePrograms[key].kill();
      this.edgePrograms[key] = new EdgeProgramClass(this.webGLContexts.edges, this.frameBuffers.edges, this);
      return this;
    }

    /**
     * Internal function used to unregister a node program
     *
     * @param  {string} key - The program's key, matching the related nodes "type" values.
     * @return {Sigma}
     */
  }, {
    key: "unregisterNodeProgram",
    value: function unregisterNodeProgram(key) {
      if (this.nodePrograms[key]) {
        var _this$nodePrograms = this.nodePrograms,
          program = _this$nodePrograms[key],
          programs = _objectWithoutProperties(_this$nodePrograms, [key].map(inherits._toPropertyKey));
        program.kill();
        this.nodePrograms = programs;
      }
      if (this.nodeHoverPrograms[key]) {
        var _this$nodeHoverProgra = this.nodeHoverPrograms,
          _program = _this$nodeHoverProgra[key],
          _programs = _objectWithoutProperties(_this$nodeHoverProgra, [key].map(inherits._toPropertyKey));
        _program.kill();
        this.nodePrograms = _programs;
      }
      return this;
    }

    /**
     * Internal function used to unregister an edge program
     *
     * @param  {string} key - The program's key, matching the related edges "type" values.
     * @return {Sigma}
     */
  }, {
    key: "unregisterEdgeProgram",
    value: function unregisterEdgeProgram(key) {
      if (this.edgePrograms[key]) {
        var _this$edgePrograms = this.edgePrograms,
          program = _this$edgePrograms[key],
          programs = _objectWithoutProperties(_this$edgePrograms, [key].map(inherits._toPropertyKey));
        program.kill();
        this.edgePrograms = programs;
      }
      return this;
    }

    /**
     * Method (re)binding WebGL texture (for picking).
     *
     * @return {Sigma}
     */
  }, {
    key: "resetWebGLTexture",
    value: function resetWebGLTexture(id) {
      var gl = this.webGLContexts[id];
      var frameBuffer = this.frameBuffers[id];
      var currentTexture = this.textures[id];
      if (currentTexture) gl.deleteTexture(currentTexture);
      var pickingTexture = gl.createTexture();
      gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
      gl.bindTexture(gl.TEXTURE_2D, pickingTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pickingTexture, 0);
      this.textures[id] = pickingTexture;
      return this;
    }

    /**
     * Method binding camera handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "bindCameraHandlers",
    value: function bindCameraHandlers() {
      var _this2 = this;
      this.activeListeners.camera = function () {
        _this2.scheduleRender();
      };
      this.camera.on("updated", this.activeListeners.camera);
      return this;
    }

    /**
     * Method unbinding camera handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "unbindCameraHandlers",
    value: function unbindCameraHandlers() {
      this.camera.removeListener("updated", this.activeListeners.camera);
      return this;
    }

    /**
     * Method that returns the closest node to a given position.
     */
  }, {
    key: "getNodeAtPosition",
    value: function getNodeAtPosition(position) {
      var x = position.x,
        y = position.y;
      var color = colors.getPixelColor(this.webGLContexts.nodes, this.frameBuffers.nodes, x, y, this.pixelRatio, this.pickingDownSizingRatio);
      var index = colors.colorToIndex.apply(void 0, _toConsumableArray(color));
      var itemAt = this.itemIDsIndex[index];
      return itemAt && itemAt.type === "node" ? itemAt.id : null;
    }

    /**
     * Method binding event handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "bindEventHandlers",
    value: function bindEventHandlers() {
      var _this3 = this;
      // Handling window resize
      this.activeListeners.handleResize = function () {
        // need to call a refresh to rebuild the labelgrid
        _this3.scheduleRefresh();
      };
      window.addEventListener("resize", this.activeListeners.handleResize);

      // Handling mouse move
      this.activeListeners.handleMove = function (e) {
        var event = cleanMouseCoords(e);
        var baseEvent = {
          event: event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        };
        var nodeToHover = _this3.getNodeAtPosition(event);
        if (nodeToHover && _this3.hoveredNode !== nodeToHover && !_this3.nodeDataCache[nodeToHover].hidden) {
          // Handling passing from one node to the other directly
          if (_this3.hoveredNode) _this3.emit("leaveNode", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            node: _this3.hoveredNode
          }));
          _this3.hoveredNode = nodeToHover;
          _this3.emit("enterNode", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            node: nodeToHover
          }));
          _this3.scheduleHighlightedNodesRender();
          return;
        }

        // Checking if the hovered node is still hovered
        if (_this3.hoveredNode) {
          if (_this3.getNodeAtPosition(event) !== _this3.hoveredNode) {
            var node = _this3.hoveredNode;
            _this3.hoveredNode = null;
            _this3.emit("leaveNode", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
              node: node
            }));
            _this3.scheduleHighlightedNodesRender();
            return;
          }
        }
        if (_this3.settings.enableEdgeEvents) {
          var edgeToHover = _this3.hoveredNode ? null : _this3.getEdgeAtPoint(baseEvent.event.x, baseEvent.event.y);
          if (edgeToHover !== _this3.hoveredEdge) {
            if (_this3.hoveredEdge) _this3.emit("leaveEdge", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
              edge: _this3.hoveredEdge
            }));
            if (edgeToHover) _this3.emit("enterEdge", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
              edge: edgeToHover
            }));
            _this3.hoveredEdge = edgeToHover;
          }
        }
      };

      // Handling mouse move over body (only to dispatch the proper event):
      this.activeListeners.handleMoveBody = function (e) {
        var event = cleanMouseCoords(e);
        _this3.emit("moveBody", {
          event: event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        });
      };

      // Handling mouse leave stage:
      this.activeListeners.handleLeave = function (e) {
        var event = cleanMouseCoords(e);
        var baseEvent = {
          event: event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        };
        if (_this3.hoveredNode) {
          _this3.emit("leaveNode", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            node: _this3.hoveredNode
          }));
          _this3.scheduleHighlightedNodesRender();
        }
        if (_this3.settings.enableEdgeEvents && _this3.hoveredEdge) {
          _this3.emit("leaveEdge", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            edge: _this3.hoveredEdge
          }));
          _this3.scheduleHighlightedNodesRender();
        }
        _this3.emit("leaveStage", index._objectSpread2({}, baseEvent));
      };

      // Handling mouse enter stage:
      this.activeListeners.handleEnter = function (e) {
        var event = cleanMouseCoords(e);
        var baseEvent = {
          event: event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        };
        _this3.emit("enterStage", index._objectSpread2({}, baseEvent));
      };

      // Handling click
      var createInteractionListener = function createInteractionListener(eventType) {
        return function (e) {
          var event = cleanMouseCoords(e);
          var baseEvent = {
            event: event,
            preventSigmaDefault: function preventSigmaDefault() {
              event.preventSigmaDefault();
            }
          };
          var nodeAtPosition = _this3.getNodeAtPosition(event);
          if (nodeAtPosition) return _this3.emit("".concat(eventType, "Node"), index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            node: nodeAtPosition
          }));
          if (_this3.settings.enableEdgeEvents) {
            var edge = _this3.getEdgeAtPoint(event.x, event.y);
            if (edge) return _this3.emit("".concat(eventType, "Edge"), index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
              edge: edge
            }));
          }
          return _this3.emit("".concat(eventType, "Stage"), baseEvent);
        };
      };
      this.activeListeners.handleClick = createInteractionListener("click");
      this.activeListeners.handleRightClick = createInteractionListener("rightClick");
      this.activeListeners.handleDoubleClick = createInteractionListener("doubleClick");
      this.activeListeners.handleWheel = createInteractionListener("wheel");
      this.activeListeners.handleDown = createInteractionListener("down");
      this.activeListeners.handleUp = createInteractionListener("up");
      this.mouseCaptor.on("mousemove", this.activeListeners.handleMove);
      this.mouseCaptor.on("mousemovebody", this.activeListeners.handleMoveBody);
      this.mouseCaptor.on("click", this.activeListeners.handleClick);
      this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick);
      this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick);
      this.mouseCaptor.on("wheel", this.activeListeners.handleWheel);
      this.mouseCaptor.on("mousedown", this.activeListeners.handleDown);
      this.mouseCaptor.on("mouseup", this.activeListeners.handleUp);
      this.mouseCaptor.on("mouseleave", this.activeListeners.handleLeave);
      this.mouseCaptor.on("mouseenter", this.activeListeners.handleEnter);
      this.touchCaptor.on("touchdown", this.activeListeners.handleDown);
      this.touchCaptor.on("touchdown", this.activeListeners.handleMove);
      this.touchCaptor.on("touchup", this.activeListeners.handleUp);
      this.touchCaptor.on("touchmove", this.activeListeners.handleMove);
      this.touchCaptor.on("tap", this.activeListeners.handleClick);
      this.touchCaptor.on("doubletap", this.activeListeners.handleDoubleClick);
      this.touchCaptor.on("touchmove", this.activeListeners.handleMoveBody);
      return this;
    }

    /**
     * Method binding graph handlers
     *
     * @return {Sigma}
     */
  }, {
    key: "bindGraphHandlers",
    value: function bindGraphHandlers() {
      var _this4 = this;
      var graph = this.graph;
      var LAYOUT_IMPACTING_FIELDS = new Set(["x", "y", "zIndex", "type"]);
      this.activeListeners.eachNodeAttributesUpdatedGraphUpdate = function (e) {
        var _e$hints;
        var updatedFields = (_e$hints = e.hints) === null || _e$hints === void 0 ? void 0 : _e$hints.attributes;
        // we process all nodes
        _this4.graph.forEachNode(function (node) {
          return _this4.updateNode(node);
        });

        // if coord, type or zIndex have changed, we need to schedule a render
        // (zIndex for the programIndex)
        var layoutChanged = !updatedFields || updatedFields.some(function (f) {
          return LAYOUT_IMPACTING_FIELDS.has(f);
        });
        _this4.refresh({
          partialGraph: {
            nodes: graph.nodes()
          },
          skipIndexation: !layoutChanged,
          schedule: true
        });
      };
      this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate = function (e) {
        var _e$hints2;
        var updatedFields = (_e$hints2 = e.hints) === null || _e$hints2 === void 0 ? void 0 : _e$hints2.attributes;
        // we process all edges
        _this4.graph.forEachEdge(function (edge) {
          return _this4.updateEdge(edge);
        });
        var layoutChanged = updatedFields && ["zIndex", "type"].some(function (f) {
          return updatedFields === null || updatedFields === void 0 ? void 0 : updatedFields.includes(f);
        });
        _this4.refresh({
          partialGraph: {
            edges: graph.edges()
          },
          skipIndexation: !layoutChanged,
          schedule: true
        });
      };

      // On add node, we add the node in indices and then call for a render
      this.activeListeners.addNodeGraphUpdate = function (payload) {
        var node = payload.key;
        // we process the node
        _this4.addNode(node);
        // schedule a render for the node
        _this4.refresh({
          partialGraph: {
            nodes: [node]
          },
          skipIndexation: false,
          schedule: true
        });
      };

      // On update node, we update indices and then call for a render
      this.activeListeners.updateNodeGraphUpdate = function (payload) {
        var node = payload.key;
        // schedule a render for the node
        _this4.refresh({
          partialGraph: {
            nodes: [node]
          },
          skipIndexation: false,
          schedule: true
        });
      };

      // On drop node, we remove the node from indices and then call for a refresh
      this.activeListeners.dropNodeGraphUpdate = function (payload) {
        var node = payload.key;
        // we process the node
        _this4.removeNode(node);
        // schedule a render for everything
        _this4.refresh({
          schedule: true
        });
      };

      // On add edge, we remove the edge from indices and then call for a refresh
      this.activeListeners.addEdgeGraphUpdate = function (payload) {
        var edge = payload.key;
        // we process the edge
        _this4.addEdge(edge);
        // schedule a render for the edge
        _this4.refresh({
          partialGraph: {
            edges: [edge]
          },
          schedule: true
        });
      };

      // On update edge, we update indices and then call for a refresh
      this.activeListeners.updateEdgeGraphUpdate = function (payload) {
        var edge = payload.key;
        // schedule a repaint for the edge
        _this4.refresh({
          partialGraph: {
            edges: [edge]
          },
          skipIndexation: false,
          schedule: true
        });
      };

      // On drop edge, we remove the edge from indices and then call for a refresh
      this.activeListeners.dropEdgeGraphUpdate = function (payload) {
        var edge = payload.key;
        // we process the edge
        _this4.removeEdge(edge);
        // schedule a render for all edges
        _this4.refresh({
          schedule: true
        });
      };

      // On clear edges, we clear the edge indices and then call for a refresh
      this.activeListeners.clearEdgesGraphUpdate = function () {
        // we clear the edge data structures
        _this4.clearEdgeState();
        _this4.clearEdgeIndices();
        // schedule a render for all edges
        _this4.refresh({
          schedule: true
        });
      };

      // On graph clear, we clear indices and then call for a refresh
      this.activeListeners.clearGraphUpdate = function () {
        // clear graph state
        _this4.clearEdgeState();
        _this4.clearNodeState();

        // clear graph indices
        _this4.clearEdgeIndices();
        _this4.clearNodeIndices();

        // schedule a render for all
        _this4.refresh({
          schedule: true
        });
      };
      graph.on("nodeAdded", this.activeListeners.addNodeGraphUpdate);
      graph.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
      graph.on("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
      graph.on("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
      graph.on("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
      graph.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
      graph.on("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
      graph.on("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
      graph.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
      graph.on("cleared", this.activeListeners.clearGraphUpdate);
      return this;
    }

    /**
     * Method used to unbind handlers from the graph.
     *
     * @return {undefined}
     */
  }, {
    key: "unbindGraphHandlers",
    value: function unbindGraphHandlers() {
      var graph = this.graph;
      graph.removeListener("nodeAdded", this.activeListeners.addNodeGraphUpdate);
      graph.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
      graph.removeListener("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
      graph.removeListener("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
      graph.removeListener("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
      graph.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
      graph.removeListener("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
      graph.removeListener("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
      graph.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
      graph.removeListener("cleared", this.activeListeners.clearGraphUpdate);
    }

    /**
     * Method looking for an edge colliding with a given point at (x, y). Returns
     * the key of the edge if any, or null else.
     */
  }, {
    key: "getEdgeAtPoint",
    value: function getEdgeAtPoint(x, y) {
      var color = colors.getPixelColor(this.webGLContexts.edges, this.frameBuffers.edges, x, y, this.pixelRatio, this.pickingDownSizingRatio);
      var index = colors.colorToIndex.apply(void 0, _toConsumableArray(color));
      var itemAt = this.itemIDsIndex[index];
      return itemAt && itemAt.type === "edge" ? itemAt.id : null;
    }

    /**
     * Method used to process the whole graph's data.
     *  - extent
     *  - normalizationFunction
     *  - compute node's coordinate
     *  - labelgrid
     *  - program data allocation
     * @return {Sigma}
     */
  }, {
    key: "process",
    value: function process() {
      var _this5 = this;
      this.emit("beforeProcess");
      var graph = this.graph;
      var settings = this.settings;
      var dimensions = this.getDimensions();

      //
      // NODES
      //
      this.nodeExtent = normalization.graphExtent(this.graph);
      if (!this.settings.autoRescale) {
        var width = dimensions.width,
          height = dimensions.height;
        var _this$nodeExtent = this.nodeExtent,
          x = _this$nodeExtent.x,
          y = _this$nodeExtent.y;
        this.nodeExtent = {
          x: [(x[0] + x[1]) / 2 - width / 2, (x[0] + x[1]) / 2 + width / 2],
          y: [(y[0] + y[1]) / 2 - height / 2, (y[0] + y[1]) / 2 + height / 2]
        };
      }
      this.normalizationFunction = normalization.createNormalizationFunction(this.customBBox || this.nodeExtent);

      // NOTE: it is important to compute this matrix after computing the node's extent
      // because #.getGraphDimensions relies on it
      var nullCamera = new Camera();
      var nullCameraMatrix = normalization.matrixFromCamera(nullCamera.getState(), dimensions, this.getGraphDimensions(), this.getStagePadding());
      // Resetting the label grid
      // TODO: it's probably better to do this explicitly or on resizes for layout and anims
      this.labelGrid.resizeAndClear(dimensions, settings.labelGridCellSize);
      var nodesPerPrograms = {};
      var nodeIndices = {};
      var edgeIndices = {};
      var itemIDsIndex = {};
      var incrID = 1;
      var nodes = graph.nodes();

      // Do some indexation on the whole graph
      for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i];
        var data = this.nodeDataCache[node];

        // Get initial coordinates
        var attrs = graph.getNodeAttributes(node);
        data.x = attrs.x;
        data.y = attrs.y;
        this.normalizationFunction.applyTo(data);

        // labelgrid
        if (typeof data.label === "string" && !data.hidden) this.labelGrid.add(node, data.size, this.framedGraphToViewport(data, {
          matrix: nullCameraMatrix
        }));

        // update count per program
        nodesPerPrograms[data.type] = (nodesPerPrograms[data.type] || 0) + 1;
      }
      this.labelGrid.organize();

      // Allocate memory to programs
      for (var type in this.nodePrograms) {
        if (!hasOwnProperty.call(this.nodePrograms, type)) {
          throw new Error("Sigma: could not find a suitable program for node type \"".concat(type, "\"!"));
        }
        this.nodePrograms[type].reallocate(nodesPerPrograms[type] || 0);
        // We reset that count here, so that we can reuse it while calling the Program#process methods:
        nodesPerPrograms[type] = 0;
      }

      // Order nodes by zIndex before to add them to program
      if (this.settings.zIndex && this.nodeZExtent[0] !== this.nodeZExtent[1]) nodes = normalization.zIndexOrdering(this.nodeZExtent, function (node) {
        return _this5.nodeDataCache[node].zIndex;
      }, nodes);

      // Add data to programs
      for (var _i = 0, _l = nodes.length; _i < _l; _i++) {
        var _node = nodes[_i];
        nodeIndices[_node] = incrID;
        itemIDsIndex[nodeIndices[_node]] = {
          type: "node",
          id: _node
        };
        incrID++;
        var _data = this.nodeDataCache[_node];
        this.addNodeToProgram(_node, nodeIndices[_node], nodesPerPrograms[_data.type]++);
      }

      //
      // EDGES
      //

      var edgesPerPrograms = {};
      var edges = graph.edges();

      // Allocate memory to programs
      for (var _i2 = 0, _l2 = edges.length; _i2 < _l2; _i2++) {
        var edge = edges[_i2];
        var _data2 = this.edgeDataCache[edge];
        edgesPerPrograms[_data2.type] = (edgesPerPrograms[_data2.type] || 0) + 1;
      }

      // Order edges by zIndex before to add them to program
      if (this.settings.zIndex && this.edgeZExtent[0] !== this.edgeZExtent[1]) edges = normalization.zIndexOrdering(this.edgeZExtent, function (edge) {
        return _this5.edgeDataCache[edge].zIndex;
      }, edges);
      for (var _type2 in this.edgePrograms) {
        if (!hasOwnProperty.call(this.edgePrograms, _type2)) {
          throw new Error("Sigma: could not find a suitable program for edge type \"".concat(_type2, "\"!"));
        }
        this.edgePrograms[_type2].reallocate(edgesPerPrograms[_type2] || 0);
        // We reset that count here, so that we can reuse it while calling the Program#process methods:
        edgesPerPrograms[_type2] = 0;
      }

      // Add data to programs
      for (var _i3 = 0, _l3 = edges.length; _i3 < _l3; _i3++) {
        var _edge = edges[_i3];
        edgeIndices[_edge] = incrID;
        itemIDsIndex[edgeIndices[_edge]] = {
          type: "edge",
          id: _edge
        };
        incrID++;
        var _data3 = this.edgeDataCache[_edge];
        this.addEdgeToProgram(_edge, edgeIndices[_edge], edgesPerPrograms[_data3.type]++);
      }
      this.itemIDsIndex = itemIDsIndex;
      this.nodeIndices = nodeIndices;
      this.edgeIndices = edgeIndices;
      this.emit("afterProcess");
      return this;
    }

    /**
     * Method that backports potential settings updates where it's needed.
     * @private
     */
  }, {
    key: "handleSettingsUpdate",
    value: function handleSettingsUpdate(oldSettings) {
      var _this6 = this;
      var settings = this.settings;
      this.camera.minRatio = settings.minCameraRatio;
      this.camera.maxRatio = settings.maxCameraRatio;
      this.camera.enabledZooming = settings.enableCameraZooming;
      this.camera.enabledPanning = settings.enableCameraPanning;
      this.camera.enabledRotation = settings.enableCameraRotation;
      if (settings.cameraPanBoundaries) {
        this.camera.clean = function (state) {
          return _this6.cleanCameraState(state, settings.cameraPanBoundaries && data._typeof(settings.cameraPanBoundaries) === "object" ? settings.cameraPanBoundaries : {});
        };
      } else {
        this.camera.clean = null;
      }
      this.camera.setState(this.camera.validateState(this.camera.getState()));
      if (oldSettings) {
        // Check edge programs:
        if (oldSettings.edgeProgramClasses !== settings.edgeProgramClasses) {
          for (var type in settings.edgeProgramClasses) {
            if (settings.edgeProgramClasses[type] !== oldSettings.edgeProgramClasses[type]) {
              this.registerEdgeProgram(type, settings.edgeProgramClasses[type]);
            }
          }
          for (var _type3 in oldSettings.edgeProgramClasses) {
            if (!settings.edgeProgramClasses[_type3]) this.unregisterEdgeProgram(_type3);
          }
        }

        // Check node programs:
        if (oldSettings.nodeProgramClasses !== settings.nodeProgramClasses || oldSettings.nodeHoverProgramClasses !== settings.nodeHoverProgramClasses) {
          for (var _type4 in settings.nodeProgramClasses) {
            if (settings.nodeProgramClasses[_type4] !== oldSettings.nodeProgramClasses[_type4] || settings.nodeHoverProgramClasses[_type4] !== oldSettings.nodeHoverProgramClasses[_type4]) {
              this.registerNodeProgram(_type4, settings.nodeProgramClasses[_type4], settings.nodeHoverProgramClasses[_type4]);
            }
          }
          for (var _type5 in oldSettings.nodeProgramClasses) {
            if (!settings.nodeProgramClasses[_type5]) this.unregisterNodeProgram(_type5);
          }
        }
      }

      // Update captors settings:
      this.mouseCaptor.setSettings(this.settings);
      this.touchCaptor.setSettings(this.settings);
      return this;
    }
  }, {
    key: "cleanCameraState",
    value: function cleanCameraState(state) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$tolerance = _ref.tolerance,
        tolerance = _ref$tolerance === void 0 ? 0 : _ref$tolerance,
        boundaries = _ref.boundaries;
      var newState = index._objectSpread2({}, state);

      // Extract necessary properties
      var _ref2 = boundaries || this.nodeExtent,
        _ref2$x = colors._slicedToArray(_ref2.x, 2),
        xMinGraph = _ref2$x[0],
        xMaxGraph = _ref2$x[1],
        _ref2$y = colors._slicedToArray(_ref2.y, 2),
        yMinGraph = _ref2$y[0],
        yMaxGraph = _ref2$y[1];

      // Transform the four corners of the graph rectangle using the provided camera state
      var corners = [this.graphToViewport({
        x: xMinGraph,
        y: yMinGraph
      }, {
        cameraState: state
      }), this.graphToViewport({
        x: xMaxGraph,
        y: yMinGraph
      }, {
        cameraState: state
      }), this.graphToViewport({
        x: xMinGraph,
        y: yMaxGraph
      }, {
        cameraState: state
      }), this.graphToViewport({
        x: xMaxGraph,
        y: yMaxGraph
      }, {
        cameraState: state
      })];

      // Look for new extents, based on these four corners
      var xMin = Infinity,
        xMax = -Infinity,
        yMin = Infinity,
        yMax = -Infinity;
      corners.forEach(function (_ref3) {
        var x = _ref3.x,
          y = _ref3.y;
        xMin = Math.min(xMin, x);
        xMax = Math.max(xMax, x);
        yMin = Math.min(yMin, y);
        yMax = Math.max(yMax, y);
      });

      // For each dimension, constraint the smaller element (camera or graph) to fit in the larger one:
      var graphWidth = xMax - xMin;
      var graphHeight = yMax - yMin;
      var _this$getDimensions = this.getDimensions(),
        width = _this$getDimensions.width,
        height = _this$getDimensions.height;
      var dx = 0;
      var dy = 0;
      if (graphWidth >= width) {
        if (xMax < width - tolerance) dx = xMax - (width - tolerance);else if (xMin > tolerance) dx = xMin - tolerance;
      } else {
        if (xMax > width + tolerance) dx = xMax - (width + tolerance);else if (xMin < -tolerance) dx = xMin + tolerance;
      }
      if (graphHeight >= height) {
        if (yMax < height - tolerance) dy = yMax - (height - tolerance);else if (yMin > tolerance) dy = yMin - tolerance;
      } else {
        if (yMax > height + tolerance) dy = yMax - (height + tolerance);else if (yMin < -tolerance) dy = yMin + tolerance;
      }
      if (dx || dy) {
        // Transform [dx, dy] from viewport to graph (using two different point to transform that vector):
        var origin = this.viewportToFramedGraph({
          x: 0,
          y: 0
        }, {
          cameraState: state
        });
        var delta = this.viewportToFramedGraph({
          x: dx,
          y: dy
        }, {
          cameraState: state
        });
        dx = delta.x - origin.x;
        dy = delta.y - origin.y;
        newState.x += dx;
        newState.y += dy;
      }
      return newState;
    }

    /**
     * Method used to render labels.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderLabels",
    value: function renderLabels() {
      if (!this.settings.renderLabels) return this;
      var cameraState = this.camera.getState();

      // Selecting labels to draw
      var labelsToDisplay = this.labelGrid.getLabelsToDisplay(cameraState.ratio, this.settings.labelDensity);
      data.extend(labelsToDisplay, this.nodesWithForcedLabels);
      this.displayedNodeLabels = new Set();

      // Drawing labels
      var context = this.canvasContexts.labels;
      for (var i = 0, l = labelsToDisplay.length; i < l; i++) {
        var node = labelsToDisplay[i];
        var data$1 = this.nodeDataCache[node];

        // If the node was already drawn (like if it is eligible AND has
        // `forceLabel`), we don't want to draw it again
        // NOTE: we can do better probably
        if (this.displayedNodeLabels.has(node)) continue;

        // If the node is hidden, we don't need to display its label obviously
        if (data$1.hidden) continue;
        var _this$framedGraphToVi = this.framedGraphToViewport(data$1),
          x = _this$framedGraphToVi.x,
          y = _this$framedGraphToVi.y;

        // NOTE: we can cache the labels we need to render until the camera's ratio changes
        var size = this.scaleSize(data$1.size);

        // Is node big enough?
        if (!data$1.forceLabel && size < this.settings.labelRenderedSizeThreshold) continue;

        // Is node actually on screen (with some margin)
        // NOTE: we used to rely on the quadtree for this, but the coordinates
        // conversion make it unreliable and at that point we already converted
        // to viewport coordinates and since the label grid already culls the
        // number of potential labels to display this looks like a good
        // performance compromise.
        // NOTE: labelGrid.getLabelsToDisplay could probably optimize by not
        // considering cells obviously outside of the range of the current
        // view rectangle.
        if (x < -X_LABEL_MARGIN || x > this.width + X_LABEL_MARGIN || y < -Y_LABEL_MARGIN || y > this.height + Y_LABEL_MARGIN) continue;

        // Because displayed edge labels depend directly on actually rendered node
        // labels, we need to only add to this.displayedNodeLabels nodes whose label
        // is rendered.
        // This makes this.displayedNodeLabels depend on viewport, which might become
        // an issue once we start memoizing getLabelsToDisplay.
        this.displayedNodeLabels.add(node);
        var defaultDrawNodeLabel = this.settings.defaultDrawNodeLabel;
        var nodeProgram = this.nodePrograms[data$1.type];
        var drawLabel = (nodeProgram === null || nodeProgram === void 0 ? void 0 : nodeProgram.drawLabel) || defaultDrawNodeLabel;
        drawLabel(context, index._objectSpread2(index._objectSpread2({
          key: node
        }, data$1), {}, {
          size: size,
          x: x,
          y: y
        }), this.settings);
      }
      return this;
    }

    /**
     * Method used to render edge labels, based on which node labels were
     * rendered.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderEdgeLabels",
    value: function renderEdgeLabels() {
      if (!this.settings.renderEdgeLabels) return this;
      var context = this.canvasContexts.edgeLabels;

      // Clearing
      context.clearRect(0, 0, this.width, this.height);
      var edgeLabelsToDisplay = edgeLabelsToDisplayFromNodes({
        graph: this.graph,
        hoveredNode: this.hoveredNode,
        displayedNodeLabels: this.displayedNodeLabels,
        highlightedNodes: this.highlightedNodes
      });
      data.extend(edgeLabelsToDisplay, this.edgesWithForcedLabels);
      var displayedLabels = new Set();
      for (var i = 0, l = edgeLabelsToDisplay.length; i < l; i++) {
        var edge = edgeLabelsToDisplay[i],
          extremities = this.graph.extremities(edge),
          sourceData = this.nodeDataCache[extremities[0]],
          targetData = this.nodeDataCache[extremities[1]],
          edgeData = this.edgeDataCache[edge];

        // If the edge was already drawn (like if it is eligible AND has
        // `forceLabel`), we don't want to draw it again
        if (displayedLabels.has(edge)) continue;

        // If the edge is hidden we don't need to display its label
        // NOTE: the test on sourceData & targetData is probably paranoid at this point?
        if (edgeData.hidden || sourceData.hidden || targetData.hidden) {
          continue;
        }
        var defaultDrawEdgeLabel = this.settings.defaultDrawEdgeLabel;
        var edgeProgram = this.edgePrograms[edgeData.type];
        var drawLabel = (edgeProgram === null || edgeProgram === void 0 ? void 0 : edgeProgram.drawLabel) || defaultDrawEdgeLabel;
        drawLabel(context, index._objectSpread2(index._objectSpread2({
          key: edge
        }, edgeData), {}, {
          size: this.scaleSize(edgeData.size)
        }), index._objectSpread2(index._objectSpread2(index._objectSpread2({
          key: extremities[0]
        }, sourceData), this.framedGraphToViewport(sourceData)), {}, {
          size: this.scaleSize(sourceData.size)
        }), index._objectSpread2(index._objectSpread2(index._objectSpread2({
          key: extremities[1]
        }, targetData), this.framedGraphToViewport(targetData)), {}, {
          size: this.scaleSize(targetData.size)
        }), this.settings);
        displayedLabels.add(edge);
      }
      this.displayedEdgeLabels = displayedLabels;
      return this;
    }

    /**
     * Method used to render the highlighted nodes.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderHighlightedNodes",
    value: function renderHighlightedNodes() {
      var _this7 = this;
      var context = this.canvasContexts.hovers;

      // Clearing
      context.clearRect(0, 0, this.width, this.height);

      // Rendering
      var render = function render(node) {
        var data = _this7.nodeDataCache[node];
        var _this7$framedGraphToV = _this7.framedGraphToViewport(data),
          x = _this7$framedGraphToV.x,
          y = _this7$framedGraphToV.y;
        var size = _this7.scaleSize(data.size);
        var defaultDrawNodeHover = _this7.settings.defaultDrawNodeHover;
        var nodeProgram = _this7.nodePrograms[data.type];
        var drawHover = (nodeProgram === null || nodeProgram === void 0 ? void 0 : nodeProgram.drawHover) || defaultDrawNodeHover;
        drawHover(context, index._objectSpread2(index._objectSpread2({
          key: node
        }, data), {}, {
          size: size,
          x: x,
          y: y
        }), _this7.settings);
      };
      var nodesToRender = [];
      if (this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden) {
        nodesToRender.push(this.hoveredNode);
      }
      this.highlightedNodes.forEach(function (node) {
        // The hovered node has already been highlighted
        if (node !== _this7.hoveredNode) nodesToRender.push(node);
      });

      // Draw labels:
      nodesToRender.forEach(function (node) {
        return render(node);
      });

      // Draw WebGL nodes on top of the labels:
      var nodesPerPrograms = {};

      // 1. Count nodes per type:
      nodesToRender.forEach(function (node) {
        var type = _this7.nodeDataCache[node].type;
        nodesPerPrograms[type] = (nodesPerPrograms[type] || 0) + 1;
      });
      // 2. Allocate for each type for the proper number of nodes
      for (var type in this.nodeHoverPrograms) {
        this.nodeHoverPrograms[type].reallocate(nodesPerPrograms[type] || 0);
        // Also reset count, to use when rendering:
        nodesPerPrograms[type] = 0;
      }
      // 3. Process all nodes to render:
      nodesToRender.forEach(function (node) {
        var data = _this7.nodeDataCache[node];
        _this7.nodeHoverPrograms[data.type].process(0, nodesPerPrograms[data.type]++, data);
      });
      // 4. Clear hovered nodes layer:
      this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
      // 5. Render:
      var renderParams = this.getRenderParams();
      for (var _type6 in this.nodeHoverPrograms) {
        var program = this.nodeHoverPrograms[_type6];
        program.render(renderParams);
      }
    }

    /**
     * Method used to schedule a hover render.
     *
     */
  }, {
    key: "scheduleHighlightedNodesRender",
    value: function scheduleHighlightedNodesRender() {
      var _this8 = this;
      if (this.renderHighlightedNodesFrame || this.renderFrame) return;
      this.renderHighlightedNodesFrame = requestAnimationFrame(function () {
        // Resetting state
        _this8.renderHighlightedNodesFrame = null;

        // Rendering
        _this8.renderHighlightedNodes();
        _this8.renderEdgeLabels();
      });
    }

    /**
     * Method used to render.
     *
     * @return {Sigma}
     */
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;
      this.emit("beforeRender");
      var exitRender = function exitRender() {
        _this9.emit("afterRender");
        return _this9;
      };

      // If a render was scheduled, we cancel it
      if (this.renderFrame) {
        cancelAnimationFrame(this.renderFrame);
        this.renderFrame = null;
      }

      // First we need to resize
      this.resize();

      // Do we need to reprocess data?
      if (this.needToProcess) this.process();
      this.needToProcess = false;

      // Clearing the canvases
      this.clear();

      // Prepare the textures
      this.pickingLayers.forEach(function (layer) {
        return _this9.resetWebGLTexture(layer);
      });

      // If we have no nodes we can stop right there
      if (!this.graph.order) return exitRender();

      // TODO: improve this heuristic or move to the captor itself?
      // TODO: deal with the touch captor here as well
      var mouseCaptor = this.mouseCaptor;
      var moving = this.camera.isAnimated() || mouseCaptor.isMoving || mouseCaptor.draggedEvents || mouseCaptor.currentWheelDirection;

      // Then we need to extract a matrix from the camera
      var cameraState = this.camera.getState();
      var viewportDimensions = this.getDimensions();
      var graphDimensions = this.getGraphDimensions();
      var padding = this.getStagePadding();
      this.matrix = normalization.matrixFromCamera(cameraState, viewportDimensions, graphDimensions, padding);
      this.invMatrix = normalization.matrixFromCamera(cameraState, viewportDimensions, graphDimensions, padding, true);
      this.correctionRatio = normalization.getMatrixImpact(this.matrix, cameraState, viewportDimensions);
      this.graphToViewportRatio = this.getGraphToViewportRatio();

      // [jacomyal]
      // This comment is related to the one above the `getMatrixImpact` definition:
      // - `this.correctionRatio` is somehow not completely explained
      // - `this.graphToViewportRatio` is the ratio of a distance in the viewport divided by the same distance in the
      //   graph
      // - `this.normalizationFunction.ratio` is basically `Math.max(graphDX, graphDY)`
      // And now, I observe that if I multiply these three ratios, I have something constant, which value remains 2, even
      // when I change the graph, the viewport or the camera. It might be useful later, so I prefer to let this comment:
      // console.log(this.graphToViewportRatio * this.correctionRatio * this.normalizationFunction.ratio * 2);

      var params = this.getRenderParams();

      // Drawing nodes
      for (var type in this.nodePrograms) {
        var program = this.nodePrograms[type];
        program.render(params);
      }

      // Drawing edges
      if (!this.settings.hideEdgesOnMove || !moving) {
        for (var _type7 in this.edgePrograms) {
          var _program2 = this.edgePrograms[_type7];
          _program2.render(params);
        }
      }

      // Do not display labels on move per setting
      if (this.settings.hideLabelsOnMove && moving) return exitRender();
      this.renderLabels();
      this.renderEdgeLabels();
      this.renderHighlightedNodes();
      return exitRender();
    }

    /**
     * Add a node in the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "addNode",
    value: function addNode(key) {
      // Node display data resolution:
      //  1. First we get the node's attributes
      //  2. We optionally reduce them using the function provided by the user
      //     Note that this function must return a total object and won't be merged
      //  3. We apply our defaults, while running some vital checks
      //  4. We apply the normalization function
      // We shallow copy node data to avoid dangerous behaviors from reducers
      var attr = Object.assign({}, this.graph.getNodeAttributes(key));
      if (this.settings.nodeReducer) attr = this.settings.nodeReducer(key, attr);
      var data = applyNodeDefaults(this.settings, key, attr);
      this.nodeDataCache[key] = data;

      // Label:
      // We delete and add if needed because this function is also used from
      // update
      this.nodesWithForcedLabels["delete"](key);
      if (data.forceLabel && !data.hidden) this.nodesWithForcedLabels.add(key);

      // Highlighted:
      // We remove and re add if needed because this function is also used from
      // update
      this.highlightedNodes["delete"](key);
      if (data.highlighted && !data.hidden) this.highlightedNodes.add(key);

      // zIndex
      if (this.settings.zIndex) {
        if (data.zIndex < this.nodeZExtent[0]) this.nodeZExtent[0] = data.zIndex;
        if (data.zIndex > this.nodeZExtent[1]) this.nodeZExtent[1] = data.zIndex;
      }
    }

    /**
     * Update a node the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "updateNode",
    value: function updateNode(key) {
      this.addNode(key);

      // Re-apply normalization on the node
      var data = this.nodeDataCache[key];
      this.normalizationFunction.applyTo(data);
    }

    /**
     * Remove a node from the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "removeNode",
    value: function removeNode(key) {
      // Remove from node cache
      delete this.nodeDataCache[key];
      // Remove from node program index
      delete this.nodeProgramIndex[key];
      // Remove from higlighted nodes
      this.highlightedNodes["delete"](key);
      // Remove from hovered
      if (this.hoveredNode === key) this.hoveredNode = null;
      // Remove from forced label
      this.nodesWithForcedLabels["delete"](key);
    }

    /**
     * Add an edge into the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "addEdge",
    value: function addEdge(key) {
      // Edge display data resolution:
      //  1. First we get the edge's attributes
      //  2. We optionally reduce them using the function provided by the user
      //  3. Note that this function must return a total object and won't be merged
      //  4. We apply our defaults, while running some vital checks
      // We shallow copy edge data to avoid dangerous behaviors from reducers
      var attr = Object.assign({}, this.graph.getEdgeAttributes(key));
      if (this.settings.edgeReducer) attr = this.settings.edgeReducer(key, attr);
      var data = applyEdgeDefaults(this.settings, key, attr);
      this.edgeDataCache[key] = data;

      // Forced label
      // we filter and re push if needed because this function is also used from
      // update
      this.edgesWithForcedLabels["delete"](key);
      if (data.forceLabel && !data.hidden) this.edgesWithForcedLabels.add(key);

      // Check zIndex
      if (this.settings.zIndex) {
        if (data.zIndex < this.edgeZExtent[0]) this.edgeZExtent[0] = data.zIndex;
        if (data.zIndex > this.edgeZExtent[1]) this.edgeZExtent[1] = data.zIndex;
      }
    }

    /**
     * Update an edge in the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "updateEdge",
    value: function updateEdge(key) {
      this.addEdge(key);
    }

    /**
     * Remove an edge from the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "removeEdge",
    value: function removeEdge(key) {
      // Remove from edge cache
      delete this.edgeDataCache[key];
      // Remove from programId index
      delete this.edgeProgramIndex[key];
      // Remove from hovered
      if (this.hoveredEdge === key) this.hoveredEdge = null;
      // Remove from forced label
      this.edgesWithForcedLabels["delete"](key);
    }

    /**
     * Clear all indices related to nodes.
     * @private
     */
  }, {
    key: "clearNodeIndices",
    value: function clearNodeIndices() {
      // LabelGrid & nodeExtent are only manage/populated in the process function
      this.labelGrid = new LabelGrid();
      this.nodeExtent = {
        x: [0, 1],
        y: [0, 1]
      };
      this.nodeDataCache = {};
      this.edgeProgramIndex = {};
      this.nodesWithForcedLabels = new Set();
      this.nodeZExtent = [Infinity, -Infinity];
    }

    /**
     * Clear all indices related to edges.
     * @private
     */
  }, {
    key: "clearEdgeIndices",
    value: function clearEdgeIndices() {
      this.edgeDataCache = {};
      this.edgeProgramIndex = {};
      this.edgesWithForcedLabels = new Set();
      this.edgeZExtent = [Infinity, -Infinity];
    }

    /**
     * Clear all indices.
     * @private
     */
  }, {
    key: "clearIndices",
    value: function clearIndices() {
      this.clearEdgeIndices();
      this.clearNodeIndices();
    }

    /**
     * Clear all graph state related to nodes.
     * @private
     */
  }, {
    key: "clearNodeState",
    value: function clearNodeState() {
      this.displayedNodeLabels = new Set();
      this.highlightedNodes = new Set();
      this.hoveredNode = null;
    }

    /**
     * Clear all graph state related to edges.
     * @private
     */
  }, {
    key: "clearEdgeState",
    value: function clearEdgeState() {
      this.displayedEdgeLabels = new Set();
      this.highlightedNodes = new Set();
      this.hoveredEdge = null;
    }

    /**
     * Clear all graph state.
     * @private
     */
  }, {
    key: "clearState",
    value: function clearState() {
      this.clearEdgeState();
      this.clearNodeState();
    }

    /**
     * Add the node data to its program.
     * @private
     * @param node The node's graphology ID
     * @param fingerprint A fingerprint used to identity the node with picking
     * @param position The index where to place the node in the program
     */
  }, {
    key: "addNodeToProgram",
    value: function addNodeToProgram(node, fingerprint, position) {
      var data = this.nodeDataCache[node];
      var nodeProgram = this.nodePrograms[data.type];
      if (!nodeProgram) throw new Error("Sigma: could not find a suitable program for node type \"".concat(data.type, "\"!"));
      nodeProgram.process(fingerprint, position, data);
      // Saving program index
      this.nodeProgramIndex[node] = position;
    }

    /**
     * Add the edge data to its program.
     * @private
     * @param edge The edge's graphology ID
     * @param fingerprint A fingerprint used to identity the edge with picking
     * @param position The index where to place the edge in the program
     */
  }, {
    key: "addEdgeToProgram",
    value: function addEdgeToProgram(edge, fingerprint, position) {
      var data = this.edgeDataCache[edge];
      var edgeProgram = this.edgePrograms[data.type];
      if (!edgeProgram) throw new Error("Sigma: could not find a suitable program for edge type \"".concat(data.type, "\"!"));
      var extremities = this.graph.extremities(edge),
        sourceData = this.nodeDataCache[extremities[0]],
        targetData = this.nodeDataCache[extremities[1]];
      edgeProgram.process(fingerprint, position, sourceData, targetData, data);
      // Saving program index
      this.edgeProgramIndex[edge] = position;
    }

    /**---------------------------------------------------------------------------
     * Public API.
     **---------------------------------------------------------------------------
     */

    /**
     * Function used to get the render params.
     *
     * @return {RenderParams}
     */
  }, {
    key: "getRenderParams",
    value: function getRenderParams() {
      return {
        matrix: this.matrix,
        invMatrix: this.invMatrix,
        width: this.width,
        height: this.height,
        pixelRatio: this.pixelRatio,
        zoomRatio: this.camera.ratio,
        cameraAngle: this.camera.angle,
        sizeRatio: 1 / this.scaleSize(),
        correctionRatio: this.correctionRatio,
        downSizingRatio: this.pickingDownSizingRatio,
        minEdgeThickness: this.settings.minEdgeThickness,
        antiAliasingFeather: this.settings.antiAliasingFeather
      };
    }

    /**
     * Function used to retrieve the actual stage padding value.
     *
     * @return {number}
     */
  }, {
    key: "getStagePadding",
    value: function getStagePadding() {
      var _this$settings = this.settings,
        stagePadding = _this$settings.stagePadding,
        autoRescale = _this$settings.autoRescale;
      return autoRescale ? stagePadding || 0 : 0;
    }

    /**
     * Function used to create a layer element.
     *
     * @param {string} id - Context's id.
     * @param {string} tag - The HTML tag to use.
     * @param options
     * @return {Sigma}
     */
  }, {
    key: "createLayer",
    value: function createLayer(id, tag) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (this.elements[id]) throw new Error("Sigma: a layer named \"".concat(id, "\" already exists"));
      var element = normalization.createElement(tag, {
        position: "absolute"
      }, {
        "class": "sigma-".concat(id)
      });
      if (options.style) Object.assign(element.style, options.style);
      this.elements[id] = element;
      if ("beforeLayer" in options && options.beforeLayer) {
        this.elements[options.beforeLayer].before(element);
      } else if ("afterLayer" in options && options.afterLayer) {
        this.elements[options.afterLayer].after(element);
      } else {
        this.container.appendChild(element);
      }
      return element;
    }

    /**
     * Function used to create a canvas element.
     *
     * @param {string} id - Context's id.
     * @param options
     * @return {Sigma}
     */
  }, {
    key: "createCanvas",
    value: function createCanvas(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.createLayer(id, "canvas", options);
    }

    /**
     * Function used to create a canvas context and add the relevant DOM elements.
     *
     * @param  {string} id - Context's id.
     * @param  options
     * @return {Sigma}
     */
  }, {
    key: "createCanvasContext",
    value: function createCanvasContext(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canvas = this.createCanvas(id, options);
      var contextOptions = {
        preserveDrawingBuffer: false,
        antialias: false
      };
      this.canvasContexts[id] = canvas.getContext("2d", contextOptions);
      return this;
    }

    /**
     * Function used to create a WebGL context and add the relevant DOM
     * elements.
     *
     * @param  {string}  id      - Context's id.
     * @param  {object?} options - #getContext params to override (optional)
     * @return {WebGLRenderingContext}
     */
  }, {
    key: "createWebGLContext",
    value: function createWebGLContext(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canvas = (options === null || options === void 0 ? void 0 : options.canvas) || this.createCanvas(id, options);
      if (options.hidden) canvas.remove();
      var contextOptions = index._objectSpread2({
        preserveDrawingBuffer: false,
        antialias: false
      }, options);
      var context;

      // First we try webgl2 for an easy performance boost
      context = canvas.getContext("webgl2", contextOptions);

      // Else we fall back to webgl
      if (!context) context = canvas.getContext("webgl", contextOptions);

      // Edge, I am looking right at you...
      if (!context) context = canvas.getContext("experimental-webgl", contextOptions);
      var gl = context;
      this.webGLContexts[id] = gl;

      // Blending:
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      // Prepare frame buffer for picking layers:
      if (options.picking) {
        this.pickingLayers.add(id);
        var newFrameBuffer = gl.createFramebuffer();
        if (!newFrameBuffer) throw new Error("Sigma: cannot create a new frame buffer for layer ".concat(id));
        this.frameBuffers[id] = newFrameBuffer;
      }
      return gl;
    }

    /**
     * Function used to properly kill a layer.
     *
     * @param  {string} id - Layer id.
     * @return {Sigma}
     */
  }, {
    key: "killLayer",
    value: function killLayer(id) {
      var element = this.elements[id];
      if (!element) throw new Error("Sigma: cannot kill layer ".concat(id, ", which does not exist"));
      if (this.webGLContexts[id]) {
        var _gl$getExtension;
        var gl = this.webGLContexts[id];
        (_gl$getExtension = gl.getExtension("WEBGL_lose_context")) === null || _gl$getExtension === void 0 || _gl$getExtension.loseContext();
        delete this.webGLContexts[id];
      } else if (this.canvasContexts[id]) {
        delete this.canvasContexts[id];
      }

      // Delete layer element
      element.remove();
      delete this.elements[id];
      return this;
    }

    /**
     * Method returning the renderer's camera.
     *
     * @return {Camera}
     */
  }, {
    key: "getCamera",
    value: function getCamera() {
      return this.camera;
    }

    /**
     * Method setting the renderer's camera.
     *
     * @param  {Camera} camera - New camera.
     * @return {Sigma}
     */
  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.unbindCameraHandlers();
      this.camera = camera;
      this.bindCameraHandlers();
    }

    /**
     * Method returning the container DOM element.
     *
     * @return {HTMLElement}
     */
  }, {
    key: "getContainer",
    value: function getContainer() {
      return this.container;
    }

    /**
     * Method returning the renderer's graph.
     *
     * @return {Graph}
     */
  }, {
    key: "getGraph",
    value: function getGraph() {
      return this.graph;
    }

    /**
     * Method used to set the renderer's graph.
     *
     * @return {Graph}
     */
  }, {
    key: "setGraph",
    value: function setGraph(graph) {
      if (graph === this.graph) return;

      // Check hoveredNode and hoveredEdge
      if (this.hoveredNode && !graph.hasNode(this.hoveredNode)) this.hoveredNode = null;
      if (this.hoveredEdge && !graph.hasEdge(this.hoveredEdge)) this.hoveredEdge = null;

      // Unbinding handlers on the current graph
      this.unbindGraphHandlers();
      if (this.checkEdgesEventsFrame !== null) {
        cancelAnimationFrame(this.checkEdgesEventsFrame);
        this.checkEdgesEventsFrame = null;
      }

      // Installing new graph
      this.graph = graph;

      // Binding new handlers
      this.bindGraphHandlers();

      // Re-rendering now to avoid discrepancies from now to next frame
      this.refresh();
    }

    /**
     * Method returning the mouse captor.
     *
     * @return {MouseCaptor}
     */
  }, {
    key: "getMouseCaptor",
    value: function getMouseCaptor() {
      return this.mouseCaptor;
    }

    /**
     * Method returning the touch captor.
     *
     * @return {TouchCaptor}
     */
  }, {
    key: "getTouchCaptor",
    value: function getTouchCaptor() {
      return this.touchCaptor;
    }

    /**
     * Method returning the current renderer's dimensions.
     *
     * @return {Dimensions}
     */
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return {
        width: this.width,
        height: this.height
      };
    }

    /**
     * Method returning the current graph's dimensions.
     *
     * @return {Dimensions}
     */
  }, {
    key: "getGraphDimensions",
    value: function getGraphDimensions() {
      var extent = this.customBBox || this.nodeExtent;
      return {
        width: extent.x[1] - extent.x[0] || 1,
        height: extent.y[1] - extent.y[0] || 1
      };
    }

    /**
     * Method used to get all the sigma node attributes.
     * It's useful for example to get the position of a node
     * and to get values that are set by the nodeReducer
     *
     * @param  {string} key - The node's key.
     * @return {NodeDisplayData | undefined} A copy of the desired node's attribute or undefined if not found
     */
  }, {
    key: "getNodeDisplayData",
    value: function getNodeDisplayData(key) {
      var node = this.nodeDataCache[key];
      return node ? Object.assign({}, node) : undefined;
    }

    /**
     * Method used to get all the sigma edge attributes.
     * It's useful for example to get values that are set by the edgeReducer.
     *
     * @param  {string} key - The edge's key.
     * @return {EdgeDisplayData | undefined} A copy of the desired edge's attribute or undefined if not found
     */
  }, {
    key: "getEdgeDisplayData",
    value: function getEdgeDisplayData(key) {
      var edge = this.edgeDataCache[key];
      return edge ? Object.assign({}, edge) : undefined;
    }

    /**
     * Method used to get the set of currently displayed node labels.
     *
     * @return {Set<string>} A set of node keys whose label is displayed.
     */
  }, {
    key: "getNodeDisplayedLabels",
    value: function getNodeDisplayedLabels() {
      return new Set(this.displayedNodeLabels);
    }

    /**
     * Method used to get the set of currently displayed edge labels.
     *
     * @return {Set<string>} A set of edge keys whose label is displayed.
     */
  }, {
    key: "getEdgeDisplayedLabels",
    value: function getEdgeDisplayedLabels() {
      return new Set(this.displayedEdgeLabels);
    }

    /**
     * Method returning a copy of the settings collection.
     *
     * @return {Settings} A copy of the settings collection.
     */
  }, {
    key: "getSettings",
    value: function getSettings() {
      return index._objectSpread2({}, this.settings);
    }

    /**
     * Method returning the current value for a given setting key.
     *
     * @param  {string} key - The setting key to get.
     * @return {any} The value attached to this setting key or undefined if not found
     */
  }, {
    key: "getSetting",
    value: function getSetting(key) {
      return this.settings[key];
    }

    /**
     * Method setting the value of a given setting key. Note that this will schedule
     * a new render next frame.
     *
     * @param  {string} key - The setting key to set.
     * @param  {any}    value - The value to set.
     * @return {Sigma}
     */
  }, {
    key: "setSetting",
    value: function setSetting(key, value) {
      var oldValues = index._objectSpread2({}, this.settings);
      this.settings[key] = value;
      settings_dist_sigmaSettings.validateSettings(this.settings);
      this.handleSettingsUpdate(oldValues);
      this.scheduleRefresh();
      return this;
    }

    /**
     * Method updating the value of a given setting key using the provided function.
     * Note that this will schedule a new render next frame.
     *
     * @param  {string}   key     - The setting key to set.
     * @param  {function} updater - The update function.
     * @return {Sigma}
     */
  }, {
    key: "updateSetting",
    value: function updateSetting(key, updater) {
      this.setSetting(key, updater(this.settings[key]));
      return this;
    }

    /**
     * Method setting multiple settings at once.
     *
     * @param  {Partial<Settings>} settings - The settings to set.
     * @return {Sigma}
     */
  }, {
    key: "setSettings",
    value: function setSettings(settings) {
      var oldValues = index._objectSpread2({}, this.settings);
      this.settings = index._objectSpread2(index._objectSpread2({}, this.settings), settings);
      settings_dist_sigmaSettings.validateSettings(this.settings);
      this.handleSettingsUpdate(oldValues);
      this.scheduleRefresh();
      return this;
    }

    /**
     * Method used to resize the renderer.
     *
     * @param  {boolean} force - If true, then resize is processed even if size is unchanged (optional).
     * @return {Sigma}
     */
  }, {
    key: "resize",
    value: function resize(force) {
      var previousWidth = this.width,
        previousHeight = this.height;
      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
      this.pixelRatio = normalization.getPixelRatio();
      if (this.width === 0) {
        if (this.settings.allowInvalidContainer) this.width = 1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      }
      if (this.height === 0) {
        if (this.settings.allowInvalidContainer) this.height = 1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      }

      // If nothing has changed, we can stop right here
      if (!force && previousWidth === this.width && previousHeight === this.height) return this;

      // Sizing dom elements
      for (var id in this.elements) {
        var element = this.elements[id];
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
      }

      // Sizing canvas contexts
      for (var _id in this.canvasContexts) {
        this.elements[_id].setAttribute("width", this.width * this.pixelRatio + "px");
        this.elements[_id].setAttribute("height", this.height * this.pixelRatio + "px");
        if (this.pixelRatio !== 1) this.canvasContexts[_id].scale(this.pixelRatio, this.pixelRatio);
      }

      // Sizing WebGL contexts
      for (var _id2 in this.webGLContexts) {
        this.elements[_id2].setAttribute("width", this.width * this.pixelRatio + "px");
        this.elements[_id2].setAttribute("height", this.height * this.pixelRatio + "px");
        var gl = this.webGLContexts[_id2];
        gl.viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio);

        // Clear picking texture if needed
        if (this.pickingLayers.has(_id2)) {
          var currentTexture = this.textures[_id2];
          if (currentTexture) gl.deleteTexture(currentTexture);
        }
      }
      this.emit("resize");
      return this;
    }

    /**
     * Method used to clear all the canvases.
     *
     * @return {Sigma}
     */
  }, {
    key: "clear",
    value: function clear() {
      this.emit("beforeClear");
      this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
      this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
      this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.canvasContexts.labels.clearRect(0, 0, this.width, this.height);
      this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height);
      this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height);
      this.emit("afterClear");
      return this;
    }

    /**
     * Method used to refresh, i.e. force the renderer to reprocess graph
     * data and render, but keep the state.
     * - if a partialGraph is provided, we only reprocess those nodes & edges.
     * - if schedule is TRUE, we schedule a render instead of sync render
     * - if skipIndexation is TRUE, then labelGrid & program indexation are skipped (can be used if you haven't modify x, y, zIndex & size)
     *
     * @return {Sigma}
     */
  }, {
    key: "refresh",
    value: function refresh(opts) {
      var _this10 = this;
      var skipIndexation = (opts === null || opts === void 0 ? void 0 : opts.skipIndexation) !== undefined ? opts === null || opts === void 0 ? void 0 : opts.skipIndexation : false;
      var schedule = (opts === null || opts === void 0 ? void 0 : opts.schedule) !== undefined ? opts.schedule : false;
      var fullRefresh = !opts || !opts.partialGraph;
      if (fullRefresh) {
        // Re-index graph data
        this.clearEdgeIndices();
        this.clearNodeIndices();
        this.graph.forEachNode(function (node) {
          return _this10.addNode(node);
        });
        this.graph.forEachEdge(function (edge) {
          return _this10.addEdge(edge);
        });
      } else {
        var _opts$partialGraph, _opts$partialGraph2;
        var nodes = ((_opts$partialGraph = opts.partialGraph) === null || _opts$partialGraph === void 0 ? void 0 : _opts$partialGraph.nodes) || [];
        for (var i = 0, l = (nodes === null || nodes === void 0 ? void 0 : nodes.length) || 0; i < l; i++) {
          var node = nodes[i];
          // Recompute node's data (ie. apply reducer)
          this.updateNode(node);
          // Add node to the program if layout is unchanged.
          // otherwise it will be done in the process function
          if (skipIndexation) {
            var programIndex = this.nodeProgramIndex[node];
            if (programIndex === undefined) throw new Error("Sigma: node \"".concat(node, "\" can't be repaint"));
            this.addNodeToProgram(node, this.nodeIndices[node], programIndex);
          }
        }
        var edges = (opts === null || opts === void 0 || (_opts$partialGraph2 = opts.partialGraph) === null || _opts$partialGraph2 === void 0 ? void 0 : _opts$partialGraph2.edges) || [];
        for (var _i4 = 0, _l4 = edges.length; _i4 < _l4; _i4++) {
          var edge = edges[_i4];
          // Recompute edge's data (ie. apply reducer)
          this.updateEdge(edge);
          // Add edge to the program
          // otherwise it will be done in the process function
          if (skipIndexation) {
            var _programIndex = this.edgeProgramIndex[edge];
            if (_programIndex === undefined) throw new Error("Sigma: edge \"".concat(edge, "\" can't be repaint"));
            this.addEdgeToProgram(edge, this.edgeIndices[edge], _programIndex);
          }
        }
      }

      // Do we need to call the process function ?
      if (fullRefresh || !skipIndexation) this.needToProcess = true;
      if (schedule) this.scheduleRender();else this.render();
      return this;
    }

    /**
     * Method used to schedule a render at the next available frame.
     * This method can be safely called on a same frame because it basically
     * debounces refresh to the next frame.
     *
     * @return {Sigma}
     */
  }, {
    key: "scheduleRender",
    value: function scheduleRender() {
      var _this11 = this;
      if (!this.renderFrame) {
        this.renderFrame = requestAnimationFrame(function () {
          _this11.render();
        });
      }
      return this;
    }

    /**
     * Method used to schedule a refresh (i.e. fully reprocess graph data and render)
     * at the next available frame.
     * This method can be safely called on a same frame because it basically
     * debounces refresh to the next frame.
     *
     * @return {Sigma}
     */
  }, {
    key: "scheduleRefresh",
    value: function scheduleRefresh(opts) {
      return this.refresh(index._objectSpread2(index._objectSpread2({}, opts), {}, {
        schedule: true
      }));
    }

    /**
     * Method used to (un)zoom, while preserving the position of a viewport point.
     * Used for instance to zoom "on the mouse cursor".
     *
     * @param viewportTarget
     * @param newRatio
     * @return {CameraState}
     */
  }, {
    key: "getViewportZoomedState",
    value: function getViewportZoomedState(viewportTarget, newRatio) {
      var _this$camera$getState = this.camera.getState(),
        ratio = _this$camera$getState.ratio,
        angle = _this$camera$getState.angle,
        x = _this$camera$getState.x,
        y = _this$camera$getState.y;
      var _this$settings2 = this.settings,
        minCameraRatio = _this$settings2.minCameraRatio,
        maxCameraRatio = _this$settings2.maxCameraRatio;
      if (typeof maxCameraRatio === "number") newRatio = Math.min(newRatio, maxCameraRatio);
      if (typeof minCameraRatio === "number") newRatio = Math.max(newRatio, minCameraRatio);
      var ratioDiff = newRatio / ratio;
      var center = {
        x: this.width / 2,
        y: this.height / 2
      };
      var graphMousePosition = this.viewportToFramedGraph(viewportTarget);
      var graphCenterPosition = this.viewportToFramedGraph(center);
      return {
        angle: angle,
        x: (graphMousePosition.x - graphCenterPosition.x) * (1 - ratioDiff) + x,
        y: (graphMousePosition.y - graphCenterPosition.y) * (1 - ratioDiff) + y,
        ratio: newRatio
      };
    }

    /**
     * Method returning the abstract rectangle containing the graph according
     * to the camera's state.
     *
     * @return {object} - The view's rectangle.
     */
  }, {
    key: "viewRectangle",
    value: function viewRectangle() {
      var p1 = this.viewportToFramedGraph({
          x: 0,
          y: 0
        }),
        p2 = this.viewportToFramedGraph({
          x: this.width,
          y: 0
        }),
        h = this.viewportToFramedGraph({
          x: 0,
          y: this.height
        });
      return {
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        height: p2.y - h.y
      };
    }

    /**
     * Method returning the coordinates of a point from the framed graph system to the viewport system. It allows
     * overriding anything that is used to get the translation matrix, or even the matrix itself.
     *
     * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
     * of computations.
     */
  }, {
    key: "framedGraphToViewport",
    value: function framedGraphToViewport(coordinates) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !!override.graphDimensions;
      var matrix = override.matrix ? override.matrix : recomputeMatrix ? normalization.matrixFromCamera(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getStagePadding()) : this.matrix;
      var viewportPos = normalization.multiplyVec2(matrix, coordinates);
      return {
        x: (1 + viewportPos.x) * this.width / 2,
        y: (1 - viewportPos.y) * this.height / 2
      };
    }

    /**
     * Method returning the coordinates of a point from the viewport system to the framed graph system. It allows
     * overriding anything that is used to get the translation matrix, or even the matrix itself.
     *
     * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
     * of computations.
     */
  }, {
    key: "viewportToFramedGraph",
    value: function viewportToFramedGraph(coordinates) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !override.graphDimensions;
      var invMatrix = override.matrix ? override.matrix : recomputeMatrix ? normalization.matrixFromCamera(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getStagePadding(), true) : this.invMatrix;
      var res = normalization.multiplyVec2(invMatrix, {
        x: coordinates.x / this.width * 2 - 1,
        y: 1 - coordinates.y / this.height * 2
      });
      if (isNaN(res.x)) res.x = 0;
      if (isNaN(res.y)) res.y = 0;
      return res;
    }

    /**
     * Method used to translate a point's coordinates from the viewport system (pixel distance from the top-left of the
     * stage) to the graph system (the reference system of data as they are in the given graph instance).
     *
     * This method accepts an optional camera which can be useful if you need to translate coordinates
     * based on a different view than the one being currently being displayed on screen.
     *
     * @param {Coordinates}                  viewportPoint
     * @param {CoordinateConversionOverride} override
     */
  }, {
    key: "viewportToGraph",
    value: function viewportToGraph(viewportPoint) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.normalizationFunction.inverse(this.viewportToFramedGraph(viewportPoint, override));
    }

    /**
     * Method used to translate a point's coordinates from the graph system (the reference system of data as they are in
     * the given graph instance) to the viewport system (pixel distance from the top-left of the stage).
     *
     * This method accepts an optional camera which can be useful if you need to translate coordinates
     * based on a different view than the one being currently being displayed on screen.
     *
     * @param {Coordinates}                  graphPoint
     * @param {CoordinateConversionOverride} override
     */
  }, {
    key: "graphToViewport",
    value: function graphToViewport(graphPoint) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.framedGraphToViewport(this.normalizationFunction(graphPoint), override);
    }

    /**
     * Method returning the distance multiplier between the graph system and the
     * viewport system.
     */
  }, {
    key: "getGraphToViewportRatio",
    value: function getGraphToViewportRatio() {
      var graphP1 = {
        x: 0,
        y: 0
      };
      var graphP2 = {
        x: 1,
        y: 1
      };
      var graphD = Math.sqrt(Math.pow(graphP1.x - graphP2.x, 2) + Math.pow(graphP1.y - graphP2.y, 2));
      var viewportP1 = this.graphToViewport(graphP1);
      var viewportP2 = this.graphToViewport(graphP2);
      var viewportD = Math.sqrt(Math.pow(viewportP1.x - viewportP2.x, 2) + Math.pow(viewportP1.y - viewportP2.y, 2));
      return viewportD / graphD;
    }

    /**
     * Method returning the graph's bounding box.
     *
     * @return {{ x: Extent, y: Extent }}
     */
  }, {
    key: "getBBox",
    value: function getBBox() {
      return this.nodeExtent;
    }

    /**
     * Method returning the graph's custom bounding box, if any.
     *
     * @return {{ x: Extent, y: Extent } | null}
     */
  }, {
    key: "getCustomBBox",
    value: function getCustomBBox() {
      return this.customBBox;
    }

    /**
     * Method used to override the graph's bounding box with a custom one. Give `null` as the argument to stop overriding.
     *
     * @return {Sigma}
     */
  }, {
    key: "setCustomBBox",
    value: function setCustomBBox(customBBox) {
      this.customBBox = customBBox;
      this.scheduleRender();
      return this;
    }

    /**
     * Method used to shut the container & release event listeners.
     *
     * @return {undefined}
     */
  }, {
    key: "kill",
    value: function kill() {
      // Emitting "kill" events so that plugins and such can cleanup
      this.emit("kill");

      // Releasing events
      this.removeAllListeners();

      // Releasing camera handlers
      this.unbindCameraHandlers();

      // Releasing DOM events & captors
      window.removeEventListener("resize", this.activeListeners.handleResize);
      this.mouseCaptor.kill();
      this.touchCaptor.kill();

      // Releasing graph handlers
      this.unbindGraphHandlers();

      // Releasing cache & state
      this.clearIndices();
      this.clearState();
      this.nodeDataCache = {};
      this.edgeDataCache = {};
      this.highlightedNodes.clear();

      // Clearing frames
      if (this.renderFrame) {
        cancelAnimationFrame(this.renderFrame);
        this.renderFrame = null;
      }
      if (this.renderHighlightedNodesFrame) {
        cancelAnimationFrame(this.renderHighlightedNodesFrame);
        this.renderHighlightedNodesFrame = null;
      }

      // Destroying canvases
      var container = this.container;
      while (container.firstChild) container.removeChild(container.firstChild);

      // Destroying remaining collections
      this.canvasContexts = {};
      this.webGLContexts = {};
      this.elements = {};

      // Kill programs:
      for (var type in this.nodePrograms) {
        this.nodePrograms[type].kill();
      }
      for (var _type8 in this.nodeHoverPrograms) {
        this.nodeHoverPrograms[_type8].kill();
      }
      for (var _type9 in this.edgePrograms) {
        this.edgePrograms[_type9].kill();
      }
      this.nodePrograms = {};
      this.nodeHoverPrograms = {};
      this.edgePrograms = {};

      // Kill all canvas/WebGL contexts
      for (var id in this.elements) {
        this.killLayer(id);
      }
    }

    /**
     * Method used to scale the given size according to the camera's ratio, i.e.
     * zooming state.
     *
     * @param  {number?} size -        The size to scale (node size, edge thickness etc.).
     * @param  {number?} cameraRatio - A camera ratio (defaults to the actual camera ratio).
     * @return {number}              - The scaled size.
     */
  }, {
    key: "scaleSize",
    value: function scaleSize() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var cameraRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.camera.ratio;
      return size / this.settings.zoomToSizeRatioFunction(cameraRatio) * (this.getSetting("itemSizesReference") === "positions" ? cameraRatio * this.graphToViewportRatio : 1);
    }

    /**
     * Method that returns the collection of all used canvases.
     * At the moment, the instantiated canvases are the following, and in the
     * following order in the DOM:
     * - `edges`
     * - `nodes`
     * - `edgeLabels`
     * - `labels`
     * - `hovers`
     * - `hoverNodes`
     * - `mouse`
     *
     * @return {PlainObject<HTMLCanvasElement>} - The collection of canvases.
     */
  }, {
    key: "getCanvases",
    value: function getCanvases() {
      var res = {};
      for (var layer in this.elements) if (this.elements[layer] instanceof HTMLCanvasElement) res[layer] = this.elements[layer];
      return res;
    }
  }]);
}(types_dist_sigmaTypes.TypedEventEmitter);

/**
 * Sigma.js Library Endpoint
 * =========================
 *
 * The library endpoint.
 * @module
 */
var Sigma = Sigma$1;

exports.Camera = Camera;
exports.MouseCaptor = MouseCaptor;
exports.Sigma = Sigma$1;
exports.TouchCaptor = TouchCaptor;
exports["default"] = Sigma;

},{"../settings/dist/sigma-settings.cjs.dev.js":33,"../types/dist/sigma-types.cjs.dev.js":35,"./colors-fe6de9d2.cjs.dev.js":18,"./data-24ae515b.cjs.dev.js":19,"./index-88310d0d.cjs.dev.js":22,"./inherits-04acba6b.cjs.dev.js":23,"./normalization-02a974d4.cjs.dev.js":25,"events":5,"graphology-utils/is-graph":14}],28:[function(require,module,exports){
(function (process){(function (){
'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./sigma.cjs.prod.js");
} else {
  module.exports = require("./sigma.cjs.dev.js");
}

}).call(this)}).call(this,require('_process'))
},{"./sigma.cjs.dev.js":27,"./sigma.cjs.prod.js":29,"_process":16}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./index-16136237.cjs.prod.js');
var inherits = require('./inherits-6434e089.cjs.prod.js');
var types_dist_sigmaTypes = require('../types/dist/sigma-types.cjs.prod.js');
var normalization = require('./normalization-aed467cc.cjs.prod.js');
var settings_dist_sigmaSettings = require('../settings/dist/sigma-settings.cjs.prod.js');
var colors = require('./colors-ee2e2828.cjs.prod.js');
var data = require('./data-881001cd.cjs.prod.js');
require('events');
require('graphology-utils/is-graph');

/**
 * Defaults.
 */
var DEFAULT_ZOOMING_RATIO = 1.5;

/**
 * Event types.
 */
/**
 * Camera class
 */
var Camera = /*#__PURE__*/function (_TypedEventEmitter) {
  function Camera() {
    var _this;
    inherits._classCallCheck(this, Camera);
    _this = inherits._callSuper(this, Camera);

    // State
    index._defineProperty(_this, "x", 0.5);
    index._defineProperty(_this, "y", 0.5);
    index._defineProperty(_this, "angle", 0);
    index._defineProperty(_this, "ratio", 1);
    index._defineProperty(_this, "minRatio", null);
    index._defineProperty(_this, "maxRatio", null);
    index._defineProperty(_this, "enabledZooming", true);
    index._defineProperty(_this, "enabledPanning", true);
    index._defineProperty(_this, "enabledRotation", true);
    index._defineProperty(_this, "clean", null);
    index._defineProperty(_this, "nextFrame", null);
    index._defineProperty(_this, "previousState", null);
    index._defineProperty(_this, "enabled", true);
    _this.previousState = _this.getState();
    return _this;
  }

  /**
   * Static method used to create a Camera object with a given state.
   */
  inherits._inherits(Camera, _TypedEventEmitter);
  return inherits._createClass(Camera, [{
    key: "enable",
    value:
    /**
     * Method used to enable the camera.
     */
    function enable() {
      this.enabled = true;
      return this;
    }

    /**
     * Method used to disable the camera.
     */
  }, {
    key: "disable",
    value: function disable() {
      this.enabled = false;
      return this;
    }

    /**
     * Method used to retrieve the camera's current state.
     */
  }, {
    key: "getState",
    value: function getState() {
      return {
        x: this.x,
        y: this.y,
        angle: this.angle,
        ratio: this.ratio
      };
    }

    /**
     * Method used to check whether the camera has the given state.
     */
  }, {
    key: "hasState",
    value: function hasState(state) {
      return this.x === state.x && this.y === state.y && this.ratio === state.ratio && this.angle === state.angle;
    }

    /**
     * Method used to retrieve the camera's previous state.
     */
  }, {
    key: "getPreviousState",
    value: function getPreviousState() {
      var state = this.previousState;
      if (!state) return null;
      return {
        x: state.x,
        y: state.y,
        angle: state.angle,
        ratio: state.ratio
      };
    }

    /**
     * Method used to check minRatio and maxRatio values.
     */
  }, {
    key: "getBoundedRatio",
    value: function getBoundedRatio(ratio) {
      var r = ratio;
      if (typeof this.minRatio === "number") r = Math.max(r, this.minRatio);
      if (typeof this.maxRatio === "number") r = Math.min(r, this.maxRatio);
      return r;
    }

    /**
     * Method used to check various things to return a legit state candidate.
     */
  }, {
    key: "validateState",
    value: function validateState(state) {
      var validatedState = {};
      if (this.enabledPanning && typeof state.x === "number") validatedState.x = state.x;
      if (this.enabledPanning && typeof state.y === "number") validatedState.y = state.y;
      if (this.enabledZooming && typeof state.ratio === "number") validatedState.ratio = this.getBoundedRatio(state.ratio);
      if (this.enabledRotation && typeof state.angle === "number") validatedState.angle = state.angle;
      return this.clean ? this.clean(index._objectSpread2(index._objectSpread2({}, this.getState()), validatedState)) : validatedState;
    }

    /**
     * Method used to check whether the camera is currently being animated.
     */
  }, {
    key: "isAnimated",
    value: function isAnimated() {
      return !!this.nextFrame;
    }

    /**
     * Method used to set the camera's state.
     */
  }, {
    key: "setState",
    value: function setState(state) {
      if (!this.enabled) return this;

      // Keeping track of last state
      this.previousState = this.getState();
      var validState = this.validateState(state);
      if (typeof validState.x === "number") this.x = validState.x;
      if (typeof validState.y === "number") this.y = validState.y;
      if (typeof validState.ratio === "number") this.ratio = validState.ratio;
      if (typeof validState.angle === "number") this.angle = validState.angle;

      // Emitting
      if (!this.hasState(this.previousState)) this.emit("updated", this.getState());
      return this;
    }

    /**
     * Method used to update the camera's state using a function.
     */
  }, {
    key: "updateState",
    value: function updateState(updater) {
      this.setState(updater(this.getState()));
      return this;
    }

    /**
     * Method used to animate the camera.
     */
  }, {
    key: "animate",
    value: function animate(state) {
      var _this2 = this;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      if (!callback) return new Promise(function (resolve) {
        return _this2.animate(state, opts, resolve);
      });
      if (!this.enabled) return;
      var options = index._objectSpread2(index._objectSpread2({}, normalization.ANIMATE_DEFAULTS), opts);
      var validState = this.validateState(state);
      var easing = typeof options.easing === "function" ? options.easing : normalization.easings[options.easing];

      // State
      var start = Date.now(),
        initialState = this.getState();

      // Function performing the animation
      var _fn = function fn() {
        var t = (Date.now() - start) / options.duration;

        // The animation is over:
        if (t >= 1) {
          _this2.nextFrame = null;
          _this2.setState(validState);
          if (_this2.animationCallback) {
            _this2.animationCallback.call(null);
            _this2.animationCallback = undefined;
          }
          return;
        }
        var coefficient = easing(t);
        var newState = {};
        if (typeof validState.x === "number") newState.x = initialState.x + (validState.x - initialState.x) * coefficient;
        if (typeof validState.y === "number") newState.y = initialState.y + (validState.y - initialState.y) * coefficient;
        if (_this2.enabledRotation && typeof validState.angle === "number") newState.angle = initialState.angle + (validState.angle - initialState.angle) * coefficient;
        if (typeof validState.ratio === "number") newState.ratio = initialState.ratio + (validState.ratio - initialState.ratio) * coefficient;
        _this2.setState(newState);
        _this2.nextFrame = requestAnimationFrame(_fn);
      };
      if (this.nextFrame) {
        cancelAnimationFrame(this.nextFrame);
        if (this.animationCallback) this.animationCallback.call(null);
        this.nextFrame = requestAnimationFrame(_fn);
      } else {
        _fn();
      }
      this.animationCallback = callback;
    }

    /**
     * Method used to zoom the camera.
     */
  }, {
    key: "animatedZoom",
    value: function animatedZoom(factorOrOptions) {
      if (!factorOrOptions) return this.animate({
        ratio: this.ratio / DEFAULT_ZOOMING_RATIO
      });
      if (typeof factorOrOptions === "number") return this.animate({
        ratio: this.ratio / factorOrOptions
      });
      return this.animate({
        ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
      }, factorOrOptions);
    }

    /**
     * Method used to unzoom the camera.
     */
  }, {
    key: "animatedUnzoom",
    value: function animatedUnzoom(factorOrOptions) {
      if (!factorOrOptions) return this.animate({
        ratio: this.ratio * DEFAULT_ZOOMING_RATIO
      });
      if (typeof factorOrOptions === "number") return this.animate({
        ratio: this.ratio * factorOrOptions
      });
      return this.animate({
        ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
      }, factorOrOptions);
    }

    /**
     * Method used to reset the camera.
     */
  }, {
    key: "animatedReset",
    value: function animatedReset(options) {
      return this.animate({
        x: 0.5,
        y: 0.5,
        ratio: 1,
        angle: 0
      }, options);
    }

    /**
     * Returns a new Camera instance, with the same state as the current camera.
     */
  }, {
    key: "copy",
    value: function copy() {
      return Camera.from(this.getState());
    }
  }], [{
    key: "from",
    value: function from(state) {
      var camera = new Camera();
      return camera.setState(state);
    }
  }]);
}(types_dist_sigmaTypes.TypedEventEmitter);

/**
 * Captor utils functions
 * ======================
 */

/**
 * Extract the local X and Y coordinates from a mouse event or touch object. If
 * a DOM element is given, it uses this element's offset to compute the position
 * (this allows using events that are not bound to the container itself and
 * still have a proper position).
 *
 * @param  {event}       e - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {number}      The local Y value of the mouse.
 */
function getPosition(e, dom) {
  var bbox = dom.getBoundingClientRect();
  return {
    x: e.clientX - bbox.left,
    y: e.clientY - bbox.top
  };
}

/**
 * Convert mouse coords to sigma coords.
 *
 * @param  {event}       e   - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getMouseCoords(e, dom) {
  var res = index._objectSpread2(index._objectSpread2({}, getPosition(e, dom)), {}, {
    sigmaDefaultPrevented: false,
    preventSigmaDefault: function preventSigmaDefault() {
      res.sigmaDefaultPrevented = true;
    },
    original: e
  });
  return res;
}

/**
 * Takes a touch coords or a mouse coords, and always returns a clean mouse coords object.
 */
function cleanMouseCoords(e) {
  var res = "x" in e ? e : index._objectSpread2(index._objectSpread2({}, e.touches[0] || e.previousTouches[0]), {}, {
    original: e.original,
    sigmaDefaultPrevented: e.sigmaDefaultPrevented,
    preventSigmaDefault: function preventSigmaDefault() {
      e.sigmaDefaultPrevented = true;
      res.sigmaDefaultPrevented = true;
    }
  });
  return res;
}

/**
 * Convert mouse wheel event coords to sigma coords.
 *
 * @param  {event}       e   - A wheel mouse event.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getWheelCoords(e, dom) {
  return index._objectSpread2(index._objectSpread2({}, getMouseCoords(e, dom)), {}, {
    delta: getWheelDelta(e)
  });
}
var MAX_TOUCHES = 2;
function getTouchesArray(touches) {
  var arr = [];
  for (var i = 0, l = Math.min(touches.length, MAX_TOUCHES); i < l; i++) arr.push(touches[i]);
  return arr;
}

/**
 * Convert touch coords to sigma coords.
 *
 * @param  {event}       e               - A touch event.
 * @param  {Touch[]}     previousTouches - An array of the previously stored touches.
 * @param  {HTMLElement} dom             - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getTouchCoords(e, previousTouches, dom) {
  var res = {
    touches: getTouchesArray(e.touches).map(function (touch) {
      return getPosition(touch, dom);
    }),
    previousTouches: previousTouches.map(function (touch) {
      return getPosition(touch, dom);
    }),
    sigmaDefaultPrevented: false,
    preventSigmaDefault: function preventSigmaDefault() {
      res.sigmaDefaultPrevented = true;
    },
    original: e
  };
  return res;
}

/**
 * Extract the wheel delta from a mouse event or touch object.
 *
 * @param  {event}  e - A mouse event or touch object.
 * @return {number}     The wheel delta of the mouse.
 */
function getWheelDelta(e) {
  // TODO: check those ratios again to ensure a clean Chrome/Firefox compat
  if (typeof e.deltaY !== "undefined") return e.deltaY * -3 / 360;
  if (typeof e.detail !== "undefined") return e.detail / -9;
  throw new Error("Captor: could not extract delta from event.");
}

/**
 * Abstract class representing a captor like the user's mouse or touch controls.
 */
var Captor = /*#__PURE__*/function (_TypedEventEmitter) {
  function Captor(container, renderer) {
    var _this;
    inherits._classCallCheck(this, Captor);
    _this = inherits._callSuper(this, Captor);
    // Properties
    _this.container = container;
    _this.renderer = renderer;
    return _this;
  }
  inherits._inherits(Captor, _TypedEventEmitter);
  return inherits._createClass(Captor);
}(types_dist_sigmaTypes.TypedEventEmitter);

var MOUSE_SETTINGS_KEYS = ["doubleClickTimeout", "doubleClickZoomingDuration", "doubleClickZoomingRatio", "dragTimeout", "draggedEventsTolerance", "inertiaDuration", "inertiaRatio", "zoomDuration", "zoomingRatio"];
var DEFAULT_MOUSE_SETTINGS = MOUSE_SETTINGS_KEYS.reduce(function (iter, key) {
  return index._objectSpread2(index._objectSpread2({}, iter), {}, index._defineProperty({}, key, settings_dist_sigmaSettings.DEFAULT_SETTINGS[key]));
}, {});

/**
 * Event types.
 */
/**
 * Mouse captor class.
 *
 * @constructor
 */
var MouseCaptor = /*#__PURE__*/function (_Captor) {
  function MouseCaptor(container, renderer) {
    var _this;
    inherits._classCallCheck(this, MouseCaptor);
    _this = inherits._callSuper(this, MouseCaptor, [container, renderer]);

    // Binding methods
    // State
    index._defineProperty(_this, "enabled", true);
    index._defineProperty(_this, "draggedEvents", 0);
    index._defineProperty(_this, "downStartTime", null);
    index._defineProperty(_this, "lastMouseX", null);
    index._defineProperty(_this, "lastMouseY", null);
    index._defineProperty(_this, "isMouseDown", false);
    index._defineProperty(_this, "isMoving", false);
    index._defineProperty(_this, "movingTimeout", null);
    index._defineProperty(_this, "startCameraState", null);
    index._defineProperty(_this, "clicks", 0);
    index._defineProperty(_this, "doubleClickTimeout", null);
    index._defineProperty(_this, "currentWheelDirection", 0);
    index._defineProperty(_this, "settings", DEFAULT_MOUSE_SETTINGS);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleRightClick = _this.handleRightClick.bind(_this);
    _this.handleDown = _this.handleDown.bind(_this);
    _this.handleUp = _this.handleUp.bind(_this);
    _this.handleMove = _this.handleMove.bind(_this);
    _this.handleWheel = _this.handleWheel.bind(_this);
    _this.handleLeave = _this.handleLeave.bind(_this);
    _this.handleEnter = _this.handleEnter.bind(_this);

    // Binding events
    container.addEventListener("click", _this.handleClick, {
      capture: false
    });
    container.addEventListener("contextmenu", _this.handleRightClick, {
      capture: false
    });
    container.addEventListener("mousedown", _this.handleDown, {
      capture: false
    });
    container.addEventListener("wheel", _this.handleWheel, {
      capture: false
    });
    container.addEventListener("mouseleave", _this.handleLeave, {
      capture: false
    });
    container.addEventListener("mouseenter", _this.handleEnter, {
      capture: false
    });
    document.addEventListener("mousemove", _this.handleMove, {
      capture: false
    });
    document.addEventListener("mouseup", _this.handleUp, {
      capture: false
    });
    return _this;
  }
  inherits._inherits(MouseCaptor, _Captor);
  return inherits._createClass(MouseCaptor, [{
    key: "kill",
    value: function kill() {
      var container = this.container;
      container.removeEventListener("click", this.handleClick);
      container.removeEventListener("contextmenu", this.handleRightClick);
      container.removeEventListener("mousedown", this.handleDown);
      container.removeEventListener("wheel", this.handleWheel);
      container.removeEventListener("mouseleave", this.handleLeave);
      container.removeEventListener("mouseenter", this.handleEnter);
      document.removeEventListener("mousemove", this.handleMove);
      document.removeEventListener("mouseup", this.handleUp);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this2 = this;
      if (!this.enabled) return;
      this.clicks++;
      if (this.clicks === 2) {
        this.clicks = 0;
        if (typeof this.doubleClickTimeout === "number") {
          clearTimeout(this.doubleClickTimeout);
          this.doubleClickTimeout = null;
        }
        return this.handleDoubleClick(e);
      }
      setTimeout(function () {
        _this2.clicks = 0;
        _this2.doubleClickTimeout = null;
      }, this.settings.doubleClickTimeout);

      // NOTE: this is here to prevent click events on drag
      if (this.draggedEvents < this.settings.draggedEventsTolerance) this.emit("click", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleRightClick",
    value: function handleRightClick(e) {
      if (!this.enabled) return;
      this.emit("rightClick", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleDoubleClick",
    value: function handleDoubleClick(e) {
      if (!this.enabled) return;
      e.preventDefault();
      e.stopPropagation();
      var mouseCoords = getMouseCoords(e, this.container);
      this.emit("doubleClick", mouseCoords);
      if (mouseCoords.sigmaDefaultPrevented) return;

      // default behavior
      var camera = this.renderer.getCamera();
      var newRatio = camera.getBoundedRatio(camera.getState().ratio / this.settings.doubleClickZoomingRatio);
      camera.animate(this.renderer.getViewportZoomedState(getPosition(e, this.container), newRatio), {
        easing: "quadraticInOut",
        duration: this.settings.doubleClickZoomingDuration
      });
    }
  }, {
    key: "handleDown",
    value: function handleDown(e) {
      if (!this.enabled) return;

      // We only start dragging on left button
      if (e.button === 0) {
        this.startCameraState = this.renderer.getCamera().getState();
        var _getPosition = getPosition(e, this.container),
          x = _getPosition.x,
          y = _getPosition.y;
        this.lastMouseX = x;
        this.lastMouseY = y;
        this.draggedEvents = 0;
        this.downStartTime = Date.now();
        this.isMouseDown = true;
      }
      this.emit("mousedown", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleUp",
    value: function handleUp(e) {
      var _this3 = this;
      if (!this.enabled || !this.isMouseDown) return;
      var camera = this.renderer.getCamera();
      this.isMouseDown = false;
      if (typeof this.movingTimeout === "number") {
        clearTimeout(this.movingTimeout);
        this.movingTimeout = null;
      }
      var _getPosition2 = getPosition(e, this.container),
        x = _getPosition2.x,
        y = _getPosition2.y;
      var cameraState = camera.getState(),
        previousCameraState = camera.getPreviousState() || {
          x: 0,
          y: 0
        };
      if (this.isMoving) {
        camera.animate({
          x: cameraState.x + this.settings.inertiaRatio * (cameraState.x - previousCameraState.x),
          y: cameraState.y + this.settings.inertiaRatio * (cameraState.y - previousCameraState.y)
        }, {
          duration: this.settings.inertiaDuration,
          easing: "quadraticOut"
        });
      } else if (this.lastMouseX !== x || this.lastMouseY !== y) {
        camera.setState({
          x: cameraState.x,
          y: cameraState.y
        });
      }
      this.isMoving = false;
      setTimeout(function () {
        var shouldRefresh = _this3.draggedEvents > 0;
        _this3.draggedEvents = 0;

        // NOTE: this refresh is here to make sure `hideEdgesOnMove` can work
        // when someone releases camera pan drag after having stopped moving.
        // See commit: https://github.com/jacomyal/sigma.js/commit/cfd9197f70319109db6b675dd7c82be493ca95a2
        // See also issue: https://github.com/jacomyal/sigma.js/issues/1290
        // It could be possible to render instead of scheduling a refresh but for
        // now it seems good enough.
        if (shouldRefresh && _this3.renderer.getSetting("hideEdgesOnMove")) _this3.renderer.refresh();
      }, 0);
      this.emit("mouseup", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleMove",
    value: function handleMove(e) {
      var _this4 = this;
      if (!this.enabled) return;
      var mouseCoords = getMouseCoords(e, this.container);

      // Always trigger a "mousemovebody" event, so that it is possible to develop
      // a drag-and-drop effect that works even when the mouse is out of the
      // container:
      this.emit("mousemovebody", mouseCoords);

      // Only trigger the "mousemove" event when the mouse is actually hovering
      // the container, to avoid weirdly hovering nodes and/or edges when the
      // mouse is not hover the container:
      if (e.target === this.container || e.composedPath()[0] === this.container) {
        this.emit("mousemove", mouseCoords);
      }
      if (mouseCoords.sigmaDefaultPrevented) return;

      // Handle the case when "isMouseDown" all the time, to allow dragging the
      // stage while the mouse is not hover the container:
      if (this.isMouseDown) {
        this.isMoving = true;
        this.draggedEvents++;
        if (typeof this.movingTimeout === "number") {
          clearTimeout(this.movingTimeout);
        }
        this.movingTimeout = window.setTimeout(function () {
          _this4.movingTimeout = null;
          _this4.isMoving = false;
        }, this.settings.dragTimeout);
        var camera = this.renderer.getCamera();
        var _getPosition3 = getPosition(e, this.container),
          eX = _getPosition3.x,
          eY = _getPosition3.y;
        var lastMouse = this.renderer.viewportToFramedGraph({
          x: this.lastMouseX,
          y: this.lastMouseY
        });
        var mouse = this.renderer.viewportToFramedGraph({
          x: eX,
          y: eY
        });
        var offsetX = lastMouse.x - mouse.x,
          offsetY = lastMouse.y - mouse.y;
        var cameraState = camera.getState();
        var x = cameraState.x + offsetX,
          y = cameraState.y + offsetY;
        camera.setState({
          x: x,
          y: y
        });
        this.lastMouseX = eX;
        this.lastMouseY = eY;
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(e) {
      this.emit("mouseleave", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleEnter",
    value: function handleEnter(e) {
      this.emit("mouseenter", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(e) {
      var _this5 = this;
      var camera = this.renderer.getCamera();
      if (!this.enabled || !camera.enabledZooming) return;
      var delta = getWheelDelta(e);
      if (!delta) return;
      var wheelCoords = getWheelCoords(e, this.container);
      this.emit("wheel", wheelCoords);
      if (wheelCoords.sigmaDefaultPrevented) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // Default behavior
      var currentRatio = camera.getState().ratio;
      var ratioDiff = delta > 0 ? 1 / this.settings.zoomingRatio : this.settings.zoomingRatio;
      var newRatio = camera.getBoundedRatio(currentRatio * ratioDiff);
      var wheelDirection = delta > 0 ? 1 : -1;
      var now = Date.now();

      // Exit early without preventing default behavior when ratio doesn't change:
      if (currentRatio === newRatio) return;
      e.preventDefault();
      e.stopPropagation();

      // Cancel events that are too close each other and in the same direction:
      if (this.currentWheelDirection === wheelDirection && this.lastWheelTriggerTime && now - this.lastWheelTriggerTime < this.settings.zoomDuration / 5) {
        return;
      }
      camera.animate(this.renderer.getViewportZoomedState(getPosition(e, this.container), newRatio), {
        easing: "quadraticOut",
        duration: this.settings.zoomDuration
      }, function () {
        _this5.currentWheelDirection = 0;
      });
      this.currentWheelDirection = wheelDirection;
      this.lastWheelTriggerTime = now;
    }
  }, {
    key: "setSettings",
    value: function setSettings(settings) {
      this.settings = settings;
    }
  }]);
}(Captor);

var TOUCH_SETTINGS_KEYS = ["dragTimeout", "inertiaDuration", "inertiaRatio", "doubleClickTimeout", "doubleClickZoomingRatio", "doubleClickZoomingDuration", "tapMoveTolerance"];
var DEFAULT_TOUCH_SETTINGS = TOUCH_SETTINGS_KEYS.reduce(function (iter, key) {
  return index._objectSpread2(index._objectSpread2({}, iter), {}, index._defineProperty({}, key, settings_dist_sigmaSettings.DEFAULT_SETTINGS[key]));
}, {});

/**
 * Event types.
 */
/**
 * Touch captor class.
 *
 * @constructor
 */
var TouchCaptor = /*#__PURE__*/function (_Captor) {
  function TouchCaptor(container, renderer) {
    var _this;
    inherits._classCallCheck(this, TouchCaptor);
    _this = inherits._callSuper(this, TouchCaptor, [container, renderer]);

    // Binding methods:
    index._defineProperty(_this, "enabled", true);
    index._defineProperty(_this, "isMoving", false);
    index._defineProperty(_this, "hasMoved", false);
    index._defineProperty(_this, "touchMode", 0);
    index._defineProperty(_this, "startTouchesPositions", []);
    index._defineProperty(_this, "lastTouches", []);
    index._defineProperty(_this, "lastTap", null);
    index._defineProperty(_this, "settings", DEFAULT_TOUCH_SETTINGS);
    _this.handleStart = _this.handleStart.bind(_this);
    _this.handleLeave = _this.handleLeave.bind(_this);
    _this.handleMove = _this.handleMove.bind(_this);

    // Binding events
    container.addEventListener("touchstart", _this.handleStart, {
      capture: false
    });
    container.addEventListener("touchcancel", _this.handleLeave, {
      capture: false
    });
    document.addEventListener("touchend", _this.handleLeave, {
      capture: false,
      passive: false
    });
    document.addEventListener("touchmove", _this.handleMove, {
      capture: false,
      passive: false
    });
    return _this;
  }
  inherits._inherits(TouchCaptor, _Captor);
  return inherits._createClass(TouchCaptor, [{
    key: "kill",
    value: function kill() {
      var container = this.container;
      container.removeEventListener("touchstart", this.handleStart);
      container.removeEventListener("touchcancel", this.handleLeave);
      document.removeEventListener("touchend", this.handleLeave);
      document.removeEventListener("touchmove", this.handleMove);
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight
      };
    }
  }, {
    key: "handleStart",
    value: function handleStart(e) {
      var _this2 = this;
      if (!this.enabled) return;
      e.preventDefault();
      var touches = getTouchesArray(e.touches);
      this.touchMode = touches.length;
      this.startCameraState = this.renderer.getCamera().getState();
      this.startTouchesPositions = touches.map(function (touch) {
        return getPosition(touch, _this2.container);
      });

      // When there are two touches down, let's record distance and angle as well:
      if (this.touchMode === 2) {
        var _this$startTouchesPos = colors._slicedToArray(this.startTouchesPositions, 2),
          _this$startTouchesPos2 = _this$startTouchesPos[0],
          x0 = _this$startTouchesPos2.x,
          y0 = _this$startTouchesPos2.y,
          _this$startTouchesPos3 = _this$startTouchesPos[1],
          x1 = _this$startTouchesPos3.x,
          y1 = _this$startTouchesPos3.y;
        this.startTouchesAngle = Math.atan2(y1 - y0, x1 - x0);
        this.startTouchesDistance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
      }
      this.emit("touchdown", getTouchCoords(e, this.lastTouches, this.container));
      this.lastTouches = touches;
      this.lastTouchesPositions = this.startTouchesPositions;
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(e) {
      if (!this.enabled || !this.startTouchesPositions.length) return;
      if (e.cancelable) e.preventDefault();
      if (this.movingTimeout) {
        this.isMoving = false;
        clearTimeout(this.movingTimeout);
      }
      switch (this.touchMode) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        case 2:
          if (e.touches.length === 1) {
            this.handleStart(e);
            e.preventDefault();
            break;
          }
        /* falls through */
        case 1:
          if (this.isMoving) {
            var camera = this.renderer.getCamera();
            var cameraState = camera.getState(),
              previousCameraState = camera.getPreviousState() || {
                x: 0,
                y: 0
              };
            camera.animate({
              x: cameraState.x + this.settings.inertiaRatio * (cameraState.x - previousCameraState.x),
              y: cameraState.y + this.settings.inertiaRatio * (cameraState.y - previousCameraState.y)
            }, {
              duration: this.settings.inertiaDuration,
              easing: "quadraticOut"
            });
          }
          this.hasMoved = false;
          this.isMoving = false;
          this.touchMode = 0;
          break;
      }
      this.emit("touchup", getTouchCoords(e, this.lastTouches, this.container));

      // When the last touch ends and there hasn't been too much movement, trigger a "tap" or "doubletap" event:
      if (!e.touches.length) {
        var position = getPosition(this.lastTouches[0], this.container);
        var downPosition = this.startTouchesPositions[0];
        var dSquare = Math.pow(position.x - downPosition.x, 2) + Math.pow(position.y - downPosition.y, 2);
        if (!e.touches.length && dSquare < Math.pow(this.settings.tapMoveTolerance, 2)) {
          // Only trigger "doubletap" when the last tap is recent enough:
          if (this.lastTap && Date.now() - this.lastTap.time < this.settings.doubleClickTimeout) {
            var touchCoords = getTouchCoords(e, this.lastTouches, this.container);
            this.emit("doubletap", touchCoords);
            this.lastTap = null;
            if (!touchCoords.sigmaDefaultPrevented) {
              var _camera = this.renderer.getCamera();
              var newRatio = _camera.getBoundedRatio(_camera.getState().ratio / this.settings.doubleClickZoomingRatio);
              _camera.animate(this.renderer.getViewportZoomedState(position, newRatio), {
                easing: "quadraticInOut",
                duration: this.settings.doubleClickZoomingDuration
              });
            }
          }
          // Else, trigger a normal "tap" event:
          else {
            var _touchCoords = getTouchCoords(e, this.lastTouches, this.container);
            this.emit("tap", _touchCoords);
            this.lastTap = {
              time: Date.now(),
              position: _touchCoords.touches[0] || _touchCoords.previousTouches[0]
            };
          }
        }
      }
      this.lastTouches = getTouchesArray(e.touches);
      this.startTouchesPositions = [];
    }
  }, {
    key: "handleMove",
    value: function handleMove(e) {
      var _this3 = this;
      if (!this.enabled || !this.startTouchesPositions.length) return;
      e.preventDefault();
      var touches = getTouchesArray(e.touches);
      var touchesPositions = touches.map(function (touch) {
        return getPosition(touch, _this3.container);
      });
      var lastTouches = this.lastTouches;
      this.lastTouches = touches;
      this.lastTouchesPositions = touchesPositions;
      var touchCoords = getTouchCoords(e, lastTouches, this.container);
      this.emit("touchmove", touchCoords);
      if (touchCoords.sigmaDefaultPrevented) return;

      // If a move was initiated at some point, and we get back to start point,
      // we should still consider that we did move (which also happens after a
      // multiple touch when only one touch remains in which case handleStart
      // is recalled within handleLeave).
      // Now, some mobile browsers report zero-distance moves so we also check that
      // one of the touches did actually move from the origin position.
      this.hasMoved || (this.hasMoved = touchesPositions.some(function (position, idx) {
        var startPosition = _this3.startTouchesPositions[idx];
        return startPosition && (position.x !== startPosition.x || position.y !== startPosition.y);
      }));

      // If there was no move, do not trigger touch moves behavior
      if (!this.hasMoved) {
        return;
      }
      this.isMoving = true;
      if (this.movingTimeout) clearTimeout(this.movingTimeout);
      this.movingTimeout = window.setTimeout(function () {
        _this3.isMoving = false;
      }, this.settings.dragTimeout);
      var camera = this.renderer.getCamera();
      var startCameraState = this.startCameraState;
      var padding = this.renderer.getSetting("stagePadding");
      switch (this.touchMode) {
        case 1:
          {
            var _this$renderer$viewpo = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]),
              xStart = _this$renderer$viewpo.x,
              yStart = _this$renderer$viewpo.y;
            var _this$renderer$viewpo2 = this.renderer.viewportToFramedGraph(touchesPositions[0]),
              x = _this$renderer$viewpo2.x,
              y = _this$renderer$viewpo2.y;
            camera.setState({
              x: startCameraState.x + xStart - x,
              y: startCameraState.y + yStart - y
            });
            break;
          }
        case 2:
          {
            /**
             * Here is the thinking here:
             *
             * 1. We can find the new angle and ratio, by comparing the vector from "touch one" to "touch two" at the start
             *    of the d'n'd and now
             *
             * 2. We can use `Camera#viewportToGraph` inside formula to retrieve the new camera position, using the graph
             *    position of a touch at the beginning of the d'n'd (using `startCamera.viewportToGraph`) and the viewport
             *    position of this same touch now
             */
            var newCameraState = {
              x: 0.5,
              y: 0.5,
              angle: 0,
              ratio: 1
            };
            var _touchesPositions$ = touchesPositions[0],
              x0 = _touchesPositions$.x,
              y0 = _touchesPositions$.y;
            var _touchesPositions$2 = touchesPositions[1],
              x1 = _touchesPositions$2.x,
              y1 = _touchesPositions$2.y;
            var angleDiff = Math.atan2(y1 - y0, x1 - x0) - this.startTouchesAngle;
            var ratioDiff = Math.hypot(y1 - y0, x1 - x0) / this.startTouchesDistance;

            // 1.
            var newRatio = camera.getBoundedRatio(startCameraState.ratio / ratioDiff);
            newCameraState.ratio = newRatio;
            newCameraState.angle = startCameraState.angle + angleDiff;

            // 2.
            var dimensions = this.getDimensions();
            var touchGraphPosition = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], {
              cameraState: startCameraState
            });
            var smallestDimension = Math.min(dimensions.width, dimensions.height) - 2 * padding;
            var dx = smallestDimension / dimensions.width;
            var dy = smallestDimension / dimensions.height;
            var ratio = newRatio / smallestDimension;

            // Align with center of the graph:
            var _x = x0 - smallestDimension / 2 / dx;
            var _y = y0 - smallestDimension / 2 / dy;

            // Rotate:
            var _ref = [_x * Math.cos(-newCameraState.angle) - _y * Math.sin(-newCameraState.angle), _y * Math.cos(-newCameraState.angle) + _x * Math.sin(-newCameraState.angle)];
            _x = _ref[0];
            _y = _ref[1];
            newCameraState.x = touchGraphPosition.x - _x * ratio;
            newCameraState.y = touchGraphPosition.y + _y * ratio;
            camera.setState(newCameraState);
            break;
          }
      }
    }
  }, {
    key: "setSettings",
    value: function setSettings(settings) {
      this.settings = settings;
    }
  }]);
}(Captor);

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return colors._arrayLikeToArray(r);
}

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || colors._unsupportedIterableToArray(r) || _nonIterableSpread();
}

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

/**
 * Sigma.js Labels Heuristics
 * ===========================
 *
 * Miscellaneous heuristics related to label display.
 * @module
 */
/**
 * Class representing a single candidate for the label grid selection.
 *
 * It also describes a deterministic way to compare two candidates to assess
 * which one is better.
 */
var LabelCandidate = /*#__PURE__*/function () {
  function LabelCandidate(key, size) {
    inherits._classCallCheck(this, LabelCandidate);
    this.key = key;
    this.size = size;
  }
  return inherits._createClass(LabelCandidate, null, [{
    key: "compare",
    value: function compare(first, second) {
      // First we compare by size
      if (first.size > second.size) return -1;
      if (first.size < second.size) return 1;

      // Then since no two nodes can have the same key, we use it to
      // deterministically tie-break by key
      if (first.key > second.key) return 1;

      // NOTE: this comparator cannot return 0
      return -1;
    }
  }]);
}();
/**
 * Class representing a 2D spatial grid divided into constant-size cells.
 */
var LabelGrid = /*#__PURE__*/function () {
  function LabelGrid() {
    inherits._classCallCheck(this, LabelGrid);
    index._defineProperty(this, "width", 0);
    index._defineProperty(this, "height", 0);
    index._defineProperty(this, "cellSize", 0);
    index._defineProperty(this, "columns", 0);
    index._defineProperty(this, "rows", 0);
    index._defineProperty(this, "cells", {});
  }
  return inherits._createClass(LabelGrid, [{
    key: "resizeAndClear",
    value: function resizeAndClear(dimensions, cellSize) {
      this.width = dimensions.width;
      this.height = dimensions.height;
      this.cellSize = cellSize;
      this.columns = Math.ceil(dimensions.width / cellSize);
      this.rows = Math.ceil(dimensions.height / cellSize);
      this.cells = {};
    }
  }, {
    key: "getIndex",
    value: function getIndex(pos) {
      var xIndex = Math.floor(pos.x / this.cellSize);
      var yIndex = Math.floor(pos.y / this.cellSize);
      return yIndex * this.columns + xIndex;
    }
  }, {
    key: "add",
    value: function add(key, size, pos) {
      var candidate = new LabelCandidate(key, size);
      var index = this.getIndex(pos);
      var cell = this.cells[index];
      if (!cell) {
        cell = [];
        this.cells[index] = cell;
      }
      cell.push(candidate);
    }
  }, {
    key: "organize",
    value: function organize() {
      for (var k in this.cells) {
        var cell = this.cells[k];
        cell.sort(LabelCandidate.compare);
      }
    }
  }, {
    key: "getLabelsToDisplay",
    value: function getLabelsToDisplay(ratio, density) {
      // TODO: work on visible nodes to optimize? ^ -> threshold outside so that memoization works?
      // TODO: adjust threshold lower, but increase cells a bit?
      // TODO: hunt for geom issue in disguise
      // TODO: memoize while ratio does not move. method to force recompute
      var cellArea = this.cellSize * this.cellSize;
      var scaledCellArea = cellArea / ratio / ratio;
      var scaledDensity = scaledCellArea * density / cellArea;
      var labelsToDisplayPerCell = Math.ceil(scaledDensity);
      var labels = [];
      for (var k in this.cells) {
        var cell = this.cells[k];
        for (var i = 0; i < Math.min(labelsToDisplayPerCell, cell.length); i++) {
          labels.push(cell[i].key);
        }
      }
      return labels;
    }
  }]);
}();

/**
 * Label heuristic selecting edge labels to display, based on displayed node
 * labels
 *
 * @param  {object} params                 - Parameters:
 * @param  {Set}      displayedNodeLabels  - Currently displayed node labels.
 * @param  {Set}      highlightedNodes     - Highlighted nodes.
 * @param  {Graph}    graph                - The rendered graph.
 * @param  {string}   hoveredNode          - Hovered node (optional)
 * @return {Array}                         - The selected labels.
 */
function edgeLabelsToDisplayFromNodes(params) {
  var graph = params.graph,
    hoveredNode = params.hoveredNode,
    highlightedNodes = params.highlightedNodes,
    displayedNodeLabels = params.displayedNodeLabels;
  var worthyEdges = [];

  // TODO: the code below can be optimized using #.forEach and batching the code per adj

  // We should display an edge's label if:
  //   - Any of its extremities is highlighted or hovered
  //   - Both of its extremities has its label shown
  graph.forEachEdge(function (edge, _, source, target) {
    if (source === hoveredNode || target === hoveredNode || highlightedNodes.has(source) || highlightedNodes.has(target) || displayedNodeLabels.has(source) && displayedNodeLabels.has(target)) {
      worthyEdges.push(edge);
    }
  });
  return worthyEdges;
}

/**
 * Constants.
 */
var X_LABEL_MARGIN = 150;
var Y_LABEL_MARGIN = 50;
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Important functions.
 */
function applyNodeDefaults(settings, key, data) {
  if (!hasOwnProperty.call(data, "x") || !hasOwnProperty.call(data, "y")) throw new Error("Sigma: could not find a valid position (x, y) for node \"".concat(key, "\". All your nodes must have a number \"x\" and \"y\". Maybe your forgot to apply a layout or your \"nodeReducer\" is not returning the correct data?"));
  if (!data.color) data.color = settings.defaultNodeColor;
  if (!data.label && data.label !== "") data.label = null;
  if (data.label !== undefined && data.label !== null) data.label = "" + data.label;else data.label = null;
  if (!data.size) data.size = 2;
  if (!hasOwnProperty.call(data, "hidden")) data.hidden = false;
  if (!hasOwnProperty.call(data, "highlighted")) data.highlighted = false;
  if (!hasOwnProperty.call(data, "forceLabel")) data.forceLabel = false;
  if (!data.type || data.type === "") data.type = settings.defaultNodeType;
  if (!data.zIndex) data.zIndex = 0;
  return data;
}
function applyEdgeDefaults(settings, _key, data) {
  if (!data.color) data.color = settings.defaultEdgeColor;
  if (!data.label) data.label = "";
  if (!data.size) data.size = 0.5;
  if (!hasOwnProperty.call(data, "hidden")) data.hidden = false;
  if (!hasOwnProperty.call(data, "forceLabel")) data.forceLabel = false;
  if (!data.type || data.type === "") data.type = settings.defaultEdgeType;
  if (!data.zIndex) data.zIndex = 0;
  return data;
}

/**
 * Main class.
 *
 * @constructor
 * @param {Graph}       graph     - Graph to render.
 * @param {HTMLElement} container - DOM container in which to render.
 * @param {object}      settings  - Optional settings.
 */
var Sigma$1 = /*#__PURE__*/function (_TypedEventEmitter) {
  function Sigma(graph, container) {
    var _this;
    var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    inherits._classCallCheck(this, Sigma);
    _this = inherits._callSuper(this, Sigma);

    // Resolving settings
    index._defineProperty(_this, "elements", {});
    index._defineProperty(_this, "canvasContexts", {});
    index._defineProperty(_this, "webGLContexts", {});
    index._defineProperty(_this, "pickingLayers", new Set());
    index._defineProperty(_this, "textures", {});
    index._defineProperty(_this, "frameBuffers", {});
    index._defineProperty(_this, "activeListeners", {});
    index._defineProperty(_this, "labelGrid", new LabelGrid());
    index._defineProperty(_this, "nodeDataCache", {});
    index._defineProperty(_this, "edgeDataCache", {});
    // Indices to keep track of the index of the item inside programs
    index._defineProperty(_this, "nodeProgramIndex", {});
    index._defineProperty(_this, "edgeProgramIndex", {});
    index._defineProperty(_this, "nodesWithForcedLabels", new Set());
    index._defineProperty(_this, "edgesWithForcedLabels", new Set());
    index._defineProperty(_this, "nodeExtent", {
      x: [0, 1],
      y: [0, 1]
    });
    index._defineProperty(_this, "nodeZExtent", [Infinity, -Infinity]);
    index._defineProperty(_this, "edgeZExtent", [Infinity, -Infinity]);
    index._defineProperty(_this, "matrix", normalization.identity());
    index._defineProperty(_this, "invMatrix", normalization.identity());
    index._defineProperty(_this, "correctionRatio", 1);
    index._defineProperty(_this, "customBBox", null);
    index._defineProperty(_this, "normalizationFunction", normalization.createNormalizationFunction({
      x: [0, 1],
      y: [0, 1]
    }));
    // Cache:
    index._defineProperty(_this, "graphToViewportRatio", 1);
    index._defineProperty(_this, "itemIDsIndex", {});
    index._defineProperty(_this, "nodeIndices", {});
    index._defineProperty(_this, "edgeIndices", {});
    // Starting dimensions and pixel ratio
    index._defineProperty(_this, "width", 0);
    index._defineProperty(_this, "height", 0);
    index._defineProperty(_this, "pixelRatio", normalization.getPixelRatio());
    index._defineProperty(_this, "pickingDownSizingRatio", 2 * _this.pixelRatio);
    // Graph State
    index._defineProperty(_this, "displayedNodeLabels", new Set());
    index._defineProperty(_this, "displayedEdgeLabels", new Set());
    index._defineProperty(_this, "highlightedNodes", new Set());
    index._defineProperty(_this, "hoveredNode", null);
    index._defineProperty(_this, "hoveredEdge", null);
    // Internal states
    index._defineProperty(_this, "renderFrame", null);
    index._defineProperty(_this, "renderHighlightedNodesFrame", null);
    index._defineProperty(_this, "needToProcess", false);
    index._defineProperty(_this, "checkEdgesEventsFrame", null);
    // Programs
    index._defineProperty(_this, "nodePrograms", {});
    index._defineProperty(_this, "nodeHoverPrograms", {});
    index._defineProperty(_this, "edgePrograms", {});
    _this.settings = settings_dist_sigmaSettings.resolveSettings(settings);

    // Validating
    settings_dist_sigmaSettings.validateSettings(_this.settings);
    normalization.validateGraph(graph);
    if (!(container instanceof HTMLElement)) throw new Error("Sigma: container should be an html element.");

    // Properties
    _this.graph = graph;
    _this.container = container;

    // Initializing contexts
    _this.createWebGLContext("edges", {
      picking: settings.enableEdgeEvents
    });
    _this.createCanvasContext("edgeLabels");
    _this.createWebGLContext("nodes", {
      picking: true
    });
    _this.createCanvasContext("labels");
    _this.createCanvasContext("hovers");
    _this.createWebGLContext("hoverNodes");
    _this.createCanvasContext("mouse", {
      style: {
        touchAction: "none",
        userSelect: "none"
      }
    });

    // Initial resize
    _this.resize();

    // Loading programs
    for (var type in _this.settings.nodeProgramClasses) {
      _this.registerNodeProgram(type, _this.settings.nodeProgramClasses[type], _this.settings.nodeHoverProgramClasses[type]);
    }
    for (var _type in _this.settings.edgeProgramClasses) {
      _this.registerEdgeProgram(_type, _this.settings.edgeProgramClasses[_type]);
    }

    // Initializing the camera
    _this.camera = new Camera();

    // Binding camera events
    _this.bindCameraHandlers();

    // Initializing captors
    _this.mouseCaptor = new MouseCaptor(_this.elements.mouse, _this);
    _this.mouseCaptor.setSettings(_this.settings);
    _this.touchCaptor = new TouchCaptor(_this.elements.mouse, _this);
    _this.touchCaptor.setSettings(_this.settings);

    // Binding event handlers
    _this.bindEventHandlers();

    // Binding graph handlers
    _this.bindGraphHandlers();

    // Trigger eventual settings-related things
    _this.handleSettingsUpdate();

    // Processing data for the first time & render
    _this.refresh();
    return _this;
  }

  /**---------------------------------------------------------------------------
   * Internal methods.
   **---------------------------------------------------------------------------
   */

  /**
   * Internal function used to register a node program
   *
   * @param  {string}           key              - The program's key, matching the related nodes "type" values.
   * @param  {NodeProgramType}  NodeProgramClass - A nodes program class.
   * @param  {NodeProgramType?} NodeHoverProgram - A nodes program class to render hovered nodes (optional).
   * @return {Sigma}
   */
  inherits._inherits(Sigma, _TypedEventEmitter);
  return inherits._createClass(Sigma, [{
    key: "registerNodeProgram",
    value: function registerNodeProgram(key, NodeProgramClass, NodeHoverProgram) {
      if (this.nodePrograms[key]) this.nodePrograms[key].kill();
      if (this.nodeHoverPrograms[key]) this.nodeHoverPrograms[key].kill();
      this.nodePrograms[key] = new NodeProgramClass(this.webGLContexts.nodes, this.frameBuffers.nodes, this);
      this.nodeHoverPrograms[key] = new (NodeHoverProgram || NodeProgramClass)(this.webGLContexts.hoverNodes, null, this);
      return this;
    }

    /**
     * Internal function used to register an edge program
     *
     * @param  {string}          key              - The program's key, matching the related edges "type" values.
     * @param  {EdgeProgramType} EdgeProgramClass - An edges program class.
     * @return {Sigma}
     */
  }, {
    key: "registerEdgeProgram",
    value: function registerEdgeProgram(key, EdgeProgramClass) {
      if (this.edgePrograms[key]) this.edgePrograms[key].kill();
      this.edgePrograms[key] = new EdgeProgramClass(this.webGLContexts.edges, this.frameBuffers.edges, this);
      return this;
    }

    /**
     * Internal function used to unregister a node program
     *
     * @param  {string} key - The program's key, matching the related nodes "type" values.
     * @return {Sigma}
     */
  }, {
    key: "unregisterNodeProgram",
    value: function unregisterNodeProgram(key) {
      if (this.nodePrograms[key]) {
        var _this$nodePrograms = this.nodePrograms,
          program = _this$nodePrograms[key],
          programs = _objectWithoutProperties(_this$nodePrograms, [key].map(inherits._toPropertyKey));
        program.kill();
        this.nodePrograms = programs;
      }
      if (this.nodeHoverPrograms[key]) {
        var _this$nodeHoverProgra = this.nodeHoverPrograms,
          _program = _this$nodeHoverProgra[key],
          _programs = _objectWithoutProperties(_this$nodeHoverProgra, [key].map(inherits._toPropertyKey));
        _program.kill();
        this.nodePrograms = _programs;
      }
      return this;
    }

    /**
     * Internal function used to unregister an edge program
     *
     * @param  {string} key - The program's key, matching the related edges "type" values.
     * @return {Sigma}
     */
  }, {
    key: "unregisterEdgeProgram",
    value: function unregisterEdgeProgram(key) {
      if (this.edgePrograms[key]) {
        var _this$edgePrograms = this.edgePrograms,
          program = _this$edgePrograms[key],
          programs = _objectWithoutProperties(_this$edgePrograms, [key].map(inherits._toPropertyKey));
        program.kill();
        this.edgePrograms = programs;
      }
      return this;
    }

    /**
     * Method (re)binding WebGL texture (for picking).
     *
     * @return {Sigma}
     */
  }, {
    key: "resetWebGLTexture",
    value: function resetWebGLTexture(id) {
      var gl = this.webGLContexts[id];
      var frameBuffer = this.frameBuffers[id];
      var currentTexture = this.textures[id];
      if (currentTexture) gl.deleteTexture(currentTexture);
      var pickingTexture = gl.createTexture();
      gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
      gl.bindTexture(gl.TEXTURE_2D, pickingTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pickingTexture, 0);
      this.textures[id] = pickingTexture;
      return this;
    }

    /**
     * Method binding camera handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "bindCameraHandlers",
    value: function bindCameraHandlers() {
      var _this2 = this;
      this.activeListeners.camera = function () {
        _this2.scheduleRender();
      };
      this.camera.on("updated", this.activeListeners.camera);
      return this;
    }

    /**
     * Method unbinding camera handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "unbindCameraHandlers",
    value: function unbindCameraHandlers() {
      this.camera.removeListener("updated", this.activeListeners.camera);
      return this;
    }

    /**
     * Method that returns the closest node to a given position.
     */
  }, {
    key: "getNodeAtPosition",
    value: function getNodeAtPosition(position) {
      var x = position.x,
        y = position.y;
      var color = colors.getPixelColor(this.webGLContexts.nodes, this.frameBuffers.nodes, x, y, this.pixelRatio, this.pickingDownSizingRatio);
      var index = colors.colorToIndex.apply(void 0, _toConsumableArray(color));
      var itemAt = this.itemIDsIndex[index];
      return itemAt && itemAt.type === "node" ? itemAt.id : null;
    }

    /**
     * Method binding event handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "bindEventHandlers",
    value: function bindEventHandlers() {
      var _this3 = this;
      // Handling window resize
      this.activeListeners.handleResize = function () {
        // need to call a refresh to rebuild the labelgrid
        _this3.scheduleRefresh();
      };
      window.addEventListener("resize", this.activeListeners.handleResize);

      // Handling mouse move
      this.activeListeners.handleMove = function (e) {
        var event = cleanMouseCoords(e);
        var baseEvent = {
          event: event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        };
        var nodeToHover = _this3.getNodeAtPosition(event);
        if (nodeToHover && _this3.hoveredNode !== nodeToHover && !_this3.nodeDataCache[nodeToHover].hidden) {
          // Handling passing from one node to the other directly
          if (_this3.hoveredNode) _this3.emit("leaveNode", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            node: _this3.hoveredNode
          }));
          _this3.hoveredNode = nodeToHover;
          _this3.emit("enterNode", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            node: nodeToHover
          }));
          _this3.scheduleHighlightedNodesRender();
          return;
        }

        // Checking if the hovered node is still hovered
        if (_this3.hoveredNode) {
          if (_this3.getNodeAtPosition(event) !== _this3.hoveredNode) {
            var node = _this3.hoveredNode;
            _this3.hoveredNode = null;
            _this3.emit("leaveNode", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
              node: node
            }));
            _this3.scheduleHighlightedNodesRender();
            return;
          }
        }
        if (_this3.settings.enableEdgeEvents) {
          var edgeToHover = _this3.hoveredNode ? null : _this3.getEdgeAtPoint(baseEvent.event.x, baseEvent.event.y);
          if (edgeToHover !== _this3.hoveredEdge) {
            if (_this3.hoveredEdge) _this3.emit("leaveEdge", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
              edge: _this3.hoveredEdge
            }));
            if (edgeToHover) _this3.emit("enterEdge", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
              edge: edgeToHover
            }));
            _this3.hoveredEdge = edgeToHover;
          }
        }
      };

      // Handling mouse move over body (only to dispatch the proper event):
      this.activeListeners.handleMoveBody = function (e) {
        var event = cleanMouseCoords(e);
        _this3.emit("moveBody", {
          event: event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        });
      };

      // Handling mouse leave stage:
      this.activeListeners.handleLeave = function (e) {
        var event = cleanMouseCoords(e);
        var baseEvent = {
          event: event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        };
        if (_this3.hoveredNode) {
          _this3.emit("leaveNode", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            node: _this3.hoveredNode
          }));
          _this3.scheduleHighlightedNodesRender();
        }
        if (_this3.settings.enableEdgeEvents && _this3.hoveredEdge) {
          _this3.emit("leaveEdge", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            edge: _this3.hoveredEdge
          }));
          _this3.scheduleHighlightedNodesRender();
        }
        _this3.emit("leaveStage", index._objectSpread2({}, baseEvent));
      };

      // Handling mouse enter stage:
      this.activeListeners.handleEnter = function (e) {
        var event = cleanMouseCoords(e);
        var baseEvent = {
          event: event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        };
        _this3.emit("enterStage", index._objectSpread2({}, baseEvent));
      };

      // Handling click
      var createInteractionListener = function createInteractionListener(eventType) {
        return function (e) {
          var event = cleanMouseCoords(e);
          var baseEvent = {
            event: event,
            preventSigmaDefault: function preventSigmaDefault() {
              event.preventSigmaDefault();
            }
          };
          var nodeAtPosition = _this3.getNodeAtPosition(event);
          if (nodeAtPosition) return _this3.emit("".concat(eventType, "Node"), index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            node: nodeAtPosition
          }));
          if (_this3.settings.enableEdgeEvents) {
            var edge = _this3.getEdgeAtPoint(event.x, event.y);
            if (edge) return _this3.emit("".concat(eventType, "Edge"), index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
              edge: edge
            }));
          }
          return _this3.emit("".concat(eventType, "Stage"), baseEvent);
        };
      };
      this.activeListeners.handleClick = createInteractionListener("click");
      this.activeListeners.handleRightClick = createInteractionListener("rightClick");
      this.activeListeners.handleDoubleClick = createInteractionListener("doubleClick");
      this.activeListeners.handleWheel = createInteractionListener("wheel");
      this.activeListeners.handleDown = createInteractionListener("down");
      this.activeListeners.handleUp = createInteractionListener("up");
      this.mouseCaptor.on("mousemove", this.activeListeners.handleMove);
      this.mouseCaptor.on("mousemovebody", this.activeListeners.handleMoveBody);
      this.mouseCaptor.on("click", this.activeListeners.handleClick);
      this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick);
      this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick);
      this.mouseCaptor.on("wheel", this.activeListeners.handleWheel);
      this.mouseCaptor.on("mousedown", this.activeListeners.handleDown);
      this.mouseCaptor.on("mouseup", this.activeListeners.handleUp);
      this.mouseCaptor.on("mouseleave", this.activeListeners.handleLeave);
      this.mouseCaptor.on("mouseenter", this.activeListeners.handleEnter);
      this.touchCaptor.on("touchdown", this.activeListeners.handleDown);
      this.touchCaptor.on("touchdown", this.activeListeners.handleMove);
      this.touchCaptor.on("touchup", this.activeListeners.handleUp);
      this.touchCaptor.on("touchmove", this.activeListeners.handleMove);
      this.touchCaptor.on("tap", this.activeListeners.handleClick);
      this.touchCaptor.on("doubletap", this.activeListeners.handleDoubleClick);
      this.touchCaptor.on("touchmove", this.activeListeners.handleMoveBody);
      return this;
    }

    /**
     * Method binding graph handlers
     *
     * @return {Sigma}
     */
  }, {
    key: "bindGraphHandlers",
    value: function bindGraphHandlers() {
      var _this4 = this;
      var graph = this.graph;
      var LAYOUT_IMPACTING_FIELDS = new Set(["x", "y", "zIndex", "type"]);
      this.activeListeners.eachNodeAttributesUpdatedGraphUpdate = function (e) {
        var _e$hints;
        var updatedFields = (_e$hints = e.hints) === null || _e$hints === void 0 ? void 0 : _e$hints.attributes;
        // we process all nodes
        _this4.graph.forEachNode(function (node) {
          return _this4.updateNode(node);
        });

        // if coord, type or zIndex have changed, we need to schedule a render
        // (zIndex for the programIndex)
        var layoutChanged = !updatedFields || updatedFields.some(function (f) {
          return LAYOUT_IMPACTING_FIELDS.has(f);
        });
        _this4.refresh({
          partialGraph: {
            nodes: graph.nodes()
          },
          skipIndexation: !layoutChanged,
          schedule: true
        });
      };
      this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate = function (e) {
        var _e$hints2;
        var updatedFields = (_e$hints2 = e.hints) === null || _e$hints2 === void 0 ? void 0 : _e$hints2.attributes;
        // we process all edges
        _this4.graph.forEachEdge(function (edge) {
          return _this4.updateEdge(edge);
        });
        var layoutChanged = updatedFields && ["zIndex", "type"].some(function (f) {
          return updatedFields === null || updatedFields === void 0 ? void 0 : updatedFields.includes(f);
        });
        _this4.refresh({
          partialGraph: {
            edges: graph.edges()
          },
          skipIndexation: !layoutChanged,
          schedule: true
        });
      };

      // On add node, we add the node in indices and then call for a render
      this.activeListeners.addNodeGraphUpdate = function (payload) {
        var node = payload.key;
        // we process the node
        _this4.addNode(node);
        // schedule a render for the node
        _this4.refresh({
          partialGraph: {
            nodes: [node]
          },
          skipIndexation: false,
          schedule: true
        });
      };

      // On update node, we update indices and then call for a render
      this.activeListeners.updateNodeGraphUpdate = function (payload) {
        var node = payload.key;
        // schedule a render for the node
        _this4.refresh({
          partialGraph: {
            nodes: [node]
          },
          skipIndexation: false,
          schedule: true
        });
      };

      // On drop node, we remove the node from indices and then call for a refresh
      this.activeListeners.dropNodeGraphUpdate = function (payload) {
        var node = payload.key;
        // we process the node
        _this4.removeNode(node);
        // schedule a render for everything
        _this4.refresh({
          schedule: true
        });
      };

      // On add edge, we remove the edge from indices and then call for a refresh
      this.activeListeners.addEdgeGraphUpdate = function (payload) {
        var edge = payload.key;
        // we process the edge
        _this4.addEdge(edge);
        // schedule a render for the edge
        _this4.refresh({
          partialGraph: {
            edges: [edge]
          },
          schedule: true
        });
      };

      // On update edge, we update indices and then call for a refresh
      this.activeListeners.updateEdgeGraphUpdate = function (payload) {
        var edge = payload.key;
        // schedule a repaint for the edge
        _this4.refresh({
          partialGraph: {
            edges: [edge]
          },
          skipIndexation: false,
          schedule: true
        });
      };

      // On drop edge, we remove the edge from indices and then call for a refresh
      this.activeListeners.dropEdgeGraphUpdate = function (payload) {
        var edge = payload.key;
        // we process the edge
        _this4.removeEdge(edge);
        // schedule a render for all edges
        _this4.refresh({
          schedule: true
        });
      };

      // On clear edges, we clear the edge indices and then call for a refresh
      this.activeListeners.clearEdgesGraphUpdate = function () {
        // we clear the edge data structures
        _this4.clearEdgeState();
        _this4.clearEdgeIndices();
        // schedule a render for all edges
        _this4.refresh({
          schedule: true
        });
      };

      // On graph clear, we clear indices and then call for a refresh
      this.activeListeners.clearGraphUpdate = function () {
        // clear graph state
        _this4.clearEdgeState();
        _this4.clearNodeState();

        // clear graph indices
        _this4.clearEdgeIndices();
        _this4.clearNodeIndices();

        // schedule a render for all
        _this4.refresh({
          schedule: true
        });
      };
      graph.on("nodeAdded", this.activeListeners.addNodeGraphUpdate);
      graph.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
      graph.on("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
      graph.on("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
      graph.on("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
      graph.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
      graph.on("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
      graph.on("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
      graph.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
      graph.on("cleared", this.activeListeners.clearGraphUpdate);
      return this;
    }

    /**
     * Method used to unbind handlers from the graph.
     *
     * @return {undefined}
     */
  }, {
    key: "unbindGraphHandlers",
    value: function unbindGraphHandlers() {
      var graph = this.graph;
      graph.removeListener("nodeAdded", this.activeListeners.addNodeGraphUpdate);
      graph.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
      graph.removeListener("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
      graph.removeListener("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
      graph.removeListener("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
      graph.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
      graph.removeListener("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
      graph.removeListener("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
      graph.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
      graph.removeListener("cleared", this.activeListeners.clearGraphUpdate);
    }

    /**
     * Method looking for an edge colliding with a given point at (x, y). Returns
     * the key of the edge if any, or null else.
     */
  }, {
    key: "getEdgeAtPoint",
    value: function getEdgeAtPoint(x, y) {
      var color = colors.getPixelColor(this.webGLContexts.edges, this.frameBuffers.edges, x, y, this.pixelRatio, this.pickingDownSizingRatio);
      var index = colors.colorToIndex.apply(void 0, _toConsumableArray(color));
      var itemAt = this.itemIDsIndex[index];
      return itemAt && itemAt.type === "edge" ? itemAt.id : null;
    }

    /**
     * Method used to process the whole graph's data.
     *  - extent
     *  - normalizationFunction
     *  - compute node's coordinate
     *  - labelgrid
     *  - program data allocation
     * @return {Sigma}
     */
  }, {
    key: "process",
    value: function process() {
      var _this5 = this;
      this.emit("beforeProcess");
      var graph = this.graph;
      var settings = this.settings;
      var dimensions = this.getDimensions();

      //
      // NODES
      //
      this.nodeExtent = normalization.graphExtent(this.graph);
      if (!this.settings.autoRescale) {
        var width = dimensions.width,
          height = dimensions.height;
        var _this$nodeExtent = this.nodeExtent,
          x = _this$nodeExtent.x,
          y = _this$nodeExtent.y;
        this.nodeExtent = {
          x: [(x[0] + x[1]) / 2 - width / 2, (x[0] + x[1]) / 2 + width / 2],
          y: [(y[0] + y[1]) / 2 - height / 2, (y[0] + y[1]) / 2 + height / 2]
        };
      }
      this.normalizationFunction = normalization.createNormalizationFunction(this.customBBox || this.nodeExtent);

      // NOTE: it is important to compute this matrix after computing the node's extent
      // because #.getGraphDimensions relies on it
      var nullCamera = new Camera();
      var nullCameraMatrix = normalization.matrixFromCamera(nullCamera.getState(), dimensions, this.getGraphDimensions(), this.getStagePadding());
      // Resetting the label grid
      // TODO: it's probably better to do this explicitly or on resizes for layout and anims
      this.labelGrid.resizeAndClear(dimensions, settings.labelGridCellSize);
      var nodesPerPrograms = {};
      var nodeIndices = {};
      var edgeIndices = {};
      var itemIDsIndex = {};
      var incrID = 1;
      var nodes = graph.nodes();

      // Do some indexation on the whole graph
      for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i];
        var data = this.nodeDataCache[node];

        // Get initial coordinates
        var attrs = graph.getNodeAttributes(node);
        data.x = attrs.x;
        data.y = attrs.y;
        this.normalizationFunction.applyTo(data);

        // labelgrid
        if (typeof data.label === "string" && !data.hidden) this.labelGrid.add(node, data.size, this.framedGraphToViewport(data, {
          matrix: nullCameraMatrix
        }));

        // update count per program
        nodesPerPrograms[data.type] = (nodesPerPrograms[data.type] || 0) + 1;
      }
      this.labelGrid.organize();

      // Allocate memory to programs
      for (var type in this.nodePrograms) {
        if (!hasOwnProperty.call(this.nodePrograms, type)) {
          throw new Error("Sigma: could not find a suitable program for node type \"".concat(type, "\"!"));
        }
        this.nodePrograms[type].reallocate(nodesPerPrograms[type] || 0);
        // We reset that count here, so that we can reuse it while calling the Program#process methods:
        nodesPerPrograms[type] = 0;
      }

      // Order nodes by zIndex before to add them to program
      if (this.settings.zIndex && this.nodeZExtent[0] !== this.nodeZExtent[1]) nodes = normalization.zIndexOrdering(this.nodeZExtent, function (node) {
        return _this5.nodeDataCache[node].zIndex;
      }, nodes);

      // Add data to programs
      for (var _i = 0, _l = nodes.length; _i < _l; _i++) {
        var _node = nodes[_i];
        nodeIndices[_node] = incrID;
        itemIDsIndex[nodeIndices[_node]] = {
          type: "node",
          id: _node
        };
        incrID++;
        var _data = this.nodeDataCache[_node];
        this.addNodeToProgram(_node, nodeIndices[_node], nodesPerPrograms[_data.type]++);
      }

      //
      // EDGES
      //

      var edgesPerPrograms = {};
      var edges = graph.edges();

      // Allocate memory to programs
      for (var _i2 = 0, _l2 = edges.length; _i2 < _l2; _i2++) {
        var edge = edges[_i2];
        var _data2 = this.edgeDataCache[edge];
        edgesPerPrograms[_data2.type] = (edgesPerPrograms[_data2.type] || 0) + 1;
      }

      // Order edges by zIndex before to add them to program
      if (this.settings.zIndex && this.edgeZExtent[0] !== this.edgeZExtent[1]) edges = normalization.zIndexOrdering(this.edgeZExtent, function (edge) {
        return _this5.edgeDataCache[edge].zIndex;
      }, edges);
      for (var _type2 in this.edgePrograms) {
        if (!hasOwnProperty.call(this.edgePrograms, _type2)) {
          throw new Error("Sigma: could not find a suitable program for edge type \"".concat(_type2, "\"!"));
        }
        this.edgePrograms[_type2].reallocate(edgesPerPrograms[_type2] || 0);
        // We reset that count here, so that we can reuse it while calling the Program#process methods:
        edgesPerPrograms[_type2] = 0;
      }

      // Add data to programs
      for (var _i3 = 0, _l3 = edges.length; _i3 < _l3; _i3++) {
        var _edge = edges[_i3];
        edgeIndices[_edge] = incrID;
        itemIDsIndex[edgeIndices[_edge]] = {
          type: "edge",
          id: _edge
        };
        incrID++;
        var _data3 = this.edgeDataCache[_edge];
        this.addEdgeToProgram(_edge, edgeIndices[_edge], edgesPerPrograms[_data3.type]++);
      }
      this.itemIDsIndex = itemIDsIndex;
      this.nodeIndices = nodeIndices;
      this.edgeIndices = edgeIndices;
      this.emit("afterProcess");
      return this;
    }

    /**
     * Method that backports potential settings updates where it's needed.
     * @private
     */
  }, {
    key: "handleSettingsUpdate",
    value: function handleSettingsUpdate(oldSettings) {
      var _this6 = this;
      var settings = this.settings;
      this.camera.minRatio = settings.minCameraRatio;
      this.camera.maxRatio = settings.maxCameraRatio;
      this.camera.enabledZooming = settings.enableCameraZooming;
      this.camera.enabledPanning = settings.enableCameraPanning;
      this.camera.enabledRotation = settings.enableCameraRotation;
      if (settings.cameraPanBoundaries) {
        this.camera.clean = function (state) {
          return _this6.cleanCameraState(state, settings.cameraPanBoundaries && data._typeof(settings.cameraPanBoundaries) === "object" ? settings.cameraPanBoundaries : {});
        };
      } else {
        this.camera.clean = null;
      }
      this.camera.setState(this.camera.validateState(this.camera.getState()));
      if (oldSettings) {
        // Check edge programs:
        if (oldSettings.edgeProgramClasses !== settings.edgeProgramClasses) {
          for (var type in settings.edgeProgramClasses) {
            if (settings.edgeProgramClasses[type] !== oldSettings.edgeProgramClasses[type]) {
              this.registerEdgeProgram(type, settings.edgeProgramClasses[type]);
            }
          }
          for (var _type3 in oldSettings.edgeProgramClasses) {
            if (!settings.edgeProgramClasses[_type3]) this.unregisterEdgeProgram(_type3);
          }
        }

        // Check node programs:
        if (oldSettings.nodeProgramClasses !== settings.nodeProgramClasses || oldSettings.nodeHoverProgramClasses !== settings.nodeHoverProgramClasses) {
          for (var _type4 in settings.nodeProgramClasses) {
            if (settings.nodeProgramClasses[_type4] !== oldSettings.nodeProgramClasses[_type4] || settings.nodeHoverProgramClasses[_type4] !== oldSettings.nodeHoverProgramClasses[_type4]) {
              this.registerNodeProgram(_type4, settings.nodeProgramClasses[_type4], settings.nodeHoverProgramClasses[_type4]);
            }
          }
          for (var _type5 in oldSettings.nodeProgramClasses) {
            if (!settings.nodeProgramClasses[_type5]) this.unregisterNodeProgram(_type5);
          }
        }
      }

      // Update captors settings:
      this.mouseCaptor.setSettings(this.settings);
      this.touchCaptor.setSettings(this.settings);
      return this;
    }
  }, {
    key: "cleanCameraState",
    value: function cleanCameraState(state) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$tolerance = _ref.tolerance,
        tolerance = _ref$tolerance === void 0 ? 0 : _ref$tolerance,
        boundaries = _ref.boundaries;
      var newState = index._objectSpread2({}, state);

      // Extract necessary properties
      var _ref2 = boundaries || this.nodeExtent,
        _ref2$x = colors._slicedToArray(_ref2.x, 2),
        xMinGraph = _ref2$x[0],
        xMaxGraph = _ref2$x[1],
        _ref2$y = colors._slicedToArray(_ref2.y, 2),
        yMinGraph = _ref2$y[0],
        yMaxGraph = _ref2$y[1];

      // Transform the four corners of the graph rectangle using the provided camera state
      var corners = [this.graphToViewport({
        x: xMinGraph,
        y: yMinGraph
      }, {
        cameraState: state
      }), this.graphToViewport({
        x: xMaxGraph,
        y: yMinGraph
      }, {
        cameraState: state
      }), this.graphToViewport({
        x: xMinGraph,
        y: yMaxGraph
      }, {
        cameraState: state
      }), this.graphToViewport({
        x: xMaxGraph,
        y: yMaxGraph
      }, {
        cameraState: state
      })];

      // Look for new extents, based on these four corners
      var xMin = Infinity,
        xMax = -Infinity,
        yMin = Infinity,
        yMax = -Infinity;
      corners.forEach(function (_ref3) {
        var x = _ref3.x,
          y = _ref3.y;
        xMin = Math.min(xMin, x);
        xMax = Math.max(xMax, x);
        yMin = Math.min(yMin, y);
        yMax = Math.max(yMax, y);
      });

      // For each dimension, constraint the smaller element (camera or graph) to fit in the larger one:
      var graphWidth = xMax - xMin;
      var graphHeight = yMax - yMin;
      var _this$getDimensions = this.getDimensions(),
        width = _this$getDimensions.width,
        height = _this$getDimensions.height;
      var dx = 0;
      var dy = 0;
      if (graphWidth >= width) {
        if (xMax < width - tolerance) dx = xMax - (width - tolerance);else if (xMin > tolerance) dx = xMin - tolerance;
      } else {
        if (xMax > width + tolerance) dx = xMax - (width + tolerance);else if (xMin < -tolerance) dx = xMin + tolerance;
      }
      if (graphHeight >= height) {
        if (yMax < height - tolerance) dy = yMax - (height - tolerance);else if (yMin > tolerance) dy = yMin - tolerance;
      } else {
        if (yMax > height + tolerance) dy = yMax - (height + tolerance);else if (yMin < -tolerance) dy = yMin + tolerance;
      }
      if (dx || dy) {
        // Transform [dx, dy] from viewport to graph (using two different point to transform that vector):
        var origin = this.viewportToFramedGraph({
          x: 0,
          y: 0
        }, {
          cameraState: state
        });
        var delta = this.viewportToFramedGraph({
          x: dx,
          y: dy
        }, {
          cameraState: state
        });
        dx = delta.x - origin.x;
        dy = delta.y - origin.y;
        newState.x += dx;
        newState.y += dy;
      }
      return newState;
    }

    /**
     * Method used to render labels.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderLabels",
    value: function renderLabels() {
      if (!this.settings.renderLabels) return this;
      var cameraState = this.camera.getState();

      // Selecting labels to draw
      var labelsToDisplay = this.labelGrid.getLabelsToDisplay(cameraState.ratio, this.settings.labelDensity);
      data.extend(labelsToDisplay, this.nodesWithForcedLabels);
      this.displayedNodeLabels = new Set();

      // Drawing labels
      var context = this.canvasContexts.labels;
      for (var i = 0, l = labelsToDisplay.length; i < l; i++) {
        var node = labelsToDisplay[i];
        var data$1 = this.nodeDataCache[node];

        // If the node was already drawn (like if it is eligible AND has
        // `forceLabel`), we don't want to draw it again
        // NOTE: we can do better probably
        if (this.displayedNodeLabels.has(node)) continue;

        // If the node is hidden, we don't need to display its label obviously
        if (data$1.hidden) continue;
        var _this$framedGraphToVi = this.framedGraphToViewport(data$1),
          x = _this$framedGraphToVi.x,
          y = _this$framedGraphToVi.y;

        // NOTE: we can cache the labels we need to render until the camera's ratio changes
        var size = this.scaleSize(data$1.size);

        // Is node big enough?
        if (!data$1.forceLabel && size < this.settings.labelRenderedSizeThreshold) continue;

        // Is node actually on screen (with some margin)
        // NOTE: we used to rely on the quadtree for this, but the coordinates
        // conversion make it unreliable and at that point we already converted
        // to viewport coordinates and since the label grid already culls the
        // number of potential labels to display this looks like a good
        // performance compromise.
        // NOTE: labelGrid.getLabelsToDisplay could probably optimize by not
        // considering cells obviously outside of the range of the current
        // view rectangle.
        if (x < -X_LABEL_MARGIN || x > this.width + X_LABEL_MARGIN || y < -Y_LABEL_MARGIN || y > this.height + Y_LABEL_MARGIN) continue;

        // Because displayed edge labels depend directly on actually rendered node
        // labels, we need to only add to this.displayedNodeLabels nodes whose label
        // is rendered.
        // This makes this.displayedNodeLabels depend on viewport, which might become
        // an issue once we start memoizing getLabelsToDisplay.
        this.displayedNodeLabels.add(node);
        var defaultDrawNodeLabel = this.settings.defaultDrawNodeLabel;
        var nodeProgram = this.nodePrograms[data$1.type];
        var drawLabel = (nodeProgram === null || nodeProgram === void 0 ? void 0 : nodeProgram.drawLabel) || defaultDrawNodeLabel;
        drawLabel(context, index._objectSpread2(index._objectSpread2({
          key: node
        }, data$1), {}, {
          size: size,
          x: x,
          y: y
        }), this.settings);
      }
      return this;
    }

    /**
     * Method used to render edge labels, based on which node labels were
     * rendered.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderEdgeLabels",
    value: function renderEdgeLabels() {
      if (!this.settings.renderEdgeLabels) return this;
      var context = this.canvasContexts.edgeLabels;

      // Clearing
      context.clearRect(0, 0, this.width, this.height);
      var edgeLabelsToDisplay = edgeLabelsToDisplayFromNodes({
        graph: this.graph,
        hoveredNode: this.hoveredNode,
        displayedNodeLabels: this.displayedNodeLabels,
        highlightedNodes: this.highlightedNodes
      });
      data.extend(edgeLabelsToDisplay, this.edgesWithForcedLabels);
      var displayedLabels = new Set();
      for (var i = 0, l = edgeLabelsToDisplay.length; i < l; i++) {
        var edge = edgeLabelsToDisplay[i],
          extremities = this.graph.extremities(edge),
          sourceData = this.nodeDataCache[extremities[0]],
          targetData = this.nodeDataCache[extremities[1]],
          edgeData = this.edgeDataCache[edge];

        // If the edge was already drawn (like if it is eligible AND has
        // `forceLabel`), we don't want to draw it again
        if (displayedLabels.has(edge)) continue;

        // If the edge is hidden we don't need to display its label
        // NOTE: the test on sourceData & targetData is probably paranoid at this point?
        if (edgeData.hidden || sourceData.hidden || targetData.hidden) {
          continue;
        }
        var defaultDrawEdgeLabel = this.settings.defaultDrawEdgeLabel;
        var edgeProgram = this.edgePrograms[edgeData.type];
        var drawLabel = (edgeProgram === null || edgeProgram === void 0 ? void 0 : edgeProgram.drawLabel) || defaultDrawEdgeLabel;
        drawLabel(context, index._objectSpread2(index._objectSpread2({
          key: edge
        }, edgeData), {}, {
          size: this.scaleSize(edgeData.size)
        }), index._objectSpread2(index._objectSpread2(index._objectSpread2({
          key: extremities[0]
        }, sourceData), this.framedGraphToViewport(sourceData)), {}, {
          size: this.scaleSize(sourceData.size)
        }), index._objectSpread2(index._objectSpread2(index._objectSpread2({
          key: extremities[1]
        }, targetData), this.framedGraphToViewport(targetData)), {}, {
          size: this.scaleSize(targetData.size)
        }), this.settings);
        displayedLabels.add(edge);
      }
      this.displayedEdgeLabels = displayedLabels;
      return this;
    }

    /**
     * Method used to render the highlighted nodes.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderHighlightedNodes",
    value: function renderHighlightedNodes() {
      var _this7 = this;
      var context = this.canvasContexts.hovers;

      // Clearing
      context.clearRect(0, 0, this.width, this.height);

      // Rendering
      var render = function render(node) {
        var data = _this7.nodeDataCache[node];
        var _this7$framedGraphToV = _this7.framedGraphToViewport(data),
          x = _this7$framedGraphToV.x,
          y = _this7$framedGraphToV.y;
        var size = _this7.scaleSize(data.size);
        var defaultDrawNodeHover = _this7.settings.defaultDrawNodeHover;
        var nodeProgram = _this7.nodePrograms[data.type];
        var drawHover = (nodeProgram === null || nodeProgram === void 0 ? void 0 : nodeProgram.drawHover) || defaultDrawNodeHover;
        drawHover(context, index._objectSpread2(index._objectSpread2({
          key: node
        }, data), {}, {
          size: size,
          x: x,
          y: y
        }), _this7.settings);
      };
      var nodesToRender = [];
      if (this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden) {
        nodesToRender.push(this.hoveredNode);
      }
      this.highlightedNodes.forEach(function (node) {
        // The hovered node has already been highlighted
        if (node !== _this7.hoveredNode) nodesToRender.push(node);
      });

      // Draw labels:
      nodesToRender.forEach(function (node) {
        return render(node);
      });

      // Draw WebGL nodes on top of the labels:
      var nodesPerPrograms = {};

      // 1. Count nodes per type:
      nodesToRender.forEach(function (node) {
        var type = _this7.nodeDataCache[node].type;
        nodesPerPrograms[type] = (nodesPerPrograms[type] || 0) + 1;
      });
      // 2. Allocate for each type for the proper number of nodes
      for (var type in this.nodeHoverPrograms) {
        this.nodeHoverPrograms[type].reallocate(nodesPerPrograms[type] || 0);
        // Also reset count, to use when rendering:
        nodesPerPrograms[type] = 0;
      }
      // 3. Process all nodes to render:
      nodesToRender.forEach(function (node) {
        var data = _this7.nodeDataCache[node];
        _this7.nodeHoverPrograms[data.type].process(0, nodesPerPrograms[data.type]++, data);
      });
      // 4. Clear hovered nodes layer:
      this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
      // 5. Render:
      var renderParams = this.getRenderParams();
      for (var _type6 in this.nodeHoverPrograms) {
        var program = this.nodeHoverPrograms[_type6];
        program.render(renderParams);
      }
    }

    /**
     * Method used to schedule a hover render.
     *
     */
  }, {
    key: "scheduleHighlightedNodesRender",
    value: function scheduleHighlightedNodesRender() {
      var _this8 = this;
      if (this.renderHighlightedNodesFrame || this.renderFrame) return;
      this.renderHighlightedNodesFrame = requestAnimationFrame(function () {
        // Resetting state
        _this8.renderHighlightedNodesFrame = null;

        // Rendering
        _this8.renderHighlightedNodes();
        _this8.renderEdgeLabels();
      });
    }

    /**
     * Method used to render.
     *
     * @return {Sigma}
     */
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;
      this.emit("beforeRender");
      var exitRender = function exitRender() {
        _this9.emit("afterRender");
        return _this9;
      };

      // If a render was scheduled, we cancel it
      if (this.renderFrame) {
        cancelAnimationFrame(this.renderFrame);
        this.renderFrame = null;
      }

      // First we need to resize
      this.resize();

      // Do we need to reprocess data?
      if (this.needToProcess) this.process();
      this.needToProcess = false;

      // Clearing the canvases
      this.clear();

      // Prepare the textures
      this.pickingLayers.forEach(function (layer) {
        return _this9.resetWebGLTexture(layer);
      });

      // If we have no nodes we can stop right there
      if (!this.graph.order) return exitRender();

      // TODO: improve this heuristic or move to the captor itself?
      // TODO: deal with the touch captor here as well
      var mouseCaptor = this.mouseCaptor;
      var moving = this.camera.isAnimated() || mouseCaptor.isMoving || mouseCaptor.draggedEvents || mouseCaptor.currentWheelDirection;

      // Then we need to extract a matrix from the camera
      var cameraState = this.camera.getState();
      var viewportDimensions = this.getDimensions();
      var graphDimensions = this.getGraphDimensions();
      var padding = this.getStagePadding();
      this.matrix = normalization.matrixFromCamera(cameraState, viewportDimensions, graphDimensions, padding);
      this.invMatrix = normalization.matrixFromCamera(cameraState, viewportDimensions, graphDimensions, padding, true);
      this.correctionRatio = normalization.getMatrixImpact(this.matrix, cameraState, viewportDimensions);
      this.graphToViewportRatio = this.getGraphToViewportRatio();

      // [jacomyal]
      // This comment is related to the one above the `getMatrixImpact` definition:
      // - `this.correctionRatio` is somehow not completely explained
      // - `this.graphToViewportRatio` is the ratio of a distance in the viewport divided by the same distance in the
      //   graph
      // - `this.normalizationFunction.ratio` is basically `Math.max(graphDX, graphDY)`
      // And now, I observe that if I multiply these three ratios, I have something constant, which value remains 2, even
      // when I change the graph, the viewport or the camera. It might be useful later, so I prefer to let this comment:
      // console.log(this.graphToViewportRatio * this.correctionRatio * this.normalizationFunction.ratio * 2);

      var params = this.getRenderParams();

      // Drawing nodes
      for (var type in this.nodePrograms) {
        var program = this.nodePrograms[type];
        program.render(params);
      }

      // Drawing edges
      if (!this.settings.hideEdgesOnMove || !moving) {
        for (var _type7 in this.edgePrograms) {
          var _program2 = this.edgePrograms[_type7];
          _program2.render(params);
        }
      }

      // Do not display labels on move per setting
      if (this.settings.hideLabelsOnMove && moving) return exitRender();
      this.renderLabels();
      this.renderEdgeLabels();
      this.renderHighlightedNodes();
      return exitRender();
    }

    /**
     * Add a node in the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "addNode",
    value: function addNode(key) {
      // Node display data resolution:
      //  1. First we get the node's attributes
      //  2. We optionally reduce them using the function provided by the user
      //     Note that this function must return a total object and won't be merged
      //  3. We apply our defaults, while running some vital checks
      //  4. We apply the normalization function
      // We shallow copy node data to avoid dangerous behaviors from reducers
      var attr = Object.assign({}, this.graph.getNodeAttributes(key));
      if (this.settings.nodeReducer) attr = this.settings.nodeReducer(key, attr);
      var data = applyNodeDefaults(this.settings, key, attr);
      this.nodeDataCache[key] = data;

      // Label:
      // We delete and add if needed because this function is also used from
      // update
      this.nodesWithForcedLabels["delete"](key);
      if (data.forceLabel && !data.hidden) this.nodesWithForcedLabels.add(key);

      // Highlighted:
      // We remove and re add if needed because this function is also used from
      // update
      this.highlightedNodes["delete"](key);
      if (data.highlighted && !data.hidden) this.highlightedNodes.add(key);

      // zIndex
      if (this.settings.zIndex) {
        if (data.zIndex < this.nodeZExtent[0]) this.nodeZExtent[0] = data.zIndex;
        if (data.zIndex > this.nodeZExtent[1]) this.nodeZExtent[1] = data.zIndex;
      }
    }

    /**
     * Update a node the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "updateNode",
    value: function updateNode(key) {
      this.addNode(key);

      // Re-apply normalization on the node
      var data = this.nodeDataCache[key];
      this.normalizationFunction.applyTo(data);
    }

    /**
     * Remove a node from the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "removeNode",
    value: function removeNode(key) {
      // Remove from node cache
      delete this.nodeDataCache[key];
      // Remove from node program index
      delete this.nodeProgramIndex[key];
      // Remove from higlighted nodes
      this.highlightedNodes["delete"](key);
      // Remove from hovered
      if (this.hoveredNode === key) this.hoveredNode = null;
      // Remove from forced label
      this.nodesWithForcedLabels["delete"](key);
    }

    /**
     * Add an edge into the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "addEdge",
    value: function addEdge(key) {
      // Edge display data resolution:
      //  1. First we get the edge's attributes
      //  2. We optionally reduce them using the function provided by the user
      //  3. Note that this function must return a total object and won't be merged
      //  4. We apply our defaults, while running some vital checks
      // We shallow copy edge data to avoid dangerous behaviors from reducers
      var attr = Object.assign({}, this.graph.getEdgeAttributes(key));
      if (this.settings.edgeReducer) attr = this.settings.edgeReducer(key, attr);
      var data = applyEdgeDefaults(this.settings, key, attr);
      this.edgeDataCache[key] = data;

      // Forced label
      // we filter and re push if needed because this function is also used from
      // update
      this.edgesWithForcedLabels["delete"](key);
      if (data.forceLabel && !data.hidden) this.edgesWithForcedLabels.add(key);

      // Check zIndex
      if (this.settings.zIndex) {
        if (data.zIndex < this.edgeZExtent[0]) this.edgeZExtent[0] = data.zIndex;
        if (data.zIndex > this.edgeZExtent[1]) this.edgeZExtent[1] = data.zIndex;
      }
    }

    /**
     * Update an edge in the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "updateEdge",
    value: function updateEdge(key) {
      this.addEdge(key);
    }

    /**
     * Remove an edge from the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "removeEdge",
    value: function removeEdge(key) {
      // Remove from edge cache
      delete this.edgeDataCache[key];
      // Remove from programId index
      delete this.edgeProgramIndex[key];
      // Remove from hovered
      if (this.hoveredEdge === key) this.hoveredEdge = null;
      // Remove from forced label
      this.edgesWithForcedLabels["delete"](key);
    }

    /**
     * Clear all indices related to nodes.
     * @private
     */
  }, {
    key: "clearNodeIndices",
    value: function clearNodeIndices() {
      // LabelGrid & nodeExtent are only manage/populated in the process function
      this.labelGrid = new LabelGrid();
      this.nodeExtent = {
        x: [0, 1],
        y: [0, 1]
      };
      this.nodeDataCache = {};
      this.edgeProgramIndex = {};
      this.nodesWithForcedLabels = new Set();
      this.nodeZExtent = [Infinity, -Infinity];
    }

    /**
     * Clear all indices related to edges.
     * @private
     */
  }, {
    key: "clearEdgeIndices",
    value: function clearEdgeIndices() {
      this.edgeDataCache = {};
      this.edgeProgramIndex = {};
      this.edgesWithForcedLabels = new Set();
      this.edgeZExtent = [Infinity, -Infinity];
    }

    /**
     * Clear all indices.
     * @private
     */
  }, {
    key: "clearIndices",
    value: function clearIndices() {
      this.clearEdgeIndices();
      this.clearNodeIndices();
    }

    /**
     * Clear all graph state related to nodes.
     * @private
     */
  }, {
    key: "clearNodeState",
    value: function clearNodeState() {
      this.displayedNodeLabels = new Set();
      this.highlightedNodes = new Set();
      this.hoveredNode = null;
    }

    /**
     * Clear all graph state related to edges.
     * @private
     */
  }, {
    key: "clearEdgeState",
    value: function clearEdgeState() {
      this.displayedEdgeLabels = new Set();
      this.highlightedNodes = new Set();
      this.hoveredEdge = null;
    }

    /**
     * Clear all graph state.
     * @private
     */
  }, {
    key: "clearState",
    value: function clearState() {
      this.clearEdgeState();
      this.clearNodeState();
    }

    /**
     * Add the node data to its program.
     * @private
     * @param node The node's graphology ID
     * @param fingerprint A fingerprint used to identity the node with picking
     * @param position The index where to place the node in the program
     */
  }, {
    key: "addNodeToProgram",
    value: function addNodeToProgram(node, fingerprint, position) {
      var data = this.nodeDataCache[node];
      var nodeProgram = this.nodePrograms[data.type];
      if (!nodeProgram) throw new Error("Sigma: could not find a suitable program for node type \"".concat(data.type, "\"!"));
      nodeProgram.process(fingerprint, position, data);
      // Saving program index
      this.nodeProgramIndex[node] = position;
    }

    /**
     * Add the edge data to its program.
     * @private
     * @param edge The edge's graphology ID
     * @param fingerprint A fingerprint used to identity the edge with picking
     * @param position The index where to place the edge in the program
     */
  }, {
    key: "addEdgeToProgram",
    value: function addEdgeToProgram(edge, fingerprint, position) {
      var data = this.edgeDataCache[edge];
      var edgeProgram = this.edgePrograms[data.type];
      if (!edgeProgram) throw new Error("Sigma: could not find a suitable program for edge type \"".concat(data.type, "\"!"));
      var extremities = this.graph.extremities(edge),
        sourceData = this.nodeDataCache[extremities[0]],
        targetData = this.nodeDataCache[extremities[1]];
      edgeProgram.process(fingerprint, position, sourceData, targetData, data);
      // Saving program index
      this.edgeProgramIndex[edge] = position;
    }

    /**---------------------------------------------------------------------------
     * Public API.
     **---------------------------------------------------------------------------
     */

    /**
     * Function used to get the render params.
     *
     * @return {RenderParams}
     */
  }, {
    key: "getRenderParams",
    value: function getRenderParams() {
      return {
        matrix: this.matrix,
        invMatrix: this.invMatrix,
        width: this.width,
        height: this.height,
        pixelRatio: this.pixelRatio,
        zoomRatio: this.camera.ratio,
        cameraAngle: this.camera.angle,
        sizeRatio: 1 / this.scaleSize(),
        correctionRatio: this.correctionRatio,
        downSizingRatio: this.pickingDownSizingRatio,
        minEdgeThickness: this.settings.minEdgeThickness,
        antiAliasingFeather: this.settings.antiAliasingFeather
      };
    }

    /**
     * Function used to retrieve the actual stage padding value.
     *
     * @return {number}
     */
  }, {
    key: "getStagePadding",
    value: function getStagePadding() {
      var _this$settings = this.settings,
        stagePadding = _this$settings.stagePadding,
        autoRescale = _this$settings.autoRescale;
      return autoRescale ? stagePadding || 0 : 0;
    }

    /**
     * Function used to create a layer element.
     *
     * @param {string} id - Context's id.
     * @param {string} tag - The HTML tag to use.
     * @param options
     * @return {Sigma}
     */
  }, {
    key: "createLayer",
    value: function createLayer(id, tag) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (this.elements[id]) throw new Error("Sigma: a layer named \"".concat(id, "\" already exists"));
      var element = normalization.createElement(tag, {
        position: "absolute"
      }, {
        "class": "sigma-".concat(id)
      });
      if (options.style) Object.assign(element.style, options.style);
      this.elements[id] = element;
      if ("beforeLayer" in options && options.beforeLayer) {
        this.elements[options.beforeLayer].before(element);
      } else if ("afterLayer" in options && options.afterLayer) {
        this.elements[options.afterLayer].after(element);
      } else {
        this.container.appendChild(element);
      }
      return element;
    }

    /**
     * Function used to create a canvas element.
     *
     * @param {string} id - Context's id.
     * @param options
     * @return {Sigma}
     */
  }, {
    key: "createCanvas",
    value: function createCanvas(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.createLayer(id, "canvas", options);
    }

    /**
     * Function used to create a canvas context and add the relevant DOM elements.
     *
     * @param  {string} id - Context's id.
     * @param  options
     * @return {Sigma}
     */
  }, {
    key: "createCanvasContext",
    value: function createCanvasContext(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canvas = this.createCanvas(id, options);
      var contextOptions = {
        preserveDrawingBuffer: false,
        antialias: false
      };
      this.canvasContexts[id] = canvas.getContext("2d", contextOptions);
      return this;
    }

    /**
     * Function used to create a WebGL context and add the relevant DOM
     * elements.
     *
     * @param  {string}  id      - Context's id.
     * @param  {object?} options - #getContext params to override (optional)
     * @return {WebGLRenderingContext}
     */
  }, {
    key: "createWebGLContext",
    value: function createWebGLContext(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canvas = (options === null || options === void 0 ? void 0 : options.canvas) || this.createCanvas(id, options);
      if (options.hidden) canvas.remove();
      var contextOptions = index._objectSpread2({
        preserveDrawingBuffer: false,
        antialias: false
      }, options);
      var context;

      // First we try webgl2 for an easy performance boost
      context = canvas.getContext("webgl2", contextOptions);

      // Else we fall back to webgl
      if (!context) context = canvas.getContext("webgl", contextOptions);

      // Edge, I am looking right at you...
      if (!context) context = canvas.getContext("experimental-webgl", contextOptions);
      var gl = context;
      this.webGLContexts[id] = gl;

      // Blending:
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      // Prepare frame buffer for picking layers:
      if (options.picking) {
        this.pickingLayers.add(id);
        var newFrameBuffer = gl.createFramebuffer();
        if (!newFrameBuffer) throw new Error("Sigma: cannot create a new frame buffer for layer ".concat(id));
        this.frameBuffers[id] = newFrameBuffer;
      }
      return gl;
    }

    /**
     * Function used to properly kill a layer.
     *
     * @param  {string} id - Layer id.
     * @return {Sigma}
     */
  }, {
    key: "killLayer",
    value: function killLayer(id) {
      var element = this.elements[id];
      if (!element) throw new Error("Sigma: cannot kill layer ".concat(id, ", which does not exist"));
      if (this.webGLContexts[id]) {
        var _gl$getExtension;
        var gl = this.webGLContexts[id];
        (_gl$getExtension = gl.getExtension("WEBGL_lose_context")) === null || _gl$getExtension === void 0 || _gl$getExtension.loseContext();
        delete this.webGLContexts[id];
      } else if (this.canvasContexts[id]) {
        delete this.canvasContexts[id];
      }

      // Delete layer element
      element.remove();
      delete this.elements[id];
      return this;
    }

    /**
     * Method returning the renderer's camera.
     *
     * @return {Camera}
     */
  }, {
    key: "getCamera",
    value: function getCamera() {
      return this.camera;
    }

    /**
     * Method setting the renderer's camera.
     *
     * @param  {Camera} camera - New camera.
     * @return {Sigma}
     */
  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.unbindCameraHandlers();
      this.camera = camera;
      this.bindCameraHandlers();
    }

    /**
     * Method returning the container DOM element.
     *
     * @return {HTMLElement}
     */
  }, {
    key: "getContainer",
    value: function getContainer() {
      return this.container;
    }

    /**
     * Method returning the renderer's graph.
     *
     * @return {Graph}
     */
  }, {
    key: "getGraph",
    value: function getGraph() {
      return this.graph;
    }

    /**
     * Method used to set the renderer's graph.
     *
     * @return {Graph}
     */
  }, {
    key: "setGraph",
    value: function setGraph(graph) {
      if (graph === this.graph) return;

      // Check hoveredNode and hoveredEdge
      if (this.hoveredNode && !graph.hasNode(this.hoveredNode)) this.hoveredNode = null;
      if (this.hoveredEdge && !graph.hasEdge(this.hoveredEdge)) this.hoveredEdge = null;

      // Unbinding handlers on the current graph
      this.unbindGraphHandlers();
      if (this.checkEdgesEventsFrame !== null) {
        cancelAnimationFrame(this.checkEdgesEventsFrame);
        this.checkEdgesEventsFrame = null;
      }

      // Installing new graph
      this.graph = graph;

      // Binding new handlers
      this.bindGraphHandlers();

      // Re-rendering now to avoid discrepancies from now to next frame
      this.refresh();
    }

    /**
     * Method returning the mouse captor.
     *
     * @return {MouseCaptor}
     */
  }, {
    key: "getMouseCaptor",
    value: function getMouseCaptor() {
      return this.mouseCaptor;
    }

    /**
     * Method returning the touch captor.
     *
     * @return {TouchCaptor}
     */
  }, {
    key: "getTouchCaptor",
    value: function getTouchCaptor() {
      return this.touchCaptor;
    }

    /**
     * Method returning the current renderer's dimensions.
     *
     * @return {Dimensions}
     */
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return {
        width: this.width,
        height: this.height
      };
    }

    /**
     * Method returning the current graph's dimensions.
     *
     * @return {Dimensions}
     */
  }, {
    key: "getGraphDimensions",
    value: function getGraphDimensions() {
      var extent = this.customBBox || this.nodeExtent;
      return {
        width: extent.x[1] - extent.x[0] || 1,
        height: extent.y[1] - extent.y[0] || 1
      };
    }

    /**
     * Method used to get all the sigma node attributes.
     * It's useful for example to get the position of a node
     * and to get values that are set by the nodeReducer
     *
     * @param  {string} key - The node's key.
     * @return {NodeDisplayData | undefined} A copy of the desired node's attribute or undefined if not found
     */
  }, {
    key: "getNodeDisplayData",
    value: function getNodeDisplayData(key) {
      var node = this.nodeDataCache[key];
      return node ? Object.assign({}, node) : undefined;
    }

    /**
     * Method used to get all the sigma edge attributes.
     * It's useful for example to get values that are set by the edgeReducer.
     *
     * @param  {string} key - The edge's key.
     * @return {EdgeDisplayData | undefined} A copy of the desired edge's attribute or undefined if not found
     */
  }, {
    key: "getEdgeDisplayData",
    value: function getEdgeDisplayData(key) {
      var edge = this.edgeDataCache[key];
      return edge ? Object.assign({}, edge) : undefined;
    }

    /**
     * Method used to get the set of currently displayed node labels.
     *
     * @return {Set<string>} A set of node keys whose label is displayed.
     */
  }, {
    key: "getNodeDisplayedLabels",
    value: function getNodeDisplayedLabels() {
      return new Set(this.displayedNodeLabels);
    }

    /**
     * Method used to get the set of currently displayed edge labels.
     *
     * @return {Set<string>} A set of edge keys whose label is displayed.
     */
  }, {
    key: "getEdgeDisplayedLabels",
    value: function getEdgeDisplayedLabels() {
      return new Set(this.displayedEdgeLabels);
    }

    /**
     * Method returning a copy of the settings collection.
     *
     * @return {Settings} A copy of the settings collection.
     */
  }, {
    key: "getSettings",
    value: function getSettings() {
      return index._objectSpread2({}, this.settings);
    }

    /**
     * Method returning the current value for a given setting key.
     *
     * @param  {string} key - The setting key to get.
     * @return {any} The value attached to this setting key or undefined if not found
     */
  }, {
    key: "getSetting",
    value: function getSetting(key) {
      return this.settings[key];
    }

    /**
     * Method setting the value of a given setting key. Note that this will schedule
     * a new render next frame.
     *
     * @param  {string} key - The setting key to set.
     * @param  {any}    value - The value to set.
     * @return {Sigma}
     */
  }, {
    key: "setSetting",
    value: function setSetting(key, value) {
      var oldValues = index._objectSpread2({}, this.settings);
      this.settings[key] = value;
      settings_dist_sigmaSettings.validateSettings(this.settings);
      this.handleSettingsUpdate(oldValues);
      this.scheduleRefresh();
      return this;
    }

    /**
     * Method updating the value of a given setting key using the provided function.
     * Note that this will schedule a new render next frame.
     *
     * @param  {string}   key     - The setting key to set.
     * @param  {function} updater - The update function.
     * @return {Sigma}
     */
  }, {
    key: "updateSetting",
    value: function updateSetting(key, updater) {
      this.setSetting(key, updater(this.settings[key]));
      return this;
    }

    /**
     * Method setting multiple settings at once.
     *
     * @param  {Partial<Settings>} settings - The settings to set.
     * @return {Sigma}
     */
  }, {
    key: "setSettings",
    value: function setSettings(settings) {
      var oldValues = index._objectSpread2({}, this.settings);
      this.settings = index._objectSpread2(index._objectSpread2({}, this.settings), settings);
      settings_dist_sigmaSettings.validateSettings(this.settings);
      this.handleSettingsUpdate(oldValues);
      this.scheduleRefresh();
      return this;
    }

    /**
     * Method used to resize the renderer.
     *
     * @param  {boolean} force - If true, then resize is processed even if size is unchanged (optional).
     * @return {Sigma}
     */
  }, {
    key: "resize",
    value: function resize(force) {
      var previousWidth = this.width,
        previousHeight = this.height;
      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
      this.pixelRatio = normalization.getPixelRatio();
      if (this.width === 0) {
        if (this.settings.allowInvalidContainer) this.width = 1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      }
      if (this.height === 0) {
        if (this.settings.allowInvalidContainer) this.height = 1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      }

      // If nothing has changed, we can stop right here
      if (!force && previousWidth === this.width && previousHeight === this.height) return this;

      // Sizing dom elements
      for (var id in this.elements) {
        var element = this.elements[id];
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
      }

      // Sizing canvas contexts
      for (var _id in this.canvasContexts) {
        this.elements[_id].setAttribute("width", this.width * this.pixelRatio + "px");
        this.elements[_id].setAttribute("height", this.height * this.pixelRatio + "px");
        if (this.pixelRatio !== 1) this.canvasContexts[_id].scale(this.pixelRatio, this.pixelRatio);
      }

      // Sizing WebGL contexts
      for (var _id2 in this.webGLContexts) {
        this.elements[_id2].setAttribute("width", this.width * this.pixelRatio + "px");
        this.elements[_id2].setAttribute("height", this.height * this.pixelRatio + "px");
        var gl = this.webGLContexts[_id2];
        gl.viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio);

        // Clear picking texture if needed
        if (this.pickingLayers.has(_id2)) {
          var currentTexture = this.textures[_id2];
          if (currentTexture) gl.deleteTexture(currentTexture);
        }
      }
      this.emit("resize");
      return this;
    }

    /**
     * Method used to clear all the canvases.
     *
     * @return {Sigma}
     */
  }, {
    key: "clear",
    value: function clear() {
      this.emit("beforeClear");
      this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
      this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
      this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.canvasContexts.labels.clearRect(0, 0, this.width, this.height);
      this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height);
      this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height);
      this.emit("afterClear");
      return this;
    }

    /**
     * Method used to refresh, i.e. force the renderer to reprocess graph
     * data and render, but keep the state.
     * - if a partialGraph is provided, we only reprocess those nodes & edges.
     * - if schedule is TRUE, we schedule a render instead of sync render
     * - if skipIndexation is TRUE, then labelGrid & program indexation are skipped (can be used if you haven't modify x, y, zIndex & size)
     *
     * @return {Sigma}
     */
  }, {
    key: "refresh",
    value: function refresh(opts) {
      var _this10 = this;
      var skipIndexation = (opts === null || opts === void 0 ? void 0 : opts.skipIndexation) !== undefined ? opts === null || opts === void 0 ? void 0 : opts.skipIndexation : false;
      var schedule = (opts === null || opts === void 0 ? void 0 : opts.schedule) !== undefined ? opts.schedule : false;
      var fullRefresh = !opts || !opts.partialGraph;
      if (fullRefresh) {
        // Re-index graph data
        this.clearEdgeIndices();
        this.clearNodeIndices();
        this.graph.forEachNode(function (node) {
          return _this10.addNode(node);
        });
        this.graph.forEachEdge(function (edge) {
          return _this10.addEdge(edge);
        });
      } else {
        var _opts$partialGraph, _opts$partialGraph2;
        var nodes = ((_opts$partialGraph = opts.partialGraph) === null || _opts$partialGraph === void 0 ? void 0 : _opts$partialGraph.nodes) || [];
        for (var i = 0, l = (nodes === null || nodes === void 0 ? void 0 : nodes.length) || 0; i < l; i++) {
          var node = nodes[i];
          // Recompute node's data (ie. apply reducer)
          this.updateNode(node);
          // Add node to the program if layout is unchanged.
          // otherwise it will be done in the process function
          if (skipIndexation) {
            var programIndex = this.nodeProgramIndex[node];
            if (programIndex === undefined) throw new Error("Sigma: node \"".concat(node, "\" can't be repaint"));
            this.addNodeToProgram(node, this.nodeIndices[node], programIndex);
          }
        }
        var edges = (opts === null || opts === void 0 || (_opts$partialGraph2 = opts.partialGraph) === null || _opts$partialGraph2 === void 0 ? void 0 : _opts$partialGraph2.edges) || [];
        for (var _i4 = 0, _l4 = edges.length; _i4 < _l4; _i4++) {
          var edge = edges[_i4];
          // Recompute edge's data (ie. apply reducer)
          this.updateEdge(edge);
          // Add edge to the program
          // otherwise it will be done in the process function
          if (skipIndexation) {
            var _programIndex = this.edgeProgramIndex[edge];
            if (_programIndex === undefined) throw new Error("Sigma: edge \"".concat(edge, "\" can't be repaint"));
            this.addEdgeToProgram(edge, this.edgeIndices[edge], _programIndex);
          }
        }
      }

      // Do we need to call the process function ?
      if (fullRefresh || !skipIndexation) this.needToProcess = true;
      if (schedule) this.scheduleRender();else this.render();
      return this;
    }

    /**
     * Method used to schedule a render at the next available frame.
     * This method can be safely called on a same frame because it basically
     * debounces refresh to the next frame.
     *
     * @return {Sigma}
     */
  }, {
    key: "scheduleRender",
    value: function scheduleRender() {
      var _this11 = this;
      if (!this.renderFrame) {
        this.renderFrame = requestAnimationFrame(function () {
          _this11.render();
        });
      }
      return this;
    }

    /**
     * Method used to schedule a refresh (i.e. fully reprocess graph data and render)
     * at the next available frame.
     * This method can be safely called on a same frame because it basically
     * debounces refresh to the next frame.
     *
     * @return {Sigma}
     */
  }, {
    key: "scheduleRefresh",
    value: function scheduleRefresh(opts) {
      return this.refresh(index._objectSpread2(index._objectSpread2({}, opts), {}, {
        schedule: true
      }));
    }

    /**
     * Method used to (un)zoom, while preserving the position of a viewport point.
     * Used for instance to zoom "on the mouse cursor".
     *
     * @param viewportTarget
     * @param newRatio
     * @return {CameraState}
     */
  }, {
    key: "getViewportZoomedState",
    value: function getViewportZoomedState(viewportTarget, newRatio) {
      var _this$camera$getState = this.camera.getState(),
        ratio = _this$camera$getState.ratio,
        angle = _this$camera$getState.angle,
        x = _this$camera$getState.x,
        y = _this$camera$getState.y;
      var _this$settings2 = this.settings,
        minCameraRatio = _this$settings2.minCameraRatio,
        maxCameraRatio = _this$settings2.maxCameraRatio;
      if (typeof maxCameraRatio === "number") newRatio = Math.min(newRatio, maxCameraRatio);
      if (typeof minCameraRatio === "number") newRatio = Math.max(newRatio, minCameraRatio);
      var ratioDiff = newRatio / ratio;
      var center = {
        x: this.width / 2,
        y: this.height / 2
      };
      var graphMousePosition = this.viewportToFramedGraph(viewportTarget);
      var graphCenterPosition = this.viewportToFramedGraph(center);
      return {
        angle: angle,
        x: (graphMousePosition.x - graphCenterPosition.x) * (1 - ratioDiff) + x,
        y: (graphMousePosition.y - graphCenterPosition.y) * (1 - ratioDiff) + y,
        ratio: newRatio
      };
    }

    /**
     * Method returning the abstract rectangle containing the graph according
     * to the camera's state.
     *
     * @return {object} - The view's rectangle.
     */
  }, {
    key: "viewRectangle",
    value: function viewRectangle() {
      var p1 = this.viewportToFramedGraph({
          x: 0,
          y: 0
        }),
        p2 = this.viewportToFramedGraph({
          x: this.width,
          y: 0
        }),
        h = this.viewportToFramedGraph({
          x: 0,
          y: this.height
        });
      return {
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        height: p2.y - h.y
      };
    }

    /**
     * Method returning the coordinates of a point from the framed graph system to the viewport system. It allows
     * overriding anything that is used to get the translation matrix, or even the matrix itself.
     *
     * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
     * of computations.
     */
  }, {
    key: "framedGraphToViewport",
    value: function framedGraphToViewport(coordinates) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !!override.graphDimensions;
      var matrix = override.matrix ? override.matrix : recomputeMatrix ? normalization.matrixFromCamera(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getStagePadding()) : this.matrix;
      var viewportPos = normalization.multiplyVec2(matrix, coordinates);
      return {
        x: (1 + viewportPos.x) * this.width / 2,
        y: (1 - viewportPos.y) * this.height / 2
      };
    }

    /**
     * Method returning the coordinates of a point from the viewport system to the framed graph system. It allows
     * overriding anything that is used to get the translation matrix, or even the matrix itself.
     *
     * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
     * of computations.
     */
  }, {
    key: "viewportToFramedGraph",
    value: function viewportToFramedGraph(coordinates) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !override.graphDimensions;
      var invMatrix = override.matrix ? override.matrix : recomputeMatrix ? normalization.matrixFromCamera(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getStagePadding(), true) : this.invMatrix;
      var res = normalization.multiplyVec2(invMatrix, {
        x: coordinates.x / this.width * 2 - 1,
        y: 1 - coordinates.y / this.height * 2
      });
      if (isNaN(res.x)) res.x = 0;
      if (isNaN(res.y)) res.y = 0;
      return res;
    }

    /**
     * Method used to translate a point's coordinates from the viewport system (pixel distance from the top-left of the
     * stage) to the graph system (the reference system of data as they are in the given graph instance).
     *
     * This method accepts an optional camera which can be useful if you need to translate coordinates
     * based on a different view than the one being currently being displayed on screen.
     *
     * @param {Coordinates}                  viewportPoint
     * @param {CoordinateConversionOverride} override
     */
  }, {
    key: "viewportToGraph",
    value: function viewportToGraph(viewportPoint) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.normalizationFunction.inverse(this.viewportToFramedGraph(viewportPoint, override));
    }

    /**
     * Method used to translate a point's coordinates from the graph system (the reference system of data as they are in
     * the given graph instance) to the viewport system (pixel distance from the top-left of the stage).
     *
     * This method accepts an optional camera which can be useful if you need to translate coordinates
     * based on a different view than the one being currently being displayed on screen.
     *
     * @param {Coordinates}                  graphPoint
     * @param {CoordinateConversionOverride} override
     */
  }, {
    key: "graphToViewport",
    value: function graphToViewport(graphPoint) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.framedGraphToViewport(this.normalizationFunction(graphPoint), override);
    }

    /**
     * Method returning the distance multiplier between the graph system and the
     * viewport system.
     */
  }, {
    key: "getGraphToViewportRatio",
    value: function getGraphToViewportRatio() {
      var graphP1 = {
        x: 0,
        y: 0
      };
      var graphP2 = {
        x: 1,
        y: 1
      };
      var graphD = Math.sqrt(Math.pow(graphP1.x - graphP2.x, 2) + Math.pow(graphP1.y - graphP2.y, 2));
      var viewportP1 = this.graphToViewport(graphP1);
      var viewportP2 = this.graphToViewport(graphP2);
      var viewportD = Math.sqrt(Math.pow(viewportP1.x - viewportP2.x, 2) + Math.pow(viewportP1.y - viewportP2.y, 2));
      return viewportD / graphD;
    }

    /**
     * Method returning the graph's bounding box.
     *
     * @return {{ x: Extent, y: Extent }}
     */
  }, {
    key: "getBBox",
    value: function getBBox() {
      return this.nodeExtent;
    }

    /**
     * Method returning the graph's custom bounding box, if any.
     *
     * @return {{ x: Extent, y: Extent } | null}
     */
  }, {
    key: "getCustomBBox",
    value: function getCustomBBox() {
      return this.customBBox;
    }

    /**
     * Method used to override the graph's bounding box with a custom one. Give `null` as the argument to stop overriding.
     *
     * @return {Sigma}
     */
  }, {
    key: "setCustomBBox",
    value: function setCustomBBox(customBBox) {
      this.customBBox = customBBox;
      this.scheduleRender();
      return this;
    }

    /**
     * Method used to shut the container & release event listeners.
     *
     * @return {undefined}
     */
  }, {
    key: "kill",
    value: function kill() {
      // Emitting "kill" events so that plugins and such can cleanup
      this.emit("kill");

      // Releasing events
      this.removeAllListeners();

      // Releasing camera handlers
      this.unbindCameraHandlers();

      // Releasing DOM events & captors
      window.removeEventListener("resize", this.activeListeners.handleResize);
      this.mouseCaptor.kill();
      this.touchCaptor.kill();

      // Releasing graph handlers
      this.unbindGraphHandlers();

      // Releasing cache & state
      this.clearIndices();
      this.clearState();
      this.nodeDataCache = {};
      this.edgeDataCache = {};
      this.highlightedNodes.clear();

      // Clearing frames
      if (this.renderFrame) {
        cancelAnimationFrame(this.renderFrame);
        this.renderFrame = null;
      }
      if (this.renderHighlightedNodesFrame) {
        cancelAnimationFrame(this.renderHighlightedNodesFrame);
        this.renderHighlightedNodesFrame = null;
      }

      // Destroying canvases
      var container = this.container;
      while (container.firstChild) container.removeChild(container.firstChild);

      // Destroying remaining collections
      this.canvasContexts = {};
      this.webGLContexts = {};
      this.elements = {};

      // Kill programs:
      for (var type in this.nodePrograms) {
        this.nodePrograms[type].kill();
      }
      for (var _type8 in this.nodeHoverPrograms) {
        this.nodeHoverPrograms[_type8].kill();
      }
      for (var _type9 in this.edgePrograms) {
        this.edgePrograms[_type9].kill();
      }
      this.nodePrograms = {};
      this.nodeHoverPrograms = {};
      this.edgePrograms = {};

      // Kill all canvas/WebGL contexts
      for (var id in this.elements) {
        this.killLayer(id);
      }
    }

    /**
     * Method used to scale the given size according to the camera's ratio, i.e.
     * zooming state.
     *
     * @param  {number?} size -        The size to scale (node size, edge thickness etc.).
     * @param  {number?} cameraRatio - A camera ratio (defaults to the actual camera ratio).
     * @return {number}              - The scaled size.
     */
  }, {
    key: "scaleSize",
    value: function scaleSize() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var cameraRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.camera.ratio;
      return size / this.settings.zoomToSizeRatioFunction(cameraRatio) * (this.getSetting("itemSizesReference") === "positions" ? cameraRatio * this.graphToViewportRatio : 1);
    }

    /**
     * Method that returns the collection of all used canvases.
     * At the moment, the instantiated canvases are the following, and in the
     * following order in the DOM:
     * - `edges`
     * - `nodes`
     * - `edgeLabels`
     * - `labels`
     * - `hovers`
     * - `hoverNodes`
     * - `mouse`
     *
     * @return {PlainObject<HTMLCanvasElement>} - The collection of canvases.
     */
  }, {
    key: "getCanvases",
    value: function getCanvases() {
      var res = {};
      for (var layer in this.elements) if (this.elements[layer] instanceof HTMLCanvasElement) res[layer] = this.elements[layer];
      return res;
    }
  }]);
}(types_dist_sigmaTypes.TypedEventEmitter);

/**
 * Sigma.js Library Endpoint
 * =========================
 *
 * The library endpoint.
 * @module
 */
var Sigma = Sigma$1;

exports.Camera = Camera;
exports.MouseCaptor = MouseCaptor;
exports.Sigma = Sigma$1;
exports.TouchCaptor = TouchCaptor;
exports["default"] = Sigma;

},{"../settings/dist/sigma-settings.cjs.prod.js":34,"../types/dist/sigma-types.cjs.prod.js":36,"./colors-ee2e2828.cjs.prod.js":17,"./data-881001cd.cjs.prod.js":20,"./index-16136237.cjs.prod.js":21,"./inherits-6434e089.cjs.prod.js":24,"./normalization-aed467cc.cjs.prod.js":26,"events":5,"graphology-utils/is-graph":14}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../../dist/index-88310d0d.cjs.dev.js');
var inherits = require('../../dist/inherits-04acba6b.cjs.dev.js');
var colors = require('../../dist/colors-fe6de9d2.cjs.dev.js');

// language=GLSL
var SHADER_SOURCE$6 = /*glsl*/"\nprecision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float radius = 0.5;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = radius - length(m);\n\n  // No antialiasing for picking mode:\n  #ifdef PICKING_MODE\n  if (dist > v_border)\n    gl_FragColor = v_color;\n  else\n    gl_FragColor = transparent;\n\n  #else\n  float t = 0.0;\n  if (dist > v_border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / v_border;\n\n  gl_FragColor = mix(transparent, v_color, t);\n  #endif\n}\n";
var FRAGMENT_SHADER_SOURCE$2 = SHADER_SOURCE$6;

// language=GLSL
var SHADER_SOURCE$5 = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_position;\nattribute float a_size;\n\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size / u_sizeRatio * u_pixelRatio * 2.0;\n\n  v_border = (0.5 / a_size) * u_sizeRatio;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$3 = SHADER_SOURCE$5;

var _WebGLRenderingContex$3 = WebGLRenderingContext,
  UNSIGNED_BYTE$3 = _WebGLRenderingContex$3.UNSIGNED_BYTE,
  FLOAT$3 = _WebGLRenderingContex$3.FLOAT;
var UNIFORMS$3 = ["u_sizeRatio", "u_pixelRatio", "u_matrix"];
var NodePointProgram = /*#__PURE__*/function (_NodeProgram) {
  function NodePointProgram() {
    inherits._classCallCheck(this, NodePointProgram);
    return inherits._callSuper(this, NodePointProgram, arguments);
  }
  inherits._inherits(NodePointProgram, _NodeProgram);
  return inherits._createClass(NodePointProgram, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 1,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$3,
        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$2,
        METHOD: WebGLRenderingContext.POINTS,
        UNIFORMS: UNIFORMS$3,
        ATTRIBUTES: [{
          name: "a_position",
          size: 2,
          type: FLOAT$3
        }, {
          name: "a_size",
          size: 1,
          type: FLOAT$3
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE$3,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE$3,
          normalized: true
        }]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(nodeIndex, startIndex, data) {
      var array = this.array;
      array[startIndex++] = data.x;
      array[startIndex++] = data.y;
      array[startIndex++] = data.size;
      array[startIndex++] = colors.floatColor(data.color);
      array[startIndex++] = nodeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(_ref, _ref2) {
      var sizeRatio = _ref.sizeRatio,
        pixelRatio = _ref.pixelRatio,
        matrix = _ref.matrix;
      var gl = _ref2.gl,
        uniformLocations = _ref2.uniformLocations;
      var u_sizeRatio = uniformLocations.u_sizeRatio,
        u_pixelRatio = uniformLocations.u_pixelRatio,
        u_matrix = uniformLocations.u_matrix;
      gl.uniform1f(u_pixelRatio, pixelRatio);
      gl.uniform1f(u_sizeRatio, sizeRatio);
      gl.uniformMatrix3fv(u_matrix, false, matrix);
    }
  }]);
}(index.NodeProgram);

// language=GLSL
var SHADER_SOURCE$4 = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\nattribute float a_sourceRadius;\nattribute float a_targetRadius;\nattribute float a_sourceRadiusCoef;\nattribute float a_targetRadiusCoef;\n\nuniform mat3 u_matrix;\nuniform float u_zoomRatio;\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_lengthToThicknessRatio;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here, we move the point to leave space for the arrow heads:\n  // Source arrow head\n  float sourceRadius = a_sourceRadius * a_sourceRadiusCoef;\n  float sourceDirection = sign(sourceRadius);\n  float webGLSourceRadius = sourceDirection * sourceRadius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLSourceArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n  vec2 sourceCompensationVector =\n    vec2(-sourceDirection * unitNormal.y, sourceDirection * unitNormal.x)\n    * (webGLSourceRadius + webGLSourceArrowHeadLength);\n    \n  // Target arrow head\n  float targetRadius = a_targetRadius * a_targetRadiusCoef;\n  float targetDirection = sign(targetRadius);\n  float webGLTargetRadius = targetDirection * targetRadius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLTargetArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n  vec2 targetCompensationVector =\n  vec2(-targetDirection * unitNormal.y, targetDirection * unitNormal.x)\n    * (webGLTargetRadius + webGLTargetArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + sourceCompensationVector + targetCompensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$2 = SHADER_SOURCE$4;

var _WebGLRenderingContex$2 = WebGLRenderingContext,
  UNSIGNED_BYTE$2 = _WebGLRenderingContex$2.UNSIGNED_BYTE,
  FLOAT$2 = _WebGLRenderingContex$2.FLOAT;
var UNIFORMS$2 = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness", "u_lengthToThicknessRatio"];
var DEFAULT_EDGE_DOUBLE_CLAMPED_PROGRAM_OPTIONS = {
  lengthToThicknessRatio: index.DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS.lengthToThicknessRatio
};
function createEdgeDoubleClampedProgram(inputOptions) {
  var options = index._objectSpread2(index._objectSpread2({}, DEFAULT_EDGE_DOUBLE_CLAMPED_PROGRAM_OPTIONS), inputOptions || {});
  return /*#__PURE__*/function (_EdgeProgram) {
    function EdgeDoubleClampedProgram() {
      inherits._classCallCheck(this, EdgeDoubleClampedProgram);
      return inherits._callSuper(this, EdgeDoubleClampedProgram, arguments);
    }
    inherits._inherits(EdgeDoubleClampedProgram, _EdgeProgram);
    return inherits._createClass(EdgeDoubleClampedProgram, [{
      key: "getDefinition",
      value: function getDefinition() {
        return {
          VERTICES: 6,
          VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$2,
          FRAGMENT_SHADER_SOURCE: index.FRAGMENT_SHADER_SOURCE,
          METHOD: WebGLRenderingContext.TRIANGLES,
          UNIFORMS: UNIFORMS$2,
          ATTRIBUTES: [{
            name: "a_positionStart",
            size: 2,
            type: FLOAT$2
          }, {
            name: "a_positionEnd",
            size: 2,
            type: FLOAT$2
          }, {
            name: "a_normal",
            size: 2,
            type: FLOAT$2
          }, {
            name: "a_color",
            size: 4,
            type: UNSIGNED_BYTE$2,
            normalized: true
          }, {
            name: "a_id",
            size: 4,
            type: UNSIGNED_BYTE$2,
            normalized: true
          }, {
            name: "a_sourceRadius",
            size: 1,
            type: FLOAT$2
          }, {
            name: "a_targetRadius",
            size: 1,
            type: FLOAT$2
          }],
          CONSTANT_ATTRIBUTES: [
          // If 0, then position will be a_positionStart
          // If 1, then position will be a_positionEnd
          {
            name: "a_positionCoef",
            size: 1,
            type: FLOAT$2
          }, {
            name: "a_normalCoef",
            size: 1,
            type: FLOAT$2
          }, {
            name: "a_sourceRadiusCoef",
            size: 1,
            type: FLOAT$2
          }, {
            name: "a_targetRadiusCoef",
            size: 1,
            type: FLOAT$2
          }],
          CONSTANT_DATA: [[0, 1, -1, 0], [0, -1, 1, 0], [1, 1, 0, 1], [1, 1, 0, 1], [0, -1, 1, 0], [1, -1, 0, -1]]
        };
      }
    }, {
      key: "processVisibleItem",
      value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
        var thickness = data.size || 1;
        var x1 = sourceData.x;
        var y1 = sourceData.y;
        var x2 = targetData.x;
        var y2 = targetData.y;
        var color = colors.floatColor(data.color);

        // Computing normals
        var dx = x2 - x1;
        var dy = y2 - y1;
        var sourceRadius = sourceData.size || 1;
        var targetRadius = targetData.size || 1;
        var len = dx * dx + dy * dy;
        var n1 = 0;
        var n2 = 0;
        if (len) {
          len = 1 / Math.sqrt(len);
          n1 = -dy * len * thickness;
          n2 = dx * len * thickness;
        }
        var array = this.array;
        array[startIndex++] = x1;
        array[startIndex++] = y1;
        array[startIndex++] = x2;
        array[startIndex++] = y2;
        array[startIndex++] = n1;
        array[startIndex++] = n2;
        array[startIndex++] = color;
        array[startIndex++] = edgeIndex;
        array[startIndex++] = sourceRadius;
        array[startIndex++] = targetRadius;
      }
    }, {
      key: "setUniforms",
      value: function setUniforms(params, _ref) {
        var gl = _ref.gl,
          uniformLocations = _ref.uniformLocations;
        var u_matrix = uniformLocations.u_matrix,
          u_zoomRatio = uniformLocations.u_zoomRatio,
          u_feather = uniformLocations.u_feather,
          u_pixelRatio = uniformLocations.u_pixelRatio,
          u_correctionRatio = uniformLocations.u_correctionRatio,
          u_sizeRatio = uniformLocations.u_sizeRatio,
          u_minEdgeThickness = uniformLocations.u_minEdgeThickness,
          u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio;
        gl.uniformMatrix3fv(u_matrix, false, params.matrix);
        gl.uniform1f(u_zoomRatio, params.zoomRatio);
        gl.uniform1f(u_sizeRatio, params.sizeRatio);
        gl.uniform1f(u_correctionRatio, params.correctionRatio);
        gl.uniform1f(u_pixelRatio, params.pixelRatio);
        gl.uniform1f(u_feather, params.antiAliasingFeather);
        gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
        gl.uniform1f(u_lengthToThicknessRatio, options.lengthToThicknessRatio);
      }
    }]);
  }(index.EdgeProgram);
}
var EdgeDoubleClampedProgram = createEdgeDoubleClampedProgram();
var EdgeDoubleClampedProgram$1 = EdgeDoubleClampedProgram;

function createEdgeDoubleArrowProgram(inputOptions) {
  return index.createEdgeCompoundProgram([createEdgeDoubleClampedProgram(inputOptions), index.createEdgeArrowHeadProgram(inputOptions), index.createEdgeArrowHeadProgram(index._objectSpread2(index._objectSpread2({}, inputOptions), {}, {
    extremity: "source"
  }))]);
}
var EdgeDoubleArrowProgram = createEdgeDoubleArrowProgram();
var EdgeDoubleArrowProgram$1 = EdgeDoubleArrowProgram;

// language=GLSL
var SHADER_SOURCE$3 = /*glsl*/"\nprecision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
var FRAGMENT_SHADER_SOURCE$1 = SHADER_SOURCE$3;

// language=GLSL
var SHADER_SOURCE$2 = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_position;\n\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  // Scale from [[-1 1] [-1 1]] to the container:\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$1 = SHADER_SOURCE$2;

var _WebGLRenderingContex$1 = WebGLRenderingContext,
  UNSIGNED_BYTE$1 = _WebGLRenderingContex$1.UNSIGNED_BYTE,
  FLOAT$1 = _WebGLRenderingContex$1.FLOAT;
var UNIFORMS$1 = ["u_matrix"];
var EdgeLineProgram = /*#__PURE__*/function (_EdgeProgram) {
  function EdgeLineProgram() {
    inherits._classCallCheck(this, EdgeLineProgram);
    return inherits._callSuper(this, EdgeLineProgram, arguments);
  }
  inherits._inherits(EdgeLineProgram, _EdgeProgram);
  return inherits._createClass(EdgeLineProgram, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 2,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$1,
        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$1,
        METHOD: WebGLRenderingContext.LINES,
        UNIFORMS: UNIFORMS$1,
        ATTRIBUTES: [{
          name: "a_position",
          size: 2,
          type: FLOAT$1
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE$1,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE$1,
          normalized: true
        }]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
      var array = this.array;
      var x1 = sourceData.x;
      var y1 = sourceData.y;
      var x2 = targetData.x;
      var y2 = targetData.y;
      var color = colors.floatColor(data.color);

      // First point
      array[startIndex++] = x1;
      array[startIndex++] = y1;
      array[startIndex++] = color;
      array[startIndex++] = edgeIndex;

      // Second point
      array[startIndex++] = x2;
      array[startIndex++] = y2;
      array[startIndex++] = color;
      array[startIndex++] = edgeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(params, _ref) {
      var gl = _ref.gl,
        uniformLocations = _ref.uniformLocations;
      var u_matrix = uniformLocations.u_matrix;
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
    }
  }]);
}(index.EdgeProgram);

// language=GLSL
var SHADER_SOURCE$1 = /*glsl*/"\nprecision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
var FRAGMENT_SHADER_SOURCE = SHADER_SOURCE$1;

// language=GLSL
var SHADER_SOURCE = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  // The only different here with edge.vert.glsl is that we need to handle null\n  // input normal vector. Apart from that, you can read edge.vert.glsl more info\n  // on how it works:\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n  if (normalLength <= 0.0) unitNormal = normal;\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness, 1)).xy, 0, 1);\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE = SHADER_SOURCE;

var _WebGLRenderingContex = WebGLRenderingContext,
  UNSIGNED_BYTE = _WebGLRenderingContex.UNSIGNED_BYTE,
  FLOAT = _WebGLRenderingContex.FLOAT;
var UNIFORMS = ["u_matrix", "u_sizeRatio", "u_correctionRatio", "u_minEdgeThickness"];
var EdgeTriangleProgram = /*#__PURE__*/function (_EdgeProgram) {
  function EdgeTriangleProgram() {
    inherits._classCallCheck(this, EdgeTriangleProgram);
    return inherits._callSuper(this, EdgeTriangleProgram, arguments);
  }
  inherits._inherits(EdgeTriangleProgram, _EdgeProgram);
  return inherits._createClass(EdgeTriangleProgram, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 3,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE,
        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE,
        METHOD: WebGLRenderingContext.TRIANGLES,
        UNIFORMS: UNIFORMS,
        ATTRIBUTES: [{
          name: "a_positionStart",
          size: 2,
          type: FLOAT
        }, {
          name: "a_positionEnd",
          size: 2,
          type: FLOAT
        }, {
          name: "a_normal",
          size: 2,
          type: FLOAT
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE,
          normalized: true
        }],
        CONSTANT_ATTRIBUTES: [
        // If 0, then position will be a_positionStart
        // If 1, then position will be a_positionEnd
        {
          name: "a_positionCoef",
          size: 1,
          type: FLOAT
        }, {
          name: "a_normalCoef",
          size: 1,
          type: FLOAT
        }],
        CONSTANT_DATA: [[0, 1], [0, -1], [1, 0]]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
      var thickness = data.size || 1;
      var x1 = sourceData.x;
      var y1 = sourceData.y;
      var x2 = targetData.x;
      var y2 = targetData.y;
      var color = colors.floatColor(data.color);

      // Computing normals
      var dx = x2 - x1;
      var dy = y2 - y1;
      var len = dx * dx + dy * dy;
      var n1 = 0;
      var n2 = 0;
      if (len) {
        len = 1 / Math.sqrt(len);
        n1 = -dy * len * thickness;
        n2 = dx * len * thickness;
      }
      var array = this.array;

      // First point
      array[startIndex++] = x1;
      array[startIndex++] = y1;
      array[startIndex++] = x2;
      array[startIndex++] = y2;
      array[startIndex++] = n1;
      array[startIndex++] = n2;
      array[startIndex++] = color;
      array[startIndex++] = edgeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(params, _ref) {
      var gl = _ref.gl,
        uniformLocations = _ref.uniformLocations;
      var u_matrix = uniformLocations.u_matrix,
        u_sizeRatio = uniformLocations.u_sizeRatio,
        u_correctionRatio = uniformLocations.u_correctionRatio,
        u_minEdgeThickness = uniformLocations.u_minEdgeThickness;
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
    }
  }]);
}(index.EdgeProgram);

exports.AbstractEdgeProgram = index.AbstractEdgeProgram;
exports.AbstractNodeProgram = index.AbstractNodeProgram;
exports.AbstractProgram = index.AbstractProgram;
exports.DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS = index.DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS;
exports.DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS = index.DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS;
exports.EdgeArrowHeadProgram = index.EdgeArrowHeadProgram;
exports.EdgeArrowProgram = index.EdgeArrowProgram;
exports.EdgeClampedProgram = index.EdgeClampedProgram;
exports.EdgeProgram = index.EdgeProgram;
exports.EdgeRectangleProgram = index.EdgeRectangleProgram;
exports.NodeCircleProgram = index.NodeCircleProgram;
exports.NodeProgram = index.NodeProgram;
exports.Program = index.Program;
exports.createEdgeArrowHeadProgram = index.createEdgeArrowHeadProgram;
exports.createEdgeArrowProgram = index.createEdgeArrowProgram;
exports.createEdgeClampedProgram = index.createEdgeClampedProgram;
exports.createEdgeCompoundProgram = index.createEdgeCompoundProgram;
exports.createNodeCompoundProgram = index.createNodeCompoundProgram;
exports.drawDiscNodeHover = index.drawDiscNodeHover;
exports.drawDiscNodeLabel = index.drawDiscNodeLabel;
exports.drawStraightEdgeLabel = index.drawStraightEdgeLabel;
exports.getAttributeItemsCount = index.getAttributeItemsCount;
exports.getAttributesItemsCount = index.getAttributesItemsCount;
exports.killProgram = index.killProgram;
exports.loadFragmentShader = index.loadFragmentShader;
exports.loadProgram = index.loadProgram;
exports.loadVertexShader = index.loadVertexShader;
exports.numberToGLSLFloat = index.numberToGLSLFloat;
exports.DEFAULT_EDGE_DOUBLE_CLAMPED_PROGRAM_OPTIONS = DEFAULT_EDGE_DOUBLE_CLAMPED_PROGRAM_OPTIONS;
exports.EdgeDoubleArrowProgram = EdgeDoubleArrowProgram$1;
exports.EdgeDoubleClampedProgram = EdgeDoubleClampedProgram$1;
exports.EdgeLineProgram = EdgeLineProgram;
exports.EdgeTriangleProgram = EdgeTriangleProgram;
exports.NodePointProgram = NodePointProgram;
exports.createEdgeDoubleArrowProgram = createEdgeDoubleArrowProgram;
exports.createEdgeDoubleClampedProgram = createEdgeDoubleClampedProgram;

},{"../../dist/colors-fe6de9d2.cjs.dev.js":18,"../../dist/index-88310d0d.cjs.dev.js":22,"../../dist/inherits-04acba6b.cjs.dev.js":23}],31:[function(require,module,exports){
(function (process){(function (){
'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./sigma-rendering.cjs.prod.js");
} else {
  module.exports = require("./sigma-rendering.cjs.dev.js");
}

}).call(this)}).call(this,require('_process'))
},{"./sigma-rendering.cjs.dev.js":30,"./sigma-rendering.cjs.prod.js":32,"_process":16}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../../dist/index-16136237.cjs.prod.js');
var inherits = require('../../dist/inherits-6434e089.cjs.prod.js');
var colors = require('../../dist/colors-ee2e2828.cjs.prod.js');

// language=GLSL
var SHADER_SOURCE$6 = /*glsl*/"\nprecision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float radius = 0.5;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = radius - length(m);\n\n  // No antialiasing for picking mode:\n  #ifdef PICKING_MODE\n  if (dist > v_border)\n    gl_FragColor = v_color;\n  else\n    gl_FragColor = transparent;\n\n  #else\n  float t = 0.0;\n  if (dist > v_border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / v_border;\n\n  gl_FragColor = mix(transparent, v_color, t);\n  #endif\n}\n";
var FRAGMENT_SHADER_SOURCE$2 = SHADER_SOURCE$6;

// language=GLSL
var SHADER_SOURCE$5 = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_position;\nattribute float a_size;\n\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size / u_sizeRatio * u_pixelRatio * 2.0;\n\n  v_border = (0.5 / a_size) * u_sizeRatio;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$3 = SHADER_SOURCE$5;

var _WebGLRenderingContex$3 = WebGLRenderingContext,
  UNSIGNED_BYTE$3 = _WebGLRenderingContex$3.UNSIGNED_BYTE,
  FLOAT$3 = _WebGLRenderingContex$3.FLOAT;
var UNIFORMS$3 = ["u_sizeRatio", "u_pixelRatio", "u_matrix"];
var NodePointProgram = /*#__PURE__*/function (_NodeProgram) {
  function NodePointProgram() {
    inherits._classCallCheck(this, NodePointProgram);
    return inherits._callSuper(this, NodePointProgram, arguments);
  }
  inherits._inherits(NodePointProgram, _NodeProgram);
  return inherits._createClass(NodePointProgram, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 1,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$3,
        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$2,
        METHOD: WebGLRenderingContext.POINTS,
        UNIFORMS: UNIFORMS$3,
        ATTRIBUTES: [{
          name: "a_position",
          size: 2,
          type: FLOAT$3
        }, {
          name: "a_size",
          size: 1,
          type: FLOAT$3
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE$3,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE$3,
          normalized: true
        }]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(nodeIndex, startIndex, data) {
      var array = this.array;
      array[startIndex++] = data.x;
      array[startIndex++] = data.y;
      array[startIndex++] = data.size;
      array[startIndex++] = colors.floatColor(data.color);
      array[startIndex++] = nodeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(_ref, _ref2) {
      var sizeRatio = _ref.sizeRatio,
        pixelRatio = _ref.pixelRatio,
        matrix = _ref.matrix;
      var gl = _ref2.gl,
        uniformLocations = _ref2.uniformLocations;
      var u_sizeRatio = uniformLocations.u_sizeRatio,
        u_pixelRatio = uniformLocations.u_pixelRatio,
        u_matrix = uniformLocations.u_matrix;
      gl.uniform1f(u_pixelRatio, pixelRatio);
      gl.uniform1f(u_sizeRatio, sizeRatio);
      gl.uniformMatrix3fv(u_matrix, false, matrix);
    }
  }]);
}(index.NodeProgram);

// language=GLSL
var SHADER_SOURCE$4 = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\nattribute float a_sourceRadius;\nattribute float a_targetRadius;\nattribute float a_sourceRadiusCoef;\nattribute float a_targetRadiusCoef;\n\nuniform mat3 u_matrix;\nuniform float u_zoomRatio;\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_lengthToThicknessRatio;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here, we move the point to leave space for the arrow heads:\n  // Source arrow head\n  float sourceRadius = a_sourceRadius * a_sourceRadiusCoef;\n  float sourceDirection = sign(sourceRadius);\n  float webGLSourceRadius = sourceDirection * sourceRadius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLSourceArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n  vec2 sourceCompensationVector =\n    vec2(-sourceDirection * unitNormal.y, sourceDirection * unitNormal.x)\n    * (webGLSourceRadius + webGLSourceArrowHeadLength);\n    \n  // Target arrow head\n  float targetRadius = a_targetRadius * a_targetRadiusCoef;\n  float targetDirection = sign(targetRadius);\n  float webGLTargetRadius = targetDirection * targetRadius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLTargetArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n  vec2 targetCompensationVector =\n  vec2(-targetDirection * unitNormal.y, targetDirection * unitNormal.x)\n    * (webGLTargetRadius + webGLTargetArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + sourceCompensationVector + targetCompensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$2 = SHADER_SOURCE$4;

var _WebGLRenderingContex$2 = WebGLRenderingContext,
  UNSIGNED_BYTE$2 = _WebGLRenderingContex$2.UNSIGNED_BYTE,
  FLOAT$2 = _WebGLRenderingContex$2.FLOAT;
var UNIFORMS$2 = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness", "u_lengthToThicknessRatio"];
var DEFAULT_EDGE_DOUBLE_CLAMPED_PROGRAM_OPTIONS = {
  lengthToThicknessRatio: index.DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS.lengthToThicknessRatio
};
function createEdgeDoubleClampedProgram(inputOptions) {
  var options = index._objectSpread2(index._objectSpread2({}, DEFAULT_EDGE_DOUBLE_CLAMPED_PROGRAM_OPTIONS), inputOptions || {});
  return /*#__PURE__*/function (_EdgeProgram) {
    function EdgeDoubleClampedProgram() {
      inherits._classCallCheck(this, EdgeDoubleClampedProgram);
      return inherits._callSuper(this, EdgeDoubleClampedProgram, arguments);
    }
    inherits._inherits(EdgeDoubleClampedProgram, _EdgeProgram);
    return inherits._createClass(EdgeDoubleClampedProgram, [{
      key: "getDefinition",
      value: function getDefinition() {
        return {
          VERTICES: 6,
          VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$2,
          FRAGMENT_SHADER_SOURCE: index.FRAGMENT_SHADER_SOURCE,
          METHOD: WebGLRenderingContext.TRIANGLES,
          UNIFORMS: UNIFORMS$2,
          ATTRIBUTES: [{
            name: "a_positionStart",
            size: 2,
            type: FLOAT$2
          }, {
            name: "a_positionEnd",
            size: 2,
            type: FLOAT$2
          }, {
            name: "a_normal",
            size: 2,
            type: FLOAT$2
          }, {
            name: "a_color",
            size: 4,
            type: UNSIGNED_BYTE$2,
            normalized: true
          }, {
            name: "a_id",
            size: 4,
            type: UNSIGNED_BYTE$2,
            normalized: true
          }, {
            name: "a_sourceRadius",
            size: 1,
            type: FLOAT$2
          }, {
            name: "a_targetRadius",
            size: 1,
            type: FLOAT$2
          }],
          CONSTANT_ATTRIBUTES: [
          // If 0, then position will be a_positionStart
          // If 1, then position will be a_positionEnd
          {
            name: "a_positionCoef",
            size: 1,
            type: FLOAT$2
          }, {
            name: "a_normalCoef",
            size: 1,
            type: FLOAT$2
          }, {
            name: "a_sourceRadiusCoef",
            size: 1,
            type: FLOAT$2
          }, {
            name: "a_targetRadiusCoef",
            size: 1,
            type: FLOAT$2
          }],
          CONSTANT_DATA: [[0, 1, -1, 0], [0, -1, 1, 0], [1, 1, 0, 1], [1, 1, 0, 1], [0, -1, 1, 0], [1, -1, 0, -1]]
        };
      }
    }, {
      key: "processVisibleItem",
      value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
        var thickness = data.size || 1;
        var x1 = sourceData.x;
        var y1 = sourceData.y;
        var x2 = targetData.x;
        var y2 = targetData.y;
        var color = colors.floatColor(data.color);

        // Computing normals
        var dx = x2 - x1;
        var dy = y2 - y1;
        var sourceRadius = sourceData.size || 1;
        var targetRadius = targetData.size || 1;
        var len = dx * dx + dy * dy;
        var n1 = 0;
        var n2 = 0;
        if (len) {
          len = 1 / Math.sqrt(len);
          n1 = -dy * len * thickness;
          n2 = dx * len * thickness;
        }
        var array = this.array;
        array[startIndex++] = x1;
        array[startIndex++] = y1;
        array[startIndex++] = x2;
        array[startIndex++] = y2;
        array[startIndex++] = n1;
        array[startIndex++] = n2;
        array[startIndex++] = color;
        array[startIndex++] = edgeIndex;
        array[startIndex++] = sourceRadius;
        array[startIndex++] = targetRadius;
      }
    }, {
      key: "setUniforms",
      value: function setUniforms(params, _ref) {
        var gl = _ref.gl,
          uniformLocations = _ref.uniformLocations;
        var u_matrix = uniformLocations.u_matrix,
          u_zoomRatio = uniformLocations.u_zoomRatio,
          u_feather = uniformLocations.u_feather,
          u_pixelRatio = uniformLocations.u_pixelRatio,
          u_correctionRatio = uniformLocations.u_correctionRatio,
          u_sizeRatio = uniformLocations.u_sizeRatio,
          u_minEdgeThickness = uniformLocations.u_minEdgeThickness,
          u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio;
        gl.uniformMatrix3fv(u_matrix, false, params.matrix);
        gl.uniform1f(u_zoomRatio, params.zoomRatio);
        gl.uniform1f(u_sizeRatio, params.sizeRatio);
        gl.uniform1f(u_correctionRatio, params.correctionRatio);
        gl.uniform1f(u_pixelRatio, params.pixelRatio);
        gl.uniform1f(u_feather, params.antiAliasingFeather);
        gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
        gl.uniform1f(u_lengthToThicknessRatio, options.lengthToThicknessRatio);
      }
    }]);
  }(index.EdgeProgram);
}
var EdgeDoubleClampedProgram = createEdgeDoubleClampedProgram();
var EdgeDoubleClampedProgram$1 = EdgeDoubleClampedProgram;

function createEdgeDoubleArrowProgram(inputOptions) {
  return index.createEdgeCompoundProgram([createEdgeDoubleClampedProgram(inputOptions), index.createEdgeArrowHeadProgram(inputOptions), index.createEdgeArrowHeadProgram(index._objectSpread2(index._objectSpread2({}, inputOptions), {}, {
    extremity: "source"
  }))]);
}
var EdgeDoubleArrowProgram = createEdgeDoubleArrowProgram();
var EdgeDoubleArrowProgram$1 = EdgeDoubleArrowProgram;

// language=GLSL
var SHADER_SOURCE$3 = /*glsl*/"\nprecision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
var FRAGMENT_SHADER_SOURCE$1 = SHADER_SOURCE$3;

// language=GLSL
var SHADER_SOURCE$2 = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_position;\n\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  // Scale from [[-1 1] [-1 1]] to the container:\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$1 = SHADER_SOURCE$2;

var _WebGLRenderingContex$1 = WebGLRenderingContext,
  UNSIGNED_BYTE$1 = _WebGLRenderingContex$1.UNSIGNED_BYTE,
  FLOAT$1 = _WebGLRenderingContex$1.FLOAT;
var UNIFORMS$1 = ["u_matrix"];
var EdgeLineProgram = /*#__PURE__*/function (_EdgeProgram) {
  function EdgeLineProgram() {
    inherits._classCallCheck(this, EdgeLineProgram);
    return inherits._callSuper(this, EdgeLineProgram, arguments);
  }
  inherits._inherits(EdgeLineProgram, _EdgeProgram);
  return inherits._createClass(EdgeLineProgram, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 2,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$1,
        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$1,
        METHOD: WebGLRenderingContext.LINES,
        UNIFORMS: UNIFORMS$1,
        ATTRIBUTES: [{
          name: "a_position",
          size: 2,
          type: FLOAT$1
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE$1,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE$1,
          normalized: true
        }]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
      var array = this.array;
      var x1 = sourceData.x;
      var y1 = sourceData.y;
      var x2 = targetData.x;
      var y2 = targetData.y;
      var color = colors.floatColor(data.color);

      // First point
      array[startIndex++] = x1;
      array[startIndex++] = y1;
      array[startIndex++] = color;
      array[startIndex++] = edgeIndex;

      // Second point
      array[startIndex++] = x2;
      array[startIndex++] = y2;
      array[startIndex++] = color;
      array[startIndex++] = edgeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(params, _ref) {
      var gl = _ref.gl,
        uniformLocations = _ref.uniformLocations;
      var u_matrix = uniformLocations.u_matrix;
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
    }
  }]);
}(index.EdgeProgram);

// language=GLSL
var SHADER_SOURCE$1 = /*glsl*/"\nprecision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
var FRAGMENT_SHADER_SOURCE = SHADER_SOURCE$1;

// language=GLSL
var SHADER_SOURCE = /*glsl*/"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  // The only different here with edge.vert.glsl is that we need to handle null\n  // input normal vector. Apart from that, you can read edge.vert.glsl more info\n  // on how it works:\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n  if (normalLength <= 0.0) unitNormal = normal;\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness, 1)).xy, 0, 1);\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE = SHADER_SOURCE;

var _WebGLRenderingContex = WebGLRenderingContext,
  UNSIGNED_BYTE = _WebGLRenderingContex.UNSIGNED_BYTE,
  FLOAT = _WebGLRenderingContex.FLOAT;
var UNIFORMS = ["u_matrix", "u_sizeRatio", "u_correctionRatio", "u_minEdgeThickness"];
var EdgeTriangleProgram = /*#__PURE__*/function (_EdgeProgram) {
  function EdgeTriangleProgram() {
    inherits._classCallCheck(this, EdgeTriangleProgram);
    return inherits._callSuper(this, EdgeTriangleProgram, arguments);
  }
  inherits._inherits(EdgeTriangleProgram, _EdgeProgram);
  return inherits._createClass(EdgeTriangleProgram, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 3,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE,
        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE,
        METHOD: WebGLRenderingContext.TRIANGLES,
        UNIFORMS: UNIFORMS,
        ATTRIBUTES: [{
          name: "a_positionStart",
          size: 2,
          type: FLOAT
        }, {
          name: "a_positionEnd",
          size: 2,
          type: FLOAT
        }, {
          name: "a_normal",
          size: 2,
          type: FLOAT
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE,
          normalized: true
        }],
        CONSTANT_ATTRIBUTES: [
        // If 0, then position will be a_positionStart
        // If 1, then position will be a_positionEnd
        {
          name: "a_positionCoef",
          size: 1,
          type: FLOAT
        }, {
          name: "a_normalCoef",
          size: 1,
          type: FLOAT
        }],
        CONSTANT_DATA: [[0, 1], [0, -1], [1, 0]]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
      var thickness = data.size || 1;
      var x1 = sourceData.x;
      var y1 = sourceData.y;
      var x2 = targetData.x;
      var y2 = targetData.y;
      var color = colors.floatColor(data.color);

      // Computing normals
      var dx = x2 - x1;
      var dy = y2 - y1;
      var len = dx * dx + dy * dy;
      var n1 = 0;
      var n2 = 0;
      if (len) {
        len = 1 / Math.sqrt(len);
        n1 = -dy * len * thickness;
        n2 = dx * len * thickness;
      }
      var array = this.array;

      // First point
      array[startIndex++] = x1;
      array[startIndex++] = y1;
      array[startIndex++] = x2;
      array[startIndex++] = y2;
      array[startIndex++] = n1;
      array[startIndex++] = n2;
      array[startIndex++] = color;
      array[startIndex++] = edgeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(params, _ref) {
      var gl = _ref.gl,
        uniformLocations = _ref.uniformLocations;
      var u_matrix = uniformLocations.u_matrix,
        u_sizeRatio = uniformLocations.u_sizeRatio,
        u_correctionRatio = uniformLocations.u_correctionRatio,
        u_minEdgeThickness = uniformLocations.u_minEdgeThickness;
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
    }
  }]);
}(index.EdgeProgram);

exports.AbstractEdgeProgram = index.AbstractEdgeProgram;
exports.AbstractNodeProgram = index.AbstractNodeProgram;
exports.AbstractProgram = index.AbstractProgram;
exports.DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS = index.DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS;
exports.DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS = index.DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS;
exports.EdgeArrowHeadProgram = index.EdgeArrowHeadProgram;
exports.EdgeArrowProgram = index.EdgeArrowProgram;
exports.EdgeClampedProgram = index.EdgeClampedProgram;
exports.EdgeProgram = index.EdgeProgram;
exports.EdgeRectangleProgram = index.EdgeRectangleProgram;
exports.NodeCircleProgram = index.NodeCircleProgram;
exports.NodeProgram = index.NodeProgram;
exports.Program = index.Program;
exports.createEdgeArrowHeadProgram = index.createEdgeArrowHeadProgram;
exports.createEdgeArrowProgram = index.createEdgeArrowProgram;
exports.createEdgeClampedProgram = index.createEdgeClampedProgram;
exports.createEdgeCompoundProgram = index.createEdgeCompoundProgram;
exports.createNodeCompoundProgram = index.createNodeCompoundProgram;
exports.drawDiscNodeHover = index.drawDiscNodeHover;
exports.drawDiscNodeLabel = index.drawDiscNodeLabel;
exports.drawStraightEdgeLabel = index.drawStraightEdgeLabel;
exports.getAttributeItemsCount = index.getAttributeItemsCount;
exports.getAttributesItemsCount = index.getAttributesItemsCount;
exports.killProgram = index.killProgram;
exports.loadFragmentShader = index.loadFragmentShader;
exports.loadProgram = index.loadProgram;
exports.loadVertexShader = index.loadVertexShader;
exports.numberToGLSLFloat = index.numberToGLSLFloat;
exports.DEFAULT_EDGE_DOUBLE_CLAMPED_PROGRAM_OPTIONS = DEFAULT_EDGE_DOUBLE_CLAMPED_PROGRAM_OPTIONS;
exports.EdgeDoubleArrowProgram = EdgeDoubleArrowProgram$1;
exports.EdgeDoubleClampedProgram = EdgeDoubleClampedProgram$1;
exports.EdgeLineProgram = EdgeLineProgram;
exports.EdgeTriangleProgram = EdgeTriangleProgram;
exports.NodePointProgram = NodePointProgram;
exports.createEdgeDoubleArrowProgram = createEdgeDoubleArrowProgram;
exports.createEdgeDoubleClampedProgram = createEdgeDoubleClampedProgram;

},{"../../dist/colors-ee2e2828.cjs.prod.js":17,"../../dist/index-16136237.cjs.prod.js":21,"../../dist/inherits-6434e089.cjs.prod.js":24}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../../dist/index-88310d0d.cjs.dev.js');
var data = require('../../dist/data-24ae515b.cjs.dev.js');
require('../../dist/inherits-04acba6b.cjs.dev.js');
require('../../dist/colors-fe6de9d2.cjs.dev.js');

/**
 * Sigma.js Settings
 * =================================
 *
 * The list of settings and some handy functions.
 * @module
 */

/**
 * Sigma.js settings
 * =================================
 */

var DEFAULT_SETTINGS = {
  // Performance
  hideEdgesOnMove: false,
  hideLabelsOnMove: false,
  renderLabels: true,
  renderEdgeLabels: false,
  enableEdgeEvents: false,
  // Component rendering
  defaultNodeColor: "#999",
  defaultNodeType: "circle",
  defaultEdgeColor: "#ccc",
  defaultEdgeType: "line",
  labelFont: "Arial",
  labelSize: 14,
  labelWeight: "normal",
  labelColor: {
    color: "#000"
  },
  edgeLabelFont: "Arial",
  edgeLabelSize: 14,
  edgeLabelWeight: "normal",
  edgeLabelColor: {
    attribute: "color"
  },
  stagePadding: 30,
  defaultDrawEdgeLabel: index.drawStraightEdgeLabel,
  defaultDrawNodeLabel: index.drawDiscNodeLabel,
  defaultDrawNodeHover: index.drawDiscNodeHover,
  minEdgeThickness: 1.7,
  antiAliasingFeather: 1,
  // Mouse and touch settings
  dragTimeout: 100,
  draggedEventsTolerance: 3,
  inertiaDuration: 200,
  inertiaRatio: 3,
  zoomDuration: 250,
  zoomingRatio: 1.7,
  doubleClickTimeout: 300,
  doubleClickZoomingRatio: 2.2,
  doubleClickZoomingDuration: 200,
  tapMoveTolerance: 10,
  // Size and scaling
  zoomToSizeRatioFunction: Math.sqrt,
  itemSizesReference: "screen",
  autoRescale: true,
  autoCenter: true,
  // Labels
  labelDensity: 1,
  labelGridCellSize: 100,
  labelRenderedSizeThreshold: 6,
  // Reducers
  nodeReducer: null,
  edgeReducer: null,
  // Features
  zIndex: false,
  minCameraRatio: null,
  maxCameraRatio: null,
  enableCameraZooming: true,
  enableCameraPanning: true,
  enableCameraRotation: true,
  cameraPanBoundaries: null,
  // Lifecycle
  allowInvalidContainer: false,
  // Program classes
  nodeProgramClasses: {},
  nodeHoverProgramClasses: {},
  edgeProgramClasses: {}
};
var DEFAULT_NODE_PROGRAM_CLASSES = {
  circle: index.NodeCircleProgram
};
var DEFAULT_EDGE_PROGRAM_CLASSES = {
  arrow: index.EdgeArrowProgram,
  line: index.EdgeRectangleProgram
};
function validateSettings(settings) {
  if (typeof settings.labelDensity !== "number" || settings.labelDensity < 0) {
    throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
  }
  var minCameraRatio = settings.minCameraRatio,
    maxCameraRatio = settings.maxCameraRatio;
  if (typeof minCameraRatio === "number" && typeof maxCameraRatio === "number" && maxCameraRatio < minCameraRatio) {
    throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
  }
}
function resolveSettings(settings) {
  var resolvedSettings = data.assign({}, DEFAULT_SETTINGS, settings);
  resolvedSettings.nodeProgramClasses = data.assign({}, DEFAULT_NODE_PROGRAM_CLASSES, resolvedSettings.nodeProgramClasses);
  resolvedSettings.edgeProgramClasses = data.assign({}, DEFAULT_EDGE_PROGRAM_CLASSES, resolvedSettings.edgeProgramClasses);
  return resolvedSettings;
}

exports.DEFAULT_EDGE_PROGRAM_CLASSES = DEFAULT_EDGE_PROGRAM_CLASSES;
exports.DEFAULT_NODE_PROGRAM_CLASSES = DEFAULT_NODE_PROGRAM_CLASSES;
exports.DEFAULT_SETTINGS = DEFAULT_SETTINGS;
exports.resolveSettings = resolveSettings;
exports.validateSettings = validateSettings;

},{"../../dist/colors-fe6de9d2.cjs.dev.js":18,"../../dist/data-24ae515b.cjs.dev.js":19,"../../dist/index-88310d0d.cjs.dev.js":22,"../../dist/inherits-04acba6b.cjs.dev.js":23}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../../dist/index-16136237.cjs.prod.js');
var data = require('../../dist/data-881001cd.cjs.prod.js');
require('../../dist/inherits-6434e089.cjs.prod.js');
require('../../dist/colors-ee2e2828.cjs.prod.js');

/**
 * Sigma.js Settings
 * =================================
 *
 * The list of settings and some handy functions.
 * @module
 */

/**
 * Sigma.js settings
 * =================================
 */

var DEFAULT_SETTINGS = {
  // Performance
  hideEdgesOnMove: false,
  hideLabelsOnMove: false,
  renderLabels: true,
  renderEdgeLabels: false,
  enableEdgeEvents: false,
  // Component rendering
  defaultNodeColor: "#999",
  defaultNodeType: "circle",
  defaultEdgeColor: "#ccc",
  defaultEdgeType: "line",
  labelFont: "Arial",
  labelSize: 14,
  labelWeight: "normal",
  labelColor: {
    color: "#000"
  },
  edgeLabelFont: "Arial",
  edgeLabelSize: 14,
  edgeLabelWeight: "normal",
  edgeLabelColor: {
    attribute: "color"
  },
  stagePadding: 30,
  defaultDrawEdgeLabel: index.drawStraightEdgeLabel,
  defaultDrawNodeLabel: index.drawDiscNodeLabel,
  defaultDrawNodeHover: index.drawDiscNodeHover,
  minEdgeThickness: 1.7,
  antiAliasingFeather: 1,
  // Mouse and touch settings
  dragTimeout: 100,
  draggedEventsTolerance: 3,
  inertiaDuration: 200,
  inertiaRatio: 3,
  zoomDuration: 250,
  zoomingRatio: 1.7,
  doubleClickTimeout: 300,
  doubleClickZoomingRatio: 2.2,
  doubleClickZoomingDuration: 200,
  tapMoveTolerance: 10,
  // Size and scaling
  zoomToSizeRatioFunction: Math.sqrt,
  itemSizesReference: "screen",
  autoRescale: true,
  autoCenter: true,
  // Labels
  labelDensity: 1,
  labelGridCellSize: 100,
  labelRenderedSizeThreshold: 6,
  // Reducers
  nodeReducer: null,
  edgeReducer: null,
  // Features
  zIndex: false,
  minCameraRatio: null,
  maxCameraRatio: null,
  enableCameraZooming: true,
  enableCameraPanning: true,
  enableCameraRotation: true,
  cameraPanBoundaries: null,
  // Lifecycle
  allowInvalidContainer: false,
  // Program classes
  nodeProgramClasses: {},
  nodeHoverProgramClasses: {},
  edgeProgramClasses: {}
};
var DEFAULT_NODE_PROGRAM_CLASSES = {
  circle: index.NodeCircleProgram
};
var DEFAULT_EDGE_PROGRAM_CLASSES = {
  arrow: index.EdgeArrowProgram,
  line: index.EdgeRectangleProgram
};
function validateSettings(settings) {
  if (typeof settings.labelDensity !== "number" || settings.labelDensity < 0) {
    throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
  }
  var minCameraRatio = settings.minCameraRatio,
    maxCameraRatio = settings.maxCameraRatio;
  if (typeof minCameraRatio === "number" && typeof maxCameraRatio === "number" && maxCameraRatio < minCameraRatio) {
    throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
  }
}
function resolveSettings(settings) {
  var resolvedSettings = data.assign({}, DEFAULT_SETTINGS, settings);
  resolvedSettings.nodeProgramClasses = data.assign({}, DEFAULT_NODE_PROGRAM_CLASSES, resolvedSettings.nodeProgramClasses);
  resolvedSettings.edgeProgramClasses = data.assign({}, DEFAULT_EDGE_PROGRAM_CLASSES, resolvedSettings.edgeProgramClasses);
  return resolvedSettings;
}

exports.DEFAULT_EDGE_PROGRAM_CLASSES = DEFAULT_EDGE_PROGRAM_CLASSES;
exports.DEFAULT_NODE_PROGRAM_CLASSES = DEFAULT_NODE_PROGRAM_CLASSES;
exports.DEFAULT_SETTINGS = DEFAULT_SETTINGS;
exports.resolveSettings = resolveSettings;
exports.validateSettings = validateSettings;

},{"../../dist/colors-ee2e2828.cjs.prod.js":17,"../../dist/data-881001cd.cjs.prod.js":20,"../../dist/index-16136237.cjs.prod.js":21,"../../dist/inherits-6434e089.cjs.prod.js":24}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var inherits = require('../../dist/inherits-04acba6b.cjs.dev.js');
var events = require('events');

/**
 * Util type to represent maps of typed elements, but implemented with
 * JavaScript objects.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

/**
 * Returns a type similar to T, but with the K set of properties of the type
 * T *required*, and the rest optional.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

/**
 * Returns a type similar to Partial<T>, but with at least one key set.
 */

/**
 * Custom event emitter types.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

var TypedEventEmitter = /*#__PURE__*/function (_ref) {
  function TypedEventEmitter() {
    var _this;
    inherits._classCallCheck(this, TypedEventEmitter);
    _this = inherits._callSuper(this, TypedEventEmitter);
    _this.rawEmitter = _this;
    return _this;
  }
  inherits._inherits(TypedEventEmitter, _ref);
  return inherits._createClass(TypedEventEmitter);
}(events.EventEmitter);

/**
 * Event types.
 */

/**
 * Export various other types:
 */

exports.TypedEventEmitter = TypedEventEmitter;

},{"../../dist/inherits-04acba6b.cjs.dev.js":23,"events":5}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var inherits = require('../../dist/inherits-6434e089.cjs.prod.js');
var events = require('events');

/**
 * Util type to represent maps of typed elements, but implemented with
 * JavaScript objects.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

/**
 * Returns a type similar to T, but with the K set of properties of the type
 * T *required*, and the rest optional.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

/**
 * Returns a type similar to Partial<T>, but with at least one key set.
 */

/**
 * Custom event emitter types.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

var TypedEventEmitter = /*#__PURE__*/function (_ref) {
  function TypedEventEmitter() {
    var _this;
    inherits._classCallCheck(this, TypedEventEmitter);
    _this = inherits._callSuper(this, TypedEventEmitter);
    _this.rawEmitter = _this;
    return _this;
  }
  inherits._inherits(TypedEventEmitter, _ref);
  return inherits._createClass(TypedEventEmitter);
}(events.EventEmitter);

/**
 * Event types.
 */

/**
 * Export various other types:
 */

exports.TypedEventEmitter = TypedEventEmitter;

},{"../../dist/inherits-6434e089.cjs.prod.js":24,"events":5}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var normalization = require('../../dist/normalization-02a974d4.cjs.dev.js');
var colors = require('../../dist/colors-fe6de9d2.cjs.dev.js');
var data = require('../../dist/data-24ae515b.cjs.dev.js');
require('graphology-utils/is-graph');



exports.ANIMATE_DEFAULTS = normalization.ANIMATE_DEFAULTS;
exports.animateNodes = normalization.animateNodes;
exports.createElement = normalization.createElement;
exports.createNormalizationFunction = normalization.createNormalizationFunction;
exports.cubicIn = normalization.cubicIn;
exports.cubicInOut = normalization.cubicInOut;
exports.cubicOut = normalization.cubicOut;
exports.easings = normalization.easings;
exports.getCorrectionRatio = normalization.getCorrectionRatio;
exports.getMatrixImpact = normalization.getMatrixImpact;
exports.getPixelRatio = normalization.getPixelRatio;
exports.graphExtent = normalization.graphExtent;
exports.identity = normalization.identity;
exports.linear = normalization.linear;
exports.matrixFromCamera = normalization.matrixFromCamera;
exports.multiply = normalization.multiply;
exports.multiplyVec2 = normalization.multiplyVec2;
exports.quadraticIn = normalization.quadraticIn;
exports.quadraticInOut = normalization.quadraticInOut;
exports.quadraticOut = normalization.quadraticOut;
exports.rotate = normalization.rotate;
exports.scale = normalization.scale;
exports.translate = normalization.translate;
exports.validateGraph = normalization.validateGraph;
exports.zIndexOrdering = normalization.zIndexOrdering;
exports.HTML_COLORS = colors.HTML_COLORS;
exports.colorToArray = colors.colorToArray;
exports.colorToIndex = colors.colorToIndex;
exports.extractPixel = colors.extractPixel;
exports.floatColor = colors.floatColor;
exports.getPixelColor = colors.getPixelColor;
exports.indexToColor = colors.indexToColor;
exports.parseColor = colors.parseColor;
exports.rgbaToFloat = colors.rgbaToFloat;
exports.assign = data.assign;
exports.assignDeep = data.assignDeep;
exports.extend = data.extend;
exports.isPlainObject = data.isPlainObject;

},{"../../dist/colors-fe6de9d2.cjs.dev.js":18,"../../dist/data-24ae515b.cjs.dev.js":19,"../../dist/normalization-02a974d4.cjs.dev.js":25,"graphology-utils/is-graph":14}],38:[function(require,module,exports){
(function (process){(function (){
'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./sigma-utils.cjs.prod.js");
} else {
  module.exports = require("./sigma-utils.cjs.dev.js");
}

}).call(this)}).call(this,require('_process'))
},{"./sigma-utils.cjs.dev.js":37,"./sigma-utils.cjs.prod.js":39,"_process":16}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var normalization = require('../../dist/normalization-aed467cc.cjs.prod.js');
var colors = require('../../dist/colors-ee2e2828.cjs.prod.js');
var data = require('../../dist/data-881001cd.cjs.prod.js');
require('graphology-utils/is-graph');



exports.ANIMATE_DEFAULTS = normalization.ANIMATE_DEFAULTS;
exports.animateNodes = normalization.animateNodes;
exports.createElement = normalization.createElement;
exports.createNormalizationFunction = normalization.createNormalizationFunction;
exports.cubicIn = normalization.cubicIn;
exports.cubicInOut = normalization.cubicInOut;
exports.cubicOut = normalization.cubicOut;
exports.easings = normalization.easings;
exports.getCorrectionRatio = normalization.getCorrectionRatio;
exports.getMatrixImpact = normalization.getMatrixImpact;
exports.getPixelRatio = normalization.getPixelRatio;
exports.graphExtent = normalization.graphExtent;
exports.identity = normalization.identity;
exports.linear = normalization.linear;
exports.matrixFromCamera = normalization.matrixFromCamera;
exports.multiply = normalization.multiply;
exports.multiplyVec2 = normalization.multiplyVec2;
exports.quadraticIn = normalization.quadraticIn;
exports.quadraticInOut = normalization.quadraticInOut;
exports.quadraticOut = normalization.quadraticOut;
exports.rotate = normalization.rotate;
exports.scale = normalization.scale;
exports.translate = normalization.translate;
exports.validateGraph = normalization.validateGraph;
exports.zIndexOrdering = normalization.zIndexOrdering;
exports.HTML_COLORS = colors.HTML_COLORS;
exports.colorToArray = colors.colorToArray;
exports.colorToIndex = colors.colorToIndex;
exports.extractPixel = colors.extractPixel;
exports.floatColor = colors.floatColor;
exports.getPixelColor = colors.getPixelColor;
exports.indexToColor = colors.indexToColor;
exports.parseColor = colors.parseColor;
exports.rgbaToFloat = colors.rgbaToFloat;
exports.assign = data.assign;
exports.assignDeep = data.assignDeep;
exports.extend = data.extend;
exports.isPlainObject = data.isPlainObject;

},{"../../dist/colors-ee2e2828.cjs.prod.js":17,"../../dist/data-881001cd.cjs.prod.js":20,"../../dist/normalization-aed467cc.cjs.prod.js":26,"graphology-utils/is-graph":14}],40:[function(require,module,exports){
module.exports = require('./lib/xml-writer.js');

},{"./lib/xml-writer.js":41}],41:[function(require,module,exports){

function isFalse(s) {
  return typeof s !== 'number' && !s;
}

function strval(s) {
  if (typeof s == 'string') {
    return s;
  }
  else if (typeof s == 'number') {
    return s+'';
  }
  else if (typeof s == 'function') {
    return s();
  }
  else if (s instanceof XMLWriter) {
    return s.toString();
  }
  else throw Error('Bad Parameter');
}

function XMLWriter(indent, callback) {

    if (!(this instanceof XMLWriter)) {
        return new XMLWriter();
    }

    this.name_regex = /[_:A-Za-z][-._:A-Za-z0-9]*/;
    this.indent = indent ? true : false;
    this.indentString = this.indent && typeof indent === 'string' ? indent : '    ';
    this.output = '';
    this.stack = [];
    this.tags = 0;
    this.attributes = 0;
    this.attribute = 0;
    this.texts = 0;
    this.comment = 0;
    this.dtd = 0;
    this.root = '';
    this.pi = 0;
    this.cdata = 0;
    this.started_write = false;
    this.writer;
    this.writer_encoding = 'UTF-8';

    if (typeof callback == 'function') {
        this.writer = callback;
    } else {
        this.writer = function (s, e) {
            this.output += s;
        }
    }
}

XMLWriter.prototype = {
    toString : function () {
        this.flush();
        return this.output;
    },

    indenter : function () {
      if (this.indent) {
        this.write('\n');
        for (var i = 1; i < this.tags; i++) {
          this.write(this.indentString);
        }
      }
    },

    write : function () {
        for (var i = 0; i < arguments.length; i++) {
            this.writer(arguments[i], this.writer_encoding);
        }
    },


    flush : function () {
        for (var i = this.tags; i > 0; i--) {
            this.endElement();
        }
        this.tags = 0;
    },

    startDocument : function (version, encoding, standalone) {
        if (this.tags || this.attributes) return this;

        this.startPI('xml');
        this.startAttribute('version');
        this.text(typeof version == "string" ? version : "1.0");
        this.endAttribute();
        if (typeof encoding == "string") {
            this.startAttribute('encoding');
            this.text(encoding);
            this.endAttribute();
            this.writer_encoding = encoding;
        }
        if (standalone) {
            this.startAttribute('standalone');
            this.text("yes");
            this.endAttribute();
        }
        this.endPI();
        if (!this.indent) {
          this.write('\n');
        }
        return this;
    },

    endDocument : function () {
        if (this.attributes) this.endAttributes();
        return this;
    },

    writeElement : function (name, content) {
        return this.startElement(name).text(content).endElement();
    },

    writeElementNS : function (prefix, name, uri, content) {
        if (!content) {
            content = uri;
        }
        return this.startElementNS(prefix, name, uri).text(content).endElement();
    },

    startElement : function (name) {
        name = strval(name);
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (this.tags === 0 && this.root && this.root !== name) throw Error('Invalid Parameter');
        if (this.attributes) this.endAttributes();
        ++this.tags;
        this.texts = 0;
        if (this.stack.length > 0)
          this.stack[this.stack.length-1].containsTag = true;

        this.stack.push({
            name: name,
            tags: this.tags
        });
        if (this.started_write) this.indenter();
        this.write('<', name);
        this.startAttributes();
        this.started_write = true;
        return this;
    },
    startElementNS : function (prefix, name, uri) {
        prefix = strval(prefix);
        name = strval(name);

        if (!prefix.match(this.name_regex)) throw Error('Invalid Parameter');
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (this.attributes) this.endAttributes();
        ++this.tags;
        this.texts = 0;
        if (this.stack.length > 0)
          this.stack[this.stack.length-1].containsTag = true;

        this.stack.push({
            name: prefix + ':' + name,
            tags: this.tags
        });
        if (this.started_write) this.indenter();
        this.write('<', prefix + ':' + name);
        this.startAttributes();
        this.started_write = true;
        return this;
    },

    endElement : function () {
        if (!this.tags) return this;
        var t = this.stack.pop();
        if (this.attributes > 0) {
            if (this.attribute) {
                if (this.texts) this.endAttribute();
                this.endAttribute();
            }
            this.write('/');
            this.endAttributes();
        } else {
            if (t.containsTag) this.indenter();
            this.write('</', t.name, '>');
        }
        --this.tags;
        this.texts = 0;
        return this;
    },

    writeAttribute : function (name, content) {
        if (typeof content == 'function') {
          content = content();
        }
        if (isFalse(content)) {
           return this;
        }
        return this.startAttribute(name).text(content).endAttribute();
    },
    writeAttributeNS : function (prefix, name, uri, content) {
        if (!content) {
            content = uri;
        }
        if (typeof content == 'function') {
          content = content();
        }
        if (isFalse(content)) {
          return this;
        }
        return this.startAttributeNS(prefix, name, uri).text(content).endAttribute();
    },

    startAttributes : function () {
        this.attributes = 1;
        return this;
    },

    endAttributes : function () {
        if (!this.attributes) return this;
        if (this.attribute) this.endAttribute();
        this.attributes = 0;
        this.attribute = 0;
        this.texts = 0;
        this.write('>');
        return this;
    },

    startAttribute : function (name) {
        name = strval(name);
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (!this.attributes && !this.pi) return this;
        if (this.attribute) return this;
        this.attribute = 1;
        this.write(' ', name, '="');
        return this;
    },
    startAttributeNS : function (prefix, name, uri) {
        prefix = strval(prefix);
        name = strval(name);

        if (!prefix.match(this.name_regex)) throw Error('Invalid Parameter');
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (!this.attributes && !this.pi) return this;
        if (this.attribute) return this;
        this.attribute = 1;
        this.write(' ', prefix + ':' + name, '="');
        return this;
    },
    endAttribute : function () {
        if (!this.attribute) return this;
        this.attribute = 0;
        this.texts = 0;
        this.write('"');
        return this;
    },

    text : function (content) {
        content = strval(content);
        if (!this.tags && !this.comment && !this.pi && !this.cdata) return this;
        if (this.attributes && this.attribute) {
            ++this.texts;
            this.write(content
                       .replace(/&/g, '&amp;')
                       .replace(/</g, '&lt;')
                       .replace(/"/g, '&quot;')
                       .replace(/\t/g, '&#x9;')
                       .replace(/\n/g, '&#xA;')
                       .replace(/\r/g, '&#xD;')
                      );
            return this;
        } else if (this.attributes && !this.attribute) {
            this.endAttributes();
        }
        if (this.comment || this.cdata) {
            this.write(content);
        }
        else {
          this.write(content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'));
        }
        ++this.texts;
        this.started_write = true;
        return this;
    },

    writeComment : function (content) {
        return this.startComment().text(content).endComment();
    },

    startComment : function () {
        if (this.comment) return this;
        if (this.attributes) this.endAttributes();
        this.indenter();
        this.write('<!--');
        this.comment = 1;
        this.started_write = true;
        return this;
    },

    endComment : function () {
        if (!this.comment) return this;
        this.write('-->');
        this.comment = 0;
        return this;
    },

    writeDocType : function (name, pubid, sysid, subset) {
        return this.startDocType(name, pubid, sysid, subset).endDocType()
    },

    startDocType : function (name, pubid, sysid, subset) {
        if (this.dtd || this.tags) return this;

        name = strval(name);
        pubid = pubid ? strval(pubid) : pubid;
        sysid = sysid ? strval(sysid) : sysid;
        subset = subset ? strval(subset) : subset;

        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (pubid && !pubid.match(/^[\w\-][\w\s\-\/\+\:\.]*/)) throw Error('Invalid Parameter');
        if (sysid && !sysid.match(/^[\w\.][\w\-\/\\\:\.]*/)) throw Error('Invalid Parameter');
        if (subset && !subset.match(/[\w\s\<\>\+\.\!\#\-\?\*\,\(\)\|]*/)) throw Error('Invalid Parameter');

        pubid = pubid ? ' PUBLIC "' + pubid + '"' : (sysid) ? ' SYSTEM' : '';
        sysid = sysid ? ' "' + sysid + '"' : '';
        subset = subset ? ' [' + subset + ']': '';

        if (this.started_write) this.indenter();
        this.write('<!DOCTYPE ', name, pubid, sysid, subset);
        this.root = name;
        this.dtd = 1;
        this.started_write = true;
        return this;
    },

    endDocType : function () {
        if (!this.dtd) return this;
        this.write('>');
        return this;
    },

    writePI : function (name, content) {
        return this.startPI(name).text(content).endPI()
    },

    startPI : function (name) {
        name = strval(name);
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (this.pi) return this;
        if (this.attributes) this.endAttributes();
        if (this.started_write) this.indenter();
        this.write('<?', name);
        this.pi = 1;
        this.started_write = true;
        return this;
    },

    endPI : function () {
        if (!this.pi) return this;
        this.write('?>');
        this.pi = 0;
        return this;
    },

    writeCData : function (content) {
        return this.startCData().text(content).endCData();
    },

    startCData : function () {
        if (this.cdata) return this;
        if (this.attributes) this.endAttributes();
        this.indenter();
        this.write('<![CDATA[');
        this.cdata = 1;
        this.started_write = true;
        return this;
    },

    endCData : function () {
        if (!this.cdata) return this;
        this.write(']]>');
        this.cdata = 0;
        return this;
    },

    writeRaw : function(content) {
        content = strval(content);
        if (!this.tags && !this.comment && !this.pi && !this.cdata) return this;
        if (this.attributes && this.attribute) {
            ++this.texts;
            this.write(content.replace('&', '&amp;').replace('"', '&quot;'));
            return this;
        } else if (this.attributes && !this.attribute) {
            this.endAttributes();
        }
        ++this.texts;
        this.write(content);
        this.started_write = true;
        return this;
    }

}

module.exports = XMLWriter;

},{}]},{},[1])(1)
});
