/*
This module takes an already filtered and sorted subset of businesses, and returns a smaller subset of it 
according to the offset specified in the req object. As well as the subset of businesses, it also returns
pagination information.

*/

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

export default paginateBusinesses;