import templateUrl from './suppliers-filter-form.component.html'
import controller from './suppliers-filter-form.controller'

const SupplierFilterFormComponent = {
    bindings: {
        filtersData: '<',
        onFilterChange: '&',
        onFilterReset: '&'
    },
    templateUrl,
    controller
}

export default SupplierFilterFormComponent