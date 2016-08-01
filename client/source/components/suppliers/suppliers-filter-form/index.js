import angular from 'angular'
import SuppliersPagination from './suppliers-filter-form.component'

const suppliersFilterForm = angular.module('app.components.suppliers.filter-form', [])
.component('suppliersFilterForm', SuppliersPagination)
.name 

export default suppliersFilterForm