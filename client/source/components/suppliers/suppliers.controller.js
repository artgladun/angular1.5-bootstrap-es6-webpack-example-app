
class SuppliersController {
    constructor(SuppliersResource) {
        this.SuppliersResource = SuppliersResource
    }
    $onInit() {
        this.filters = {
            query: null,
            rating: null,
            page: 1
        }
        this.originFilters = Object.assign({}, this.filters)
    }
    refreshSupplierData({ filters }) {
        this.filters = Object.assign(this.filters, filters)
        this.updateData()
    }
    resetFilters() {
        this.filters = Object.assign({}, this.originFilters)
        this.updateData()
    }
    updateData() {
        this.SuppliersResource.getSuppliers(this.filters).then( data => this.suppliersData = data.data )
    }
}

SuppliersController.$inject = ['SuppliersResource']

export default SuppliersController