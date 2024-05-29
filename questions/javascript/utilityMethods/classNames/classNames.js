/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
    const res = [];

    function addElements(element){
        if (!element) return;
        
        if (typeof element === 'string') {
            res.push(element);
        } else if (typeof element === 'object') {
            if (Array.isArray(element)) {
                for(const el of element) {
                    addElements(el);
                }
            } else {
                for(const key in element) {
                    if (element[key]) {
                        res.push(key);
                    }
                }
            }
        }
    }

    for (const arg of args) {
        addElements(arg);
    }

    return res.join(' ');
}