function shuffle(array) {
    if (array.length === 2) {
        return Math.random() < 0.5 ? array : [array[1], array[0]];
    }

}

module.exports = shuffle;

