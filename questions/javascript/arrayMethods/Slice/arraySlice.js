
Array.prototype.arraySlice = function(startIndex, endIndex) {
    if (this.length === 0) return [];
    const res = [];
    
    startIndex = startIndex < 0 ? this.length + startIndex : startIndex;
    if (endIndex === undefined) {
        endIndex = this.length;
    } else {
        endIndex = endIndex < 0 ? this.length + endIndex : endIndex;
    }

    for(let i = startIndex; i < endIndex; i++){
        res.push(this[i]);
    }

    return res;

    // for(let i = startIndex; i < endIndex; i++) {

    // }
}

