import templateUrl from './suppliers-list-item.component.html'
import controller from './suppliers-list-item.controller'

const SuppliersListItemComponent = {
    bindings: {
        supplierData: '<'
    },
    templateUrl,
    controller
}

export default SuppliersListItemComponent