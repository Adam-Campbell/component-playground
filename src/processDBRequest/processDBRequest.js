import findAllMatchingBusinesses from './findAllMatchingBusinesses';
import sortBusinesses from './sortBusinesses';
import paginateBusinesses from './paginateBusinesses';


/**
 * Takes all of the businesses in the DB and returns a filtered and sorted subset matching the paramaters 
 * supplied in the req object.
 * @param {Object} req - object containing the various parameters to filter and sort the businesses by.
 * @param {Array} allBusinesses - an array of all the businesses currently in the DB.
 * @returns {Object} - an object containing the sorted array of businesses that matched all of the parameters
 * specified, as well as pagination information. 
 */
export const processDBRequest = (req, allBusinesses) => {
    const matchingBusinesses = findAllMatchingBusinesses(allBusinesses, req);
    const sortedBusinesses = sortBusinesses(matchingBusinesses, req);
    const paginatedBusinesses = paginateBusinesses(sortedBusinesses, req);
    return paginatedBusinesses;
};
