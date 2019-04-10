/*
This module takes an already filtered and sorted subset of businesses, and returns a smaller subset of it 
according to the offset specified in the req object. As well as the subset of businesses, it also returns
pagination information.

*/

/**
 * Takes an array of businesses, returns a subset of those businesses based on the offset value of the supplied
 * request object. The array containing the subset of businesses is retured as part of an object which also 
 * contains pagination information.
 * @param {Array} businessesArray - the array of business objects.
 * @param {Object} req - the request object containing the offset value to use.
 * @returns {Object} - an object containing the a subset of the original businesses array along with pagination
 * information. 
 */
const paginateBusinesses = (businessesArray, req) => {
    let numPerPage = 10;
    const totalPages = Math.ceil(businessesArray.length / numPerPage);
    if (!req.offset || req.offset >= totalPages) {
        return {
            businesses: businessesArray.slice(0, numPerPage),
            currentPage: 1,
            totalPages
        };
    }
    return {
        businesses: businessesArray.slice(req.offset * numPerPage, req.offset * numPerPage + numPerPage),
        currentPage: req.offset + 1,
        totalPages
    }
}

export default paginateBusinesses;