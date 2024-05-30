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
    let lastCallTime = 0;
    let leadingCalled = false;
    const { leading, trailing } = option;

    function debounced(...args) {
        const now = Date.now();

        if (leading && now - lastCallTime >= wait) {
            func.apply(this, args);
            leadingCalled = true;
            lastCallTime = now;
        }

        clearTimeout(timer);

        timer = setTimeout(() => {
            if (trailing && !leadingCalled) {
                func.apply(this, args);
            }
            leadingCalled = false;
        }, wait);
    }

    return debounced;
}

module.exports = debounce;
