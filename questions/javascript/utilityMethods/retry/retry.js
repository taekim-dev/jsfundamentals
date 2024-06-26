
/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
async function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    let retryCount = 0;
    while (retryCount < maximumRetryCount) {

        try {
            const result = await fetcher();
            return result;
        } catch (error) {
            retryCount++;
        }
    }

    return fetcher();
}

module.exports = fetchWithAutoRetry;