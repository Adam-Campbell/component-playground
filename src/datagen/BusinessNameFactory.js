import {
    firstNames,
    surnames,
    surnameAugmentations,
    businessSuffixes
} from './data';

class BusinessNameFactory {
    constructor() {
        this.firstNames = firstNames;
        this.surnames = surnames;
        this.surnameAugmentations = surnameAugmentations;
        this.businessSuffixes = businessSuffixes;
    }

    getRandomFirstName() {
        const randomIndex = Math.round(Math.random() * (this.firstNames.length - 1));
        return this.firstNames[randomIndex];
    }

    getRandomSurname() {
        const randomIndex = Math.round(Math.random() * (this.surnames.length - 1));
        return this.surnames[randomIndex];
    }

    getRandomBusinessSuffix() {
        const randomIndex = Math.round(Math.random() * (this.businessSuffixes.length - 1));
        return this.businessSuffixes[randomIndex];
    }

    getRandomSurnameAugmentation() {
        const randomIndex = Math.round(Math.random() * (this.surnameAugmentations.length - 1));
        return this.surnameAugmentations[randomIndex];
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

    pluralizeSurname(surname) {
        return surname.charAt(surname.length-1) === 's' ? surname : `${surname}'s`;
    }

    pluralizeInitials(initials) {
        return initials.charAt(initials.length-1) === 'S' ? `${initials}'` : `${initials}'s`;
    }

    /**
     * Given a threshold value of how likely you want the probability of an event happening to be, this
     * methods determines whether that event should occur on this particular attempt, returning true if the
     * event should occur, and false if not. 
     * @param {Float} threshold - a number between 0 and 1 (not inclusive), representing the desired probability
     * of the event occuring. A value of 0.75 will yield a 75% probability.
     * 
     * Usage: 
     * if (probabilityGate(0.3)) doThing()
     * 
     * doThing() will be called 30% of the time. 
     * 
     */
    probabilityGate(threshold) {
        return Math.random() <= threshold;
    }

    useSurnameFormat() {
        const surname = this.getRandomSurname();
        return this.probabilityGate(0.3) ? 
               `${surname} ${this.getRandomSurnameAugmentation()}` :
               this.pluralizeSurname(surname);
    }

    usefirstNameSurnameFormat() {
        const firstName = this.getRandomFirstName();
        const surname = this.getRandomSurname();
        return this.probabilityGate(0.3) ?
               `${firstName} ${surname} ${this.getRandomSurnameAugmentation()}` :
               `${firstName} ${surname}`;
    }

    useInitialsFormat() {
        const numOfInitials = this.probabilityGate(0.5) ? 2 : 3;
        return this.pluralizeInitials(this.getRandomInitials(numOfInitials));
    }

    useInitialsSurnameFormat() {
        const numOfInitials = this.probabilityGate(0.5) ? 1 : 2;
        const initials = this.getRandomInitials(numOfInitials);
        const surname = this.getRandomSurname();
        return this.probabilityGate(0.3) ?
               `${initials} ${surname} ${this.getRandomSurnameAugmentation()}` :
               `${initials} ${this.pluralizeSurname(surname)}`;
    }

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
               `${firstHalf} ${service} ${this.getRandomBusinessSuffix()}` :
               `${firstHalf} ${service}`;
    }
}

export default BusinessNameFactory;

/*

naming strategies

last name (pluralized || aug) +            service (poss suffix)
first name + lastname (poss aug) +         service (poss suffix)
initials (pluralized) +                    service (poss suffix)
initials + last name (pluralized || aug) + service (poss suffix)


*/