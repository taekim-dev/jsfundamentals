/**
 * @param {HTMLElement} 
 * @return {object} object literal presentation
 */
function virtualize(element) {
  if (!element) return null;


}


/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement} 
 */
function render(obj) {
  if (typeof obj === 'string') {
    return document.createTextNode(obj);
  }
}


module.exports = { virtualize, render };

