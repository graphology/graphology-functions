/**
 * Graphology Functions
 * =====================
 *
 * Miscellaneous curried utilities fitting a more functional style.
 */
var curry = require('curry');

// TODO: ensure that first argument is a graph

/**
 * Read functions.
 */
function hasNode(graph, node) {
  return graph.hasNode(node);
}

exports.hasNode = curry(hasNode);

/**
 * Iteration functions.
 */
function nodes(graph) {
  return graph.nodes();
}

exports.nodes = nodes;


/**
 * Function binding all of the library's function to a particular graph.
 *
 * @param  {Graph} graph - A graphology instance.
 * @return {object}
 */
exports.bind = function(graph) {
  var functions = {};

  for (var k in exports) {
    if (k === 'bind')
      continue;

    functions[k] = exports[k].bind(null, graph);
  }

  return functions;
};
