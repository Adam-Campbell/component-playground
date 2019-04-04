import {
    locations,
    streetNames,
    streetTypes
} from './data';

class AddressFactory {
    constructor() {
        this.locations = locations;
        this.streetNames = streetNames;
        this.streetTypes = streetTypes;
    }

    getRandomCity() {
        const randomIndex = Math.round(Math.random() * (this.locations.length - 1));
        return this.locations[randomIndex];
    }

    getRandomStreetName() {
        const randomIndex = Math.round(Math.random() * (this.streetNames.length - 1));
        return this.streetNames[randomIndex];
    }

    getRandomStreetType() {
        const randomIndex = Math.round(Math.random() * (this.streetTypes.length - 1));
        return this.streetTypes[randomIndex];
    }

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

    getRandomPostcode(leadingLetter) {
        // get random num between 1 and 99
        const randomNum1 = Math.ceil(Math.random() * 99);
        // get random num between 1 and 9
        const randomNum2 = Math.ceil(Math.random() * 9);
        // get a string of two random lowercase letters
        const randomLetters = this.getRandomInitials(2);
        // return as ${leadingLetter}${randomNum1} ${randomNum2}${randomLetters}
        return `${leadingLetter}${randomNum1} ${randomNum2}${randomLetters}`;
    }

    getRandomStreetAddress() {
        const streetNumber = Math.ceil(Math.random() * 150);
        const streetName = this.getRandomStreetName();
        const streetTypes = this.getRandomStreetType();
        return `${streetNumber} ${streetName} ${streetTypes}`;
    }

    constructAddress() {
        const city = this.getRandomCity();
        const streetAddress = this.getRandomStreetAddress();
        const postcode = this.getRandomPostcode(city.charAt(0));
        return {
            city,
            streetAddress,
            postcode
        };
    }

    
}

export default AddressFactory;