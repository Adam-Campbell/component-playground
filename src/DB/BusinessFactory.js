import { 
    locations,
    services,
    TLDs,
    emailPrefixes,
    areaCodes
} from './data';
import BusinessNameFactory from './BusinessNameFactory';
import AddressFactory from './AddressFactory';
import ReviewFactory from './ReviewFactory';
import Datagen from './Datagen';

class BusinessFactory extends Datagen {
    constructor() {
        super();
  	    this.locations = locations;
        this.services = services;
        this.TLDs = TLDs;
        this.emailPrefixes = emailPrefixes;
        this.areaCodes = areaCodes
        this.businessNameFactory = new BusinessNameFactory();
        this.addressFactory = new AddressFactory();
        this.reviewFactory = new ReviewFactory();
    }

    /**
     * This method has a 0.8 probability of creating a web address, else it returns null. If a web address is 
     * created, it is based off of the given business name plus a random TLD.
     * @param {String} businessName - the name of the business.
     * @returns {?String} - either the created string, or null.
     */
    getRandomWebsite(businessName) {
        if (this.probabilityGate(0.8)) {
            const formattedBusinessName = businessName.replace(/&/g, 'and')
                                                      .replace(/ /g, '')
                                                      .replace(/'/g, '')
                                                      .toLowerCase();
            return `${formattedBusinessName}${this.getRandomArrayElement(this.TLDs)}`;
        } else {
            return null;
        }
    }

    /**
     * This method will always return null if the web address is also null. If the web address is not null,
     * it has 0.7 probability of creating an email address, which will be based off of the given web address
     * plus a random prefix. 
     * @param {?String} webAddress - the web address to construct the email address from. 
     * @returns {?String} - either the created email address string, or null.
     */
    getRandomEmailAddress(webAddress) {
        if (webAddress === null) {
            return null;
        }
        return this.probabilityGate(0.7) ? 
               `${this.getRandomArrayElement(this.emailPrefixes)}${webAddress}` :
               null;
    }

    /**
     * Randomly constructs a telephone number formatted string. 
     * @returns {String} - the constructed phone number string. 
     */
    getRandomTelephoneNumber() {
        const areaCode = this.getRandomArrayElement(this.areaCodes);
        const firstSection = this.getRandomNumFromRange(1000, 9999);
        const secondSection = this.getRandomNumFromRange(100, 999);
        return `${areaCode} ${firstSection} ${secondSection}`;
    }

    /**
     * If there are no reviews this method returns null, however if there are reviews it returns the average
     * rating from those reviews rounded to one decimal place. 
     * @param {Array} reviewsArray - an array of 0 or more review objects. 
     * @returns {?Number} - either the average rating, or null.
     */
    getAverageRating(reviewsArray) {
        if (!reviewsArray.length) {
            return null;
        }
        const untrimmed = reviewsArray
                          .reduce((acc, review) => (acc + review.rating), 0) / reviewsArray.length;
        const trimmed = Math.round(untrimmed * 10) / 10;
        return trimmed;
    }
  
    /**
     * Utilises the other class methods to construct and return a business object.
     * @returns {Object} - a business object.
     */
    constructBusiness() {
        const location = this.addressFactory.constructAddress();
        const services = this.getManyRandomArrayElements(
            this.services, 
            this.getRandomNumFromRange(1,3)
        );
        const businessName = this.businessNameFactory.constructBusinessName(services[0]);
        const website = this.getRandomWebsite(businessName);
        const email = this.getRandomEmailAddress(website);
        const telephoneNumber = this.getRandomTelephoneNumber();
        // 40% chance of not having any reviews, remaning 60% split evenly from 1 to 9 reviews
        const numOfReviewsToConstruct = this.probabilityGate(0.4) ? 0 : this.getRandomNumFromRange(1, 9);
        const reviews = this.reviewFactory.constructManyReviews(numOfReviewsToConstruct);
        const numberOfReviews = reviews.length;
        const averageRating = this.getAverageRating(reviews);
        const photos = this.probabilityGate(0.6);
        const videos = this.probabilityGate(0.4);
        const messaging = this.probabilityGate(0.4);
        const business = {
            name: businessName,
            location,
            services,
            reviews,
            numberOfReviews,
            averageRating,
            website,
            email,
            telephoneNumber,
            photos,
            videos,
            messaging
        };
        return business;
    }
  
    /**
     * Utilises the constructBusiness method to construct an array of many business objects.
     * @param {Number} numOfBusinesses - the numbet of business objects to construct. 
     * @returns {Array} - the array of constructed business objects.
     */
    constructManyBusinesses(numOfBusinesses) {
  	    return new Array(numOfBusinesses).fill(null).map(el => this.constructBusiness());
    }
}

export default BusinessFactory;
