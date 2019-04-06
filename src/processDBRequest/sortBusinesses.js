/*

This module takes the subset of businesses returned from findAllMatchingBusinesses, and sorts it according
to the sort order specified in the req object. 

*/

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
