import ResultsCache from './ResultsCache';
import networkSim from './networkSim';
import { 
    searchablePopularLocations,
    searchablePopularServices
} from '../data';

const servicesNetworkRequest = networkSim(searchablePopularServices);
const locationsNetworkRequest = networkSim(searchablePopularLocations);

export const servicesAutoCompleteCache = new ResultsCache(servicesNetworkRequest, 100);
export const locationsAutoCompleteCache = new ResultsCache(locationsNetworkRequest, 100);