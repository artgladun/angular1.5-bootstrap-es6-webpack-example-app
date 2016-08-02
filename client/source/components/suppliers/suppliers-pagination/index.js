import angular from 'angular'
import pagination from 'angular-ui-bootstrap/src/pagination'
import SuppliersPagination from './suppliers-pagination.component'

const suppliersPagination = angular.module('app.components.suppliers.pagination', [
    pagination
])
.component('suppliersPagination', SuppliersPagination)
.name 

export default suppliersPagination