/**
 * Graphology Functions Unit Tests
 * ================================
 */
var assert = require('assert'),
    Graph = require('graphology'),
    functions = require('./');

describe('graphology-functions', function() {

  describe('Read functions', function() {

    it('#.hasNode', function() {
      var graph = new Graph();
      graph.addNode('Estelle');

      assert.strictEqual(functions.hasNode(graph, 'Estelle'), true);
    });
  });

  describe('#.bind', function() {

    it('should correctly bind every functions to the given graph.', function() {
      var graph = new Graph();
      graph.addNodesFrom(['Estelle', 'John']);

      var bound = functions.bind(graph);

      assert.deepEqual(bound.nodes().map(bound.hasNode), [true, true]);
    });
  });
});
