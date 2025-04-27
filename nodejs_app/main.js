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