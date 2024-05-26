function createCounter() {
    let count = 0;

    function increment() {
        count += 1;
        return count;
    }

    return increment;
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3