/**
 * @param {HTMLElement} element
 * @return {object} object literal presentation
 */
function virtualize(element) {
  if (!element) return null;

  const virtualizeNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.nodeValue;
    }

    const obj = {
      type: node.tagName.toLowerCase(),
      props: {}
    };

    Array.from(node.attributes).forEach(attr => {
      obj.props[attr.name === 'class' ? 'className' : attr.name] = attr.value;
    });

    const children = Array.from(node.childNodes).map(virtualizeNode);
    if (children.length > 0) {
      obj.props.children = children.length === 1 ? children[0] : children;
    }

    return obj;
  };

  return virtualizeNode(element);
}


/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement} 
 */
function render(obj) {
  if (typeof obj === 'string') {
    return document.createTextNode(obj);
  }

  const element = document.createElement(obj.type);

  for (let [key, value] of Object.entries(obj.props)) {
    if (key === 'children') {
      if (Array.isArray(value)) {
        value.forEach(child => element.appendChild(render(child)));
      } else {
        element.appendChild(render(value));
      }
    } else {
      element[key === 'className' ? 'class' : key] = value;
    }
  }

  return element;
}


module.exports = { virtualize, render };

