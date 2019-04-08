/**
 * A barebones implementation of an LRU cache, designed to be used in conjunction with asynchronous requests.
 */
class ResultsCache {
    /**
     * Create Cache instance
     * @param {Function} dataRetreivalFunc - the function used to retreive data if it isn't in cache.
     * @param {*} cacheLimit - the maximum amount of results to store before removing old results.
     */
    constructor(dataRetreivalFunc, cacheLimit) {
        if (!dataRetreivalFunc || ! cacheLimit) {
            throw new Error('dataRetreivalFunc and cacheLimit params must be set');
        }
        this.dataRetreivalFunc = dataRetreivalFunc;
        this.cacheLimit = cacheLimit;
        this.cache = new Map();
    }
    
    /**
     * Remove an item from its current position in the cache and move it to the front of the cache (that is to
     * say, the last position in the map if going by insertion order).
     * @param {String} key - the key to be moved to the front.
     * @param {Array} value - the value corresponding to the key.
     */
    moveToFrontOfCache(key, value) {
        this.cache.delete(key);
        this.cache.set(key, value); 
    }

    /**
     * Remove the oldest element from the cache (the first element in the map, going by insertion order).
     */
    removeOldestFromCache() {
        this.cache.delete(
            this.cache.keys().next().value
        )
    }

    /**
     * Process an incoming query, returning the results from the cache if already present, else executing the
     * dataRetreivalFunc and then caching and returning the result.
     * @param {String} query - the query to process.
     * @returns {Array} - the array of results.
     */
    async getResults(query) {
        let results;
        // if query is already in cache, move query to front of cache and return queries results
        if (this.cache.has(query)) {
            results = this.cache.get(query);
            this.moveToFrontOfCache(query, results);
        
        // if query is not alreay in cache, call dataRetreivalFunc to get the results for the query, 
        // then store query and results in cache (will automatically go to front).
        } else {
            results = await this.dataRetreivalFunc(query);
            this.cache.set(query, results);
        }
        // finally, check cache size. If it is at the limit, remove the oldest entries from the cache.
        if (this.cache.size > this.cacheLimit) {
            this.removeOldestFromCache();
        } 
        return results;
    }
}

export default ResultsCache;
