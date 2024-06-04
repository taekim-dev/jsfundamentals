
/**
 * @param {HTMLElement} el
 */
function $(el) {
    const element = document.querySelector(el);

    return {
        css : function(propertyName, value) {
            if (element) {
                element.style[propertyName] = value;
            }
            return this;
        }
    }
}

// Usage:
// $('#button')
//   .css('color', '#fff')
//   .css('backgroundColor', '#000')
//   .css('fontWeight', 'bold')
