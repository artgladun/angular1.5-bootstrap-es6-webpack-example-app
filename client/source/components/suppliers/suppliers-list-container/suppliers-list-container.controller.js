
class SuppliersListContainerController {
    constructor() {}
    $onChanges(changes) {
        if(changes.paymentsData) {
            this.payments = this.paymentsData.slice()
        }
    }
}

SuppliersListContainerController.$inject = []

export default SuppliersListContainerController