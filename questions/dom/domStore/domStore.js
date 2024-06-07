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

(function() {
    var store = new NodeStore();

    var node1 = document.createElement('div');
    var node2 = document.createElement('span');
    var node3 = document.createElement('p');

    store.set(node1, 'data for node 1');
    console.log(store.get(node1)); //'data for node 1'

    store.set(node2, { key: 'value for node 2' });
    console.log(store.get(node2)); //{ key: 'value for node 2' }

    console.log(store.has(node1)); // true
    console.log(store.has(node3)); // false

    store.set(node1, 'updated data for node 1');
    console.log(store.get(node1)); // 'updated data for node 1'

    // Test nodes with same structure
    var anotherNode1 = document.createElement('div');
    console.log(store.get(anotherNode1)); // undefined
})();