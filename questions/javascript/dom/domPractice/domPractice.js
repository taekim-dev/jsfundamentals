/**
 * Creates a new element, sets its text content, and appends it to the specified parent.
 * @param {string} tagName
 * @param {string} textContent
 * @param {HTMLElement} parent
 * @return {HTMLElement}
 */

export function createAndAppendElement(tagName, textContent, parent) {
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
export function modifyElementAttribute(element, attributeName, attributeValue) {
    element.setAttribute(attributeName, attributeValue);
}

/**
 * Adds a click event listener to the specified element.
 * @param {HTMLElement} element
 * @param {Function} callback
 */
export function addClickListener(element, callback) {
}

/**
 * Finds the first child element with the specified class name.
 * @param {HTMLElement} parent
 * @param {string} className
 * @return {HTMLElement|null}
 */
export function findChildByClass(parent, className) {
}