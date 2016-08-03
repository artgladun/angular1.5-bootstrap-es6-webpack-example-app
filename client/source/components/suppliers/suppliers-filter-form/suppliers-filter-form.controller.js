
class SuppliersFilterFormControllers {
    constructor(EventEmmiter, CONFIG) {
        this.EventEmmiter = EventEmmiter
        this.CONFIG = CONFIG
        this.ratings = []

        for(let i=1; i<this.CONFIG.maxRating; i++) {
            this.ratings.push(i)
        }
    }
    $onChanges(changes) {
        if(changes.filtersData) {
            this.filters = Object.assign({}, this.filtersData)
        }
    }
    onSearch() {
        this.onFilterChange(this.EventEmmiter({ filters: this.filters }))
    }
    onReset() {
        this.onFilterReset()
    }
}

SuppliersFilterFormControllers.$inject = ['EventEmmiter', 'CONFIG']

export default SuppliersFilterFormControllers