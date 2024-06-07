class NodeStore {

    constructor (){ 
        this.nodes = {};
    }
    /**
    * @param {Node} node
    * @param {any} value
    */
   set(node, value) {
       const key = JSON.stringify(node); 
       this.nodes[key] = value;
   }
   /**
    * @param {Node} node
    * @return {any}
    */
   get(node) {
      const key = JSON.stringify(node);
      return this.nodes.hasOwnProperty(key) ? this.nodes[key] : undefined;
   }
   
   /**
    * @param {Node} node
    * @return {Boolean}
    */
   has(node) {
    const key = JSON.stringify(node);
    return this.nodes.hasOwnProperty(key)
   }
}