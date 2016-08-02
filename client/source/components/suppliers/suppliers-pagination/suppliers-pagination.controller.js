
class SuppliersPaginationControllers {
    constructor(CONFIG, EventEmmiter) {
        this.CONFIG = CONFIG
        this.EventEmmiter = EventEmmiter
    }
    $onChanges(changes) {
        if(changes.paginationData) {
            this.pagination = this.paginationData ? Object.assign({}, this.paginationData) : null
        }
        if(changes.filtersData) {
            this.activePage = this.filtersData.page
            this.filters = Object.assign({}, this.filtersData) 
        }
    }
    onChangePage(page) {
        this.filters.page = this.activePage        
        this.onFilterChange(this.EventEmmiter({ filters: this.filters }))
    }
}

SuppliersPaginationControllers.$inject = ['CONFIG', 'EventEmmiter']

export default SuppliersPaginationControllers