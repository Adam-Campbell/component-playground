/**
 * Base class that all of the other generator classes inherit methods from. 
 */
class Datagen {

    /**
     * Generates a random id string comprised of 16 characters in the range 0 - 9
     * @returns {String} - the generated id string.
     */
    generateRandomId() {
        return new Array(16).fill(null)
                            .map(() => Math.floor(Math.random() * 10).toString())
                            .join('');
    }

    /**
     * Given an array, return a randomly chosen element from that array.
     * @param {Array} array - the array to choose an element from.
     * @returns {Any} - the chosen element from the array.
     */
    getRandomArrayElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    /**
     * Given a min and max value, selects a random integer from the ranged described by min and max,
     * inclusive of both min and max.
     * @param {Number} min - the minimum desired number.
     * @param {Number} max - the maximum desired number.
     * @returns {Number} - a randomly chosen number from the range.
     */
    getRandomNumFromRange(min, max) {
        const range = (max - min) + 1;
        return Math.floor(Math.random() * range) + min;
    }

    /**
     * Creates and returns a string of a desired length, comprised of randomly chosen uppercase letters.
     * @param {Number} numOfInitials - the number of characters the should be in the generated string.
     * @returns {String} - the created string.
     */
    getRandomInitials(numOfInitials) {
        const letters = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];
        return new Array(numOfInitials)
                   .fill(0)
                   .map(el => letters[Math.round(Math.random() * 25)])
                   .join('');
    }

    /**
     * This method will either return true or false, with the probability of it returning true being equal to
     * the threshold argument supplied. 
     * @param {Float} threshold - a number between 0 (inclusive) and 1 (not inclusive), representing the desired 
     * probability of the function returning true. A value of 0.75 will yield a 75% probability of returning 
     * true.
     * @returns {Boolean}
     * 
     * Example: 
     * let color = probabilityGate(0.3) ? 'red' : 'blue';
     * // color will be 'red' 30% of the time and 'blue' 70% of the time.
     * 
     */
    probabilityGate(threshold) {
        return Math.random() <= threshold;
    }

    /**
     * Randomly picks a given number of elements from a given array, such that the same element is not picked
     * more than once. 
     * @param {Array} array - the array to pick elements from. 
     * @param {Number} numOfElementsToPick - the number of elements to pick from the array.
     * @returns {Array} - an array containing all of the elements that were picked. 
     */
    getManyRandomArrayElements(array, numOfElementsToPick) {
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

        return recursivePickWithoutDupes(array, numOfElementsToPick, []);
    }
}

export default Datagen;