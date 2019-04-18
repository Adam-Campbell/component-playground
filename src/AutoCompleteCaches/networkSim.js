/**
 * Retreives a subset of a set of data, but only after waiting for a random amount of time between 0 and 300ms
 * in order to simulate a network request. This function must be called once with the dataset that is to be used,
 * which the returns another function that can be called with various queries and will operate on that dataset.
 * @param {Array} data - the dataset to operate on.
 * @param {String} query - the query to check against that dataset.
 * @returns {Array} - a subset of the original dataset.
 */
const networkSim = (data) => async (query) => {
    const MSDelay = Math.floor(Math.random() * 300);
    await new Promise(resolve => setTimeout(resolve, MSDelay));
    return data.filter(el => el.includes(query));
}

export default networkSim;