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

/**
 * Modifies an attribute of the specified element.
 * @param {HTMLElement} element
 * @param {string} attributeName
 * @param {string} attributeValue
 */
function modifyElementAttribute(element, attributeName, attributeValue) {
    element.setAttribute(attributeName, attributeValue);
}

module.exports = { createAndAppendElement, modifyElementAttribute };