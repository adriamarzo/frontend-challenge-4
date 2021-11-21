/**
 * GRAPH FUNCTIONS.
 */

/**
 * getObjectValues: Get an array with the values of an object.
 *
 * @param {Object} object generic object.
 * @returns {Array} Array with attribute values.
 */
const getObjectValues = (object) => (object ? Object.values(object) : []);

/**
 * getConnectionsModel: Get the model of the connections.
 *
 * @param {Object} connections Object with all the connections.
 * @returns {Array} Array of connections.
 */
const getConnectionsModel = ({ connections }) => getObjectValues(connections);

/**
 * getNodesModel: Get the model of the nodes.
 *
 * @param {Object} nodes Object with all the nodes.
 * @returns {Array} Array of nodes.
 */
const getNodesModel = ({ nodes }) => getObjectValues(nodes);

/**
 * getNodeInputConnections: Get a node input connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeInputConnections(node, graph) {
  return getConnectionsModel(graph).filter(
    ({ targetPath }) => targetPath === node.id
  );
}

/**
 * getNodeOutputConnections: Get a node output connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeOutputConnections(node, graph) {
  return getConnectionsModel(graph).filter(
    ({ sourcePath }) => sourcePath === node.id
  );
}

/**
 * getNodeConnections: Get a node connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeConnections(node, graph) {
  return getConnectionsModel(graph).filter(
    ({ sourcePath, targetPath }) =>
      targetPath === node.id || sourcePath === node.id
  );
}

/**
 * getLeafNodes: Get all leaf nodes (no output connections).
 *
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getLeafNodes(graph) {
  const nodes = getNodesModel(graph);
  const connections = getConnectionsModel(graph);

  return nodes.filter(
    ({ id }) => !connections.find(({ sourcePath }) => sourcePath === id)
  );
}

/**
 * getRootNodes: Get all root nodes (no input connections).
 *
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getRootNodes(graph) {
  const rootNodes = [];
  const nodes = getNodesModel(graph);
  const connections = getConnectionsModel(graph);

  nodes.forEach((node) => {
    if (!connections.find(({ targetPath }) => targetPath === node.id)) {
      rootNodes.push(node);
    }
  });

  return rootNodes;
}

/**
 * hasMultipleSources: Determines if a node is reachable from different sources.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Boolean} True if a node has different source paths.
 */
export function hasMultipleSources(node, graph) {}
