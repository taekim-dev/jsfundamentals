/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
    
    const classes = args;
    const res = [];
    classes.forEach((element) => {
        if (Array.isArray(element)) {
            element.forEach(el => {
                addElements(el)
            })
        } else {
            addElements(element);
        }
    });

    function addElements(element) {
        if (!element) {
            return;
        }
        if (typeof element === 'string'){
            res.push(element);
        }

        else if (typeof element === 'object') {
            Object.keys(element).forEach(key => {
                if(element[key]) {
                    res.push(key);
                }
            })
        }
    }

    return res.join(' ');
}