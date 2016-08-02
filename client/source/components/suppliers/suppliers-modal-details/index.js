import angular from 'angular'
import modal from 'angular-ui-bootstrap/src/modal'
import SupplierModalDetailsFactory from './suppliers-modal-details.factory.js'

const suppliersModalDetails = angular.module('app.components.suppliers.modal-details', [
    modal
])
.factory('SupplierModalDetailsFactory', SupplierModalDetailsFactory)
.name 

export default suppliersModalDetails