Array.prototype.mySplice = function(startIndex, removeCount, ...items) {
    let removed = [];
    startIndex = startIndex ?? 0;
    startIndex = startIndex < 0 ? this.length + startIndex : startIndex;
    startIndex = Math.max(0, Math.min(startIndex, this.length));  // Clamp startIndex
    removeCount = removeCount !== undefined ? removeCount : this.length - startIndex;

    if (removeCount > 0) {
        removed = this.slice(startIndex, startIndex + removeCount);
        this.copyWithin(startIndex, startIndex + removeCount);
        this.length -= removeCount;  // Adjust length after copying
    }

    if (items.length > 0) {
        this.length += items.length;
        this.copyWithin(startIndex + items.length, startIndex, this.length - items.length - removeCount);
        for (let i = 0; i < items.length; i++) {
            this[startIndex + i] = items[i];
        }
    }

    return removed;
}
