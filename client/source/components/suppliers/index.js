import angular from 'angular'
import SuppliersComponent from './suppliers.component'
import SuppliersService from './suppliers.service'

const suppliers = angular.module('app.components.suppliers', [])
.component('suppliers', SuppliersComponent)
.service('SuppliersService', SuppliersService)
.config(($stateProvider) => {
    $stateProvider.state('suppliers', {
        url: '/suppliers',
        template: '<suppliers></suppliers>',
        resolve: {
            suppliersData: SuppliersService => SuppliersService.getSuppliers()
        }
    })
})
.name

export default suppliers