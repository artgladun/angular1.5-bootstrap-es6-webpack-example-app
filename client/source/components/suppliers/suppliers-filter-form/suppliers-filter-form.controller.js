
class SuppliersFilterFormControllers {
    constructor(EventEmmiter) {
        this.EventEmmiter = EventEmmiter
        this.ratings = ['1', '2', '3', '4', '5']
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

SuppliersFilterFormControllers.$inject = ['EventEmmiter']

export default SuppliersFilterFormControllers