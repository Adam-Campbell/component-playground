export const getAdditionalCategories = (resultsArr, currentCategoryState) => {
    const withDupes = resultsArr.reduce((acc, result) => ([...acc, ...result.services]), []);
    const deduped = [...new Set(withDupes)];
    const transformedToObjects = deduped.map(result => ({
        text: result.toLowerCase(),
        id: result.toLowerCase().replace(/ /g, '')
    }));
    return transformedToObjects;
};

export const constructDBRequestObject = (service, location, category, contentrequirements, sortby, offset) => {
    const req = {
        businessFunction: service,
        location,
        sortby,
        offset
    };
    if (category) req.category = category;
    if (contentrequirements.includes('websites')) req.requireWebsite = true;
    if (contentrequirements.includes('photos')) req.requirePhotos = true;
    if (contentrequirements.includes('reviews')) req.requireReviews = true;
    if (contentrequirements.includes('messaging')) req.requireMessaging = true;
    return req;
};

export const constructBreadcumbData = (location, service) => ([
    {
        url: '/',
        text: 'home'
    },
    {
        url: '/',
        text: location
    },
    {
        url: `/results/${encodeURIComponent(service)}/${encodeURIComponent(location)}/`,
        text: service
    },
]);


const defaultFilterState = {
    category: null,
    contentrequirements: [],
    distance: null,
    locationrefinement: null,
    sortby: 'relevance'
};

export const mergeState = (newState) => ({
    ...defaultFilterState,
    ...newState,
    offset: newState.offset ? parseInt(newState.offset) : 0,
    contentrequirements: newState.contentrequirements && newState.contentrequirements.length ?
                         newState.contentrequirements.split(',') :
                         []
});