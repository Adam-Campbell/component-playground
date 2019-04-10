/*

This module takes the subset of businesses returned from findAllMatchingBusinesses, and sorts it according
to the sort order specified in the req object. 

*/

/**
 * Takes an array of businesses and sorts them by 'relevance' in respect to a given service. In reality it simply
 * sorts them according to where abouts that service appears within that businesses services array (businesses
 * who have the service in the first position of their services array are more 'relevant' than business who have
 * that service in the second position, etc).
 * @param {Array} businessesArray - an array of business objects to be sorted.
 * @param {String} service - the service to sort by.
 * @returns {Array} - the sorted array of business objects. 
 */
const sortByRelevance = (businessesArray, service) => {
    return businessesArray.sort((businessA, businessB) => {
        const a = businessA.services.findIndex(el => el.toLowerCase().includes(service));
        const b = businessB.services.findIndex(el => el.toLowerCase().includes(service));
        return a - b;
    });
}

/**
 * Takes an array of businesses and sorts them according to their rating, with the highest ratings coming first.
 * In this implementation businesses with no ratings (and thus a ratings value of null) will be treated as 0, and
 * therefore will come last. A proper implementation should filter these businesses out and exclude them however.
 * @param {Array} businessesArray - the array of business objects to be sorted.
 * @returns {Array} - the sorted array of business objects.
 */
const sortByRating = (businessesArray) => {
    return businessesArray.sort((a, b) => b.averageRating - a.averageRating);
}

/**
 * Takes an array of businesses and sorts them according to how many reviews they have, with the businesses who
 * have the most reviews coming first. 
 * @param {Array} businessesArray - the array of business objects to be sorted.
 * @returns {Array} - the sorted array of business objects.
 */
const sortByNumberOfReviews = (businessesArray) => {
    return businessesArray.sort((a, b) => b.numberOfReviews - a.numberOfReviews);
}

/**
 * Takes a list of unsorted businesses and a request object, and sorts the businesses according to the sortby
 * parameter on the request object, delegating to the appropriate sorting function. Note that sorting by distance
 * has not been implemented, so it simply falls back sorting by relevance. 
 * @param {Array} businessesArray - the array of business objects to sort.
 * @param {Object} req - the request object with which to determine the correct sorting method.
 * @returns {Array} - the sorted array of business objects. 
 */
const sortBusinesses = (businessesArray, req) => {
    switch (req.sortby) {
        case 'relevance':
            return sortByRelevance(businessesArray, req.businessFunction);
        case 'distance': 
            return sortByRelevance(businessesArray, req.businessFunction);
        case 'rating':
            return sortByRating(businessesArray);
        case 'mostreviewed':
            return sortByNumberOfReviews(businessesArray);
        default:
            return sortByRelevance(businessesArray, req.businessFunction);
    }
}

export default sortBusinesses
