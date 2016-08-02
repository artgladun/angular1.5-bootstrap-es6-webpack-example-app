
class SuppliersListItemController {
    constructor(SupplierModalDetailsFactory) {
        this.SupplierModalDetailsFactory = SupplierModalDetailsFactory
    }
    $onChanges(changes) {
        if(changes.supplierData) {
            this.supplier = Object.assign({}, this.supplierData)
        }
    }
    openSupplierModalDetails() {
        this.SupplierModalDetailsFactory.open(this.supplier)
    }
}

SuppliersListItemController.$inject = ['SupplierModalDetailsFactory']

export default SuppliersListItemController