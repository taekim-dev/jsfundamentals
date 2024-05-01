Array.prototype.arrayFlat = function(depth = 1) {
    if (this.length === 0 || depth === 0) return [...this];
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
    return res.arrayFlat(depth - 1);
}