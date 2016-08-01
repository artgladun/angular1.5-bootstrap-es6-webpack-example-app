
class SuppliersPaginationControllers {
    constructor(EventEmmiter) {
        this.EventEmmiter = EventEmmiter
    }
    $onChanges(changes) {
        if(changes.paginationData) {
            this.pagination = Object.assign({}, this.paginationData)
        }
        if(changes.filtersData) {
            this.filters = {page: this.filtersData.page}       
        }
    }
    onChangePage(page) {
        this.filters.page = page        
        this.onFilterChange(this.EventEmmiter({ filters: this.filters }))
    }
}

SuppliersPaginationControllers.$inject = ['EventEmmiter']

export default SuppliersPaginationControllers