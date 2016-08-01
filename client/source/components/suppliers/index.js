import angular from 'angular'
import SuppliersComponent from './suppliers.component'
import SuppliersFilterForm from './suppliers-filter-form'
import SuppliersListContainer from './suppliers-list-container'
import SuppliersPagination from './suppliers-pagination'

const suppliers = angular.module('app.components.suppliers', [
    SuppliersFilterForm,
    SuppliersListContainer,
    SuppliersPagination
])
.component('suppliers', SuppliersComponent)
.config(($stateProvider) => {
    $stateProvider.state('suppliers', {
        url: '/suppliers',
        template: '<suppliers suppliers-data="$resolve.suppliersData"></suppliers>',
        resolve: {
            suppliersData: SuppliersResource => SuppliersResource.getSuppliers().then(data => data.data)
        }
    })
})
.name

export default suppliers