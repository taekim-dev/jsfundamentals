/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = {leading: false, trailing: true}) {
    let timer;
    let leading = option.leading;
    function debounced(...args) {
        if (leading) {
            func.apply(this, args);
            leading = false;
            
        } else {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, wait)
        }
    }
    return debounced;
}
  
module.exports = debounce;