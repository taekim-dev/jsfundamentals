
const fetchWithAutoRetry = require('./retry.js')

describe('fetchWithAutoRetry', () => {
    it('should resolve on the first attempt', async () => {
        const fetcher = jest.fn().mockResolvedValue('success');
        const result = await fetchWithAutoRetry(fetcher, 3);
        expect(result).toBe('success');
        expect(fetcher).toHaveBeenCalledTimes(1);
    });

    it('should resolve after some retries', async () => {
        const fetcher = jest.fn()
            .mockRejectedValueOnce(new Error('failure'))
            .mockRejectedValueOnce(new Error('failure'))
            .mockResolvedValue('success');
        const result = await fetchWithAutoRetry(fetcher, 3);
        expect(result).toBe('success');
        expect(fetcher).toHaveBeenCalledTimes(3);
    });

    it('should reject after maximum retries', async () => {
        const fetcher = jest.fn().mockRejectedValue(new Error('failure'));
        await expect(fetchWithAutoRetry(fetcher, 3)).rejects.toThrow('failure');
        expect(fetcher).toHaveBeenCalledTimes(4); // Initial try + 3 retries
    });

    it('should not retry if maximum retry count is zero', async () => {
        const fetcher = jest.fn().mockResolvedValue('success');
        const result = await fetchWithAutoRetry(fetcher, 0);
        expect(result).toBe('success');
        expect(fetcher).toHaveBeenCalledTimes(1);
    });

    it('should handle immediate rejection', async () => {
        const fetcher = jest.fn().mockRejectedValue(new Error('immediate failure'));
        await expect(fetchWithAutoRetry(fetcher, 2)).rejects.toThrow('immediate failure');
        expect(fetcher).toHaveBeenCalledTimes(3); // Initial try + 2 retries
    });
});
