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
    let leadingCalled = false;

    const { leading, trailing } = option; 

    function debounced(...args) {
        if(!leadingCalled && leading) {
            func.apply(this, args);
            leadingCalled = true;
        }

        clearTimeout(timer);

        timer = setTimeout(() => {
            if (trailing) {
                func.apply(this, args);
            }
            leadingCalled = false;
        }, wait)
    }

    return debounced;
}

module.exports = debounce;
