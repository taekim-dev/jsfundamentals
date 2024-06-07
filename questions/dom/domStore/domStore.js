class NodeStore {
    constructor() {
        this.nodes = {};
        this.nodeIdCounter = 0;
    }

    /**
     * Generates a unique ID for a node and attaches it to the node
     * @param {Node} node
     * @return {string} The unique ID for the node
     */
    _getNodeId(node) {
        if (!node.__nodeId) {
            Object.defineProperty(node, '__nodeId', {
                value: `node-${this.nodeIdCounter++}`,
            });
        }
        return node.__nodeId;
    }

    /**
     * Associates a value with a node
     * @param {Node} node
     * @param {any} value
     */
    set(node, value) {
        const key = this._getNodeId(node);
        this.nodes[key] = value;
    }

    /**
     * Retrieves the value associated with a node
     * @param {Node} node
     * @return {any}
     */
    get(node) {
        const key = this._getNodeId(node);
        return this.nodes.hasOwnProperty(key) ? this.nodes[key] : undefined;
    }

    /**
     * Checks if a value is associated with a node
     * @param {Node} node
     * @return {Boolean}
     */
    has(node) {
        const key = this._getNodeId(node);
        return this.nodes.hasOwnProperty(key);
    }
}