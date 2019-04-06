import findAllMatchingBusinesses, { constructMatchersArray } from './findAllMatchingBusinesses';
import sortBusinesses from './sortBusinesses';
import paginateBusinesses from './paginateBusinesses';

/*

This module searches all of the businesses in a supplied dataset of businesses, returning a subset of those 
businesses, filtered and sorted according to params present in the req object passed in.

*/

export const processDBRequest = (req, allBusinesses) => {
    const matchingBusinesses = findAllMatchingBusinesses(allBusinesses, req);
    const sortedBusinesses = sortBusinesses(matchingBusinesses, req);
    const paginatedBusinesses = paginateBusinesses(sortedBusinesses, req);
    return paginatedBusinesses;
}