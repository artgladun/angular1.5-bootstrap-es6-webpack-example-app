import templateUrl from './suppliers-list-container.component.html'
import controller from './suppliers-list-container.controller'

const SuppliersListContainerComponent = {
    bindings: {
        paymentsData: '<'
    },
    templateUrl,
    controller
}

export default SuppliersListContainerComponent