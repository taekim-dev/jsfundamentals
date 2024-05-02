// It's difficult to implement this and read & understand
Array.prototype.mySplice = function(startIndex, removeCount, ...items) {
    // Default startIndex to 0 if undefined, and handle negative index
    startIndex = startIndex ?? 0;
    startIndex = startIndex < 0 ? Math.max(this.length + startIndex, 0) : Math.min(startIndex, this.length);

    // Default removeCount to 0 if not specified to prevent removing when not intended
    removeCount = removeCount !== undefined ? removeCount : 0;

    let removed = this.slice(startIndex, startIndex + removeCount); // Capture the elements to be removed

    if (removeCount > 0) {
        this.copyWithin(startIndex, startIndex + removeCount); // Shift elements down
        this.length -= removeCount; // Adjust length to remove the 'empty slots' at the end
    }

    // Insert new items if there are any
    if (items.length > 0) {
        this.length += items.length; // Increase length to make space for new items
        this.copyWithin(startIndex + items.length, startIndex, this.length - items.length);
        for (let i = 0; i < items.length; i++) {
            this[startIndex + i] = items[i];
        }
    }

    return removed;
};
