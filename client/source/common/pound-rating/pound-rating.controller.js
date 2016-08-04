
class PoundRatingController {
    constructor(CONFIG) {
        this.CONFIG = CONFIG
        this.ratingsClasses = []

        for(let i=0; i<this.CONFIG.maxRating; i++) {
            this.ratingsClasses.push( i < this.rating ? 'pound-checked' : 'pound' )
        }
    }
}

PoundRatingController.$inject = ['CONFIG']

export default PoundRatingController