import { servicesNetworkRequest, locationsNetworkRequest } from './dataRetreivalFunctions';

class ResultsCache {
    constructor(dataRetreivalFunc, cacheLimit) {
        if (!dataRetreivalFunc || ! cacheLimit) {
            throw new Error('dataRetreivalFunc and cacheLimit params must be set');
        }
        this.dataRetreivalFunc = dataRetreivalFunc;
        this.cacheLimit = cacheLimit;
        this.cache = new Map();
    }
    
    moveToFrontOfCache(key, value) {
        this.cache.delete(key);
        this.cache.set(key, value); 
    }

    removeOldestFromCache() {
        this.cache.delete(
            this.cache.keys().next().value
        )
    }

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


export const servicesWithCache = new ResultsCache(servicesNetworkRequest, 100);
export const locationsWithCache = new ResultsCache(locationsNetworkRequest, 100);