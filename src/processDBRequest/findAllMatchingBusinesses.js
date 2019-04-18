/*

This module is responsible for filtering the set of all businesses down into a subset of businesses that 
match all of the params specified in the req object. 

First the req object is parsed and an array of matcher functions is constructed based on which params are 
present in the req object. A matcher function tests that a particular business meets the requirements for
a specific param, and so the businesses that pass all matcher functions in the matchers array will be the
set of businesses that meet the requirements specified by the req object.

The module then maps over the entire set of businesses, returning only the ones that satisfy all matcher 
functions in the matchers array. 

When checking a business against the matchers array, as soon as one matcher function fails, that business 
stops being checked and any remaning matcher functions do not run against that business. Additionally, the
matcher functions that are most likely to fail are tested first. In this way, unnecessary checks are minimized.

*/


/**
 * A matcher function for business services. Takes a business and a service, and returns true if the business
 * includes that service, otherwise false. Utilises partial application, the first call sets the service and 
 * returns a function that accepts the business, to be tested against that service. This allows it to called
 * with a single argument, the same way most of the other matcher functions are.  
 * @param {String} service - the service to check for.
 * @param {Object} business - the business to check.
 * @returns {Boolean} - whether or not the given business includes the given service.
 */
const doesIncludeService = (service) => (business) => { 
    for (let serviceString of business.services) {
        if (serviceString.toLowerCase().includes(service)) {
            return true;
        }
    }
    return false;
};

/**
 * Checks whether a business matches a given location, returning true if it does, and false if it does not. 
 * Partially applied for the same reason as the doesIncludeService function. 
 * @param {String} location - the location to test for.
 * @param {Object} business - the business to test.
 * @returns {Boolean} - whether or not the given business matches the given location.
 */
const doesMatchLocation = (location) => (business) => business.location.city.toLowerCase().includes(location);

/**
 * Returns true if the given business has a website, else returns false.
 * @param {Object} business - the business to test.
 * @returns {Boolean} - whether or not the given business has a website.
 */
const doesHaveWebsite = (business) => business.website !== null;

/**
 * Returns true if the given business has reviews, else returns false.
 * @param {Object} business - the business to test.
 * @returns {Boolean} - whether or not the given business has reviews.
 */
const doesHaveReviews = (business) => business.reviews.length > 0;

/**
 * Returns true if the given business has photos, else returns false.
 * @param {Object} business - the business to test.
 * @returns {Boolean} - whether or not the given business has photos.
 */
const doesHavePhotos = (business) => business.photos !== null;

/**
 * Returns true if the given business has videos, else returns false.
 * @param {Object} business - the business to test.
 * @returns {Boolean} - whether or not the given business has videos. 
 */
const doesHaveVideos = (business) => business.videos;

/**
 * Returns true if the given business has messaging, else returns false. 
 * @param {Object} business - the business to test.
 * @returns {Boolean} - whether or not the given business has messaging.  
 */
const doesHaveMessaging = (business) => business.messaging;

/**
 * Takes the request object and uses its params to determine which matcher function should be used to process
 * this request. The required matcher functions are added to an array, with the ones that require partial
 * application being called in the process. 
 * @param {Object} req - the request object supplied to the module. 
 * @returns {Array} - an array of matcher to functions to be called against each business in the DB in order
 * to process the request.
 */
const constructMatchersArray = (req) => {
    const matchersArray = [
        doesIncludeService(req.businessFunction),
        doesMatchLocation(req.location)
    ];
    if (req.category) {
        matchersArray.push(doesIncludeService(req.category));
    }
    if (req.requireWebsite) {
        matchersArray.push(doesHaveWebsite);
    }
    if (req.requirePhotos) {
        matchersArray.push(doesHavePhotos);
    }
    if (req.requireReviews) {
        matchersArray.push(doesHaveReviews);
    }
    if (req.requireMessaging) {
        matchersArray.push(doesHaveMessaging);
    }
    if (req.requireVideos) {
        matchersArray.push(doesHaveVideos);
    }
    return matchersArray;
};

/**
 * Takes in the array of all businesses in the DB and a supplied request object, then uses the other functions
 * in this module to filter down the array of businesses and return a subset containing the businesses that met
 * all parameters on the request object.
 * @param {Array} allBusinesses - array of all businesses in the DB.
 * @param {Object} req - the request object supplied.
 * @returns {Array} - an array containing the subset of businesses that match all of the supplied parameters.
 */
const findAllMatchingBusinesses = (allBusinesses, req) => {
    const matchersArray = constructMatchersArray(req);
    return allBusinesses.filter((business) => {
        for (let matcher of matchersArray) {
            if (!matcher(business)) {
                return false;
            }
        }
        return true;
    });
}

export default findAllMatchingBusinesses;