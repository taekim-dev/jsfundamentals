/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {Object} [option]
 * @param {boolean} [option.leading=false]
 * @param {boolean} [option.trailing=true]
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
    let timer;

    function debounced(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (option.trailing) {
                func.call(this, args);
            }
        }, wait)
    }

    return debounced;
}

module.exports = debounce;
