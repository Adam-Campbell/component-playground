import {
    loremIpsumPassages,
    firstNames,
    surnames,
    reviewTitles
} from './data';
import DataGenerator from './DataGenerator';

class ReviewGenerator extends DataGenerator {

    constructor() {
        super();
        this.loremIpsumPassages = loremIpsumPassages;
        this.firstNames = firstNames;
        this.surnames = surnames;
        this.reviewTitles = reviewTitles
    }

    /**
     * Randomly creates an author string consisting of a first and last name.
     * @returns {String} - the author string.
     */
    getRandomAuthor() {
        return `${this.getRandomArrayElement(this.firstNames)} ${this.getRandomArrayElement(this.surnames)}`;
    }

    /**
     * Randomly constructs a review body in the form of an array of random lorem ipsum strings.
     * @returns {Array} - the created array of lorem ipsum strings.
     */
    getRandomReviewBody() {
        const numOfParagraphs = this.getRandomNumFromRange(2, this.loremIpsumPassages.length);
        return this.getManyRandomArrayElements(this.loremIpsumPassages, numOfParagraphs);
    }

    /**
     * Grabs a random title from the data in this.reviewTitles. Note that reviewTitles is a two dimensional 
     * array, and thus reviewTitles[starRating-1] is an array containing review titles corresponding to the 
     * given star rating. 
     * @param {Number} starRating - the star rating to use.
     * @returns {String} - a randomly selected title from the pool of titles corresponding to the star rating. 
     */
    getRandomTitle(starRating) {
        return this.getRandomArrayElement(this.reviewTitles[starRating-1]);
    }

    /**
     * Utilises the other class methods to create and return a review object.
     * @returns {Object} - the created review object.
     */
    constructReview() {
        const author = this.getRandomAuthor();
        const body = this.getRandomReviewBody();
        const rating = this.getRandomNumFromRange(1, 5);
        const title = this.getRandomTitle(rating);
        return {
            author,
            rating,
            title,
            body
        };
    }

    /**
     * Uses the constructReview method to create a number of reviews equal to the numOfReviews argument
     * passed in.
     * @param {Number} numOfReviews - the number of reviews to create.
     * @returns {Array} - an array containing the created review objects.
     */
    constructManyReviews(numOfReviews) {
        return new Array(numOfReviews).fill(0).map(el => this.constructReview());
    }
}

export default ReviewGenerator;
