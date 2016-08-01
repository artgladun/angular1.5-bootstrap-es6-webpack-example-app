import templateUrl from './suppliers.component.html'
import controller from './suppliers.controller'

const SupplierComponent = {
    bindings: {
        suppliersData: '<'
    },
    templateUrl,
    controller
}

export default SupplierComponent