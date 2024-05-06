Function.prototype.curry = function() {
    const fn = this;
    return function curried(...args) {
        if (fn.length <= args.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

// function add(a, b) {
//     return a + b;
// }

// const curriedAdd = add.curry(); => 
// console.log(curriedAdd(2)(3)); // Outputs 5

// Here `this` inside curry is `add`.
// fn.length = 2 (a, b)
// args.length = 2 (2, 3)