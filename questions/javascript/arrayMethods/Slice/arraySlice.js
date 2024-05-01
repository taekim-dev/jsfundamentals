
Array.prototype.arraySlice = function(startIndex, endIndex) {
    if (this.length === 0) return [];
    const res = [];
    if (startIndex !== undefined && endIndex === undefined){
        if (startIndex >= 0){
            for(let i = startIndex; i < this.length; i++){
                res.push(this[i]);
            }
        } else {
            startIndex = startIndex + this.length;
            for(let i = startIndex; i < this.length; i++ ){
                res.push(this[i]);
            }
        }
    }
    return res;

    // for(let i = startIndex; i < endIndex; i++) {

    // }
}

