import {
    firstNames,
    surnames,
    surnameAugmentations,
    businessSuffixes
} from './data';
import Datagen from './Datagen';

class BusinessNameFactory extends Datagen {
    constructor() {
        super();
        this.firstNames = firstNames;
        this.surnames = surnames;
        this.surnameAugmentations = surnameAugmentations;
        this.businessSuffixes = businessSuffixes;
    }

    /**
     * Pluralize a given surname
     * @param {String} surname - the surname to pluralize
     * @returns {String} - the pluralized version of the given surname.
     */
    pluralizeSurname(surname) {
        return surname.charAt(surname.length-1) === 's' ? surname : `${surname}'s`;
    }

    /**
     * Pluralize a given set of intitials.
     * @param {String} initials - the initials to pluralize.
     * @returns {String} - the pluralized version of the initials.
     */
    pluralizeInitials(initials) {
        return initials.charAt(initials.length-1) === 'S' ? `${initials}'` : `${initials}'s`;
    }

    /**
     * Constructs a string consisting of a surname. The surname will either have an augmentation applied, or 
     * will be pluralized.
     * @returns {String} - the constructed string.
     */
    useSurnameFormat() {
        const surname = this.getRandomArrayElement(this.surnames);
        return this.probabilityGate(0.3) ? 
               `${surname} ${this.getRandomArrayElement(this.surnameAugmentations)}` :
               this.pluralizeSurname(surname);
    }

    /**
     * Consructs a string in the format: first name => surname, with a chance that the surname has an 
     * augmentation applied.
     * @returns {String} - the constructed string.
     */
    usefirstNameSurnameFormat() {
        const firstName = this.getRandomArrayElement(this.firstNames)
        const surname = this.getRandomArrayElement(this.surnames);
        return this.probabilityGate(0.3) ?
               `${firstName} ${surname} ${this.getRandomArrayElement(this.surnameAugmentations)}` :
               `${firstName} ${surname}`;
    }

    /**
     * Constructs a string consisting of initials.
     * @returns {String} - the constructed string.
     */
    useInitialsFormat() {
        const numOfInitials = this.getRandomNumFromRange(2, 3)
        return this.pluralizeInitials(this.getRandomInitials(numOfInitials));
    }

    /**
     * Constructs a string with the format: initials => surname, where the surname will either be pluralized,
     * or will have an augmentation applied.
     * @returns {String} - the constructed string.
     */
    useInitialsSurnameFormat() {
        const numOfInitials = this.getRandomNumFromRange(1, 2);
        const initials = this.getRandomInitials(numOfInitials);
        const surname = this.getRandomArrayElement(this.surnames);
        return this.probabilityGate(0.3) ?
               `${initials} ${surname} ${this.getRandomArrayElement(this.surnameAugmentations)}` :
               `${initials} ${this.pluralizeSurname(surname)}`;
    }

    /**
     * Randomly chooses one of the name formats and combines that with a service and optional business 
     * suffix to create a complete business name string. 
     * @param {String} service - the service classification for the business.
     * @returns {String} - the complete business name string.  
     */
    constructBusinessName(service) {
        const randomOneToFour = Math.ceil(Math.random() * 4);
        let firstHalf;
        switch (randomOneToFour) {
            case 1:
                firstHalf = this.useSurnameFormat();
                break;
            case 2:
                firstHalf = this.usefirstNameSurnameFormat();
                break;
            case 3:
                firstHalf = this.useInitialsFormat();
                break;
            case 4:
                firstHalf = this.useInitialsSurnameFormat();
                break;
            default:
                firstHalf = this.useSurnameFormat();
        }
        return this.probabilityGate(0.3) ?
               `${firstHalf} ${service} ${this.getRandomArrayElement(this.businessSuffixes)}` :
               `${firstHalf} ${service}`;
    }
}

export default BusinessNameFactory;
