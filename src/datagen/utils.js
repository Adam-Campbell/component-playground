/**
 * Recursively picks elements randomly from an array, such that no duplicates are produced.
 * @param {Array} arrayToPickFrom - the array to pick a random element from
 * @param {Integer} leftToPick - the number of random elements left to pick
 * @param {Array} arrayOfPicks - the array of picks that have been made so far.
 */
const recursivePickWithoutDupes = (arrayToPickFrom, leftToPick, arrayOfPicks) => {
    if (leftToPick < 1) {
        return arrayOfPicks;
    }
    const randomIndex = Math.floor(Math.random() * arrayToPickFrom.length);
    const newPick = arrayToPickFrom[randomIndex];
    const newArrayToPickFrom = [
        ...arrayToPickFrom.slice(0, randomIndex),
        ...arrayToPickFrom.slice(randomIndex+1)
    ];
    const newArrayOfPicks = [
        ...arrayOfPicks,
        newPick
    ];
    const newLeftToPick = leftToPick - 1;
    return recursivePickWithoutDupes(newArrayToPickFrom, newLeftToPick, newArrayOfPicks);
};

/**
 * A wrapper around recursivePickWithoutDupes. It provides a slightly nicer interface for other parts of the 
 * codebase that utilise the function, as well as adding some input validation (that only needs to occur once 
 * before the recursion begins, rather than on every recursive call).
 * @param {Array} array - the array to pick elements randomly from.
 * @param {Integer} numOfElementsToPick - the number of elements to pick.
 */
export const getRandomElementsFromArray = (array, numOfElementsToPick) => {
    // Throw error if numOfElementsToPick is not an integer
    if (numOfElementsToPick % 1 !== 0) {
        throw new Error('The numOfElementsToPick argument must be an integer');
    }
    if (numOfElementsToPick < 1) {
        throw new Error('The numbOfElementsToPick argument cannot be less than 1');
    }
    // Throw error if the numOfElementsToPick is greater then length of array to pick from
    if (numOfElementsToPick > array.length) {
        throw new Error('The numOfElementsToPick argument cannot be greater than the length of the array');
    }
    return recursivePickWithoutDupes(array, numOfElementsToPick, []);
};