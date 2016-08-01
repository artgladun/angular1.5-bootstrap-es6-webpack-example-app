import angular from 'angular'
import SuppliersListItem from './suppliers-list-item.component'

const suppliersListItem = angular.module('app.components.suppliers.list-item', [])
.component('suppliersListItem', SuppliersListItem)
.name 

export default suppliersListItem