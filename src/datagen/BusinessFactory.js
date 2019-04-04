import { 
    locations,
    services,
    TLDs,
    emailPrefixes,
    areaCodes
} from './data';
import BusinessNameFactory from './BusinessNameFactory';
import AddressFactory from './AddressFactory';
import { getRandomElementsFromArray } from './utils';


class BusinessFactory {
    constructor() {
  	    this.locations = locations;
        this.services = services;
        this.TLDs = TLDs;
        this.emailPrefixes = emailPrefixes;
        this.areaCodes = areaCodes
        this.businessNameFactory = new BusinessNameFactory();
        this.addressFactory = new AddressFactory();
    }
  
    getRandomService() {
  	    const randomIndex = Math.round(Math.random() * (this.services.length - 1));
        return this.services[randomIndex];
    }

    getRandomTLD() {
        const randomIndex = Math.round(Math.random() * (this.TLDs.length - 1));
        return this.TLDs[randomIndex];
    }

    getArrayOfRandomServices() {
        const numOfServices = Math.ceil(Math.random()* 3);
        return getRandomElementsFromArray(this.services, numOfServices);
    }

    getRandomRatings() {
        const numOfRatings = Math.floor(Math.random() * 10);
        return new Array(numOfRatings).fill(0).map(el => Math.round(Math.random() * 5));
    }

    getRandomWebsite(businessName) {
        if (this.probabilityGate(0.8)) {
            const formattedBusinessName = businessName.replace(/&/g, 'and')
                                                      .replace(/ /g, '')
                                                      .replace(/'/g, '')
                                                      .toLowerCase();
            return `${formattedBusinessName}${this.getRandomTLD()}`;
        } else {
            return null;
        }
    }

    getRandomEmailPrefix() {
        const randomIndex = Math.round(Math.random() * (this.emailPrefixes.length - 1));
        return this.emailPrefixes[randomIndex];
    }

    getRandomEmailAddress(webAddress) {
        if (webAddress === null) {
            return null;
        }
        return this.probabilityGate(0.7) ? `${this.getRandomEmailPrefix()}${webAddress}` :
                                            null;
    }

    getRandomNumBetween(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }

    getRandomAreaCode() {
        const randomIndex = Math.round(Math.random() * (this.areaCodes.length - 1));
        return this.areaCodes[randomIndex];
    }

    getRandomTelephoneNumber() {
        const areaCode = this.getRandomAreaCode();
        const firstSection = this.getRandomNumBetween(1000, 9999);
        const secondSection = this.getRandomNumBetween(100, 999);
        return `${areaCode} ${firstSection} ${secondSection}`;
    }

    probabilityGate(threshold) {
        return Math.random() <= threshold;
    }
  
    constructBusiness() {
        const location = this.addressFactory.constructAddress();
        const services = this.getArrayOfRandomServices();
        const businessName = this.businessNameFactory.constructBusinessName(services[0]);
        const ratings = this.getRandomRatings();
        const website = this.getRandomWebsite(businessName);
        const email = this.getRandomEmailAddress(website);
        const telephoneNumber = this.getRandomTelephoneNumber();
        const business = {
            name: businessName,
            location,
            services,
            ratings,
            website,
            email,
            telephoneNumber
        };
        return business;
    }
  
    constructManyBusinesses(numOfBusinesses) {
  	    return new Array(numOfBusinesses).fill(null).map(el => this.constructBusiness());
    }
}

export default BusinessFactory;
