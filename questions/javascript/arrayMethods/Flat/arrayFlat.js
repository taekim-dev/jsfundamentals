Array.prototype.arrayFlat = function(depth = 1) {
    if (this.length === 0 || depth === 0) return [...this];
    let res = [];
    for (const item of this){
        if (Array.isArray(item)){
            res = res.concat(item.arrayFlat(depth - 1));
        } else {
            res.push(item);
        }
    }
    return res;
}