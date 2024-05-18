/**
 * @typedef {(version: number) => boolean} IsBad
 */

/**
 * @param {IsBad} isBad
 * @return {(v: number) => number}
 */
function firstBadVersion(isBad) {
  return (version) => {
    for (let i = 1; i <= version; i++) {
        if(isBad(i)) {
            return i;
        }
    }
    return -1;
  }
}

module.exports = firstBadVersion;