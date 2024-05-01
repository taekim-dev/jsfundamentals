
Array.prototype.arraySlice = function(startIndex = 0, endIndex = this.length) {
    const res = [];
    
    startIndex = startIndex < 0 ? Math.max(this.length + startIndex, 0) : startIndex;
    endIndex = endIndex < 0 ? Math.min(this.length + endIndex, this.length) : endIndex;

    for(let i = startIndex; i < endIndex; i++){
        res.push(this[i]);
    }
    
    return res;
}

