
class SuppliersListItemController {
    constructor() {}
    $onChanges(changes) {
        if(changes.supplierData) {
            this.supplier = Object.assign({}, this.supplierData)
        }
    }
}

SuppliersListItemController.$inject = []

export default SuppliersListItemController