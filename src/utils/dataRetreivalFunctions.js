import { 
    searchablePopularLocations,
    searchablePopularServices
} from '../data';

const networkSim = (data) => async (query) => {
    //console.log('networkSim was called');
    const MSDelay = Math.floor(Math.random() * 300);
    await new Promise(resolve => setTimeout(resolve, MSDelay));
    return data.filter(el => el.includes(query));
}

export const servicesNetworkRequest = networkSim(searchablePopularServices);
export const locationsNetworkRequest = networkSim(searchablePopularLocations);

