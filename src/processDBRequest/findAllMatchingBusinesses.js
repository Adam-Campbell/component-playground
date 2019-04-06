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

const doesIncludeBusinessFunction = (businessFunction) => (business) => { 
    for (let service of business.services) {
        if (service.toLowerCase().includes(businessFunction)) {
            return true;
        }
    }
    return false;
};

const doesMatchLocation = (location) => (business) => business.location.city.toLowerCase().includes(location);
const doesHaveWebsite = (business) => business.website !== null;
const doesHaveReviews = (business) => business.reviews.length > 0;
const doesHavePhotos = (business) => business.photos !== null;
const doesHaveVideos = (business) => business.videos;
const doesHaveMessaging = (business) => business.messaging;

export const constructMatchersArray = (req) => {
    const matchersArray = [
        doesIncludeBusinessFunction(req.businessFunction),
        doesMatchLocation(req.location)
    ];
    if (req.category) {
        matchersArray.push(doesIncludeBusinessFunction(req.category));
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
    return matchersArray;
};


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