function shuffle(array) {
    const randomIndex = () => Math.floor(Math.random() * array.length);
    const indexes = [];
    const seen = new Set();
    while (indexes.length < array.length) {
        const index = randomIndex();
        if (!seen.has(index)) {
            seen.add(index);
            indexes.push(index);
        }
    }
    return indexes.map(index => array[index]);
}

module.exports = shuffle;

