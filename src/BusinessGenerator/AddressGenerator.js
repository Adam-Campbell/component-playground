import {
    locations,
    streetNames,
    streetTypes
} from './data';
import DataGenerator from './DataGenerator';

/**
 * A class for generating a random address including street address, city and postcode. 
 * @extends DataGenerator
 */
class AddressGenerator extends DataGenerator {
    
    constructor() {
        super();
        this.locations = locations;
        this.streetNames = streetNames;
        this.streetTypes = streetTypes;
    }

    /**
     * Randomly constructs a postcode formatted string.
     * @param {String} leadingLetter - the first letter of the city that this postcode should match.
     * @returns {String} - a postcode formatted string. 
     */
    getRandomPostcode(leadingLetter) {
        const randomNum1 = this.getRandomNumFromRange(1, 99);
        const randomNum2 = this.getRandomNumFromRange(1, 9);
        const randomLetters = this.getRandomInitials(2);
        return `${leadingLetter}${randomNum1} ${randomNum2}${randomLetters}`;
    }

    /**
     * Constructs a random street address string, comprised of a building number, street name, and street
     * type (road, street, lane etc).
     * @returns {String} - the street address string.
     */
    getRandomStreetAddress() {
        const streetNumber = this.getRandomNumFromRange(1, 150);
        const streetName = this.getRandomArrayElement(this.streetNames);
        const streetType = this.getRandomArrayElement(this.streetTypes)
        return `${streetNumber} ${streetName} ${streetType}`;
    }

    /**
     * Utilises the other class methods to construct a complete address, with a street address, city and
     * postcode.
     * @returns {Object} - an object containing the full address details. 
     */
    constructAddress() {
        const city = this.getRandomArrayElement(this.locations);
        const streetAddress = this.getRandomStreetAddress();
        const postcode = this.getRandomPostcode(city.charAt(0));
        return {
            city,
            streetAddress,
            postcode
        };
    }

}

export default AddressGenerator;
