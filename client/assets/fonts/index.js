import angular from 'angular'
import SuppliersListItem from './suppliers-list-item'
import SuppliersListContainer from './suppliers-list-container.component'

const suppliersListContainer = angular.module('app.components.suppliers.list-container', [
    SuppliersListItem
])
.component('suppliersListContainer', SuppliersListContainer)
.name 

export default suppliersListContainer