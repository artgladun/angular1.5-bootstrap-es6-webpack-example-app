import templateUrl from './suppliers-pagination.component.html'
import controller from './suppliers-pagination.controller'

const SupplierPaginationComponent = {
    bindings: {
        paginationData: '<',
        filtersData: '<',
        onFilterChange: '&'
    },
    templateUrl,
    controller
}

export default SupplierPaginationComponent