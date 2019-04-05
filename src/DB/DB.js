import BusinessFactory from './BusinessFactory';
import processRequest from './processRequest';
class DB {
    constructor() {
        this.businessFactory = new BusinessFactory();
        this.businesses = this.businessFactory.constructManyBusinesses(5000);
    }

    getResults(req) {
        return processRequest(req, this.businesses);
    }
}

export const db = new DB();

