import businessGenerator from '../BusinessGenerator';
import processDBRequest from '../processDBRequest';
export class DB {
    constructor() {
        this.businesses = businessGenerator.constructManyBusinesses(500);
    }

    async getResults(req) {
        const MSDelay = Math.floor(Math.random() * 300);
        await new Promise(resolve => setTimeout(resolve, MSDelay));
        return processDBRequest(req, this.businesses);
    }
}
