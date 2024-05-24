/**
 * Creates a new element, sets its text content, and appends it to the specified parent.
 * @param {string} tagName
 * @param {string} textContent
 * @param {HTMLElement} parent
 * @return {HTMLElement}
 */

function createAndAppendElement(tagName, textContent, parent) {
    const newElement = document.createElement(tagName);
    newElement.textContent = textContent;
    parent.appendChild(newElement);
    return newElement;
}


module.exports = { createAndAppendElement };