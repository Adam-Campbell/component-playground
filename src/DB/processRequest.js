
// this can be used for the main business function as well as the optional additional category requirements,
// it just needs to be partially applied an additional time with the additional category as the first arg.
const doesIncludeBusinessFunction = (businessFunction) => (business) => { 
    // return business.services
    //                .map(service => service.toLowerCase())
    //                .includes(businessFunction);
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

const doesHaveVideos = (business) => business.videos !== null;

const doesHaveMessaging = (business) => business.messaging !== null;


/*
Example req object:

{
    businessFunction: {String} - mandatory,
    location: {String} - mandatory,
    category: {String} - optional,
    requireWebsite: {Boolean} - optional,
    requirePhotos: {Boolean} - optional,
    requireReviews: {Boolean} - optional,
    requireMessaging: {Boolean} - optional,
    requireVideos: {Boolean} - optional
    sortBy: {String} - optional, defaults to 'relevance' if omitted,
    offset: ${Number} - optional, defaults to 1 if omitted.
}
*/


const constructMatchersArray = (req) => {
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


const findAllMatchingBusinesses = (matchersArray, allBusinesses) => {
    return allBusinesses.filter((business) => {
        for (let matcher of matchersArray) {
            if (!matcher(business)) {
                return false;
            }
        }
        return true;
    });
}

const sortByRelevance = (businessesArray, businessFunction) => {
    return businessesArray.sort((businessA, businessB) => {
        const a = businessA.services.findIndex(el => el.toLowerCase().includes(businessFunction));
        const b = businessB.services.findIndex(el => el.toLowerCase().includes(businessFunction));
        return a - b;
    });
}

const sortByRating = (businessesArray) => {
    return businessesArray.sort((a, b) => b.averageRating - a.averageRating);
}

const sortByNumberOfReviews = (businessesArray) => {
    return businessesArray.sort((a, b) => b.numberOfReviews - a.numberOfReviews);
}

const sortBusinesses = (businessesArray, req) => {
    switch (req.sortBy) {
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

const paginateBusinesses = (businessesArray, req) => {
    const totalPages = Math.ceil(businessesArray.length / 25);
    if (!req.offset || req.offset >= totalPages) {
        return {
            businesses: businessesArray.slice(0, 25),
            currentPage: 1,
            totalPages
        };
    }
    return {
        businesses: businessesArray.slice(req.offset * 25, req.offset * 25 + 25),
        currentPage: req.offset,
        totalPages
    }

}

const processRequest = (req, allBusinesses) => {
    const matchersArray = constructMatchersArray(req);
    const matchingBusinesses = findAllMatchingBusinesses(matchersArray, allBusinesses);
    const sortedBusinesses = sortBusinesses(matchingBusinesses, req);
    const paginatedBusinesses = paginateBusinesses(sortedBusinesses, req);
    return paginatedBusinesses;
    //return sortedBusinesses;
}

export default processRequest;
