Array.prototype.arrayFlat = function(depth) {
    if (this.length === 0) return [];
    let res = [];
    if (depth === undefined || depth === 1) {
        for(const obj of this){
            if (!Array.isArray(obj)){
                res.push(obj);
            } else {
                for (const element of obj){
                    res.push(element);
                }
            }
        }
    }
    return res;
}