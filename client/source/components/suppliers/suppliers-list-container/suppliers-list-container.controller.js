
class SuppliersListContainerController {
    constructor() {}
    $onChanges(changes) {
        if(changes.paymentsData) {
            this.payments = Object.assign({}, this.paymentsData)
        }
    }
}

SuppliersListContainerController.$inject = []

export default SuppliersListContainerController